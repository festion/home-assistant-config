#!/bin/bash

# Bidirectional Home Assistant Configuration Sync Tool
echo "Home Assistant Configuration Sync Tool"
echo "====================================="
echo "Usage: $0 [OPTIONS] [FILE1 FILE2 ...]"
echo "Options:"
echo "  --pull     Pull changes from remote to local (default)"
echo "  --push     Push changes from local to remote"
echo "  --dry-run  Test run only, no changes made (default)"
echo "  --execute  Actually execute the changes"
echo "  FILE1...   Optional specific files to sync (relative to repository root)"
echo

# Samba share details
SAMBA_SHARE="//192.168.1.155/config"
MOUNT_POINT="/mnt/ha_remote"
LOCAL_REPO="/mnt/c/GIT/home-assistant-config"

# Default settings
DIRECTION="pull"
DRY_RUN=true  # Default to test run
SAMBA_USER="homeassistant"
SAMBA_PASS="redflower805"
SPECIFIC_FILES=""

# Parse command line arguments
while [[ "$#" -gt 0 ]]; do
  case $1 in
    --push) DIRECTION="push"; shift ;;
    --pull) DIRECTION="pull"; shift ;;
    --dry-run) DRY_RUN=true; shift ;;
    --execute) DRY_RUN=false; shift ;;
    *)
      # If not a recognized flag, treat as specific file
      if [[ -f "$LOCAL_REPO/$1" ]]; then
        if [[ -z "$SPECIFIC_FILES" ]]; then
          SPECIFIC_FILES="$1"
        else
          SPECIFIC_FILES="$SPECIFIC_FILES $1"
        fi
        shift
      else
        echo "Unknown parameter or file not found: $1"; exit 1
      fi
      ;;
  esac
done

# Mount the Samba share
mount_share() {
  # Using predefined credentials
  echo "Using predefined Samba credentials"

  # Create mount point if it doesn't exist
  sudo mkdir -p $MOUNT_POINT

  echo "Mounting Samba share..."
  # Try with different SMB protocol versions in case of compatibility issues
  echo "Attempting mount with SMB protocol version 3.0..."
  sudo mount -t cifs $SAMBA_SHARE $MOUNT_POINT -o username=$SAMBA_USER,password=$SAMBA_PASS,vers=3.0,dir_mode=0777,file_mode=0777
  
  if [ $? -ne 0 ]; then
    echo "First attempt failed, trying with SMB protocol version 2.0..."
    sudo mount -t cifs $SAMBA_SHARE $MOUNT_POINT -o username=$SAMBA_USER,password=$SAMBA_PASS,vers=2.0,dir_mode=0777,file_mode=0777
  fi
  
  if [ $? -ne 0 ]; then
    echo "Second attempt failed, trying with legacy SMB protocol..."
    sudo mount -t cifs $SAMBA_SHARE $MOUNT_POINT -o username=$SAMBA_USER,password=$SAMBA_PASS,dir_mode=0777,file_mode=0777
  fi

  if [ $? -ne 0 ]; then
    echo "Failed to mount Samba share. Exiting."
    exit 1
  fi
}

# Function to perform rsync with given options
perform_sync() {
  local DRY_RUN=$1
  local DIRECTION=$2
  local RSYNC_OPTS="-av --exclude='.git' --exclude='.gitignore' --exclude='.storage'"
  
  if [ "$DRY_RUN" = true ]; then
    RSYNC_OPTS="$RSYNC_OPTS --dry-run"
    echo "Performing TEST RUN (no changes will be made)..."
  else
    echo "Performing ACTUAL SYNC..."
  fi
  
  # If specific files are provided, sync only those
  if [ -n "$SPECIFIC_FILES" ]; then
    echo "Syncing specific files: $SPECIFIC_FILES"
    
    if [ "$DIRECTION" = "pull" ]; then
      echo "Direction: REMOTE → LOCAL (pulling changes from Home Assistant)"
      for file in $SPECIFIC_FILES; do
        rsync $RSYNC_OPTS $MOUNT_POINT/$file $LOCAL_REPO/$file
      done
    else
      echo "Direction: LOCAL → REMOTE (pushing changes to Home Assistant)"
      for file in $SPECIFIC_FILES; do
        rsync $RSYNC_OPTS $LOCAL_REPO/$file $MOUNT_POINT/$file
      done
    fi
  else
    # Sync entire repository
    if [ "$DIRECTION" = "pull" ]; then
      echo "Direction: REMOTE → LOCAL (pulling changes from Home Assistant)"
      rsync $RSYNC_OPTS $MOUNT_POINT/ $LOCAL_REPO/
    else
      echo "Direction: LOCAL → REMOTE (pushing changes to Home Assistant)"
      rsync $RSYNC_OPTS $LOCAL_REPO/ $MOUNT_POINT/
    fi
  fi
}

# Mount the share
mount_share

# Perform sync based on options
if [ "$DRY_RUN" = true ]; then
  # Just do the dry run
  perform_sync true $DIRECTION
  echo
  echo "This was a TEST RUN. To execute these changes, use the --execute flag."
else
  # First show what will change
  perform_sync true $DIRECTION
  
  # Then ask for confirmation 
  echo
  if [ "$DIRECTION" = "pull" ]; then
    echo "The above changes will be applied to your local repository."
  else
    echo "The above changes will be applied to your Home Assistant instance."
  fi
  read -p "Do you want to proceed with the actual sync? (y/n): " CONFIRM

  if [[ $CONFIRM =~ ^[Yy]$ ]]; then
    perform_sync false $DIRECTION
    echo "Sync completed successfully!"
  else
    echo "Sync cancelled. No changes were made."
  fi
fi

# Unmount the Samba share
echo "Unmounting Samba share..."
sudo umount $MOUNT_POINT

echo "Done."