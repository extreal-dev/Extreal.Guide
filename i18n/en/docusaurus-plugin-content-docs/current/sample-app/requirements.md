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

![holiday](/img/holiday.png)

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
- External Connections
  - Vivox (SaaS)
    - Users are notified when the network is disconnected.
    - All features except text/voice chat can be used.
    - Reconnection process should not be necessary because the user can reconnect when re-entering the virtual space.
  - Multiplayer server
    - Users are notified when the network is disconnected.
    - All features except for the multiplayer feature can be used.
    - Reconnection processing is not required because the user can reconnect when re-entering the virtual space.
- Region, Language
  - Japan, Japanese only

<!--
    - Multiplayer
      - Up to a maximum number of people can participate in multiplayer
        - The user will be shown to everyone
      - If the maximum number of players is exceeded, the user will be on standby until the number of people on standby is reached and will not be able to participate in multiplayer.
        - Hide the user itself and be visible up to the maximum number of people
        - Notify the user that he/she is on standby and not visible to others
        - When others leave and it is their turn, they can join the multiplayer
        - Notifies the user that he/she has joined the multiplayer
      - If the number of people on standby is exceeded, users will not be able to access the stage
        - Notify users that they cannot access the stage if the number of players is over the limit
    - Text Chat
      - Text Chat Available to all users, including those on standby
    - Voice Chat
      - Voice Chat Available to all users, including those on standby
-->