#!/bin/bash

# Home Assistant SQLite Database Maintenance Script
# This script needs to be run directly on the Home Assistant server
# via SSH when Home Assistant is stopped

echo "⚠️ NOTE: This script must be run ON your Home Assistant server, not your local machine."
echo "    You need to copy this script to your HA server and run it there, or use SSH."
echo ""
echo "Here's how to run it properly:"
echo "1. SSH into your Home Assistant server:"
echo "   ssh homeassistant@192.168.1.155"
echo "2. Run the script there:"
echo "   bash /config/ha_db_maintenance.sh"
echo ""
echo "---------------------------------------------------------------"
echo "For manual remote execution, you can use these commands:"
echo ""
echo "# 1. Stop Home Assistant:"
echo "ssh homeassistant@192.168.1.155 \"ha core stop\""
echo ""
echo "# 2. Run database maintenance remotely:"
echo "ssh homeassistant@192.168.1.155 \"cd /config && bash ha_db_maintenance.sh\""
echo ""
echo "# 3. Start Home Assistant:"
echo "ssh homeassistant@192.168.1.155 \"ha core start\""
echo "---------------------------------------------------------------"
echo ""
read -p "Do you want to continue running this script locally? (not recommended) [y/N]: " CONTINUE

if [[ ! $CONTINUE =~ ^[Yy]$ ]]; then
    echo "Script execution cancelled."
    exit 0
fi

# Set the path to your Home Assistant config directory
HA_CONFIG_DIR="/config"
DB_PATH="${HA_CONFIG_DIR}/home-assistant_v2.db"
BACKUP_DIR="${HA_CONFIG_DIR}/db_backups"
DATE_STAMP=$(date +"%Y%m%d_%H%M%S")

# Create backup directory if it doesn't exist
mkdir -p "${BACKUP_DIR}"

# Check if Home Assistant is running
if pgrep -f "python3 -m homeassistant" > /dev/null; then
  echo "⚠️ WARNING: Home Assistant appears to be running. Please stop it before proceeding."
  echo "   This script should only be run when Home Assistant is stopped."
  exit 1
fi

# Backup the database first
echo "📦 Creating backup of the database..."
cp "${DB_PATH}" "${BACKUP_DIR}/home-assistant_v2.db.backup_${DATE_STAMP}"
echo "✅ Backup created at: ${BACKUP_DIR}/home-assistant_v2.db.backup_${DATE_STAMP}"

# Remove WAL and SHM files if they exist
if [ -f "${DB_PATH}-wal" ]; then
  echo "🗑️ Removing WAL file..."
  rm "${DB_PATH}-wal"
fi

if [ -f "${DB_PATH}-shm" ]; then
  echo "🗑️ Removing SHM file..."
  rm "${DB_PATH}-shm"
fi

# Run VACUUM to optimize the database
echo "🧹 Running VACUUM to optimize the database..."
sqlite3 "${DB_PATH}" "VACUUM;"

# Run integrity check
echo "🔍 Running integrity check..."
INTEGRITY=$(sqlite3 "${DB_PATH}" "PRAGMA integrity_check;")

if [ "$INTEGRITY" == "ok" ]; then
  echo "✅ Database integrity check passed."
else
  echo "❌ Database integrity check failed. Results:"
  echo "${INTEGRITY}"
  echo "⚠️ Consider restoring from the backup created earlier."
fi

# Run optimization
echo "⚡ Running optimizations..."
sqlite3 "${DB_PATH}" <<EOF
PRAGMA optimize;
PRAGMA auto_vacuum = FULL;
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;
PRAGMA temp_store = MEMORY;
PRAGMA cache_size = -16384;
EOF

echo "✅ Database maintenance completed."
echo ""
echo "To use this script:"
echo "1. Make sure Home Assistant is stopped"
echo "2. Run this script with: bash ha_db_maintenance.sh"
echo "3. Start Home Assistant after the script completes"