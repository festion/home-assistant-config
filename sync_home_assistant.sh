#!/bin/bash

# Sync from local to Samba
rsync -avz /mnt/c/home-assistant-config/ /mnt/samba_share/

# Sync from Samba to local (be VERY careful with this!)
# rsync -avz /mnt/samba_share/ /mnt/c/home-assistant-config/  # Uncomment ONLY if needed

echo "Synchronization complete."
