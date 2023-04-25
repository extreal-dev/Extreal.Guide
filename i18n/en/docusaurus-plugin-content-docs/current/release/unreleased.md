---
sidebar_position: 1
---

# Unreleased

2023-04-26

## Unity version

The following Unity versions have been tested.

2021.3.20f1

## Modules

- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.1.0
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.1.0
- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 1.0.0
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.2.0-next.1
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.1.0
- [Extreal.Integration.AssetWorkflow.Addressables](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables) 1.0.0

## Dependencies

- Common
    - [UniTask](https://github.com/Cysharp/UniTask) 2.3.3 ([MIT License](https://github.com/Cysharp/UniTask/blob/master/LICENSE))
    - [UniRx](https://github.com/neuecc/UniRx) 7.1.0 ([MIT License](https://github.com/neuecc/UniRx/blob/master/LICENSE))
- Extreal.Integration.Multiplay.NGO
    - [Netcode for GameObjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects) 1.2.0 ([MIT License](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/develop/LICENSE.md))
- Extreal.Integration.Chat.Vivox
    - [Vivox Unity SDK](https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm) 15.1.190400-pre.1 ([Unity Package Distribution License](https://unity.com/legal/licenses/unity-package-distribution-license))
- Extreal.Integration.AssetWorkflow.Addressables
    - [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.19/manual/index.html) 1.19.19 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))

## Changes

### Extreal.Integration.Multiplay.NGO
#### Changed
- Changed NgoConfig to allow domain name to be specified in the Address property. ([PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/18))

## Upgrade guide {#upgrade-guide}

Please update the module versions.

No changes affecting backward compatibility.
