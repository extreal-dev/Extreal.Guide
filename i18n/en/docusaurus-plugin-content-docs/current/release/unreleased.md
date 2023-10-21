---
sidebar_position: 1
---

# Unreleased

2023-10-xx

## Unity version

The following Unity versions have been tested.

2022.3.2f1

## Modules

### Unity

- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.2.0-next.1
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.2.0-next.x
- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 1.1.0-next.4
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.2.0-next.x
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.2.0-next.1
- [Extreal.Integration.AssetWorkflow.Addressables](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables) 1.1.0-next.x
- [Extreal.Integration.Web.Common](https://github.com/extreal-dev/Extreal.Integration.Web.Common) 1.0.0-next.x
- [Extreal.Integration.P2P.WebRTC](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC) 1.0.0-next.x
- [Extreal.Integration.Chat.WebRTC](https://github.com/extreal-dev/Extreal.Integration.Chat.WebRTC) 1.0.0-next.x

### npm

- [@extreal-dev/extreal.integration.web.common](https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common) 1.0.0-next.1
- [@extreal-dev/extreal.integration.p2p.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.p2p.webrtc) 1.0.0-next.1
- [@extreal-dev/extreal.integration.multiplay.ngo.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.multiplay.ngo.webrtc) 1.0.0-next.1
- [@extreal-dev/extreal.integration.chat.webrtc](https://www.npmjs.com/package/@extreal-dev/extreal.integration.chat.webrtc) 1.0.0-next.1

## Dependencies

- Common
  - [UniTask](https://github.com/Cysharp/UniTask) 2.3.3 ([MIT License](https://github.com/Cysharp/UniTask/blob/master/LICENSE))
  - [UniRx](https://github.com/neuecc/UniRx) 7.1.0 ([MIT License](https://github.com/neuecc/UniRx/blob/master/LICENSE))
- Extreal.Integration.Multiplay.NGO
  - [Netcode for GameObjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects) 1.5.1 ([MIT License](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/develop/LICENSE.md))
- Extreal.Integration.Chat.Vivox
  - [Vivox Unity SDK](https://docs.vivox.com/v5/general/unity/15_1_210000/en-us/Default.htm) 15.1.210100-pre.1 ([Unity Package Distribution License](https://unity.com/legal/licenses/unity-package-distribution-license))
- Extreal.Integration.AssetWorkflow.Addressables
  - [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.21/manual/index.html) 1.21.17 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))
- Extreal.Integration.Web.Common
  - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 7.0.3 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))
- Extreal.Integration.P2P.WebRTC
  - Unity
    - [Collections](https://docs.unity3d.com/Packages/com.unity.collections@1.2/manual/index.html) 1.2.4 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))
    - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.6 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))
    - [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json) 7.0.3 ([MIT License](https://github.com/dotnet/runtime/blob/main/LICENSE.TXT))
    - [SocketIOClient](https://github.com/doghappy/socket.io-client-csharp) 3.0.8 ([MIT License](https://github.com/doghappy/socket.io-client-csharp/blob/master/LICENSE))
  - npm
    - [socket.io-client](https://www.npmjs.com/package/socket.io-client) 4.7.1 ([MIT License](https://github.com/socketio/socket.io-client/blob/main/LICENSE))
- Extreal.Integration.Chat.WebRTC
  - [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html) 3.0.0-pre.6 ([BSD](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/license/Third%20Party%20Notices.html))

## Changes

### Extreal.Core.Logging
#### Changed
- Upgraded Unity to 2022.3.

### Extreal.Core.StageNavigation
#### Changed
- Upgraded Unity to 2022.3.

### Extreal.Core.Common
#### Added
- Added feature that allows hooks to be added to IObservable. ([Doc](../core/common.md#core-common-hook), [PR](https://github.com/extreal-dev/Extreal.Core.Common/pull/6))
#### Changed
- Upgraded Unity to 2022.3.

### Extreal.Integration.Multiplay.NGO
#### Added
- Added WebRtcTransport for P2P (Host/Client) multiplayer. ([Doc](../integration/multiplay.ngo.md#mulitplay-ngo-p2p), [PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/21))

#### Changed
- Upgraded Unity to 2022.3.
- Upgraded NGO to 1.5.1.
- Removed features related to UNet Transport since it is no longer supported by NGO.([PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/19))
  - Please refer to the [Upgrade guide](#upgrade-guide) as this change affects backward compatibility.
- Changed NgoConfig to allow domain name to be specified in the Address property. ([PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/18))
- Added features for hosts to NgoServer. ([Doc](../integration/multiplay.ngo.md#mulitplay-ngo-server-host), [PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/21))

### Extreal.Integration.Chat.Vivox
#### Changed
- Upgraded Unity to 2022.3.
- Upgraded Vivox to 15.1.200000-pre.1.

### Extreal.Integration.AssetWorkflow.Addressables
#### Changed
- Upgraded Unity to 2022.3.
- Upgraded Addressables to 1.21.17.
- Applied changes in Addressables to the [build script that encrypts assets](../integration/asset-workflow.addressables.md#assets-addressables-crypto), as the build scripts in Addressables have changed. ([PR](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables/pull/3))
  - Please refer to the [Upgrade guide](#upgrade-guide) as this change affects backward compatibility.
- Asset encryption and decryption feature is not available in WebGL, so we separated out the assembly definition and excluded WebGL from the platform so that it would not be compiled when building for the WebGL platform. ([PR](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables/pull/4))
  - This change affects backward compatibility, so please refer to [Upgrade guide](#upgrade-guide).

### Extreal.Integration.Web.Common
#### Added
- Added feature for easier use of C# and JavaScript integration provided by Unity. ([Doc](../integration/web.common.md))

### Extreal.Integration.P2P.WebRTC
#### Added
- Added base features to facilitate the creation of P2P using WebRTC. ([Doc](../integration/p2p.webrtc.md))

### Extreal.Integration.Chat.WebRTC
#### Added
- Added the ability to have text/voice chat via P2P. ([Doc](../integration/chat.webrtc.md))

### Extreal.SampleApp.Holiday
#### Added
- Added application usage visualization. ([Doc](../sample-app/dev-guide.md#holiday-devguide-appusage), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/8))
- Added the ability to switch spaces within a virtual space. ([Doc](../sample-app/requirements.md), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/13))

#### Changed
- Upgraded Unity to 2022.3.
- Changed to browser-oriented application (WebGL). ([Doc](../sample-app/requirements.md), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/11))
- Changed text/voice chat and multiplayer to be implemented via P2P. ([Doc](../sample-app/intro.md), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/11))

## Upgrade guide {#upgrade-guide}

Please update the module versions.

Since there are changes that affect backward compatibility, please check the following and respond to the applicable applications.

### Extreal.Integration.Multiplay.NGO
#### Applications affected by the change
Applications using UNet Transport, which was provided by NGO, are affected.
#### Change impact and how to respond
UNet Transport is no longer supported by NGO.

Please change to use the Unity Transport provided by NGO.

### Extreal.Integration.AssetWorkflow.Addressables
#### Applications affected by the change
Applications that encrypt assets are affected.
#### Change impact and how to respond
- A build script that encrypts assets (BuildScriptEncryptMode) no longer works due to a change in the Addressables build script.
Therefore, we applied the Addressables changes to the build script that encrypts assets.
  - Refer to [Encrypt and decrypt assets](../integration/asset-workflow.addressables.md#assets-addressables-crypto) and reconfigure the build script that encrypts the asset.
- Asset encryption and decryption feature is not available in WebGL, so we separated out the assembly definition and excluded WebGL from the platform so that it would not be compiled when building for the WebGL platform. Therefore, applications that encrypt assets will have compilation errors.
  - If you want to use the asset encryption and decryption feature, please add `Extreal.Integration.AssetWorkflow.Addressables.Custom.ResourceProviders` to the assembly definition.