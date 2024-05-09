---
sidebar_position: 1
---

# Unreleased

2024-05-09

## Unity version

次のUnityバージョンで動作確認しています。

2022.3.17f1

## Modules

### Unity

- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 1.2.0
- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.2.0
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.3.0
- [Extreal.Integration.AssetWorkflow.Addressables](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables) 1.2.0
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.3.0
- [Extreal.Integration.Chat.WebRTC](https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC) 1.2.0-next.1
- [Extreal.Integration.Messaging](https://github.com/extreal-dev/Extreal.Integration.Messaging) 1.0.0
- [Extreal.Integration.Messaging.Socket.IO](https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO) 1.0.0
- [Extreal.Integration.Multiplay.Messaging](https://github.com/extreal-dev/Extreal.Integration.Multiplay.Messaging) 1.0.0
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.3.0
- [Extreal.Integration.Multiplay.NGO.WebRTC](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO.WebRTC) 1.1.0
- [Extreal.Integration.P2P.WebRTC](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC) 1.1.0
- [Extreal.Integration.Web.Common](https://github.com/extreal-dev/Extreal.Integration.Web.Common) 1.1.0

### npm

- [@extreal-dev/extreal.integration.chat.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.chat.webrtc) 1.2.0-next.1
- [@extreal-dev/extreal.integration.messaging.socket.io](https://www.npmjs.com/package/@extreal-dev/extreal.integration.messaging.socket.io) 1.0.0
- [@extreal-dev/extreal.integration.multiplay.ngo.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.multiplay.ngo.webrtc) 1.1.0
- [@extreal-dev/extreal.integration.p2p.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.p2p.webrtc) 1.1.0
- [@extreal-dev/extreal.integration.web.common](https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common) 1.1.0

## Dependencies

- Common
  - [UniTask](https://github.com/Cysharp/UniTask) 2.5.0 ([MIT License](https://github.com/Cysharp/UniTask/blob/master/LICENSE))
  - [UniRx](https://github.com/neuecc/UniRx) 7.1.0 ([MIT License](https://github.com/neuecc/UniRx/blob/master/LICENSE))
- Extreal.Integration.AssetWorkflow.Addressables
  - [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html) 1.21.19 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))
- Extreal.Integration.Chat.Vivox
  - [Vivox Unity SDK](https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm) 15.1.210100-pre.1 ([Unity Package Distribution License](https://unity.com/legal/licenses/unity-package-distribution-license))
- Extreal.Integration.Chat.WebRTC
  - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
- Extreal.Integration.Messaging.Socket.IO
  - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 7.0.3 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))
  - [SocketIOClient](https://github.com/doghappy/socket.io-client-csharp) 3.0.8 ([MIT License](https://github.com/doghappy/socket.io-client-csharp/blob/master/LICENSE))
- Extreal.Integration.Multiplay.Messaging
  - [Newtonsoft Json](https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.2/manual/index.html) 3.2.1 ([Unity Companion License](https://docs.unity3d.com/Packages/com.unity.nuget.newtonsoft-json@3.2/license/LICENSE.html))
- Extreal.Integration.Multiplay.NGO
  - [Netcode for GameObjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects) 1.7.1 ([MIT License](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/develop/LICENSE.md))
- Extreal.Integration.Multiplay.NGO.WebRTC
  - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
- Extreal.Integration.P2P.WebRTC
  - Unity
    - [Collections](https://docs.unity3d.com/Packages/com.unity.collections@2.1/manual/index.html) 2.2.1 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))
    - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
    - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 8.0.1 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))
    - [SocketIOClient](https://github.com/doghappy/socket.io-client-csharp) 3.0.8 ([MIT License](https://github.com/doghappy/socket.io-client-csharp/blob/master/LICENSE))
  - npm
    - [socket.io-client](https://www.npmjs.com/package/socket.io-client) 4.7.4 ([MIT License](https://github.com/socketio/socket.io-client/blob/main/LICENSE))
- Extreal.Integration.Web.Common
  - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 8.0.1 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))

## Changes

### Extreal.Integration.Chat.WebRTC
#### Added
- モバイルでのボイスチャット開始時にマイクの使用権限確認を行うかどうかを設定できる機能を追加しました。([Doc](../integration/chat.webrtc.md#voice-chat-via-p2p), [PR](https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC/pull/18))
#### Changed
- HasMicrophoneメソッドをHasMicrophoneAsyncメソッドに変更しました。([Doc](../integration/chat.webrtc.md#voice-chat-via-p2p), [PR](https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC/pull/18))
  - この変更は後方互換に影響があるため[Upgrade guide](#upgrade-guide)を参照してください。

## Upgrade guide {#upgrade-guide}

モジュールバージョンを更新してください。

後方互換に影響がある変更があるため、下記を確認して該当するアプリケーションは対応してください。

### Extreal.Integration.Chat.WebRTC
#### 変更影響があるアプリケーション
HasMicrophoneメソッドを使用していたアプリケーションに影響があります。
#### 変更影響と対応方法
- HasMicrophoneメソッドがHasMicrophoneAsyncメソッドに変更になりました。
  - 戻り値が`bool`から`UniTask<bool>`に変更になったため、awaitするように変更してください。
