---
sidebar_position: 3
---

# Multiplay using Netcode for GameObjects

ここでは[NGOラッパー](../integration/multiplay.ngo.md)について学習します。

- 学習時間の目安
  - 60分
- Unityバージョン
  - 2021.3.16f1

NGOラッパーの学習では学習用に用意したプロジェクトを使います。
この学習用のプロジェクトはCoreの学習で構築したアプリケーションアーキテクチャをベースに作成しています。
Coreの学習を実施していない方はこの学習より先に[Coreの学習](./core.md)を実施することを推奨します。

NGOラッパーがセットアップされた学習用のプロジェクトを使って、バーチャル空間でマルチプレイできるようにサーバーとアプリケーションの実装を追加していきます。

## Prepare project

:::info step
まずはプロジェクトを準備しましょう。
:::

学習用のプロジェクトをクローンします。

```text
https://github.com/extreal-dev/Extreal.Learning.Multiplay.NGO.git
```

Unityエディタでクローンしたプロジェクトを開きます。

:::info step
プロジェクトの内容を確認しましょう。
:::

`Assets`ディレクトリに次の3つのディレクトリを作成しています。
各ディレクトリにディレクトリ名と同じ名前でAssembly Definitionを作成して依存パッケージを制御しています。

- ExtrealCoreLearning
  - アプリケーションのアセットを格納するディレクトリです。
  - タイトル画面とバーチャル空間を作成済みです。
    - バーチャル空間には[Starter Assets - Third Person Character Controller](http://u3d.as/2z1r)が提供するアセットを使用しています。
    - バーチャル空間でマルチプレイを実現します。
  - このハンズオンでマルチプレイのクライアント実装を追加します。
- ExtrealCoreLearning.MultiplayServer
  - マルチプレイサーバーのアセットを格納するディレクトリです。
  - このハンズオンでマルチプレイのサーバー実装を追加します。
- ExtrealCoreLearning.MultiplayCommon
  - アプリケーションとマルチプレイサーバーに共通するアセットを格納するディレクトリです。
  - NGOに対応したプレイヤーのプレハブを作成済みです。
    - プレイヤーのプレハブには[Starter Assets - Third Person Character Controller](http://u3d.as/2z1r)が提供するアセットを使用しています。
  - このハンズオンでNetworkManagerを追加します。

:::info step
プロジェクトに問題がないことを確認するためアプリケーションを実行してみましょう。
:::

ExtrealCoreLearning/Appディレクトリにある`App`シーンを実行します。
タイトル画面のGoボタンを押してバーチャル空間に移動できれば成功です。

![Project success](../img/learning-ngo-project-success.png)

バーチャル空間でマルチプレイできるように実装を追加していきます。

## Add multiplayer server

まずマルチプレイサーバーを追加します。

:::info step
マルチプレイサーバーのロジックを提供するModelスクリプトを作成します。
:::

ExtrealCoreLearning.MultiplayServerディレクトリに作成します。
NgoServerを使ってサーバーを開始します。
後ほどクライアントからのメッセージを受けてプレイヤーをスポーンする処理を追加します。

```csharp
using Cysharp.Threading.Tasks;
using Extreal.Integration.Multiplay.NGO;

namespace ExtrealCoreLearning.MultiplayServer
{
    public class MultiplayServer
    {
        private readonly NgoServer ngoServer;

        public MultiplayServer(NgoServer ngoServer)
        {
            this.ngoServer = ngoServer;
        }

        public UniTask StartAsync()
        {
            return ngoServer.StartServerAsync();
        }
    }
}
```

:::info step
マルチプレイサーバーのエントリーポイントとなるPresenterスクリプトを作成します。
:::

ExtrealCoreLearning.MultiplayServerディレクトリに作成します。
MultiplayServerシーンが開始するとサーバーを開始します。

```csharp
using Cysharp.Threading.Tasks;
using VContainer.Unity;

namespace ExtrealCoreLearning.MultiplayServer
{
    public class MultiplayServerPresenter : IStartable
    {
        private readonly MultiplayServer multiplayServer;

        public MultiplayServerPresenter(MultiplayServer multiplayServer)
        {
            this.multiplayServer = multiplayServer;
        }

        public void Start()
        {
            multiplayServer.StartAsync().Forget();
        }
    }
}
```

:::info step
マルチプレイサーバーに必要なオブジェクトを組み立てるScopeスクリプトを作成します。
:::

ExtrealCoreLearning.MultiplayServerディレクトリに作成します。
デバッグログを出力したいのでLoggingの初期化を入れています。
NetworkManagerはGameObjectとして配置するのでインスペクタから受け取ります。

```csharp
using Extreal.Core.Logging;
using Extreal.Integration.Multiplay.NGO;
using Unity.Netcode;
using UnityEngine;
using VContainer;
using VContainer.Unity;
using LogLevel = Extreal.Core.Logging.LogLevel;

namespace ExtrealCoreLearning.MultiplayServer
{
    public class MultiplayServerScope : LifetimeScope
    {
        [SerializeField] private NetworkManager networkManager;

        private static void InitializeApp()
        {
            const LogLevel logLevel = LogLevel.Debug;
            LoggingManager.Initialize(logLevel: logLevel);
        }

        protected override void Awake()
        {
            InitializeApp();
            base.Awake();
        }

        protected override void Configure(IContainerBuilder builder)
        {
            builder.RegisterComponent(networkManager);
            builder.Register<NgoServer>(Lifetime.Singleton);
            builder.Register<MultiplayServer>(Lifetime.Singleton);

            builder.RegisterEntryPoint<MultiplayServerPresenter>();
        }
    }
}
```

:::info step
NetworkManagerをアタッチしたGameObjectをMultiplayServerシーンに作成します。
:::

![Add NetworkManager](../img/learning-ngo-add-networkmanager.png)

- MultiplayServerシーンに`NetworkManager`という名前でGameObjectを作成します。
- インスペクタのAdd Componentから`Network Manager`を追加します。
- インスペクタのSelect transport...から`UnityTransport`を選びます。
- **StageNavigationでシーンを管理しているため、インスペクタの`Scene Management＞Enable Scene Management`のチェックを外します。**

:::info step
ScopeスクリプトをMultiplayServerシーンに設定します。
:::

![Add scope](../img/learning-ngo-add-scope.png)

- MultiplayServerシーンに`Scope`という名前でMultiplayServerScopeスクリプトをアタッチしたGameObjectを作成します。
- NetworkManagerオブジェクトをインスペクタで設定します。

:::info step
マルチプレイサーバーを実行します。
:::

MultiplayServerシーンを実行します。
Consoleに`[Debug:NgoServer] The server has started`と出力されれば成功です。

![Server success](../img/learning-ngo-server-success.png)

## Commonize NetworkManager

NetworkManagerはサーバーとクライアントで同じ設定になっている必要があるため、プレハブにしてサーバーとクライアントから同じオブジェクトを利用できるようにします。

:::info step
NetworkManagerオブジェクトをプレハブに変更します。
:::

MultiplayServerシーンのNetworkManagerオブジェクトを`ExtrealCoreLearning.MultiplayCommon`ディレクトリにドラッグ＆ドロップします。

![NetworkManager prefab](../img/learning-ngo-networkmanager-prefab.png)

## Add connection to multiplay room

マルチプレイルームへの参加とマルチプレイルームからの退室をアプリケーションに追加します。

:::info step
まずアプリケーションで使うNgoClientの初期化を行います。
:::

NgoClientの初期化にはNetworkManagerが必要です。
NgoClientとNetworkManagerはアプリケーションで1つ存在すればよいのでAppシーンに含めておき、空間が増えても再利用できるようにしておきます。

`AppScope`スクリプトを変更してNgoClientを初期化します。

```csharp
using Extreal.Core.Logging;
using Extreal.Core.StageNavigation;
// highlight-start
using Extreal.Integration.Multiplay.NGO;
using Unity.Netcode;
// highlight-end
using UnityEngine;
using VContainer;
using VContainer.Unity;
// highlight-start
using LogLevel = Extreal.Core.Logging.LogLevel;
// highlight-end

namespace ExtrealCoreLearning.App
{
    public class AppScope : LifetimeScope
    {
        [SerializeField] private StageConfig stageConfig;

        // highlight-start
        [SerializeField] private NetworkManager networkManager;
        // highlight-end

        private static void InitializeApp()
        {
            // Omitted due to no changes
        }

        protected override void Awake()
        {
            // Omitted due to no changes
        }

        protected override void Configure(IContainerBuilder builder)
        {
            builder.RegisterComponent(stageConfig).AsImplementedInterfaces();
            builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton);

            // highlight-start
            builder.RegisterComponent(networkManager);
            builder.Register<NgoClient>(Lifetime.Singleton);
            // highlight-end

            builder.RegisterEntryPoint<AppPresenter>();
        }
    }
}
```

`ExtrealCoreLearning.MultiplayCommon`ディレクトリにあるNetworkManagerのプレハブをAppシーンにドラッグ＆ドロップして、`AppScope`オブジェクトのインスペクタで設定します。

![NgoClient init](../img/learning-ngo-ngoclient-init.png)

:::info step
プレイヤープレハブをNetworkManagerに設定します。
:::

NGOで同期するプレハブはNetworkManagerに設定する必要があります。
`ExtrealCoreLearning.MultiplayCommon`ディレクトリにあるプレイヤープレハブの`NetworkPlayer`をNetworkManagerの`NetworkPrefabs`に設定します。

![Network prefab](../img/learning-ngo-networkmanager-playerprefab.png)

:::info step
NgoClientの初期化で問題が起きていないか確認します。
:::

NgoClientを使った処理はまだ入れていないのでAppシーンを実行してこれまでと同じように起動されれば成功です。

起動時に`Add Scene to Scenes in Build`と表示された場合は`No - Continue`を選択して、NetworkManagerの作成手順が漏れているので次の手順を実施してください。

- **StageNavigationでシーンを管理しているため、インスペクタの`Scene Management＞Enable Scene Management`のチェックを外します。**

:::info step
MultiplayControlシーンを追加します。
:::

- `ExtrealCoreLearning/MultiplayControl`ディレクトリを作成します。
- 作成したディレクトリに`MultiplayControl`シーンを作成します。
- カメラなど初期設定されているGameObjectを削除しMultiplayControlシーンを一旦空にします。

:::info step
マルチプレイのロジックを提供するModelスクリプトを作成します。
:::

ExtrealCoreLearning/MultiplayControlディレクトリに作成します。
マルチプレイルームへの参加とマルチプレイルームからの退室を提供しています。

```csharp
using Cysharp.Threading.Tasks;
using Extreal.Core.Logging;
using Extreal.Integration.Multiplay.NGO;

namespace ExtrealCoreLearning.MultiplayControl
{
    public class MultiplayRoom
    {
        private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(MultiplayRoom));
        private readonly NgoClient ngoClient;

        public MultiplayRoom(NgoClient ngoClient)
        {
            this.ngoClient = ngoClient;
        }

        public async UniTask JoinAsync()
        {
            await ngoClient.ConnectAsync(new NgoConfig());
            if (Logger.IsDebug())
            {
                Logger.LogDebug("Joined");
            }
        }

        public async UniTask LeaveAsync()
        {
            await ngoClient.DisconnectAsync();
            if (Logger.IsDebug())
            {
                Logger.LogDebug("Left");
            }
        }
    }
}
```

:::info step
マルチプレイルームへの参加と退室を制御するPresenterスクリプトを作成します。
:::

ExtrealCoreLearning/MultiplayControlディレクトリに作成します。
StageNavigatorのイベント通知を使ってマルチプレイルームへの参加とマルチプレイルームからの退室を制御しています。
OnStageTransitionedがステージに入った後、OnStageTransitioningがステージから出る前のタイミングになります。

```csharp
using System;
using Cysharp.Threading.Tasks;
using Extreal.Core.StageNavigation;
using ExtrealCoreLearning.App;
using UniRx;
using VContainer.Unity;

namespace ExtrealCoreLearning.MultiplayControl
{
    public class MultiplayControlPresenter : IInitializable, IDisposable
    {
        private readonly StageNavigator<StageName, SceneName> stageNavigator;
        private readonly MultiplayRoom multiplayRoom;
        private readonly CompositeDisposable disposables = new CompositeDisposable();

        public MultiplayControlPresenter(StageNavigator<StageName, SceneName> stageNavigator,
            MultiplayRoom multiplayRoom)
        {
            this.stageNavigator = stageNavigator;
            this.multiplayRoom = multiplayRoom;
        }

        public void Initialize()
        {
            stageNavigator.OnStageTransitioned
                .Subscribe(_ => multiplayRoom.JoinAsync().Forget())
                .AddTo(disposables);

            stageNavigator.OnStageTransitioning
                .Subscribe(_ => multiplayRoom.LeaveAsync().Forget())
                .AddTo(disposables);
        }

        public void Dispose()
        {
            disposables.Dispose();
        }
    }
}
```

:::info step
ModelとPresenterのオブジェクトを組み立てるScopeスクリプトを作成します。
:::

ExtrealCoreLearning/MultiplayControlディレクトリに作成します。

```csharp
using VContainer;
using VContainer.Unity;

namespace ExtrealCoreLearning.MultiplayControl
{
    public class MultiplayControlScope : LifetimeScope
    {
        protected override void Configure(IContainerBuilder builder)
        {
            builder.Register<MultiplayRoom>(Lifetime.Singleton);

            builder.RegisterEntryPoint<MultiplayControlPresenter>();
        }
    }
}
```

:::info step
ScopeスクリプトをMultiplayControlシーンに設定します。
:::

![MultiplayControl scope](../img/learning-ngo-multiplaycontrol-scope.png)

- MultiplayControlシーンに`Scope`という名前でMultiplayControlScopeをアタッチしたGameObjectを作成します。
- インスペクタでParentに`AppScope`を指定します。

:::info step
MultiplayControlシーンが完成したのでステージ設定とBuildSettingsに追加します。
:::

- SceneNameに`MultiplayControl`を追加します。
- StageConfigのインスペクタで`VirtualStage`に`MultiplayControl`を追加します。
- BuildSettingsにMultiplayControlシーンを追加します。

:::info step
マルチプレイルームに接続できるか試してみましょう。
:::

マルチプレイの動作確認には[ParrelSync](https://github.com/VeriorPies/ParrelSync)を使います。
プロジェクトにParrelSyncをインストールしてあるので、ParrelSyncを使って複数のUnityエディタを開いてプレイしてみましょう。

![ParrelSync](../img/learning-ngo-parrelsync.png)

実行するシーンは次の通りです。

- マルチプレイサーバー
  ```text
  /Assets/ExtrealCoreLearning.MultiplayServer/MultiplayServer
  ```
- アプリケーション
  ```text
  /Assets/ExtrealCoreLearning/App/App
  ```

バーチャル空間に移動してもこれまでと変わりありませんが、次のようなログが出ていれば成功です。

- マルチプレイサーバー
  ```text
  [Debug:NgoServer] The client with client id 1 has connected
  ```
- アプリケーション
  ```text
  [Debug:NgoClient] The client has connected to the server
  ```

## Add player spawn

マルチプレイルームに接続できたのでプレイヤーをスポーンする処理を追加します。
この処理を追加するとマルチプレイできるようになります。

アプリケーションからプレイヤーのスポーンを依頼するメッセージをマルチプレイサーバーに送り、マルチプレイサーバーでプレイヤーをスポーンします。

### Application

:::info step
マルチプレイサーバーにプレイヤーのスポーンを依頼する処理を追加します。
:::

プレイヤーのスポーン依頼にはNGOが提供するメッセージを使います。
メッセージ名はアプリケーションとマルチプレイサーバーで合わせる必要があるのでメッセージ名を表すEnumを`ExtrealCoreLearning.MultiplayCommon`ディレクトリに作成します。

```csharp
namespace ExtrealCoreLearning.MultiplayCommon
{
    public enum MessageName
    {
        PlayerSpawn
    }
}
```

マルチプレイサーバーにプレイヤーのスポーンを依頼する処理をMultiplayRoomに追加します。
マルチプレイサーバーに接続されたタイミングでメッセージを送信します。

```csharp
// highlight-start
using System;
// highlight-end
using Cysharp.Threading.Tasks;
using Extreal.Core.Logging;
using Extreal.Integration.Multiplay.NGO;
// highlight-start
using ExtrealCoreLearning.MultiplayCommon;
using UniRx;
using Unity.Collections;
using Unity.Netcode;
// highlight-end

namespace ExtrealCoreLearning.MultiplayControl
{
    // highlight-start
    public class MultiplayRoom : IDisposable
    // highlight-end
    {
        private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(MultiplayRoom));
        private readonly NgoClient ngoClient;
        // highlight-start
        private readonly CompositeDisposable disposables = new CompositeDisposable();
        // highlight-end

        public MultiplayRoom(NgoClient ngoClient)
        {
            this.ngoClient = ngoClient;

            // highlight-start
            ngoClient.OnConnected
                .Subscribe(_ => SendPlayerSpawnMessage(ngoClient))
                .AddTo(disposables);
            // highlight-end
        }

        // highlight-start
        private static void SendPlayerSpawnMessage(NgoClient ngoClient)
        {
            var messageStream
                = new FastBufferWriter(FixedString64Bytes.UTF8MaxLengthInBytes, Allocator.Temp);
            ngoClient.SendMessage(MessageName.PlayerSpawn.ToString(), messageStream);
        }
        // highlight-end

        public async UniTask JoinAsync()
        {
            // Omitted due to no changes
        }

        public async UniTask LeaveAsync()
        {
            // Omitted due to no changes
        }

        // highlight-start
        public void Dispose() => disposables.Dispose();
        // highlight-end
    }
}
```

### Multiplay Server

:::info step
アプリケーションから送信されるプレイヤーをスポーンするメッセージに対応する処理をMultiplayServerに追加します。
:::

MessageHandlerを登録してアプリケーションからのメッセージに対応します。

プレイヤーのプレハブはAddressablesを使ってロードしています。
ExtrealCoreLearning/MultiplayControlディレクトリの`NetworkPlayer`を選択してインスペクタを開くと、`PlayerPrefab`という名前でAddressablesに登録されていることが確認できます。

今回はアプリケーションからメッセージの内容を何も送っていませんが、メッセージの内容でアバター名を送りユーザーごとに選択したアバターをプレイヤーとしてスポーンするといったこともできます。
サンプルアプリケーションでユーザーが選択したアバターのスポーンを実現しているので興味がある方は[Sample Application](../../category/sample-application)をご覧ください。

```csharp
// highlight-start
using System;
// highlight-end
using Cysharp.Threading.Tasks;
// highlight-start
using Extreal.Core.Logging;
// highlight-end
using Extreal.Integration.Multiplay.NGO;
// highlight-start
using ExtrealCoreLearning.MultiplayCommon;
using UniRx;
using Unity.Netcode;
using UnityEngine;
using UnityEngine.AddressableAssets;
// highlight-end

namespace ExtrealCoreLearning.MultiplayServer
{
    // highlight-start
    public class MultiplayServer : IDisposable
    // highlight-end
    {
        // highlight-start
        private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(MultiplayServer));
        private readonly CompositeDisposable disposables = new CompositeDisposable();
        // highlight-end
        private readonly NgoServer ngoServer;

        public MultiplayServer(NgoServer ngoServer)
        {
            this.ngoServer = ngoServer;

            // highlight-start
            this.ngoServer.OnServerStarted.Subscribe(_ =>
            {
                ngoServer.RegisterMessageHandler(
                    MessageName.PlayerSpawn.ToString(), PlayerSpawnMessageHandler);
            }).AddTo(disposables);

            this.ngoServer.OnServerStopping.Subscribe(_ =>
            {
                ngoServer.UnregisterMessageHandler(MessageName.PlayerSpawn.ToString());
            }).AddTo(disposables);
            // highlight-end
        }

        // highlight-start
        private async void PlayerSpawnMessageHandler(ulong clientId, FastBufferReader messageStream)
        {
            if (Logger.IsDebug())
            {
                Logger.LogDebug($"{MessageName.PlayerSpawn}: {clientId}");
            }

            ngoServer.SpawnAsPlayerObject(clientId, await LoadPlayerPrefab());
        }
        // highlight-end

        // highlight-start
        private static async UniTask<GameObject> LoadPlayerPrefab()
        {
            var result = Addressables.LoadAssetAsync<GameObject>("PlayerPrefab");
            return await result.Task;
        }
        // highlight-end

        public UniTask StartAsync()
        {
            return ngoServer.StartServerAsync();
        }

        // highlight-start
        public void Dispose()
        {
            disposables.Dispose();
        }
        // highlight-end
    }
}
```

## Play

:::info step
全ての実装が完了したのでプレイしてみましょう。
:::

実行するシーンは次の通りです。

- マルチプレイサーバー
  ```text
  /Assets/ExtrealCoreLearning.MultiplayServer/MultiplayServer
  ```
- アプリケーション
  ```text
  /Assets/ExtrealCoreLearning/App/App
  ```

操作方法は次の通りです。

- 移動
  - W：前、A：左、S：後、D：右
- アクション
  - スペース：ジャンプ
  - 左Shift：走る

ParrelSyncでUnityエディタを開いてプレイしている様子です。
マルチプレイサーバーを実行しているUnityエディタは後ろに隠れています。

![Play](../img/learning-ngo-play.png)

## Next Step

これでNGOラッパーのハンズオンは終了です。
お疲れさまでした。

このハンズオンを通じて[NGOラッパー](../integration/multiplay.ngo.md)を使ったマルチプレイサーバーとアプリケーションの作り方を体験しました。
次のステップとしてNGOラッパーがより本格的なアプリケーションでどのように使われるのか関心があると思います。
その期待に応えるため、より本格的な実装例として[Sample Application](../../category/sample-application)を提供しています。
ぜひSample Applicationをご覧ください。
