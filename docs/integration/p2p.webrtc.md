---
sidebar_position: 5
---

# P2P using WebRTC

## What for?

コストをできるだけ抑えてコミュニケーションを取る手段としてP2P(Peer to Peer)があります。

このモジュールではWebRTCを活用したP2Pの作成を容易にするベース機能を提供します。

## Specification

- ホスト/クライアントのP2Pを作成できます。
- P2Pの状態をトリガーに処理を追加できます。
- Native(C#)のP2Pにアプリケーション固有の処理を追加できます。
- WebGL(JavaScript)のP2Pにアプリケーション固有の処理を追加できます。

## Architecture

このモジュールはNative(C#)またはWebGL(JavaScript)向けのP2Pを提供します。
PeerClientProviderとPeerClientがP2P接続の実装を隠蔽し、アプリケーションはデータチャンネルやメディアストリームなど、アプリケーションに固有の処理のみ追加すればP2Pを実現できます。

### Unity

```mermaid
classDiagram

    PeerClientProvider ..> NativePeerClient
    PeerClientProvider ..> WebGLPeerClient
    PeerClient <|-- NativePeerClient
    PeerClient <|-- WebGLPeerClient
    PeerClient ..> PeerConfig

    class PeerClientProvider {
        +Provide(peerConfig)$ PeerClient
    }
    
    class PeerClient {
        <<abstract>>
        +OnStarted IObservable
        +OnConnectFailed IObservable
        +OnDisconnected IObservable
        +IsRunning bool
        +StartHostAsync(name) void
        +ListHostsAsync() List
        +StartClientAsync(hostId) void
        +Stop() void
    }
    
    class PeerConfig {
        +SignalingUrl string
        +SocketOptions SocketIOOptions
        +IceServerUrls List
    }

    class NativePeerClient {
    }
    
    class WebGLPeerClient {
    }
```

### JavaScript

```mermaid
classDiagram

    WebGLPeerClient ..> PeerClient
    PeerAdapter ..> PeerClient

    class WebGLPeerClient {
        <<C#>>
    }
    
    class PeerAdapter {
        <<TypeScript>>
        +adapt() void
    }
    
    class PeerClient {
        <<TypeScript>>
        +role PeerRole
        +hostId string
        +addPcCreateHook(hook) void
        +addPcCloseHook(hook) void
        +startHost(name, handle) void
        +listHosts(handle) void
        +startClientAsync(hostId) void
        +stop() void
    }
```

P2Pではアプリケーションとシグナリングサーバが協調してピア同士の接続を確立します。
このモジュールではピア同士の接続を確立するため、次の処理フローを想定した機能を提供しています。
あるユーザーがホストになり、他のユーザーがホストに参加すると、ホスト及びホストに既に参加しているユーザーとP2P接続します。

```mermaid
sequenceDiagram
    actor Host
    participant Signaling
    actor Client
    actor ClientsAlreadyJoined
    Host->>Signaling: create host
    Signaling-->>Host: 200 "Host have been created"
    Signaling-->>Host: 409 "Host already exists"
    Client->>Signaling: list hosts
    Signaling-->>Client: 200 hosts list or empty list
    Client->>Signaling: message "join"
    Signaling-->>Host: message "join"
    Host->>Signaling: message "offer"
    Signaling-->>Client: message "offer"
    Client->>Signaling: message "answer" 
    Signaling-->>Host: message "answer"
    Host->>Signaling: message "done"
    Signaling-->>Client: message "done"
    Host->>Signaling: message "call me"
    Signaling-->>ClientsAlreadyJoined: message "call me"
    ClientsAlreadyJoined->>Signaling: message "offer"
    Signaling-->>Client: message "offer"
    Client->>Signaling: followed by "answer" to "done" but omitted
```

## Installation

### Package

#### Unity
```text
https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC.git
```

#### npm
```text
@extreal-dev/extreal.integration.p2p.webrtc
```

### Dependencies

P2P.WebRTCは次のパッケージを使います。

#### Unity

- [Extreal.Core.Logging](../core/logging.md)
- [Extreal.Core.Common](../core/common.md)
- [Extreal.Integration.Web.Common](../integration/web.common.md)
- [Collections](https://docs.unity3d.com/Packages/com.unity.collections@1.2/manual/index.html)
- [WebRTC](https://docs.unity3d.com/Packages/com.unity.webrtc@3.0/manual/index.html)
- [UniTask](https://github.com/Cysharp/UniTask)
- [UniRx](https://github.com/neuecc/UniRx)
- [System.Text.Json](https://learn.microsoft.com/ja-jp/dotnet/api/system.text.json)
- [SocketIOClient](https://github.com/doghappy/socket.io-client-csharp)

#### npm

- [@extreal-dev/extreal.integration.web.common](https://www.npmjs.com/package/@extreal-dev/extreal.integration.web.common)
- [socket.io-client](https://www.npmjs.com/package/socket.io-client)

### Settings

#### シグナリングサーバ

シグナリングサーバは[Docker Compose](https://docs.docker.com/compose/)で提供しています。
[README](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/tree/main/SignalingServer~)を参照してシグナリングサーバを準備してください。

#### アプリケーション

PeerClientProviderを使ってPeerClientを作成します。
PeerClientの作成時にシグナリングサーバのURLを指定します。

```csharp
public class ClientControlScope : LifetimeScope
{
    protected override void Configure(IContainerBuilder builder)
    {
        var peerConfig = new PeerConfig("http://127.0.0.1:3010");
        var peerClient = PeerClientProvider.Provide(peerConfig);
        builder.RegisterComponent(peerClient);
    }
}
```

WebGLで使う場合はさらにJavaScriptの初期化が必要です。

```typescript
import { addAction } from "@extreal-dev/extreal.integration.web.common";
import { PeerAdapter } from "@extreal-dev/extreal.integration.p2p.webrtc";

const peerAdapter = new PeerAdapter();
peerAdapter.adapt();
```

:::info
TypeScriptを使った開発環境はこのモジュールの[サンプル](https://github.com/extreal-dev/Extreal.Integration.P2P.WebRTC/tree/main/Samples~/MVS/WebGLScripts)を参考にしてください。
:::

## Usage

### ホスト/クライアントのP2Pを作成する {#p2p-webrtc-host-client}

このモジュールではP2Pの接続を確立するために次の機能を提供します。

- 名前を指定してホストを作成します。
  - 作成したユーザーがホストになります。
- ホストの一覧を取得し、ホストを指定して参加できます。
  - ホストとP2P接続するとともに、ホストに参加している他のクライアントともP2P接続します。

名前を指定したホスト作成はPeerClientのStartHostAsyncで行います。

```csharp
await peerClient.StartHostAsync("host name");
```

ホストの一覧取得はPeerClientのListHostsAsyncで行います。
IdとNameを持ったHostクラスのリストが返ります。
ここで取得したHostクラスのIdを使ってホストに参加します。

```csharp
var hosts = await peerClient.ListHostsAsync();
```

ホストへの参加はPeerClientのStartClientAsyncで行います。

```csharp
await peerClient.StartClientAsync(hostId);
```

ホストのクローズやホストからの退室ではPeerClientのStopを呼び出し、P2P接続を停止します。

```csharp
peerClient.Stop();
```

### P2Pの状態をトリガーに処理を追加する

PeerClientは次のイベント通知を設けています。

- OnStarted
  - タイミング：ホストまたはクライアントが開始した直後
    - ホスト
      - ホストが作成された直後
    - クライアント
      - 次の条件を全て満たした直後
        - ホストから"done"を受信
        - IceConnectionStateがConnectedまたはCompletedになる
  - タイプ：IObservable
  - パラメータ：なし
- OnConnectFailed
  - タイミング：ホストまたはクライアントがシグナリングサーバに接続できなかった直後
  - タイプ：IObservable
  - パラメータ：接続できなかった理由
- OnDisconnected
  - タイミング：シグナリングサーバに接続中のホストまたはクライアントが切断された直後
  - タイプ：IObservable
  - パラメータ：切断された理由

### Native(C#)のP2Pにアプリケーション固有の処理を追加する

PeerClientはP2P接続の開始時と終了時に処理を追加できるフックを設けています。
PeerClientのAddPcCreateHookメソッドが開始時、AddPcCloseHookメソッドが終了時のフックです。

これらのフックを使ってデータチャンネルやメディアストリームを操作し、アプリケーション固有の機能をP2Pに追加します。

データチャンネルを作成する場合の実装例は次の通りです。

```csharp
#if !UNITY_WEBGL || UNITY_EDITOR
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Extreal.Core.Logging;
using Unity.WebRTC;

namespace Extreal.Integration.P2P.WebRTC.MVS.ClientControl
{
    public class NativeDataChannelClient : DataChannelClient
    {
        private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(NativeDataChannelClient));

        private static readonly string Label = "sample";

        private readonly Dictionary<string, RTCDataChannel> dcDict;

        public NativeDataChannelClient(NativePeerClient peerClient)
        {
            dcDict = new Dictionary<string, RTCDataChannel>();
            peerClient.AddPcCreateHook(CreatePc);
            peerClient.AddPcCloseHook(ClosePc);
        }

        private void CreatePc(string id, bool isOffer, RTCPeerConnection pc)
        {
            if (dcDict.ContainsKey(id))
            {
                return;
            }

            if (isOffer)
            {
                var dc = pc.CreateDataChannel(Label);
                HandleDc(id, dc);
            }
            else
            {
                pc.OnDataChannel += (dc) => HandleDc(id, dc);
            }
        }

        private void HandleDc(string id, RTCDataChannel dc)
        {
            if (dc.Label != Label)
            {
                return;
            }

            if (Logger.IsDebug())
            {
                Logger.LogDebug($"New DataChannel: id={id} label={dc.Label}");
            }

            dcDict.Add(id, dc);
            dc.OnMessage = message => Logger.LogDebug(Encoding.UTF8.GetString(message));
        }

        private void ClosePc(string id)
        {
            if (!dcDict.TryGetValue(id, out var dc))
            {
                return;
            }
            dc.Close();
            dcDict.Remove(id);
        }

        public override void Clear()
        {
            dcDict.Keys.ToList().ForEach(ClosePc);
            dcDict.Clear();
        }
    }
}
#endif
```

### WebGL(JavaScript)のP2Pにアプリケーション固有の処理を追加する

WebGL(JavaScript)でのP2Pの作成はC#とJavaScriptの連携が必要になるため、Native(C#)に比べると少し大掛かりなものになります。

仕組みはNative(C#)と同じでフックを使ってアプリケーション固有の処理をP2Pに追加します。

データチャンネルを作成する場合の実装例は次の通りです。
PeerClientProviderという関数からPeerClientを取得して、addPcCreateHookとaddPcCloseHookを使ってフックを追加します。
PeerClientProvider関数の取得方法は後述します。

```typescript
import { PeerClientProvider } from "@extreal-dev/extreal.integration.p2p.webrtc";

class DataChannelClient {
    private readonly label: string = "sample";
    private readonly isDebug: boolean;
    private readonly dcMap: Map<string, RTCDataChannel>;
    private readonly getPeerClient: PeerClientProvider;

    constructor(getPeerClient: PeerClientProvider) {
        this.isDebug = true;
        this.dcMap = new Map();
        this.getPeerClient = getPeerClient;
        this.getPeerClient().addPcCreateHook(this.createPc);
        this.getPeerClient().addPcCloseHook(this.closePc);
    }

    private createPc = (id: string, isOffer: boolean, pc: RTCPeerConnection) => {
        if (this.dcMap.has(id)) {
            return;
        }

        if (isOffer) {
            const dc = pc.createDataChannel(this.label);
            this.handleDc(id, dc);
        } else {
            pc.addEventListener("datachannel", (event) => this.handleDc(id, event.channel));
        }
    };

    private handleDc = (id: string, dc: RTCDataChannel) => {
        if (dc.label !== this.label) {
            return;
        }

        if (this.isDebug) {
            console.log(`New DataChannel: id=${id} label=${dc.label}`);
        }

        this.dcMap.set(id, dc);
    };

    private closePc = (id: string) => {
        const dc = this.dcMap.get(id);
        if (!dc) {
            return;
        }
        dc.close();
        this.dcMap.delete(id);
    };

    public clear = () => {
        [...this.dcMap.keys()].forEach(this.closePc);
        this.dcMap.clear();
    };
}

export { DataChannelClient };
```

PeerClientProvider関数はPeerAdapterが提供します。
PeerAdapterは内部でPeerClientを保持し、C#とJavaScriptのPeerClientの連携を定義しています。

WebGLでP2Pを行う場合はまずPeerAdapterを作成してadapt関数を呼び出します。
そしてPeerAdapterのgetPeerClient関数を使って先ほどのDataChannelClientのようにアプリケーション固有の処理を実装します。

アプリケーション固有の処理は呼び出すタイミングが重要になります。
PeerClientより先にアプリケーションで追加した処理（今回であればDataChannelClient）が初期化されないように注意してください。

[Web.Common](web.common.md)を使ってC#からの呼び出しタイミングを制御します。
今回はaddAction関数を使っています。

```typescript
import { addAction } from "@extreal-dev/extreal.integration.web.common";
import { PeerAdapter } from "@extreal-dev/extreal.integration.p2p.webrtc";
import { DataChannelClient } from "./DataChannelClient";

const peerAdapter = new PeerAdapter();
peerAdapter.adapt();

let dataChannelClient: DataChannelClient;
addAction("start", () => dataChannelClient = new DataChannelClient(peerAdapter.getPeerClient));
addAction("clear", () => dataChannelClient.clear);
```

C#で呼び出し側を作成します。
[Web.Common](web.common.md)のWebGLHelperを使います。

```csharp
using Extreal.Integration.Web.Common;

namespace Extreal.Integration.P2P.WebRTC.MVS.ClientControl
{
    public class WebGLDataChannelClient : DataChannelClient
    {
        public WebGLDataChannelClient() => WebGLHelper.CallAction("start");

        public override void Clear() => WebGLHelper.CallAction("clear");
    }
}
```
