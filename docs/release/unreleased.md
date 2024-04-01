---
sidebar_position: 1
---

# Unreleased

2024-03-29

## Unity version

次のUnityバージョンで動作確認しています。

2022.3.17f1

## Modules

### Unity

- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 1.2.0-next.1
- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.2.0
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.3.0-next.2
- [Extreal.Integration.AssetWorkflow.Addressables](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables) 1.2.0-next.3
- [Extreal.Integration.Chat.OME](https://github.com/extreal-dev/Extreal.Integration.Chat.OME) 1.0.0-next.1
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.3.0-next.1
- [Extreal.Integration.Chat.WebRTC](https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC) 1.1.0-next.2
- [Extreal.Integration.Messaging](https://github.com/extreal-dev/Extreal.Integration.Messaging) 1.0.0-next.3
- [Extreal.Integration.Messaging.Socket.IO](https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO) 1.0.0-next.5
- [Extreal.Integration.Multiplay.Messaging](https://github.com/extreal-dev/Extreal.Integration.Multiplay.Messaging) 1.0.0-next.4
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.3.0-next.2
- [Extreal.Integration.Multiplay.NGO.WebRTC](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO.WebRTC) 1.1.0-next.2
- [Extreal.Integration.P2P.WebRTC](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC) 1.1.0-next.3
- [Extreal.Integration.SFU.OME](https://github.com/extreal-dev/Extreal.Integration.SFU.OME) 1.0.0-next.1
- [Extreal.Integration.Web.Common](https://github.com/extreal-dev/Extreal.Integration.Web.Common) 1.1.0-next.2

### npm

- [@extreal-dev/extreal.integration.chat.ome](https://www.npmjs.com/package/@extreal-dev/extreal.integration.chat.ome) 1.0.0-next.1
- [@extreal-dev/extreal.integration.chat.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.chat.webrtc) 1.1.0-next.2
- [@extreal-dev/extreal.integration.messaging.socket.io](https://www.npmjs.com/package/@extreal-dev/extreal.integration.messaging.socket.io) 1.0.0-next.1
- [@extreal-dev/extreal.integration.multiplay.ngo.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.multiplay.ngo.webrtc) 1.1.0-next.2
- [@extreal-dev/extreal.integration.p2p.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.p2p.webrtc) 1.1.0-next.3
- [@extreal-dev/extreal.integration.sfu.ome](https://www.npmjs.com/package/@extreal-dev/extreal.integration.sfu.ome) 1.0.0-next.1
- [@extreal-dev/extreal.integration.web.common](https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common) 1.1.0-next.2

## Dependencies

- Common
  - [UniTask](https://github.com/Cysharp/UniTask) 2.5.0 ([MIT License](https://github.com/Cysharp/UniTask/blob/master/LICENSE))
  - [UniRx](https://github.com/neuecc/UniRx) 7.1.0 ([MIT License](https://github.com/neuecc/UniRx/blob/master/LICENSE))
- Extreal.Integration.AssetWorkflow.Addressables
  - [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html) 1.21.19 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))
- Extreal.Integration.Chat.OME
  - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
- Extreal.Integration.Chat.Vivox
  - [Vivox Unity SDK](https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm) 15.1.210100-pre.1 ([Unity Package Distribution License](https://unity.com/legal/licenses/unity-package-distribution-license))
- Extreal.Integration.Chat.WebRTC
  - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
- Extreal.Integration.Messaging.Socket.IO
  - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 7.0.3 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))
  - [SocketIOClient](https://github.com/doghappy/socket.io-client-csharp) 3.0.8 ([MIT License](https://github.com/doghappy/socket.io-client-csharp/blob/master/LICENSE))
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
- Extreal.Integration.SFU.OME
  - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.7 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
  - [NativeWebSocket](https://github.com/endel/NativeWebSocket) 1.1.4 ([Apache License 2.0](https://github.com/endel/NativeWebSocket/blob/master/LICENSE))
- Extreal.Integration.Web.Common
  - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 8.0.1 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))

## Changes

### Extreal.Integration.AssetWorkflow.Addressables
#### Changed
- Addressablesを1.21.19にアップグレードしました。

### Extreal.Integration.Chat.OME
#### Added
- SFUによるボイスチャットができる機能を追加しました。([Doc](../integration/chat.ome.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Chat.OME/pull/1))

### Extreal.Integration.Chat.WebRTC
#### Added
- ボイスチャットでマイク音量を調節できる機能を追加しました。([Doc](../integration/chat.webrtc.md))
- ボイスチャットでスピーカー音量を調節できる機能を追加しました。([Doc](../integration/chat.webrtc.md))
- ボイスチャットで発話音量を取得する機能を追加しました。([Doc](../integration/chat.webrtc.md))
#### Changed
- ボイスチャットでマイクが使用できない場合はスピーカーのみ有効となるように変更しました。([Doc](../integration/chat.webrtc.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC/pull/8))

### Extreal.Integration.Messaging
#### Added
- グループでメッセージをやりとりできるメッセージング機能を追加しました。([Doc](../integration/messaging.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Messaging/pull/1))

### Extreal.Integration.Messaging.Socket.IO
#### Added
- Socket.IOによるメッセージ送受信ができる機能を追加しました。([Doc](../integration/messaging.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Messaging.Socket.IO/pull/1))

### Extreal.Integration.Multiplay.Messaging
#### Added
- [Messaging](../integration/messaging.md)によるマルチプレイができる機能を追加しました。([Doc](../integration/multiplay.messaging.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.Messaging/pull/2))

### Extreal.Integration.Multiplay.NGO
#### Changed
- NGOを1.7.1にアップグレードしました。

### Extreal.Integration.P2P.WebRTC
#### Added
- シグナリングサーバーを冗長化できるようにスティッキーセッションを有効化する設定を追加しました。([Doc](../integration/p2p.webrtc.md), [PR](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/pull/13))
#### Changed
- PeerConnectionのCreate/Closeでエラーが発生しても処理を継続するように変更しました。([Doc](../integration/p2p.webrtc.md), [PR](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/pull/9))
- P2Pの各クライアントを識別できるように、自身及び接続または切断したクライアントのIDを取得できるように変更しました。([Doc](../integration/p2p.webrtc.md), [PR](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/pull/10))

### Extreal.Integration.SFU.OME
#### Added
- OMEを活用したSFUの作成を容易にするベース機能を追加しました。([Doc](../integration/sfu.ome.md), [PR](https://github.com/extreal-dev/Extreal.Integration.SFU.OME/pull/1))

### Extreal.Integration.Web.Common

#### Added

- 指定した関数呼び出しとコールバックのログを抑制する機能を追加しました。([Doc](../integration/web.common.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Web.Common/pull/7))
- プラットフォームに応じたビデオ再生を行う機能を追加しました。([Doc](../integration/web.common.md), [PR](https://github.com/extreal-dev/Extreal.Integration.Web.Common/pull/9))

### Extreal.SampleApp.Holiday
#### Changed
- スペースごとにマルチプレイをするように変更しました。([Doc](../sample-app/intro.md), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/23))
- テキストチャット、マルチプレイを[Messaging](../integration/messaging.md)で実現するように変更しました。([Doc](../sample-app/intro.md), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/23))
- ボイスチャットをOMEで実現するように変更しました。([Doc](../sample-app/intro.md), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/26))

## Upgrade guide {#upgrade-guide}

モジュールバージョンを更新してください。
