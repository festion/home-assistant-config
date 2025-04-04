#!/bin/bash

# Local Home Assistant SQLite Database Maintenance Script
# This script runs on the local database copy and prepares it for syncing

# Check if sqlite3 is installed
if ! command -v sqlite3 &> /dev/null; then
    echo "❌ Error: sqlite3 is not installed. Please install it first:"
    echo "   sudo apt-get update && sudo apt-get install sqlite3"
    exit 1
fi

# Set paths for local maintenance
LOCAL_DIR="/mnt/c/GIT/home-assistant-config"
DB_PATH="${LOCAL_DIR}/home-assistant_v2.db"
BACKUP_DIR="${LOCAL_DIR}/db_backups"
DATE_STAMP=$(date +"%Y%m%d_%H%M%S")

echo "🔍 Home Assistant Database Local Maintenance"
echo "====================================================="

# Verify database exists
if [ ! -f "$DB_PATH" ]; then
    echo "❌ Error: Database file not found at $DB_PATH"
    exit 1
fi

# Create backup directory if it doesn't exist
mkdir -p "${BACKUP_DIR}"
echo "📁 Created backup directory: ${BACKUP_DIR}"

# Backup the database first
echo "📦 Creating backup of the database..."
cp "${DB_PATH}" "${BACKUP_DIR}/home-assistant_v2.db.backup_${DATE_STAMP}"
echo "✅ Backup created at: ${BACKUP_DIR}/home-assistant_v2.db.backup_${DATE_STAMP}"

# Remove WAL and SHM files if they exist
if [ -f "${DB_PATH}-wal" ]; then
    echo "🗑️ Removing WAL file..."
    rm "${DB_PATH}-wal"
    echo "✅ WAL file removed."
fi

if [ -f "${DB_PATH}-shm" ]; then
    echo "🗑️ Removing SHM file..."
    rm "${DB_PATH}-shm"
    echo "✅ SHM file removed."
fi

# Run VACUUM to optimize the database
echo "🧹 Running VACUUM to optimize the database..."
sqlite3 "${DB_PATH}" "VACUUM;"
echo "✅ VACUUM completed."

# Run integrity check
echo "🔍 Running integrity check..."
INTEGRITY=$(sqlite3 "${DB_PATH}" "PRAGMA integrity_check;")

if [ "$INTEGRITY" == "ok" ]; then
    echo "✅ Database integrity check passed."
else
    echo "❌ Database integrity check failed. Results:"
    echo "${INTEGRITY}"
    echo "⚠️ Consider restoring from the backup created earlier."
    echo "   The backup is at: ${BACKUP_DIR}/home-assistant_v2.db.backup_${DATE_STAMP}"
    exit 1
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
echo "✅ Optimizations completed."

echo ""
echo "✅ Database maintenance completed successfully!"
echo ""
echo "Next steps:"
echo "1. Stop your remote Home Assistant (using the UI or 'ha core stop' via SSH)"
echo "2. Run your sync script to push the fixed database:"
echo "   bash sync_home_assistant.sh --push --execute"
echo "3. Start your remote Home Assistant again"