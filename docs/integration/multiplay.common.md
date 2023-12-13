---
sidebar_position: 6
---

# Common for Multiplay

## What for?
[Multiplay.NGO](multiplay.ngo.md)を利用しマッシブマルチプレイを実現する場合では、サーバに膨大な負荷をかけ、コストが高くなります。

このライブラリでは低コストでマッシブマルチプレイができるように、以下の特徴を持った機能を提供します。
- サーバコストが減らすように、同期するオブジェクトをクライアント側でスポーンします。
- [Messaging.Common](messaging.common.md)を利用し、バックエンドとの通信方式を変更できます。

## Specification

- バックエンドとの通信方式を変更できます。
- 同期するオブジェクトをクライアント側でスポーンします。
- プレイヤーへの入力情報を同期できます。
- メッセージの送受信ができます。

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
        +ConnectedClients IReadOnlyDictionary

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
        +Disconnect() void
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
        // 例としてMessaging.Redisを使用した場合の通信方式を記載します
        var redisMessagingConfig = new RedisMessagingConfig("http://localhost:3030", new SocketIOOptions { EIO = EngineIO.V4 });
        var redisMessagingTransport = RedisMessagingTransportProvider.Provide(redisMessagingConfig);

        var messagingClient = new MessagingClient();
        messagingClient.SetTransport(redisMessagingTransport);

        var queuingMessagingClient = new QueuingMessagingClient(messagingClient);
        multiplayClient.SetMessagingClient(queuingMessagingClient);

        builder.RegisterComponent(multiplayClient);
        builder.RegisterEntryPoint<ClientControlPresenter>();
    }
}
```

## Usage

### ネットワーク接続方法を変更

MessagingMultiplayTransportをトランスポートにセットします。

```csharp
extrealMultiplayClient.SetTransport(messagingMultiplayTransport);
```

### グループへの入退室を行う


```csharp
// 入室
var messagingConnectionConfig = new MessagingConnectionConfig(appState.GroupName, assetHelper.NgoHostConfig.MaxCapacity);
var multiplayConnectionConfig = new MessagingMessagingConnectionConfig(messagingConnectionConfig);
await extrealMultiplayClient.ConnectAsync(multiplayConnectionConfig);

// 退室
extrealMultiplayClient.Disconnect();
```

### ネットワーク上で共有するオブジェクトをスポーンする

```csharp
extrealMultiplayClient.SpawnPlayer(message: appState.Avatar.AssetName)
```

### プレイヤーへの入力情報を同期する

```csharp
public class HolidayPlayerInput : MultiplayPlayerInput
{
    public override MultiplayPlayerInputValues Values => HolidayValues;
    public HolidayPlayerInputValues HolidayValues { get; } = new HolidayPlayerInputValues();

    public Vector2 Look => look;
    [SerializeField] private Vector2 look;

    public override void SetMove(Vector2 newMoveDirection)
        => HolidayValues.SetMove(newMoveDirection);

    public void SetLook(Vector2 newLookDirection)
        => look = newLookDirection;

    public void SetSprint(bool newSprint)
        => HolidayValues.SetSprint(newSprint);

    public void SetJump(bool newJump)
        => HolidayValues.SetJump(newJump);

    public void SetInputFieldTyping(bool newValue)
        => HolidayValues.SetInputFieldTyping(newValue);

    public override void SetValues(MultiplayPlayerInputValues values)
    {
        var holidayValues = values as HolidayPlayerInputValues;

        base.SetValues(holidayValues);
        SetSprint(holidayValues.Sprint);
        SetJump(holidayValues.Jump);
        SetInputFieldTyping(holidayValues.InputFieldTyping);
    }
}
```

```csharp
public class GetPlayerInput : MonoBehaviour
{
    [SerializeField] private HolidayPlayerInput input;

    private void Update()
        => input.SetInputFieldTyping(
            EventSystem.current.currentSelectedGameObject != null
            && EventSystem.current.currentSelectedGameObject.GetComponent<TMP_InputField>() != null);

    public void OnMove(InputValue value)
        => input.SetMove(value.Get<Vector2>());

    public void OnLook(InputValue value)
        => input.SetLook(value.Get<Vector2>());

    public void OnSprint(InputValue value)
        => input.SetSprint(value.isPressed);

    public void OnJump(InputValue value)
        => input.SetJump(value.isPressed);
}
```

### メッセージの送受信を行う
メッセージ送信はSendMessageメソッドを使います。

```csharp
    multiplayClient.SendMessage(message, userId)
```

メッセージ受信はOnMessageReceivedイベントを使います。 パラメータとしてユーザ識別子とJSONのメッセージが渡ってきます。

```csharp
    multiplayClient.OnMessageReceived
    .Subscribe(HandleReceivedMessage)
    .AddTo(disposables);

    private void HandleReceivedMessage((string userId, string messageJson) tuple)
    {
       // do something
    }
```