# React Native Current Location App

This project demonstrates how to get the user's current location (latitude and longitude) using the `@react-native-community/geolocation` library in React Native.

## Features
- Fetch the user's current location.
- Handles location permissions dynamically.
- Supports both Android and iOS platforms.


## Screenshots

 <img src="https://github.com/user-attachments/assets/4773c1b8-ed43-4cce-8b9b-bbab13b618fb" alt="App Screenshot" height="300" width="200"> 
| <img src="https://github.com/user-attachments/assets/d4db243b-97c6-43ec-9966-9ac2e32afb98" alt="App Screenshot" height="300" width="200"> |
|-------------------------------------------------------------------------------------------------------------------------------------------|


## Dependencies
- [@react-native-community/geolocation](https://github.com/michalchudziak/react-native-geolocation): Provides geolocation functionality for React Native apps.

Install this library using:
npm install @react-native-community/geolocation



## Platform-Specific Configuration

### Android

Add the following permissions to AndroidManifest.xml:
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />

If targeting Android 10 (API level 29) or higher, also include:
<uses-permission android:name="android.permission.ACCESS_BACKGROUND_LOCATION" />

Enable high accuracy by adding:
<application
    android:usesCleartextTraffic="true"
    android:networkSecurityConfig="@xml/network_security_config">
    ...
</application>



### iOS

Add the following keys to your Info.plist:
<key>NSLocationWhenInUseUsageDescription</key>
<string>We need access to your location for better app functionality.</string>
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>This app needs your location for background services.</string>

Enable Background Modes in Xcode:
Go to your app project in Xcode.
Select your target → Signing & Capabilities.
Enable Background Modes → Check Location updates.




# License
This project is licensed under the MIT License.
