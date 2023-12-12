---
sidebar_position: 10
---

# Messaging using Redis

## What for?

コストをできるだけ抑えながら大規模なコミュニケーションを行う手段としてRedis Pub/Sub(Publish/Subscribe)があります。

このモジュールはNative(C#)とWebGL(JavaScript)向けのRedis Pub/Subによるメッセージングのバックエンドとの通信方式の実装を提供します。

## Specification

- Redis Pub/Subによるメッセージングができます。
- RedisMessagingTransportProvider: Redis Pub/Subに基づくメッセージングトランスポートを提供するファクトリークラスです。異なるプラットフォーム向け（NativeとWebGL）のRedisMessagingTransportインスタンスを生成します。
- RedisMessagingTransport: Redis Pub/Subによるメッセージングのための基本クラスです。このクラスはIExtrealMessagingTransportインターフェースを実装し、共通の通信機能を提供します。
## Architecture

### Unity

```mermaid
classDiagram

    RedisMessagingTransportProvider --> RedisMessagingTransport
    RedisMessagingTransport <|-- NativeRedisMessagingTransport
    RedisMessagingTransport <|-- WebGLRedisMessagingTransport
    IExtrealMessagingTransport <|.. RedisMessagingTransport
    DisposableBase <|-- RedisMessagingTransport

    class RedisMessagingTransportProvider {
        +Provide(redisMessagingConfig)$ TextChatClient
    }
    
    class RedisMessagingTransport {
        +RedisMessagingTransport(messagingConfig)
    }
    
    class NativeRedisMessagingTransport {
        +NativeRedisMessagingTransport(messagingConfig) 
    }
    
    class WebGLRedisMessagingTransport {
        +WebGLRedisMessagingTransport(messagingConfig)
    }

    class IExtrealMessagingTransport {
        <<extreal>>
    }

    class DisposableBase {
        <<extreal>>
    }
```

### JavaScript

```mermaid
classDiagram

    WebGLRedisMessagingTransport ..> WebGLHelper
    WebGLHelper ..> RedisMessagingTransport
    RedisMessagingTransportAdapter ..> RedisMessagingTransport
    
    class WebGLHelper {
        <<C#>>
    }

    class WebGLRedisMessagingTransport {
        <<C#>>
    }

    class RedisMessagingTransportAdapter {
        <<TypeScript>>
    }
    
    class RedisMessagingTransport {
        <<TypeScript>>
    }
```

## Installation

### Package

#### Unity

```text
https://github.com/extreal-dev/Extreal.Integration.Messaging.Redis.git
```

#### npm

```text
@extreal-dev/extreal.integration.messaging.redis
```

### Dependencies

このモジュールは次のパッケージを使います。

#### Unity

- [Extreal.Core.Logging](../core/logging.md)
- [Extreal.Core.Common](../core/common.md)
- [Extreal.Integration.Web.Common](../integration/web.common.md)
- [Extreal.Integration.Messaging.Common](../integration/messaging.common.md)
- [UniTask](https://github.com/Cysharp/UniTask)
- [UniRx](https://github.com/neuecc/UniRx)

#### npm

- [@extreal-dev/extreal.integration.web.common](https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common)

モジュールバージョンと各パッケージバージョンの対応は[Release](../category/release)を参照ください。

### Settings

## Usage
