---
sidebar_position: 1
---

# Unreleased

2024-02-26

## Unity version

The following Unity versions have been tested.

2022.3.17f1

## Modules

### Unity

- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.2.0
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.3.0-next.2
- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 1.2.0-next.1
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.3.0-next.2
- [Extreal.Integration.Multiplay.NGO.WebRTC](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO.WebRTC) 1.1.0-next.2
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.3.0-next.1
- [Extreal.Integration.AssetWorkflow.Addressables](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables) 1.2.0-next.3
- [Extreal.Integration.Web.Common](https://github.com/extreal-dev/Extreal.Integration.Web.Common) 1.1.0-next.2
- [Extreal.Integration.P2P.WebRTC](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC) 1.1.0-next.3
- [Extreal.Integration.Chat.WebRTC](https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC) 1.1.0-next.2
- [Extreal.Integration.Multiplay.Messaging](https://github.com/extreal-dev/Extreal.Integration.Multiplay.Messaging) 1.0.0-next.4
- [Extreal.Integration.Messaging](https://github.com/extreal-dev/Extreal.Integration.Multiplay.Messaging) 1.0.0-next.3
- [Extreal.Integration.Messaging.Socket.IO](https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO) 1.0.0-next.5

### npm

- [@extreal-dev/extreal.integration.web.common](https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common) 1.1.0-next.2
- [@extreal-dev/extreal.integration.p2p.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.p2p.webrtc) 1.1.0-next.3
- [@extreal-dev/extreal.integration.multiplay.ngo.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.multiplay.ngo.webrtc) 1.1.0-next.2
- [@extreal-dev/extreal.integration.chat.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.chat.webrtc) 1.1.0-next.2
- [@extreal-dev/extreal.integration.messaging.socket.io](https://www.npmjs.com/package/@extreal-dev/extreal.integration.messaging.socket.io) 1.0.0-next.1

## Dependencies

- Common
  - [UniTask](https://github.com/Cysharp/UniTask) 2.5.0 ([MIT License](https://github.com/Cysharp/UniTask/blob/master/LICENSE))
  - [UniRx](https://github.com/neuecc/UniRx) 7.1.0 ([MIT License](https://github.com/neuecc/UniRx/blob/master/LICENSE))
- Extreal.Integration.Multiplay.NGO
  - [Netcode for GameObjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects) 1.7.1 ([MIT License](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/develop/LICENSE.md))
- Extreal.Integration.Multiplay.NGO.WebRTC
  - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
- Extreal.Integration.Chat.Vivox
  - [Vivox Unity SDK](https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm) 15.1.210100-pre.1 ([Unity Package Distribution License](https://unity.com/legal/licenses/unity-package-distribution-license))
- Extreal.Integration.AssetWorkflow.Addressables
  - [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html) 1.21.19 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))
- Extreal.Integration.Web.Common
  - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 8.0.1 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))
- Extreal.Integration.P2P.WebRTC
  - Unity
    - [Collections](https://docs.unity3d.com/Packages/com.unity.collections@1.2/manual/index.html) 2.2.1 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))
    - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
    - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 8.0.1 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))
    - [SocketIOClient](https://github.com/doghappy/socket.io-client-csharp) 3.0.8 ([MIT License](https://github.com/doghappy/socket.io-client-csharp/blob/master/LICENSE))
  - npm
    - [socket.io-client](https://www.npmjs.com/package/socket.io-client) 4.7.4 ([MIT License](https://github.com/socketio/socket.io-client/blob/main/LICENSE))
- Extreal.Integration.Chat.WebRTC
  - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
- Extreal.Integration.Messaging.Socket.IO
  - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 7.0.3 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))
  - [SocketIOClient](https://github.com/doghappy/socket.io-client-csharp) 3.0.8 ([MIT License](https://github.com/doghappy/socket.io-client-csharp/blob/master/LICENSE))

## Changes

### Extreal.Integration.Multiplay.NGO
#### Changed
- Upgraded NGO to 1.7.1.

### Extreal.Integration.AssetWorkflow.Addressables
#### Changed
- Upgraded Addressables to 1.21.19.

### Extreal.Integration.P2P.WebRTC
#### Added
- Added setting to enable sticky sessions to make signaling servers redundant. ([Doc](../integration/p2p.webrtc.md), [PR](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/pull/13))
#### Changed
- Changed to continue processing even if errors occur in Create/Close of PeerConnection. ([Doc](../integration/p2p.webrtc.md), [PR](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/pull/9))
- Changed so that the ID of your own client and connected or disconnected clients can be obtained, so that each P2P client can be identified. ([Doc](../integration/p2p.webrtc.md), [PR](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/pull/10))

### Extreal.Integration.Web.Common

#### Added

- Added the ability to play videos according to the platform. ([Doc](../integration/web.common.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Web.Common/pull/9))

### Extreal.Integration.Chat.WebRTC
#### Added
- Add the ability to adjust the microphone volume in voice chat. ([Doc](../integration/chat.webrtc.md))
- Add the ability to adjust speaker volume in voice chat. ([Doc](../integration/chat.webrtc.md))
- Add the ability to get the speaking volume in voice chat. ([Doc](../integration/chat.webrtc.md))
#### Changed
- Changed so that if the microphone cannot be used in voice chat, only the speaker is enabled. ([Doc](../integration/chat.webrtc.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC/pull/8))

### Extreal.Integration.Messaging
#### Added
- Add messaging feature that allows groups to exchange messages. ([Doc](../integration/messaging.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Messaging/pull/1))

### Extreal.Integration.Multiplay.Messaging
#### Added
- Add the ability to play multiplayer by [Messaging](../integration/messaging.md). ([Doc](../integration/multiplay.messaging.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.Messaging/pull/2))

### Extreal.Integration.Messaging.Socket.IO
#### Added
- Add the ability to send and receive messages via Socket.IO. ([Doc](../integration/messaging.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO/pull/1))

### Extreal.SampleApp.Holiday
#### Changed
- Change to multiplayer per space. ([Doc](../sample-app/intro.md), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/23))
- Change text chat and multiplayer to be realized in [Messaging](../integration/messaging.md). ([Doc](../sample-app/intro.md), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/23))

## Upgrade guide {#upgrade-guide}

Please update the module versions.
