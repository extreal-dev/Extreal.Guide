---
sidebar_position: 6
---

# Common for Multiplay

## What for?

マルチプレイの機能を実現するために、プレイヤーの入退室、スポーン、同期の部分を共通化したライブラリを提供します。

## Specification

- ネットワーク接続方法を変更できます。
- グループへの入退室ができます。
- ネットワーク上で共有するオブジェクトをスポーンできます。
- プレイヤーへの入力情報を同期できます。
- メッセージの送受信ができます。

## Architecture

```mermaid
classDiagram
    ExtrealMultiplayClient ..> MultiplayPlayerInput
    ExtrealMultiplayClient ..> MultiplayConnectionConfig

    IExtrealMultiplayTransport <-- ExtrealMultiplayClient
    IExtrealMultiplayTransport ..> MultiplayConnectionConfig
    IDisposable <|.. IExtrealMultiplayTransport
    NetworkClient <-- ExtrealMultiplayClient

    MultiplayPlayerInput --> MultiplayPlayerInputValues

    class ExtrealMultiplayClient {
        +OnConnected IObservable
        +OnDisconnecting IObservable
        +OnUnexpectedDisconnected IObservable
        +OnConnectionApprovalRejected IObservable
        +OnUserConnected IObservable
        +OnUserDisconnected IObservable
        +OnObjectSpawned IObservable
        +OnMessageReceived IObservable
        +SetTransport(transport) void
        +ListRoomsAsync() List
        +ConnectAsync(connectionConfig) void
        +Disconnect() void
        +DeleteRoomAsync() void
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

    class IExtrealMultiplayTransport {
        <<interface>>
        +IsConnected bool
        +OnConnected IObservable
        +OnDisconnecting IObservable
        +OnUnexpectedDisconnected IObservable
        +OnConnectionApprovalRejected IObservable
        +OnUserConnected IObservable
        +OnUserDisconnected IObservable
        +OnObjectSpawned IObservable
        +EnqueueRequest(message, to) void
        +ResponseQueueCount() void
        +DequeueResponse() (string, string)
        +UpdateAsync() void
        +ConnectAsync(connectionConfig) void
        +DisconnectAsync() void
        +ListRoomsAsync() List
        +DeleteRoomAsync() void
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

    class MultiplayConnectionConfig {
    }

    class IDisposable {
        <<interface>>
    }
    
```