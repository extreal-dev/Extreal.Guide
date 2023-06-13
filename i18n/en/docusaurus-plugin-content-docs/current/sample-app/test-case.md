---
sidebar_position: 5
---

# Test Case

Only tests that require test cases are listed among the test types targeted for execution in [Test Planning](./test-planning.md).

## Functional test

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
  - Ability to transition to the virtual space by pressing the Go button
    - The download confirmation screen should be displayed for the first time
      - OK button starts downloading and notifies the user of the download status
      - Cancel button returns to the avatar selection screen
- Virtual space
  - Ability to voice chat
    - Ability to toggle mute
  - Ability to text chat
    - Message appears on the screen when typing a message
  - Ability to play multiplayer
    - Ability to move and jump
  - Ability to return to the avatar selection screen
  - When the maximum number of players is exceeded, users will be notified and return to the avatar selection screen

## Configuration test

- Same as [functional test](#functional-test).

## Failure test

- If the server where the assets are downloaded is not accessible
  - If the client is not connected to the network
    - Reconnection is started and the reconnection status (success or failure) is notified
  - If the server at the asset download destination fails and cannot respond to clients
    - Reconnection is started and the reconnection status (success or failure) is notified
- If Vivox (SaaS) is not accessible
  - If the client is not connected to the network
    - User is notified that access is not available
    - Reconnection is started and the reconnection status (success or failure) is notified
    - All features other than text/voice chat are available
  - If Vivox (SaaS) fails and cannot respond to clients
    - Not implemented as there is no way to implement this
- If the multiplayer server is not accessible
  - If the client is not connected to the network
    - User is notified that access is not available
    - Reconnection is started and the reconnection status (success or failure) is notified
    - All features other than Multiplayer are available
  - If the multiplayer server fails and cannot respond to the client
    - User is notified that access is not available
    - Reconnection is started and the reconnection status (success or failure) is notified
    - All features other than Multiplayer are available
- If the application usage visualization server cannot be accessed
  - If the client is not connected to the network
    - No reconnection or user notification.
    - All features are available.
  - If the server fails and cannot respond to the client
    - Not applicable since the client only sends data and does not use the response.