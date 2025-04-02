#!/bin/bash

# Bidirectional Home Assistant Configuration Sync Tool
# Setup logging
LOG_FILE="/tmp/ha_sync_$(date +%Y%m%d_%H%M%S).log"

# Function to log messages
log_message() {
  local level="$1"
  local message="$2"
  local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
  echo "[$timestamp] [$level] $message" | tee -a "$LOG_FILE"
}

# Function to handle errors without exiting
handle_error() {
  log_message "ERROR" "An error occurred on line $1: $2"
  # We don't exit, just log the error
}

# Set up error handling
trap 'handle_error $LINENO "$BASH_COMMAND"' ERR

log_message "INFO" "Home Assistant Configuration Sync Tool Started"
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
  log_message "INFO" "Using predefined Samba credentials"

  # Create mount point if it doesn't exist
  if sudo mkdir -p $MOUNT_POINT; then
    log_message "INFO" "Mount point created or already exists"
  else
    log_message "WARNING" "Failed to create mount point, may already exist"
  fi

  log_message "INFO" "Mounting Samba share..."
  # Try with different SMB protocol versions in case of compatibility issues
  log_message "INFO" "Attempting mount with SMB protocol version 3.0..."
  if sudo mount -t cifs $SAMBA_SHARE $MOUNT_POINT -o username=$SAMBA_USER,password=$SAMBA_PASS,vers=3.0,dir_mode=0777,file_mode=0777,noperm; then
    log_message "INFO" "Successfully mounted share with SMB 3.0"
    return 0
  fi
  
  log_message "WARNING" "First attempt failed, trying with SMB protocol version 2.0..."
  if sudo mount -t cifs $SAMBA_SHARE $MOUNT_POINT -o username=$SAMBA_USER,password=$SAMBA_PASS,vers=2.0,dir_mode=0777,file_mode=0777,noperm; then
    log_message "INFO" "Successfully mounted share with SMB 2.0"
    return 0
  fi
  
  log_message "WARNING" "Second attempt failed, trying with legacy SMB protocol..."
  if sudo mount -t cifs $SAMBA_SHARE $MOUNT_POINT -o username=$SAMBA_USER,password=$SAMBA_PASS,dir_mode=0777,file_mode=0777,noperm; then
    log_message "INFO" "Successfully mounted share with legacy SMB"
    return 0
  fi

  log_message "ERROR" "Failed to mount Samba share after all attempts"
  return 1
}

# Function to perform rsync with given options
perform_sync() {
  local DRY_RUN=$1
  local DIRECTION=$2
  local RSYNC_OPTS="-av --exclude='.git' --exclude='.gitignore' --exclude='.storage' --exclude='__pycache__/' --exclude='*.pyc'"
  
  # Add exclusions for logs and temporary files
  RSYNC_OPTS="$RSYNC_OPTS --exclude='*.log' --exclude='*.log.*' --exclude='home-assistant_v2.db-*'"
  RSYNC_OPTS="$RSYNC_OPTS --exclude='*.db-shm' --exclude='*.db-wal' --exclude='*.swp'"
  RSYNC_OPTS="$RSYNC_OPTS --exclude='deps/' --exclude='tts/' --exclude='*.tmp'"
  
  # Create missing directories and don't worry about permissions
  RSYNC_OPTS="$RSYNC_OPTS --chmod=ugo=rwX"
  
  # Create parent directories as needed
  if [ "$DIRECTION" = "push" ]; then
    # Only add --R to create missing directories for push operations
    # (--mkpath is only available in newer rsync versions)
    RSYNC_OPTS="$RSYNC_OPTS -R"
  fi
  
  if [ "$DRY_RUN" = true ]; then
    RSYNC_OPTS="$RSYNC_OPTS --dry-run"
    log_message "INFO" "Performing TEST RUN (no changes will be made)..."
    echo "Performing TEST RUN (no changes will be made)..."
  else
    log_message "INFO" "Performing ACTUAL SYNC..."
    echo "Performing ACTUAL SYNC..."
  fi
  
  # If specific files are provided, sync only those
  if [ -n "$SPECIFIC_FILES" ]; then
    log_message "INFO" "Syncing specific files: $SPECIFIC_FILES"
    echo "Syncing specific files: $SPECIFIC_FILES"
    
    if [ "$DIRECTION" = "pull" ]; then
      log_message "INFO" "Direction: REMOTE → LOCAL (pulling changes from Home Assistant)"
      echo "Direction: REMOTE → LOCAL (pulling changes from Home Assistant)"
      SYNC_ERRORS=0
      for file in $SPECIFIC_FILES; do
        log_message "INFO" "Syncing $file"
        if rsync $RSYNC_OPTS $MOUNT_POINT/$file $LOCAL_REPO/$file 2>> $LOG_FILE; then
          log_message "INFO" "Successfully synced $file"
        else
          log_message "ERROR" "Failed to sync $file"
          SYNC_ERRORS=$((SYNC_ERRORS+1))
        fi
      done
    else
      log_message "INFO" "Direction: LOCAL → REMOTE (pushing changes to Home Assistant)"
      echo "Direction: LOCAL → REMOTE (pushing changes to Home Assistant)"
      SYNC_ERRORS=0
      for file in $SPECIFIC_FILES; do
        log_message "INFO" "Syncing $file"
        if rsync $RSYNC_OPTS $LOCAL_REPO/$file $MOUNT_POINT/$file 2>> $LOG_FILE; then
          log_message "INFO" "Successfully synced $file"
        else
          log_message "ERROR" "Failed to sync $file"
          SYNC_ERRORS=$((SYNC_ERRORS+1))
        fi
      done
    fi
    
    # Return error if any failures
    if [ $SYNC_ERRORS -gt 0 ]; then
      log_message "WARNING" "$SYNC_ERRORS files failed to sync"
      return 1
    fi
  else
    # Sync entire repository
    if [ "$DIRECTION" = "pull" ]; then
      log_message "INFO" "Direction: REMOTE → LOCAL (pulling changes from Home Assistant)"
      echo "Direction: REMOTE → LOCAL (pulling changes from Home Assistant)"
      if rsync $RSYNC_OPTS $MOUNT_POINT/ $LOCAL_REPO/ 2>> $LOG_FILE; then
        log_message "INFO" "Successfully synced all files"
      else
        log_message "ERROR" "Failed to sync all files"
        return 1
      fi
    else
      log_message "INFO" "Direction: LOCAL → REMOTE (pushing changes to Home Assistant)"
      echo "Direction: LOCAL → REMOTE (pushing changes to Home Assistant)"
      if rsync $RSYNC_OPTS $LOCAL_REPO/ $MOUNT_POINT/ 2>> $LOG_FILE; then
        log_message "INFO" "Successfully synced all files"
      else
        log_message "ERROR" "Failed to sync all files"
        return 1
      fi
    fi
  fi
}

# Mount the share
if mount_share; then
  log_message "INFO" "Successfully mounted Samba share"
  SHARE_MOUNTED=true
else
  log_message "ERROR" "Failed to mount share, will attempt to continue if possible"
  SHARE_MOUNTED=false
fi

# Only continue with sync if share is mounted
if [ "$SHARE_MOUNTED" = true ]; then
  # Perform sync based on options
  if [ "$DRY_RUN" = true ]; then
    # Just do the dry run
    if perform_sync true $DIRECTION; then
      log_message "INFO" "Dry run completed successfully"
    else
      log_message "WARNING" "Dry run completed with warnings"
    fi
    echo
    echo "This was a TEST RUN. To execute these changes, use the --execute flag."
  else
    # First show what will change
    if perform_sync true $DIRECTION; then
      DRY_RUN_SUCCESS=true
      log_message "INFO" "Dry run check completed successfully"
    else
      DRY_RUN_SUCCESS=false
      log_message "WARNING" "Dry run check completed with warnings"
    fi
    
    # Then ask for confirmation 
    echo
    if [ "$DIRECTION" = "pull" ]; then
      echo "The above changes will be applied to your local repository."
    else
      echo "The above changes will be applied to your Home Assistant instance."
    fi
    read -p "Do you want to proceed with the actual sync? (y/n): " CONFIRM

    if [[ $CONFIRM =~ ^[Yy]$ ]]; then
      if perform_sync false $DIRECTION; then
        log_message "INFO" "Sync completed successfully!"
        echo "Sync completed successfully!"
      else
        log_message "WARNING" "Sync completed with warnings"
        echo "Sync completed with warnings. Check the log file at $LOG_FILE"
      fi
    else
      log_message "INFO" "Sync cancelled by user"
      echo "Sync cancelled. No changes were made."
    fi
  fi

  # Unmount the Samba share
  log_message "INFO" "Unmounting Samba share..."
  echo "Unmounting Samba share..."
  if sudo umount $MOUNT_POINT; then
    log_message "INFO" "Samba share successfully unmounted"
  else
    log_message "WARNING" "Failed to unmount Samba share"
    echo "Warning: Failed to unmount Samba share. You may need to unmount manually."
  fi
else
  log_message "ERROR" "Skipping sync operations due to mount failure"
  echo "Skipping sync operations due to mount failure. Check the log file at $LOG_FILE"
fi

log_message "INFO" "Script execution completed"
echo "Done. Log file available at: $LOG_FILE"