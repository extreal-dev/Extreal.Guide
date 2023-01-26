---
sidebar_position: 1
---

# Unreleased

2023-01-25

## Unity version

次のUnityバージョンで動作確認しています。

2021.3.16f1

## Modules

- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.0.0
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.1.0-next.1
- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 0.1.0
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.0.0
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.0.0

## Dependencies

- Common
  - [UniTask](https://github.com/Cysharp/UniTask) 2.3.3 ([MIT License](https://github.com/Cysharp/UniTask/blob/master/LICENSE))
  - [UniRx](https://github.com/neuecc/UniRx) 7.1.0 ([MIT License](https://github.com/neuecc/UniRx/blob/master/LICENSE))
- Extreal.Integration.Multiplay.NGO
  - [Netcode for GameObjects](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects) 1.2.0 ([MIT License](https://github.com/Unity-Technologies/com.unity.netcode.gameobjects/blob/develop/LICENSE.md))
- Extreal.Integration.Chat.Vivox
  - [Vivox Unity SDK](https://docs.vivox.com/v5/general/unity/15_1_190000/en-us/Default.htm) 15.1.190000 ([Unity Package Distribution License](https://unity.com/legal/licenses/unity-package-distribution-license))

## Changes

### Extreal.Core.StageNavigation

#### Changed

- [Dispose Pattern](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose)を適用しました。([PR](https://github.com/extreal-dev/Extreal.Core.StageNavigation/pull/18))

### Extreal.Core.Common

#### Added

- モジュールを追加しました。
- [Dispose Pattern](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose)を継承/移譲で適用する機能を追加しました。([Doc](./../core/common.md), [PR](https://github.com/extreal-dev/Extreal.Core.Common/pull/1))

## Backward compatible

後方互換に影響がある変更はありません。

## Upgrade guide

モジュールバージョンを更新してください。
