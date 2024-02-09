---
sidebar_position: 5
---

# Test Case

Only tests that require test cases are listed among the test types targeted for execution in [Test Planning](./test-planning.md).

## Functional test

:::caution
The download confirmation screen is implemented so that it appears only the first time, but according to the Unity Forum Discussion, a bug in the Addressables causes the download confirmation screen to appear every time.
The first time the asset is downloaded, it is cached, so the download is immediate the second time around.

[In 2022.2.xx WebGL builds, GetDownloadSizeAsync does not reflect the cache.](https://forum.unity.com/threads/in-2022-2-xx-webgl-builds-getdownloadsizeasync-does-not-reflect-the-cache.1440877/)
:::

- Title Screen
  - The title should be displayed
  - Ability to transition to the avatar selection screen by pressing the Go button
    - The download confirmation screen should be displayed for the first time
      - OK button starts downloading and notifies the user of the download status
      - Cancel button returns to the title screen
- Avatar selection screen
  - Ability to enter a name
  - Ability to select an avatar
    - Armature of [Starter Assets - Third Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526?locale=en-JP)
    - Michelle and Amy from [Mixamo](https://www.mixamo.com)
  - Ability to transition to the group selection screen by pressing the Go button
- Group selection screen
  - Ability to select Massively or Light
  - Ability to select host or client
  - If host is selected
    - Ability to enter a group name
    - Error message should appear if the group name already exists
  - When client is selected
    - Ability to select a group
  - Ability to transition to the virtual space by pressing the Go button
    - The download confirmation screen should be displayed for the first time
      - OK button starts downloading and notifies the user of the download status
      - Cancel button returns to the group selection screen
    - When the maximum number of players is exceeded, users will be notified
    - Ability to transition to the avatar selection screen by pressing the Back button
- Virtual space
  - Ability to voice chat
    - Ability to toggle mute
  - Ability to text chat
    - Message appears on the screen when typing a message
  - Ability to play multiplayer
    - Ability to move and jump
  - Ability to switch space.
  - Ability to return to the group selection screen

## Configuration test

- Same as [functional test](#functional-test).

## Failure test

- If the server where the assets are downloaded is not accessible
  - If the client is not connected to the network
    - Reconnection is started and the reconnection status (success or failure) is notified
  - If the server at the asset download destination fails and cannot respond to clients
    - Reconnection is started and the reconnection status (success or failure) is notified
- If the Redis server is not accessible
  - If the client is not connected to the network
    - User is notified that access is not available
    - All features are available except for multiplayer
  - If the Redis server fails and cannot respond to clients
    - User is notified that access is not available
    - All features are available except for multiplayer
- If the signaling server is not accessible
  - If the client is not connected to the network
    - User is notified that access is not available
    - All features are available except for text/voice chat
      - If Light is selected, all features are unavailable
  - If the signaling server fails and cannot respond to clients
    - User is notified that access is not available
    - All features are available except for text/voice chat
      - If Light is selected, all features are unavailable
- If the host is not accessible
  - If the client is not connected to the network
    - User is notified that access is not available
    - All features are available except for text/voice chat
      - If Light is selected, all features are unavailable
  - If the host side fails and cannot respond to clients
    - User is notified that access is not available
    - All features are available except for text/voice chat
      - If Light is selected, all features are unavailable
- If the application usage visualization server cannot be accessed
  - If the client is not connected to the network
    - No reconnection or user notification
    - All features are available
  - If the server fails and cannot respond to the client
    - Not applicable since the client only sends data and does not use the response
- If the server from which the 360-degree video/images used for the background of the space are downloaded is not accessible
  - User is notified that access is not available
