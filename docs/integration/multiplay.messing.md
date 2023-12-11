---
sidebar_position: 8
---

# Multiplay using Messaging

## What for?

マルチプレイ通信方式を実現したライブラリを提供します。

## Specification

- Messagingによるマルチプレイができます。

## Architecture

```mermaid
classDiagram

    MessagingMultiplayTransport ..> MessagingMultiplayConnectionConfig
    MessagingMultiplayTransport ..> MultiplayConnectionConfig
    MessagingMultiplayTransport ..> Room
    MessagingMultiplayTransport ..> MultiplayMessageCommand
    MessagingMultiplayTransport ..|> IExtrealMultiplayTransport

    IExtrealMultiplayTransport <-- MessagingMultiplayTransport
    ExtrealMessagingClient <-- MessagingMultiplayTransport
    MultiplayMessage <-- MessagingMultiplayTransport
    DisposableBase <-- MessagingMultiplayTransport



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
        +EnqueueRequest(message, to)
        +ResponseQueueCount() int
        +DequeueResponse(userIdentity, message) void

        +UpdateAsync() void
        +ListRoomsAsync() void
        +ConnectAsync(connectionConfig) void
        +DisconnectAsync() void
        +DeleteRoomAsync() void
    }

    class IExtrealMultiplayTransport {
    }

    class DisposableBase {
    }

    class MultiplayMessage {
    }

    class MultiplayMessageCommand {
    }

    class ExtrealMessagingClient {
    }


    class MessagingMultiplayConnectionConfig {
        +MessagingConnectionConfig MessagingConnectionConfig
        +MessagingMultiplayConnectionConfig(connectionConfig)
    }
```
