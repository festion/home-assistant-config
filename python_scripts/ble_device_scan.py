#!/usr/bin/env python3
import sys
import json
import os
import subprocess
import time

DISCOVERED_DEVICES_FILE = "/config/bluetooth_discoveries.json"

def run_bluetooth_scan():
    """
    Run a Bluetooth scan and capture discovered devices.
    This is a placeholder and should be replaced with actual scanning method.
    """
    # Example using hcitool - you may need to adjust based on your specific BLE gateway
    try:
        # Run scan for 10 seconds
        scan_output = subprocess.check_output(["hcitool", "scan"], timeout=10, text=True)
        
        # Parse scan output
        devices = []
        for line in scan_output.split('\n'):
            if line.strip():
                parts = line.split('\t')
                if len(parts) >= 2:
                    mac = parts[0].strip()
                    name = parts[1].strip() if len(parts) > 1 else "Unknown Device"
                    devices.append({
                        "mac_address": mac,
                        "name": name,
                        "rssi": -80  # Placeholder RSSI, ideally would come from actual scan
                    })
        
        return devices
    
    except subprocess.CalledProcessError:
        print("Error running Bluetooth scan")
        return []
    except subprocess.TimeoutExpired:
        print("Bluetooth scan timed out")
        return []

def save_discovered_devices(devices):
    """Save discovered devices to a JSON file."""
    with open(DISCOVERED_DEVICES_FILE, 'w') as f:
        json.dump(devices, f, indent=2)
    print(f"Saved {len(devices)} discovered devices.")

def main():
    # Perform Bluetooth scan
    discovered_devices = run_bluetooth_scan()
    
    # Save discovered devices
    save_discovered_devices(discovered_devices)
    
    # Print discovered devices
    print("Discovered Bluetooth Devices:")
    for device in discovered_devices:
        print(f"MAC: {device['mac_address']} | Name: {device['name']} | RSSI: {device['rssi']}dBm")

if __name__ == "__main__":
    main()