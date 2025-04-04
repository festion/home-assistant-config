#!/usr/bin/env python3
import sys
import json
import os
import yaml

DISCOVERED_DEVICES_FILE = "/config/bluetooth_discoveries.json"

def load_discovered_devices():
    """Load previously discovered devices."""
    if os.path.exists(DISCOVERED_DEVICES_FILE):
        with open(DISCOVERED_DEVICES_FILE, 'r') as f:
            return json.load(f)
    return []

def populate_input_helpers(device_info):
    """Populate input helpers with device information."""
    hass_api_url = "http://localhost:8123/api/services/input_text/set_value"
    hass_token = os.environ.get('HASSIO_TOKEN')  # You'll need to set this environment variable

    # Populate device name
    requests.post(
        f"{hass_api_url}/input_text.ble_device_name", 
        headers={
            "Authorization": f"Bearer {hass_token}",
            "Content-Type": "application/json"
        },
        json={"value": device_info.get('name', '')}
    )

    # Populate MAC address
    requests.post(
        f"{hass_api_url}/input_text.ble_device_mac", 
        headers={
            "Authorization": f"Bearer {hass_token}",
            "Content-Type": "application/json"
        },
        json={"value": device_info.get('mac_address', '')}
    )

    # Populate RSSI threshold (slightly higher than current RSSI)
    rssi = device_info.get('rssi', -80)
    requests.post(
        f"{hass_api_url}/input_number.ble_rssi_threshold", 
        headers={
            "Authorization": f"Bearer {hass_token}",
            "Content-Type": "application/json"
        },
        json={"value": rssi + 10}  # Add 10 to current RSSI as default threshold
    )

    # Optionally, set device type and icon
    # This would require additional logic or user interaction

def main():
    # List discovered devices
    devices = load_discovered_devices()
    
    if not devices:
        print("No devices discovered.")
        return
    
    # Print devices with index
    for idx, device in enumerate(devices, 1):
        print(f"{idx}. MAC: {device.get('mac_address', 'N/A')} "
              f"| Name: {device.get('name', 'Unknown')} "
              f"| RSSI: {device.get('rssi', 'N/A')}dBm")
    
    # Prompt for device selection
    try:
        selection = int(input("Enter the number of the device to populate: ")) - 1
        if 0 <= selection < len(devices):
            selected_device = devices[selection]
            populate_input_helpers(selected_device)
            print(f"Populated input helpers with {selected_device.get('name', 'device')}")
        else:
            print("Invalid selection.")
    except ValueError:
        print("Please enter a valid number.")

if __name__ == "__main__":
    main()