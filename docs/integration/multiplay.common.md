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
- ExtrealMultiplayClient: マルチプレイ機能を実現するための中心となるクラス。
- NetworkObject: ネットワーク上で共有される各オブジェクト。
- NetworkClient: 個々のプレイヤー情報を表します。
- IExtrealMultiplayTransport: ネットワーク通信のためのインターフェース。

## Architecture

```mermaid
classDiagram
    IExtrealMultiplayTransport <|-- ExtrealMultiplayClient
    IDisposable <|.. IExtrealMultiplayTransport
    NetworkClient <-- ExtrealMultiplayClient
    NetworkObject <-- ExtrealMultiplayClient

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
        +ListRoomsAsync() List~Room~
        +ConnectAsync(connectionConfig) void
        +Disconnect() void
        +DeleteRoomAsync() void
        +SpawnPlayer(position, rotation, parent, message) GameObject
        +SpawnObject(objectPrefab, position, rotation, parent, message) GameObject
        +SendMessage(toUserIdentity, message, command) void
    }

    class NetworkClient {
        +UserIdentity string
        +PlayerObject GameObject
        +NetworkObjects List~GameObject~
        +NetworkClient(userIdentity)
        +SetPlayerObject(playerObject) void
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
        +DequeueResponse() (string, string)
        +UpdateAsync() void
        +ConnectAsync(connectionConfig) void
        +DisconnectAsync() void
        +ListRoomsAsync() List~Room~
        +DeleteRoomAsync() void
    }

    class IDisposable {
        <<.Net, interface>>
    }
    
```
