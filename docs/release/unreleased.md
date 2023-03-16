---
sidebar_position: 1
---

# Unreleased

2023-03-15

## Unity version

次のUnityバージョンで動作確認しています。

2021.3.20f1

## Modules

- [Extreal.Core.Logging](https://github.com/extreal-dev/Extreal.Core.Logging) 1.1.0-next.1
- [Extreal.Core.StageNavigation](https://github.com/extreal-dev/Extreal.Core.StageNavigation) 1.1.0-next.1
- [Extreal.Core.Common](https://github.com/extreal-dev/Extreal.Core.Common) 1.0.0-next.2
- [Extreal.Integration.Multiplay.NGO](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO) 1.1.0-next.2
- [Extreal.Integration.Chat.Vivox](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox) 1.1.0-next.2
- [Extreal.Integration.AssetWorkflow.Addressables](https://github.com/extreal-dev/Extreal.Integration.AssetWorkflow.Addressables) 1.0.0-next.2

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

### Extreal.Core.Logging
#### Changed
- ログカテゴリで出力するログを絞り込む機能を追加しました。([Doc](../core/logging.md#core-logging-category), [PR](https://github.com/extreal-dev/Extreal.Core.Logging/pull/20))
- Unity標準のDebugクラスで出力するログの色をログカテゴリ毎に指定する機能を追加しました。([Doc](../core/logging.md#core-logging-category), [PR](https://github.com/extreal-dev/Extreal.Core.Logging/pull/20))

### Extreal.Core.StageNavigation
#### Changed
- [Dispose Pattern](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose)を適用しました。([PR](https://github.com/extreal-dev/Extreal.Core.StageNavigation/pull/18))

### Extreal.Core.Common
#### Added
- 汎用的な処理を共通機能として提供するモジュールを追加しました。([Doc](../core/common.md))
- [Dispose Pattern](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose)を継承/移譲で適用する機能を追加しました。([Doc](../core/common.md#core-common-dp), [PR](https://github.com/extreal-dev/Extreal.Core.Common/pull/1))
- リトライ処理をメソッドに適用する機能を追加しました。([Doc](../core/common.md#core-common-retry), [PR](https://github.com/extreal-dev/Extreal.Core.Common/pull/4))

### Extreal.Integration.Multiplay.NGO
#### Changed
- [Dispose Pattern](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose)を適用しました。([PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/14))
- 通信が切断された時に再接続する機能を追加しました。([Doc](../integration/multiplay.ngo.md#multiplay-ngo-retry), [PR](https://github.com/extreal-dev/Extreal.Integration.Multiplay.NGO/pull/16))

### Extreal.Integration.Chat.Vivox
#### Changed
- [Dispose Pattern](https://learn.microsoft.com/en-us/dotnet/standard/garbage-collection/implementing-dispose)を適用しました。([PR](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox/pull/13))
- 通信が切断された時に再接続する機能を追加しました。([Doc](../integration/chat.vivox.md#chat-vivox-retry), [PR](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox/pull/15))
- VivoxClientの初期化時にVivoxConfigを指定できるように変更しました。([PR](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox/pull/15/commits/403cf5040d1f30acc43f88f4f7fad11128e42193))
- チャンネル切断時に必要となるChannelIdをチャンネル接続時(VivoxClientのConnectAsyncメソッド)に返すように変更しました。([PR](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox/pull/15/commits/94e5a257ff6bbef9e00153d65abc9ca6916c253c))
- ログイン(VivoxClientのLoginAsyncメソッド)とチャンネル接続(VivoxClientのConnectAsyncメソッド)の処理失敗をすぐに検知できるように処理失敗を判定する方法をタイムアウトから処理結果を待って判定するように変更しました。([PR](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox/pull/15/commits/a183b44b9573c8080de0fe1df004a4fe1b6c2ad8))
  - この変更は後方互換に影響があるため[Upgrade guide](#upgrade-guide)を参照してください。
- ログインしていない状態でチャンネルを切断(VivoxClientのDisconnectメソッド)しても例外が発生しないように変更しました。([PR](https://github.com/extreal-dev/Extreal.Integration.Chat.Vivox/pull/15/commits/a9147710d6f7ca0d49c7db8e4eca4e92fe6a3388))

### Extreal.Integration.AssetWorkflow.Addressables
#### Added
- [Addressables](https://docs.unity3d.com/Packages/com.unity.addressables@1.19/manual/index.html)をアプリケーションで使いやすくするラッパーを提供するモジュールを追加しました。([Doc](../integration/asset-workflow.addressables.md))

## Upgrade guide {#upgrade-guide}

モジュールバージョンを更新してください。

後方互換に影響がある変更があるため、下記を確認して該当するアプリケーションは対応してください。

### Extreal.Integration.Chat.Vivox

#### 変更影響があるアプリケーション

次の条件を1つでも満たすアプリケーションに影響があります。

- ログイン(VivoxClientのLoginAsyncメソッド)またはチャンネル接続(VivoxClientのConnectAsyncメソッド)にてタイムアウトを指定している
- ログインまたはチャンネル接続の呼び出しにてTimeoutExceptionに対する例外処理を行っている

#### 変更影響と対応方法

ログインとチャンネル接続にて処理失敗を判定する方法をタイムアウトから処理結果を待って判定するように変更しました。
ログインとチャンネル接続は非同期処理のため結果が返ってこない場合を考慮しタイムアウトで処理を切り上げ、メソッド呼び出しとは別のイベント通知でログイン状況や接続状況を把握する方針としていました。
再接続の追加に伴い様々なケースでテストをした結果、ログインとチャンネル接続の処理結果が返ってこないケースがないことを確認できたため、すぐに処理失敗を検知できるように今回の変更を実施しました。

変更影響は次の通りです。
- VivoxClientのLoginAsyncメソッド
  - タイムアウトが指定できなくなりました。
  - 処理が失敗した場合に送出される例外がTimeoutExceptionからVivoxConnectionExceptionに変わりました。
- VivoxClientのConnectAsyncメソッド
  - タイムアウトが指定できなくなりました。
  - 処理が失敗した場合に送出される例外がTimeoutExceptionからVivoxConnectionExceptionに変わりました。

次の対応を実施してください。
- タイムアウトを実現したい場合は各メソッドの呼び出し側で実装してください。
- 各メソッドの処理失敗時に補足していた例外をTimeoutExceptionからVivoxConnectionExceptionに変更してください。
