import time
import json
import yaml
import hashlib
from flask import Flask, request

CONFIG_FILE = "notification_config.yaml"
DEDUPLICATION_TTL = 300  # seconds
SENT_MESSAGES = {}

app = Flask(__name__)

def load_config():
    with open(CONFIG_FILE, "r") as f:
        return yaml.safe_load(f)

def get_hash(payload):
    base = json.dumps(payload, sort_keys=True)
    return hashlib.sha256(base.encode()).hexdigest()

@app.route("/notify", methods=["POST"])
def notify():
    payload = request.get_json()
    config = load_config()
    message_id = get_hash(payload)

    now = time.time()
    last_sent = SENT_MESSAGES.get(message_id, 0)
    if now - last_sent < DEDUPLICATION_TTL:
        return {"status": "duplicate", "message": "Message already sent recently"}, 200

    title = payload.get("title")
    message = payload.get("message")
    severity = payload.get("severity")
    audience = payload.get("audience", [])

    SENT_MESSAGES[message_id] = now

    for target in audience:
        target_config = config["audiences"].get(target, {})
        min_severity = target_config.get("min_severity", "low")
        if config["severity_levels"].index(severity) >= config["severity_levels"].index(min_severity):
            for service in target_config.get("services", []):
                print(f"[{target.upper()}] {service} -> {title}: {message}")

    return {"status": "ok", "message": "Notification routed"}, 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)