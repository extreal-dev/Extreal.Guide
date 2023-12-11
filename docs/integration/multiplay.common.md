---
sidebar_position: 7
---

# Common for Multiplay

## What for?

マルチプレイの機能を実現するために、メッセージング以外の要素を共通化したライブラリを提供します。

ネットワーク接続管理、トランスポート層のカスタマイズ、オブジェクト同期、メッセージングシステムを提供し、開発者がマルチプレイ環境を効率的に構築できるよう支援します。
## Specification

- ネットワーク接続方法を変更できます。
- グループへの入退室ができます。
- ネットワーク上で共有するオブジェクトをスポーンできます。
- プレイヤーへの入力情報を同期できます。
- メッセージの送受信ができます。

## Architecture

```mermaid
classDiagram

    ExtrealMultiplayClient ..> MultiplayMessage
    ExtrealMultiplayClient ..> MultiplayMessageCommand
    ExtrealMultiplayClient ..> MultiplayPlayerInput
    ExtrealMultiplayClient ..> MultiplayConnectionConfig
    IExtrealMultiplayTransport ..> MultiplayMessage
    IExtrealMultiplayTransport ..> MultiplayConnectionConfig
    IExtrealMultiplayTransport ..> Room
    NetworkObject <-- MultiplayMessage
    MultiplayMessageCommand <-- MultiplayMessage

    NetworkClient <-- ExtrealMultiplayClient
    NetworkObject <-- ExtrealMultiplayClient
    IExtrealMultiplayTransport <-- ExtrealMultiplayClient
    MultiplayPlayerInputValues <-- MultiplayPlayerInput


    class ExtrealMultiplayClient {
        +OnConnected IObservable
        +OnDisconnecting IObservable
        +OnUnexpectedDisconnected IObservable
        +OnConnectionApprovalRejected IObservable
        +OnUserConnected IObservable
        +OnUserDisconnected IObservable
        +OnObjectSpawned IObservable
        +OnMessageReceived IObservable
        +SetTransport(transport)
        +ListRoomsAsync(connectionConfig) List<Room>
        +ConnectAsync(connectionConfig) bool
        +Disconnect() void
        +DeleteRoomAsync() bool
        +SpawnPlayer() GameObject
        +SpawnObject() GameObject
        +SendMessage(message, command) void
        +SendMessage(toUserIdentity, message, command) void
    }

    class NetworkClient {
        +UserIdentity string
        +PlayerObject GameObject
        +NetworkObjects List<GameObject>
        +NetworkClient(userIdentity)
        +SetPlayerObjectZ(playerObject) void
        +AddNetworkObject(networkObject) void

    }

    class NetworkObject {
        +ObjectGuid string
        +GameObjectHash GameObject
        +Position Vector3
        +Rotation Quaternion
        +CreatedAt DateTime
        +UpdatedAt DateTime
        +NetworkObject(gameObjectHash, position, rotation) void
        +OnBeforeSerialize() void
        +OnAfterDeserialize() void
        +CheckWhetherToSendData() void
        +Updated() void
        +GetTransformFrom(transform) void
        +ApplyValuesTo(input) void
        +GetValuesFrom(input) void

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
        +OnMessageReceived IObservable
        +EnqueueRequest(message, to) void
        +ResponseQueueCount() void
        +DequeueResponse() (string, MultiplayMessage)
        +UpdateAsync() void
        +ConnectAsync(connectionConfig) void
        +DisconnectAsync() void
        +ListRoomsAsync(connectionConfig) List<Room>
        +DeleteRoomAsync() void
    }

    class MultiplayMessage {
        +MultiplayMessageCommand MultiplayMessageCommand
        +NetworkObjectInfo NetworkObject
        +NetworkObjectInfos NetworkObject[]
        +Message string
    }

    class MultiplayMessageCommand {
        None
        Join
        AvatarName
        Create
        Update
        UserConnected
        UserInitialized
        Message
    }

    class ConnectionConfig {
        +Url string
        +ConnectionConfig(url)
    }

    class Room {
        +Id string
        +Name string
        +Room(id, name)
    }

    class MultiplayPlayerInput {
        +Values MultiplayPlayerInputValues
        +Name string
        +SetMove(newMoveDirection) void
        +SetValues(values) void
    }

    class MultiplayPlayerInputValues {
        +Move Vector2
        +SetMove(move) Vector2
        +CheckWhetherToSendData() bool
    }

    class MultiplayConnectionConfig {
        +MultiplayMessageCommand MultiplayMessageCommand
        +NetworkObject NetworkObject
        +NetworkObjects NetworkObject[]
        +Message string
        +MultiplayMessage(multiplayMessageCommand, networkObjectInfo, networkObjectInfos, message)
    }
```
