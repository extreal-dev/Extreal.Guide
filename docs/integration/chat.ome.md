---
sidebar_position: 2
---

# Chat using OME

## What for?

コストをできるだけ抑えてバーチャル空間等で大規模なコミュニケーションを取る手段としてSFU(Selected Forwarding Unit)があります。

このモジュールはNative(C#)とWebGL(JavaScript)向けのSFUによるボイスチャットを提供します。

## Specification

- SFUによるボイスチャットができます。
- ボイスチャットのクライアントの状態をトリガーに処理を追加できます。

## Architecture

### Unity

```mermaid
classDiagram

    VoiceChatClientProvider ..> VoiceChatClient
    VoiceChatClientProvider ..> VoiceChatConfig
    VoiceChatClient <|-- NativeVoiceChatClient
    VoiceChatClient <|-- WebGLVoiceChatClient

    class VoiceChatClientProvider {
        +Provide(omeClient, voiceChatConfig)$ VoiceChatClient
    }

    class VoiceChatConfig {
    }

    class VoiceChatClient {
        +OnMuted IObservable
        +OnAudioLevelChanged IObservable
        +Clear() void
        +HasMicrophone() bool
        +ToggleMute() void
        +SetInVolume(volume) void
        +SetOutVolume(volume) void
    }
    
    class NativeVoiceChatClient {
    }
    
    class WebGLVoiceChatClient {
    }
```

### JavaScript

```mermaid
classDiagram

    WebGLVoiceChatClient ..> WebGLHelper
    WebGLHelper ..> VoiceChatClient
    VoiceChatAdapter ..> VoiceChatClient
    
    class WebGLHelper {
        <<C#>>
    }

    class WebGLVoiceChatClient {
        <<C#>>
    }

    class VoiceChatAdapter {
        <<TypeScript>>
    }
    
    class VoiceChatClient {
        <<TypeScript>>
    }
```

## Installation

### Package

#### Unity
```text
https://github.com/extreal-dev/Extreal.Integration.Chat.OME.git
```

#### npm
```text
@extreal-dev/extreal.integration.chat.ome
```

### Dependencies

このモジュールは次のパッケージを使います。

#### Unity

- [Extreal.Core.Logging](../core/logging.md)
- [Extreal.Core.Common](../core/common.md)
- [Extreal.Integration.Web.Common](../integration/web.common.md)
- [Extreal.Integration.SFU.OME](../integration/sfu.ome.md)
- [UniTask](https://github.com/Cysharp/UniTask)
- [UniRx](https://github.com/neuecc/UniRx)
- [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html)

#### npm

- [@extreal-dev/extreal.integration.web.common](https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common)
- [@extreal-dev/extreal.integration.sfu.ome](https://www.npmjs.com/package/@extreal-dev/extreal.integration.sfu.ome)

### Settings

このモジュールは[SFU.OME](./sfu.ome.md)を使ってSFUを実現しています。
そのため[SFU.OMEのSettings](./sfu.ome.md#settings)が必要になります。
SFU.OMEを設定した上で次の初期化を追加してください。

Providerを使ってClientを作成します。

```csharp
public class ClientControlScope : LifetimeScope
{
    protected override void Configure(IContainerBuilder builder)
    {
        var omeConfig = new OmeConfig("http://localhost:3040");
        var omeClient = OmeClientProvider.Provide(omeConfig);
        builder.RegisterComponent(omeClient);

        var voiceChatClient = VoiceChatClientProvider.Provide(omeClient);
        builder.RegisterComponent(voiceChatClient);

        builder.RegisterEntryPoint<ClientControlPresenter>();
    }
}
```

WebGLで使う場合はさらにJavaScriptの初期化が必要になります。
Adapterを作成してadapt関数を呼び出します。

```typescript
import { OmeAdapter } from "@extreal-dev/extreal.integration.sfu.ome";
import { VoiceChatAdapter } from "@extreal-dev/extreal.integration.chat.ome";


const omeAdapter = new OmeAdapter();
omeAdapter.adapt();

const voiceChatAdapter = new VoiceChatAdapter();
voiceChatAdapter.adapt(omeAdapter.getOmeClient);
```

## Usage

### SFUによるボイスチャットを行う

ボイスチャットは[SFU.OME](./sfu.ome.md)を使ってSFUを実現しています。
SFUの接続確立は[SFU.OMEのAPI](./sfu.ome.md#sfu-ome-establish-connection)を使ってください。

ボイスチャットの機能はVoiceChatClientが提供します。

ミュート切り替えはToggleMuteメソッドを使います。

```csharp
voiceChatClient.ToggleMute();
```

ミュート切り替え後の値（bool）はOnMutedイベントで受け取れます。

```csharp
voiceChatClient.OnMuted
    .Subscribe(muted =>
    {
        // do something
    })
    .AddTo(disposables);
```

ミュートの初期値を指定したい場合はVoiceChatConfigで指定します。

```csharp
var voiceChatConfig = new VoiceChatConfig(initialMute: false);
var voiceChatClient = VoiceChatClientProvider.Provide(omeClient, voiceChatConfig);
```

入力音量調整にはSetInVolumeメソッドを使います。
引数のvolumeには0～1のfloat値を入力してください。

```csharp
voiceChatClient.SetInVolume(volume);
```

入力音量の初期値を指定したい場合はVoiceChatConfigで指定します。

```csharp
var voiceChatConfig = new VoiceChatConfig(initialInVolume: 0.8f);
var voiceChatClient = VoiceChatClientProvider.Provide(omeClient, voiceChatConfig);
```

出力音量調整にはSetOutVolumeメソッドを使います。
引数のvolumeには0～1のfloat値を入力してください。

```csharp
voiceChatClient.SetOutVolume(volume);
```

出力音量の初期値を指定したい場合はVoiceChatConfigで指定します。

```csharp
var voiceChatConfig = new VoiceChatConfig(initialOutVolume: 0.8f);
var voiceChatClient = VoiceChatClientProvider.Provide(omeClient, voiceChatConfig);
```

### ボイスチャットのクライアントの状態をトリガーに処理を追加する

VoiceChatClientは次のイベント通知を設けています。

- OnAudioLevelChanged
  - タイミング：指定した頻度ごとに、発話音量の変化があったとき
  - タイプ：IObservable
  - パラメータ：IDと発話音量のペア

発話音量の取得頻度を指定したい場合はVoiceChatConfigで指定します。

```csharp
var voiceChatConfig = new VoiceChatConfig(InitialAudioLevelCheckIntervalSeconds: 0.5f);
var voiceChatClient = VoiceChatClientProvider.Provide(omeClient, voiceChatConfig);
```
