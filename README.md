# Expo Camera Custom Resolution Bug

This repository demonstrates a bug in Expo's Camera API related to capturing images and videos at custom resolutions.  The bug manifests as a failure to capture media at resolutions not explicitly listed as supported by the device's camera. This is often due to aspect ratio mismatches.

## Bug Description

The Expo Camera API does not gracefully handle custom resolutions that are not fully supported by the underlying device hardware. This results in unpredictable behavior, including crashes and the inability to capture media.  Error messages are frequently unhelpful.

## Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app. Attempt to capture a photo or video with a custom resolution.  The app will likely fail to capture the media or encounter a crash.

## Solution

The solution involves carefully checking device's supported resolutions before attempting a capture and providing fallback mechanisms.
