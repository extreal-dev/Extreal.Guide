---
sidebar_position: 1
---

# Unreleased

2023-06-20

## Unity version

The following Unity versions have been tested.

2022.3.2f1

## Modules

- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.2.0-next.1
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.2.0-next.1
- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 1.1.0-next.4
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.2.0-next.3
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.2.0-next.1
- [Extreal.Integration.AssetWorkflow.Addressables](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables) 1.1.0-next.3

## Dependencies

- Common
    - [UniTask](https://github.com/Cysharp/UniTask) 2.3.3 ([MIT License](https://github.com/Cysharp/UniTask/blob/master/LICENSE))
    - [UniRx](https://github.com/neuecc/UniRx) 7.1.0 ([MIT License](https://github.com/neuecc/UniRx/blob/master/LICENSE))
- Extreal.Integration.Multiplay.NGO
    - [Netcode for GameObjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects) 1.5.1 ([MIT License](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/develop/LICENSE.md))
- Extreal.Integration.Chat.Vivox
    - [Vivox Unity SDK](https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm) 15.1.200000-pre.1 ([Unity Package Distribution License](https://unity.com/legal/licenses/unity-package-distribution-license))
- Extreal.Integration.AssetWorkflow.Addressables
    - [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.19/manual/index.html) 1.21.12 ([Unity Companion License](https://unity.com/legal/licenses/unity-companion-license))

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
#### Changed
- Upgraded Unity to 2022.3.
- Upgraded NGO to 1.5.1.
- Removed features related to UNet Transport since it is no longer supported by NGO.([PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/19))
  - Please refer to the [Upgrade guide](#upgrade-guide) as this change affects backward compatibility.
- Changed NgoConfig to allow domain name to be specified in the Address property. ([PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/18))

### Extreal.Integration.Chat.Vivox
#### Changed
- Upgraded Unity to 2022.3.
- Upgraded Vivox to 15.1.200000-pre.1.

### Extreal.Integration.AssetWorkflow.Addressables
#### Changed
- Upgraded Unity to 2022.3.
- Upgraded Addressables to 1.21.12.
- Applied changes in Addressables to the [build script that encrypts assets](../integration/asset-workflow.addressables.md#assets-addressables-crypto), as the build scripts in Addressables have changed. ([PR](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables/pull/3))
  - Please refer to the [Upgrade guide](#upgrade-guide) as this change affects backward compatibility.

### Extreal.SampleApp.Holiday
#### Added
- Added application usage visualization. ([Doc](../sample-app/dev-guide.md#holiday-devguide-appusage), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/8))
#### Changed
- Upgraded Unity to 2022.3.

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
A build script that encrypts assets (BuildScriptEncryptMode) no longer works due to a change in the Addressables build script.
Therefore, we applied the Addressables changes to the build script that encrypts assets.

Refer to [Encrypt and decrypt assets](../integration/asset-workflow.addressables.md#assets-addressables-crypto) and reconfigure the build script that encrypts the asset.
