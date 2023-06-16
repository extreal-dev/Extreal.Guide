---
sidebar_position: 1
---

# Unreleased

2023-06-20

## Unity version

次のUnityバージョンで動作確認しています。

2022.3.2f1

## Modules

- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.2.0-next.1
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.2.0-next.1
- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 1.1.0-next.4
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.2.0-next.3
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.2.0-next.1
- [Extreal.Integration.AssetWorkflow.Addressables](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables) 1.1.0-next.2

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
- Unityを2022.3にアップグレードしました。

### Extreal.Core.StageNavigation
#### Changed
- Unityを2022.3にアップグレードしました。

### Extreal.Core.Common
#### Added
- IObservableにフックを追加できる機能を追加しました。([Doc](../core/common.md#core-common-hook), [PR](https://github.com/extreal-dev/Extreal.Core.Common/pull/6))
#### Changed
- Unityを2022.3にアップグレードしました。

### Extreal.Integration.Multiplay.NGO
#### Changed
- Unityを2022.3にアップグレードしました。
- NGOを1.5.1にアップグレードしました。
- NGOにてUNet Transportがサポートされなくなったため、UNet Transportに関連する機能を削除しました。([PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/19))
  - この変更は後方互換に影響があるため[Upgrade guide](#upgrade-guide)を参照してください。
- NgoConfigのAddressプロパティにドメイン名を指定できるように変更しました。([PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/18))

### Extreal.Integration.Chat.Vivox
#### Changed
- Unityを2022.3にアップグレードしました。
- Vivoxを15.1.200000-pre.1にアップグレードしました。

### Extreal.Integration.AssetWorkflow.Addressables
#### Changed
- Unityを2022.3にアップグレードしました。
- Addressablesを1.21.12にアップグレードしました。
- Addressablesのビルドスクリプトが変更されたため、[アセットの暗号化を行うビルドスクリプト](../integration/asset-workflow.addressables.md#assets-addressables-crypto)にAddressablesの変更を適用しました。([PR](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables/pull/3))
  - この変更は後方互換に影響があるため[Upgrade guide](#upgrade-guide)を参照してください。

### Extreal.SampleApp.Holiday
#### Added
- アプリケーションの利用状況可視化を追加しました。([Doc](../sample-app/dev-guide.md#holiday-devguide-appusage), [PR](https://github.com/extreal-dev/Extreal.SampleApp.Holiday/pull/8))
#### Changed
- Unityを2022.3にアップグレードしました。

## Upgrade guide {#upgrade-guide}

モジュールバージョンを更新してください。

後方互換に影響がある変更があるため、下記を確認して該当するアプリケーションは対応してください。

### Extreal.Integration.Multiplay.NGO
#### 変更影響があるアプリケーション
NGOが提供していたUNet Transportを使用しているアプリケーションに影響があります。
#### 変更影響と対応方法
NGOにてUNet Transportがサポートされなくなったため、UNet Transportが使えなくなりました。

NGOが提供するUnity Transportを使うように変更してください。

### Extreal.Integration.AssetWorkflow.Addressables
#### 変更影響があるアプリケーション
アセットを暗号化しているアプリケーションに影響があります。
#### 変更影響と対応方法
Addressablesのビルドスクリプトが変更され、アセットの暗号化を行うビルドスクリプト (BuildScriptEncryptMode)が動作しなくなりました。
そのため、アセットの暗号化を行うビルドスクリプトにAddressablesの変更を適用しました。

[アセットの暗号化と複合を行う](../integration/asset-workflow.addressables.md#assets-addressables-crypto)を参照し、アセットの暗号化を行うビルドスクリプトを再設定してください。
