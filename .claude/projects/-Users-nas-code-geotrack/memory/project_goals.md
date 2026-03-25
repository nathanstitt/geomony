---
name: project_goals
description: GeoTrack is an open-source React Native background geolocation SDK modeled after Transistor Software's commercial library
type: project
---

GeoTrack aims to be an open-source alternative to transistorsoft/react-native-background-geolocation.

**Why:** The commercial library is expensive ($299+/year per app) and closed-source. An open-source alternative with a compatible API would benefit the RN community.

**How to apply:**
- API design should mirror Transistor Software's v5 API where sensible (two-state motion model, config structure, event model)
- Core architecture uses C++ with SQLite for cross-platform motion event storage
- Native layers (Kotlin/ObjC) handle platform-specific location/motion APIs and bridge to C++ core
- Key features: background location tracking, geofencing, motion detection, HTTP sync, battery optimization
- Battery efficiency is a primary design goal (motion-gated GPS, elastic distance filter, stop detection)
