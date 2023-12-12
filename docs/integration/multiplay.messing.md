---
sidebar_position: 8
---

# Multiplay using Messaging

## What for?

マルチプレイ通信方式を実現したライブラリを提供します。

## Specification

- Messagingによるマルチプレイができます。
- MessagingMultiplayTransport: メッセージングを用いたマルチプレイの通信を実現するクラス。
## Architecture

```mermaid
classDiagram

    IExtrealMultiplayTransport <|.. MessagingMultiplayTransport
    ExtrealMessagingClient <-- MessagingMultiplayTransport
    DisposableBase <|-- MessagingMultiplayTransport

    class MessagingMultiplayTransport {
        +IsConnected　bool
        +OnConnected IObservable
        +OnDisconnecting IObservable
        +OnUnexpectedDisconnected IObservable
        +OnConnectionApprovalRejected IObservable
        +OnUserConnected IObservable
        +OnUserDisconnected IObservable
        +OnMessageReceived IObservable
        +MessagingMultiplayTransport(messagingTransport)
        +EnqueueRequest(message, to) void
        +ResponseQueueCount() int
        +DequeueResponse(userIdentity, message) void

        +UpdateAsync() void
        +ListRoomsAsync() List~Room~
        +ConnectAsync(connectionConfig) void
        +DisconnectAsync() void
        +DeleteRoomAsync() void
    }

    class IExtrealMultiplayTransport {
        <<extreal>>
    }

    class DisposableBase {
        <<extreal>>
    }

    class ExtrealMessagingClient {
        <<extreal>>
    }
```
