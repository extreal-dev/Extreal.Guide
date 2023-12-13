---
sidebar_position: 5
---

# Common for Messaging

## What for?

グループでメッセージのやり取りをする機能の共通部分を提供します。

この共通機能を使うことで自由にバックエンドとの通信方式を切り替えることができるようになります。
また使い方次第でマルチプレイにおける同期メッセージのやりとりやテキストチャットなど様々な用途に活用できます。

## Specification

- グループの管理ができます。
- グループでメッセージを送受信できます。
- キューイングを行うことができます。
- クライアントの状態をトリガーに処理を追加できます。
- バックエンドとの通信方式を切り替えることができます。

## Architecture

```mermaid
classDiagram

    DisposableBase <|-- GroupManager
    DisposableBase <|-- MessagingClient
    DisposableBase <|-- QueuingMessagingClient
    IDisposable <|-- IMessagingTransport
    GroupManager --> IMessagingTransport
    MessagingClient --> IMessagingTransport
    MessagingClient --> MessagingConnectionConfig
    QueuingMessagingClient --> MessagingClient
    
    class MessagingClient {
        IsConnected bool
        ConnectedUsers IReadOnlyList
        OnConnected IObservable
        OnDisconnecting IObservable
        OnUnexpectedDisconnected IObservable
        OnConnectionApprovalRejected IObservable
        OnUserConnected IObservable
        OnUserDisconnecting IObservable
        OnMessageReceived IObservable

        SetTransport(messagingTransport) void
        ConnectAsync(connectionConfig) void
        DisconnectAsync() void
        SendMessageAsync(message, to) void
    }
    
    class IMessagingTransport {
        IsConnected bool
        OnConnected IObservable
        OnDisconnecting IObservable
        OnUnexpectedDisconnected IObservable
        OnConnectionApprovalRejected IObservable
        OnUserConnected IObservable
        OnUserDisconnecting IObservable
        OnMessageReceived IObservable

        SendMessageAsync(message, to) void
        ListGroupsAsync() List
        ConnectAsync(connectionConfig) void
        DisconnectAsync() void
        DeleteGroupAsync() void
    }

    class MessagingConnectionConfig {
        GroupName string
        MaxCapacity int

        MessagingConnectionConfig(groupName, maxCapacity)
    }

    class GroupManager {
        SetTransport(transport) void
        ListGroupsAsync() List
        DeleteGroupAsync() void
    }

    class QueuingMessagingClient {
        IsConnected bool
        ConnectedUsers IReadOnlyList
        OnConnected IObservable
        OnDisconnecting IObservable
        OnUnexpectedDisconnected IObservable
        OnConnectionApprovalRejected IObservable
        OnUserConnected IObservable
        OnUserDisconnecting IObservable

        QueuingMessagingClient(MessagingClient messagingClient)
        EnqueueRequest(string message, string to = default) void
        ResponseQueueCount() int
        DequeueResponse() (from, message)
        ConnectAsync(MessagingConnectionConfig connectionConfig) void
        DisconnectAsync() void
    }
    
    class DisposableBase {
        <<extreal>>
    }

    class IDisposable {
        <<interface>>
    }
```

## Installation

### Package

```text
https://github.com/extreal-dev/Extreal.Integration.Messaging.Common.git
```

### Dependencies

- [Extreal.Core.Logging](../core/logging.md)
- [Extreal.Core.Common](../core/common.md)
- [UniTask](https://github.com/Cysharp/UniTask)
- [UniRx](https://github.com/neuecc/UniRx)

### Settings

MessagingClientを初期化します。
MessagingClientを初期化にはIMessagingTransportを実装したクラスのインスタンスが必要です。
IMessagingTransportを実装したクラスのインスタンスは初期化しているものとします。

```csharp
var messagingClient = new MessagingClient();
messagingClient.SetTransport(messagingTransport); // Let messagingTransport be an instance of a class that implements IMessagingTransport 
```

GroupManagerやQueuingMessagingClientを使用したい場合はこれらも初期化します。

```csharp
var groupManager = new GroupManager();
groupManager.SetTransport(messagingTransport);

var queuingMessagingClient = new QueuingMessagingClient(messagingClient);
```

## Usage
