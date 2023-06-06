---
sidebar_position: 2
---

# Requirements

Here are the requirements realized by Holiday.

:::caution
Holiday requirements do not cover those necessary for production applications.
For production applications, please refer to [Non-Functional Requirements Grade](https://www.ipa.go.jp/sec/softwareengineering/std/ent03-b.html) to identify the perspective of non-functional requirements and define them.
:::

## Functional requirements

Holiday is an application aimed at gathering with friends and family to spend time together during the holidays.

![holiday](../img/holiday.png)

- Title Screen
  - Title display only
- Avatar selection screen
  - Allows users to enter a name
  - Allows users to select an avatar
    - Armature of [Starter Assets - Third Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526?locale=en-JP)
    - Michelle and Amy from [Mixamo](https://www.mixamo.com)
- Virtual Space
  - Voice chat is available
  - Text chat is available
  - Multiplayer is available
  - Can return to avatar selection screen

## Non-functional requirements

- Method of holding the event
  - Each event will be held for one hour, with a set schedule and event announcement
  - The server is started/stopped each time the event is held
- Number of users
  - Title screen, avatar selection screen
    - No limit
  - Virtual space
    - Maximum number of users 90
    - If the maximum number of users is exceeded, users will be notified on the avatar selection screen
- Usage environment
  - PC
    - Windows 10
    - Resolution: 1920x1080
  - Mobile phone
    - iOS 16
    - Android 11
    - Resolution: 1080x1920 (portrait mode)
  - Internet connection
    - Up/Down stream: 40 Mbps or higher
  - Peripherals
    - Wired earphones with microphone
- Assets
  - Assets are not included in the application, and are downloaded at application runtime.
    - Models such as avatar characters, virtual spaces, etc., and text such as titles, messages, etc.
    - Asset downloads will display the download size and confirm execution to the user.
- External Connections
  - Asset download (S3)
    - When the network is disconnected, reconnect.
      - The reconnection status is notified to the user.
      - If reconnection fails, further reconnection is done by user operation (screen transition).
  - Vivox (SaaS)
    - When the network is disconnected, the user is notified and reconnected.
      - The user is notified of the reconnection status.
      - If reconnection fails and the user wishes to reconnect further, the user can do so by user operation (re-entering the virtual space).
    - All features except text/voice chat can be used.
  - Multiplayer server
    - When the network is disconnected, the user is notified and reconnected.
      - The user is notified of the reconnection status.
      - If reconnection fails and the user wishes to reconnect further, the user can do so by user operation (re-entering the virtual space).
    - All features except for the multiplayer feature can be used.
  - Application usage visualization（Grafana/Loki）
    - No reconnection or user notification will be made because user play will not be affected.
    - All features are available.
- Region, Language
  - Japan, Japanese only
- Application usage visualization
  - User usage
    - Number of unique users
    - Stay time on stage
    - Number of text chats sent
  - Resource usage
    - Memory usage
  - Error status
    - Number of errors
