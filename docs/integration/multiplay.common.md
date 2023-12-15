---
sidebar_position: 6
---

# Common for Multiplay

## What for?
マルチプレイ機能を実現する際には、プレイヤーの状態（位置情報や動きなど）を同期させる必要があります。

この同期処理は[NGOラッパー](multiplay.ngo.md)を利用し実現する場合、ホスト/サーバーが中心となって行われます。
そのため、大規模なマルチプレイを実現する場合、ホスト/サーバーに膨大な負荷がかかり、高いマシンスペックが必要になります。

このライブラリでは低コストで大規模なマルチプレイができるように、以下の特徴を持った機能を提供します。
- サーバーへの負荷を減らすように、同期情報をクライアント側で更新します。
- サーバーを[NGOラッパー](multiplay.ngo.md)以外の外部ライブラリから構築します。
- サーバーとの通信方式を変更できます。

## Specification

- 通信方式を変更できます。
- グループへの入退室ができます。
- 同期するオブジェクトをスポーンできます。
- プレイヤーへの入力情報を同期できます。
- メッセージの送受信ができます。
- クライアントの状態をトリガーに処理を追加できます。

## Architecture

```mermaid
classDiagram
    MultiplayClient ..> MultiplayPlayerInput
    MultiplayClient ..> MessagingConnectionConfig

    QueuingMessagingClient <-- MultiplayClient
    NetworkClient <-- MultiplayClient

    MultiplayPlayerInput --> MultiplayPlayerInputValues

    class MultiplayClient {
        +LocalClient NetworkClient
        +ConnectedUsers IReadOnlyDictionary

        +OnConnected IObservable
        +OnDisconnecting IObservable
        +OnUnexpectedDisconnected IObservable
        +OnConnectionApprovalRejected IObservable
        +OnUserConnected IObservable
        +OnUserDisconnected IObservable
        +OnObjectSpawned IObservable
        +OnMessageReceived IObservable

        +SetMessagingClient(messagingClient) void
        +ConnectAsync(connectionConfig) void
        +DisconnectAsync() void
        +SpawnPlayer(position, rotation, parent, message) GameObject
        +SpawnObject(objectPrefab, position, rotation, parent, message) GameObject
        +SendMessage(message, to) void
    }

    class NetworkClient {
        +UserId string
        +PlayerObject GameObject
        +NetworkObjects IReadOnlyList
        +NetworkClient(userId)
    }

    class QueuingMessagingClient {
        <<extreal>>
    }

    class MultiplayPlayerInput {
        +Values MultiplayPlayerInputValues
        +SetMove(newMoveDirection) void
        +SetValues(values) void
    }

    class MultiplayPlayerInputValues {
        +Move Vector2
        +SetMove(move) Vector2
        +CheckWhetherToSendData() bool
    }

    class MessagingConnectionConfig {
        <<extreal>>
    }
```

## Installation

### Package

#### Unity
```text
https://github.com/extreal-dev/Extreal.Integration.Multiplay.Common.git
```

### Dependencies

このモジュールは次のパッケージを使います。

#### Unity

- [Extreal.Core.Logging](../core/logging.md)
- [Extreal.Core.Common](../core/common.md)
- [Extreal.Integration.Messaging.Common](messaging.common.md)
- [UniTask](https://github.com/Cysharp/UniTask)
- [UniRx](https://github.com/neuecc/UniRx)

モジュールバージョンと各パッケージバージョンの対応は[Release](../category/release)を参照ください。

### Settings

このモジュールは[Messaging.Common](messaging.common.md)を使ってMultiplayを実現しています。
そのため[Messaging.CommonのSettings](messaging.common.md#settings)が必要になります。

```csharp
public class ClientControlScope : LifetimeScope
{
    [SerializeField] private MultiplayClient multiplayClient;

    protected override void Configure(IContainerBuilder builder)
    {
        // After initializing QueuingMessagingClient in Messaging.Common
        multiplayClient.SetMessagingClient(queuingMessagingClient);

        builder.RegisterComponent(multiplayClient);
    }
}
```

## Usage

### 通信方式を変更する

通信方式の変更は[Messaging.Common](messaging.common.md)を使って実現しています。
[Messaging.CommonのSpecification](messaging.common.md#Specification)を参照してください。

### グループへの入退室を行う
参加するグループ名はMessagingConnectionConfigで指定します。

```csharp
// Join a group
var connectionConfig = new MessagingConnectionConfig(groupName);
await extrealMultiplayClient.ConnectAsync(connectionConfig);

// Leave the group
extrealMultiplayClient.DisconnectAsync();
```

### 同期するオブジェクトをスポーンする
SpawnPlayerメソッドを使ってプレイヤーをスポーンします。

```csharp
extrealMultiplayClient.SpawnPlayer()
```
SpawnObjectメソッドを使ってレイヤー以外のオブジェクトをスポーンします。

```csharp
// After initializing a GameObject to spawn
extrealMultiplayClient.SpawnObject(spawnObject)
```

### プレイヤーへの入力情報を同期する
同期されるオブジェクトにアタッチされたMultiplayPlayerInputのValuesの値を同期しています。

同期されたValuesはSetValuesメソッドを使ってローカルオブジェクトに適用します。

#### 同期する入力情報を拡張する方法
Move以外に他の入力情報を同期したい場合、MultiplayPlayerInputとMultiplayPlayerInputValuesを継承したクラスを作成し、Valuesにセットするようにします。

例えば、'Jump'という入力情報を同期したい場合、以下を参考にしてください。

```csharp
public class HolidayPlayerInput : MultiplayPlayerInput
{
    public override MultiplayPlayerInputValues Values => HolidayValues;
    public HolidayPlayerInputValues HolidayValues { get; } = new HolidayPlayerInputValues();

    public override void SetMove(Vector2 newMoveDirection)
        => HolidayValues.SetMove(newMoveDirection);

    public void SetJump(bool newJump)
        => HolidayValues.SetJump(newJump);

    public override void SetValues(MultiplayPlayerInputValues values)
    {
        var holidayValues = values as HolidayPlayerInputValues;

        base.SetValues(holidayValues);
        SetJump(holidayValues.Jump);
    }
}
```

```csharp
[Serializable]
public class HolidayPlayerInputValues : MultiplayPlayerInputValues
{
    private Vector2 preMove;
    private bool isMoveChanged;

    public bool Jump => jump;
    [SerializeField] private bool jump;
    private bool preJump;
    private bool isJumpChanged;

    public override void SetMove(Vector2 move)
    {
        preMove = Move;
        base.SetMove(move);
        isMoveChanged = preMove != Move;
    }

    public void SetJump(bool jump)
    {
        preJump = this.jump;
        this.jump = jump;
        isJumpChanged = preJump != this.jump;
    }
}
```

#### 同期するかどうかを制御する方法
CheckWhetherToSendDataメソッドで行います。
入力情報で'Move'と'Jump'が変化した場合にのみ同期する例を示します。

```csharp
[Serializable]
public class HolidayPlayerInputValues : MultiplayPlayerInputValues
{
    public override bool CheckWhetherToSendData()
    {
        var ret = isMoveChanged || isJumpChanged;
        isMoveChanged =  isJumpChanged = false;
        return ret;
    }
}
```


### メッセージの送受信を行う
メッセージ送信はSendMessageメソッドを使います。

```csharp
multiplayClient.SendMessage(message, userId)
```
メッセージ受信は[MessagingClientの受信イベント通知](messaging.common.md#クライアントの状態をトリガーに処理を追加する)で実現しています。

### クライアントの状態をトリガーに処理を追加できます
[MessagingClientのイベント通知](messaging.common.md#クライアントの状態をトリガーに処理を追加する)以外に、次のイベント通知を設けています。

- OnObjectSpawned
  - タイミング：同期するオブジェクトをスポーンした直後
  - タイプ：IObservable
  - パラメータ：接続したユーザID、スポーンしたオブジェクト、送信されたメッセージ