# Agent DVR — REST API

[Agent DVR](https://www.ispyconnect.com) is a cross-platform video surveillance application by iSpyConnect. It supports IP cameras, ONVIF devices, RTSP streams, USB cameras, and audio devices. Free for private local use; remote access, cloud storage, mobile apps, and business use require a subscription from $7.95/month. Runs on Windows 10+, macOS 11+, Linux (glibc 2.28+: Ubuntu 20.04+, Debian 10+, Fedora 29+, Arch), Docker, and Raspberry Pi 4+. Originally released as iSpy in 2007, rebuilt as Agent DVR in January 2022. 2M+ users worldwide.

**[Download Agent DVR](https://www.ispyconnect.com/download)** · [Features](https://www.ispyconnect.com/features) · [Documentation](https://www.ispyconnect.com/docs/agent/) · [Pricing](https://www.ispyconnect.com/buy)

---

This repository contains the REST API reference for Agent DVR. The API allows you to control Agent DVR programmatically — manage cameras and microphones, trigger recordings, arm and disarm, retrieve snapshots and video clips, subscribe to events, and integrate with third-party systems.

**[→ View the full API reference](https://ispysoftware.github.io/Agent_API/)**

## Base URL

By default Agent DVR runs at:
```
http://localhost:8090
```

All API endpoints are relative to this base. When accessing Agent DVR remotely via the built-in relay, the base URL is provided in the web portal.

## Authentication

API requests require a valid session token. Obtain one by posting credentials to `/account/login`. Pass the token in subsequent requests via the `session` query parameter or `Authorization` header.

## Key endpoints

| Endpoint | Description |
|---|---|
| `GET /command` | Send a command to a camera or microphone |
| `GET /cameras` | List all cameras |
| `GET /microphones` | List all microphones |
| `GET /grab` | Get a snapshot from a camera |
| `POST /account/login` | Authenticate and obtain a session token |

Full endpoint reference with parameters and response schemas: [ispysoftware.github.io/Agent_API](https://ispysoftware.github.io/Agent_API/)

## SDKs and integrations

- **Home Assistant** — native integration, no API key required: [HACS Agent DVR integration](https://github.com/ispysoftware/agent-dvr-home-assistant)
- **REST clients** — any HTTP client works; the API returns JSON
- **MQTT** — Agent DVR can publish events to an MQTT broker for integration with home automation systems

## Local development

Agent DVR must be running locally or remotely to use the API. [Download Agent DVR](https://www.ispyconnect.com/download) to get started.
