#!/usr/bin/env python3
import sys
import yaml
import os

def update_templates(template_file, device_name, mac_address, device_type, rssi_threshold, icon):
    # Ensure file exists and is readable/writable
    if not os.path.exists(template_file):
        print(f"Template file {template_file} does not exist!")
        sys.exit(1)

    # Read existing templates
    with open(template_file, "r") as f:
        templates = yaml.safe_load(f) or []

    # Normalize device name and create unique identifiers
    safe_device_name = device_name.lower().replace(" ", "_")
    
    # Check if device already exists
    for item in templates:
        if "sensor" in item:
            for sensor in item["sensor"]:
                if sensor.get("unique_id") == f"{safe_device_name}_rssi_from_json":
                    print(f"Device {device_name} already exists.")
                    return

    # Create new sensor and binary sensor entries
    new_sensor = {
        "name": f"{device_name} RSSI (from JSON)",
        "unique_id": f"{safe_device_name}_rssi_from_json",
        "unit_of_measurement": "dBm",
        "state": f"""{{% set mac_to_find = "{mac_address}" %}}
        {{% set gateway_data = state_attr("sensor.ble_gateway_raw_data", "devices") %}}
        {{% set rssi = -100 %}}
        {{% if gateway_data is not none %}}
          {{% for device in gateway_data %}}
            {{% if device[1] == mac_to_find and device[2]|string|trim != "" %}}
              {{% set rssi = device[2]|int(-100) %}}
            {{% endif %}}
          {{% endfor %}}
        {{% endif %}}
        {{ rssi }}""",
        "state_class": "measurement",
        "device_class": "signal_strength"
    }

    new_binary_sensor = {
        "name": f"{device_name} in Driveway (from JSON)",
        "unique_id": f"{safe_device_name}_in_driveway_from_json",
        "device_class": "presence",
        "state": f"""{{% set mac_to_find = "{mac_address}" %}}
        {{% set rssi_threshold = {rssi_threshold} %}}
        {{% set gateway_data = state_attr("sensor.ble_gateway_raw_data", "devices") %}}
        {{% set detected = false %}}
        {{% if gateway_data is not none %}}
          {{% for device in gateway_data %}}
            {{% if device[1] == mac_to_find %}}
              {{% set rssi = device[2]|int(-100) %}}
              {{% if rssi > rssi_threshold %}}
                {{% set detected = true %}}
              {{% endif %}}
            {{% endif %}}
          {{% endfor %}}
        {{% endif %}}
        {{% if detected %}on{{% else %}off{{% endif %}}""",
        "delay_off": {
            "minutes": 2
        }
    }

    # Append to templates
    templates.append({"sensor": [new_sensor]})
    templates.append({"binary_sensor": [new_binary_sensor]})

    # Write back to file
    with open(template_file, "w") as f:
        yaml.safe_dump(templates, f, default_flow_style=False)

    print(f"Added BLE device {device_name}")

if __name__ == "__main__":
    if len(sys.argv) != 6:
        print("Usage: add_ble_device.py template_file device_name mac_address device_type rssi_threshold icon")
        sys.exit(1)

    update_templates(*sys.argv[1:])

