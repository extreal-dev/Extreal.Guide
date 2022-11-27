---
sidebar_position: 2
---

# Core

ここでは[Core](/category/core)について学習します。

- 学習時間の目安
  - 60分
- Unityバージョン
  - 2021.3.11f1

プロジェクトの作成からCoreの機能を導入していき、VContainerやUniRxも導入しExtrealが想定するアプリケーションアーキテクチャを構築します。

## Create project

まずはプロジェクトを作りましょう。
Unity Hubから新しいプロジェクトを作成します。

![プロジェクト作成](/img/learning-core-create-project.png)

- エディターバージョン: `2021.3.11f1`
- テンプレート: `3D`
- プロジェクト名: `ExtrealCoreLearning`

Unityエディタが起動したらSampleSceneを実行してみましょう。
シーンに何も配置していないので何も起こりません。
Consoleに何も出ていなければ成功です。

## Create entry point

アプリケーション用のディレクトリとエントリーポイントとなるAppシーンを作ります。

![Appシーン](/img/learning-core-app-scene.png)

- 初期設定してある`Assets/Scenes`ディレクトリを削除します。
- `Assets/ExtrealCoreLearning/App`となるディレクトリを作ります。
- Appディレクトリに`App`シーンを作成します。

## Add Logging

Extrealの[Logging](/core/logging)をアプリケーションに追加します。

### Package Manager

Package ManagerのGit URL指定から追加します。
Git URLは[LoggingのPackage](/core/logging#package)から取得します。

![Logging追加](/img/learning-core-logging-package.png)

Package Managerに`Extreal.Core.Logging`が追加されれば成功です。
バージョンは実施タイミングにより異なります。

### Assembly Definition

アプリケーションのAssembly DefinitionにLoggingを設定し、スクリプトからLoggingを参照できるようにします。

![Loggingアセンブリ設定](/img/learning-core-logging-assembly.png)

- ExtrealCoreLearningディレクトリに`ExtrealCoreLearning`という名前のAssembly Definitionを作成します。
- Assembly Definition Referencesに`Extreal.Core.Logging`を追加します。
- Assembly Definition ReferencesのUse GUIDsのチェックは外します。

### Settings

LoggingのデフォルトのログレベルはInfoです。
開発用にDebugレベルのログを出力したいのでLoggingの設定を追加します。

[LoggingのSettings](/core/logging#settings)を参考にして`AppTest`スクリプトをAppシーンに作成します。

- AppTestスクリプトをAppディレクトリに作成します。
- AppTestスクリプトをアタッチしたGameObjectをAppシーンに作成します。

```csharp
using Extreal.Core.Logging;
using UnityEngine;

namespace ExtrealCoreLearning.App
{
    public class AppTest : MonoBehaviour
    {
        private static void InitializeApp()
        {
            const LogLevel logLevel = LogLevel.Debug;
            LoggingManager.Initialize(logLevel: logLevel);
        }

        private void Awake()
        {
            InitializeApp();
        }
    }
}
```

このままではLoggingの動作確認ができないので、Loggingの初期化直後にログ出力するように処理を追加します。

```csharp
private static void InitializeApp()
{
    const LogLevel logLevel = LogLevel.Debug;
    LoggingManager.Initialize(logLevel: logLevel);

    // highlight-start
    var logger = LoggingManager.GetLogger(nameof(AppTest));
    if (logger.IsDebug())
    {
        logger.LogDebug("Hello, world!");
    }
    // highlight-end
}
```

Appシーンを実行してみましょう。
Consoleに`Hello, world!`と出力されれば成功です。

![Loggingアセンブリ設定](/img/learning-core-logging-success.png)

## Add Stage Navigation

Extrealの[Stage Navigation](/core/stage-navigation)をアプリケーションに追加します。

### Package Manager & Assembly Definition

Stage Navigationは[UniTask](https://github.com/Cysharp/UniTask)に依存しているため先にUniTaskを追加します。
UniTaskは[OpenUPM](https://openupm.com/)で提供されているためOpenUPMの設定を追加します。

`Edit` -> `Project Settings...` -> `Package Manager`からScoped RegistriesにOpenUPMを追加します。

![Unitask追加](/img/learning-core-stagenavigation-unitask.png)

- Name:
  ```
  OpenUPM
  ```
- URL:
  ```
  https://package.openupm.com
  ```
- Scope(s):
  ```
  com.cysharp
  ```

Scope(s)に指定した`com.cysharp`がUniTaskのための設定です。

UniTaskを追加できたのでLoggingの時と同じ手順でPackage ManagerとAssembly Definitionを操作してStage Navigationをスクリプトから使えるようにします。
Stage NavigationのGit URLは[Stage NavigationのPackage](/core/stage-navigation#package)から取得します。

Assembly DefinitionにUniTaskも設定します。

![Stage Navigation追加](/img/learning-core-stagenavigation-add.png)

### Title screen

ステージ遷移を試すため次のようなタイトル画面を追加し、アプリ起動後すぐにタイトル画面に遷移させてみましょう。

![タイトル画面](/img/learning-core-stagenavigation-titlescreen.png)

- Appディレクトリと同じ階層に`TitleScreen`ディレクトリを作成します。
- その中に`TitleScreen`シーンを作成します。
- TitleScreenシーンのカメラなど初期設定されているGameObjectを削除しシーンを一旦空にします。
- シーンに`Canvas`を追加します。インスペクタで次の設定をします。
  ![タイトル画面Canvas](/img/learning-core-stagenavigation-canvas.png)
  - Canvas Scaler
    - UI Scale Mode: `Scale With Screen Size`
- Canvasの下に`Image`を追加します。インスペクタで次の設定をします。
  ![タイトル画面Image](/img/learning-core-stagenavigation-image.png)
  - Rect Transform
    - Anchor Presets
      - X: `stretch`
      - Y: `stretch`
    - LeftからButtomまで全て`0（Zero）`
  - Image
    - Color
      - Hexadecimal: `FF6F61`
- Imageの下に`Text - TextMeshPro`を追加します。
  - `Extreal Core Learning`というタイトルを作ります。
  - サイズやポジションは自由に決めてください。
  - TMP Importerが表示されたら`Import TMP Essentials`を選択します。TextMeshProの初回利用時のみTMP Importerが表示されます。インポートされたらTMP Importerを閉じます。
- Imageの下に`Button - TextMeshPro`を追加します。
  - `Go`というボタンを作ります。
  - こちらもサイズやポジションは自由に決めてください。

### Settings

タイトル画面を追加できたので[Stage NavigationのSettings](/core/stage-navigation#settings)を参照してステージ設定を作成します。

ステージ設定で作成する3つのタイプはAppディレクトリに配置します。
Enumが変更された際に値が変わらないようにステージ名とシーン名のEnumは定数値を指定してください。
定数値は識別以外に意味はないので各Enumで重複しなければどんな数でも大丈夫です。

```csharp
public enum StageName
{
    TitleStage = 0,
}
public enum SceneName
{
    TitleScreen = 100,
}
```

3つのタイプが作成できたら`StageConfig`オブジェクトを作ります。

![Stage設定](/img/learning-core-stagenavigation-config.png)

- Assetsメニューから`StageConfig`オブジェクトをAppディレクトリに作成します。
- StageConfigオブジェクトにタイトル画面のステージを設定します。

これでステージ遷移の準備が整ったのでアプリ起動後すぐにタイトル画面に遷移させる処理を`AppTest`スクリプトに追加します。

- AppTestスクリプトにSerializeFieldとStartメソッドを追加します。
- インスペクタでStageConfigオブジェクトを指定します。

```csharp
using Extreal.Core.Logging;
// highlight-start
using Extreal.Core.StageNavigation;
// highlight-end
using UnityEngine;

namespace ExtrealCoreLearning.App
{
    public class AppTest : MonoBehaviour
    {
        private static void InitializeApp()
        {
            // Omitted due to no changes
        }

        private void Awake()
        {
            // Omitted due to no changes
        }
        
        // highlight-start
        [SerializeField] private StageConfig stageConfig;

        private void Start()
        {
            IStageNavigator<StageName> stageNavigator = new StageNavigator<StageName, SceneName>(stageConfig);
            stageNavigator.ReplaceAsync(StageName.TitleStage);
        }
        // highlight-end
    }
}
```

この状態でAppシーンを実行すると次のエラーになります。

![Stage遷移エラー](/img/learning-core-stagenavigation-error.png)

Build SettingsのScenes In Buildに`TitleScreen`シーンを追加します。

Appシーンを実行します。
タイトル画面が表示され、Consoleに`[Debug:StageNavigator] Replace: TitleStage`と出ていれば成功です。

![Stage遷移成功](/img/learning-core-stagenavigation-success.png)

## Apply MV(R)P pattern

Extrealが提供するCoreの機能は以上となりますが、[VContainer](https://vcontainer.hadashikick.jp/)と[UniRx](https://github.com/neuecc/UniRx)を追加して[Extrealが想定するアプリケーションアーキテクチャ](/intro#application)に近づけていきたいと思います。

### Avatar selection screen

タイトル画面の遷移先となるアバター選択画面を追加します。
アバター選択画面は遷移先として使用するだけなのでタイトル画面をコピーして作ります。

![アバター選択画面](/img/learning-core-mvp-avatarselection.png)

- Appディレクトリと同じ階層に`AvatarSelectionScreen`ディレクトリを作成します。
- その中に`AvatarSelectionScreen`シーンを作成します。
- AvatarSelectionScreenシーンのカメラなど初期設定されているGameObjectを削除しシーンを一旦空にします。
- TitleScreenシーンのCanvasとEventSystemをコピーしてAvatarSelectionScreenシーンにペーストします。
- タイトルを`Avatar Selection`に変更します。

続けてステージ設定を追加します。

![アバター選択のステージ設定](/img/learning-core-mvp-stageconfig.png)

- StageNameに`AvatarSelectionStage`、SceneNameに`AvatarSelectionScreen`を追加します。
- StageConfigオブジェクトのインスペクタで`AvatarSelectionStage`を追加します。

Build SettingsのScenes In Buildに`AvatarSelectionScreen`シーンを追加します。

UIとステージ設定の準備が整いました。

### Package Manager & Assembly Definition

VContainerとUniRxをアプリケーションに追加します。VContainerとUniRxはUniTaskと同様にOpenUPMから取得します。

`Edit` -> `Project Settings...` -> `Package Manager`からOpenUPMのScope(s)を追加します。

![VContainerとUniRx追加](/img/learning-core-mvp-thirdparty.png)

- VContainer:
  ```
  jp.hadashikick
  ```
- UniRx:
  ```
  com.neuecc
  ```

続けてPackage ManagerとAssembly DefinitionにVContainerとUniRxを追加します。

![VContainerとUniRx設定](/img/learning-core-mvp-pmandad.png)

- Package ManagerでPackages: `My Registries`を選択しVContainerとUniRxをインストールします。
- アプリケーションのAssembly DefinitionにVContainerとUniRxを設定します。

これでVContainerとUniRxが使える状態になりました。

### VContainer

VContainerを使って確認用に作成したAppTestを作り変えます。

#### AppPresenter

まずAppディレクトリにエントリーポイントとなるPresenterスクリプトを作成します。
Appシーンが開始するとタイトル画面に遷移させます。

```csharp
using System.Threading;
using Cysharp.Threading.Tasks;
using Extreal.Core.StageNavigation;
using VContainer.Unity;

namespace ExtrealCoreLearning.App
{
    public class AppPresenter : IAsyncStartable
    {
        private IStageNavigator<StageName> stageNavigator;

        public AppPresenter(IStageNavigator<StageName> stageNavigator)
        {
            this.stageNavigator = stageNavigator;
        }

        public async UniTask StartAsync(CancellationToken cancellation)
        {
            await stageNavigator.ReplaceAsync(StageName.TitleStage);
        }
    }
}
```

#### AppScope

次にVContainerのLifetimeScopeとしてScopeスクリプトをAppディレクトリに作成します。
ScopeスクリプトのAwakeをオーバーライドしてVContainerの処理よりも先にLoggingの設定を行います。

```csharp
using Extreal.Core.Logging;
using Extreal.Core.StageNavigation;
using UnityEngine;
using VContainer;
using VContainer.Unity;

namespace ExtrealCoreLearning.App
{
    public class AppScope : LifetimeScope
    {
        [SerializeField] private StageConfig stageConfig;

        private static void InitializeApp()
        {
            const LogLevel logLevel = LogLevel.Debug;
            LoggingManager.Initialize(logLevel: logLevel);

            var logger = LoggingManager.GetLogger(nameof(AppScope));
            if (logger.IsDebug())
            {
                logger.LogDebug("Hello, world!");
            }
        }

        protected override void Awake()
        {
            InitializeApp();
            base.Awake();
        }

        protected override void Configure(IContainerBuilder builder)
        {
            builder.RegisterComponent(stageConfig).AsImplementedInterfaces();
            builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton).AsImplementedInterfaces();

            builder.RegisterEntryPoint<AppPresenter>();
        }
    }
}
```

StageConfigとStageNavigator、エントリーポイントとしてAppPresenterを登録しています。
この登録により、StageConfigがStageNavigatorに設定され、StageNavigatorがAppPresenterに設定されます。
このようにVContainerが提供するDIコンテナを使ってオブジェクトの構造を作り上げ、各オブジェクトが処理を実行できるようにします。

ScopeスクリプトをAppシーンに設定します。

![AppScope](/img/learning-core-mvp-appscope.png)

- Appシーンに`Scope`という名前でAppScopeスクリプトをアタッチしたGameObjectを作成します。
- StageConfigオブジェクトをインスペクタで設定します。
- 不要になったのでAppシーンからStageTestオブジェクトとStageTestスクリプトを削除します。

Appシーンを実行します。先ほどと同様にタイトル画面とConsoleのログ出力が出ていれば成功です。

### UniRx

UniRxを使ってタイトル画面のGoボタンを実装します。

#### TitleScreenView

タイトル画面に対応するViewスクリプトをTitleScreenディレクトリに作成します。

```csharp
using System;
using UniRx;
using UnityEngine;
using UnityEngine.UI;

namespace ExtrealCoreLearning.TitleScreen
{
    public class TitleScreenView : MonoBehaviour
    {
        [SerializeField] private Button goButton;

        public IObservable<Unit> OnGoButtonClicked
            => goButton.OnClickAsObservable().TakeUntilDestroy(this);
    }
}
```

UniRxを使ってGoボタンが押された場合にイベントを通知する`OnGoButtonClicked`を定義しています。

#### TitleScreenPresenter

次にGoボタンが押された場合にアバター選択画面に遷移させるPresenterスクリプトをTitleScreenディレクトリに作成します。

```csharp
using Cysharp.Threading.Tasks;
using Extreal.Core.StageNavigation;
using ExtrealCoreLearning.App;
using UniRx;
using VContainer.Unity;

namespace ExtrealCoreLearning.TitleScreen
{
    public class TitleScreenPresenter : IStartable
    {
        private IStageNavigator<StageName> stageNavigator;

        private TitleScreenView titleScreenView;

        public TitleScreenPresenter(IStageNavigator<StageName> stageNavigator, TitleScreenView titleScreenView)
        {
            this.stageNavigator = stageNavigator;
            this.titleScreenView = titleScreenView;
        }

        public void Start() =>
            titleScreenView.OnGoButtonClicked.Subscribe(_ =>
            {
                stageNavigator.ReplaceAsync(StageName.AvatarSelectionStage).Forget();
            });
    }
}
```

Goボタンのイベント通知とアバター選択画面への遷移をマッピングしています。

#### TitleScreenScope

最後にViewやPresenterを紐づけるScopeスクリプトをTitleScreenディレクトリに作成します。

```csharp
using UnityEngine;
using VContainer;
using VContainer.Unity;

namespace ExtrealCoreLearning.TitleScreen
{
    public class TitleScreenScope : LifetimeScope
    {
        [SerializeField] private TitleScreenView titleScreenView;

        protected override void Configure(IContainerBuilder builder)
        {
            builder.RegisterComponent(titleScreenView);

            builder.RegisterEntryPoint<TitleScreenPresenter>();
        }
    }
}
```

ViewスクリプトとScopeスクリプトをTitleScreenシーンに設定します。

![AppScope](/img/learning-core-mvp-titlescreenobject.png)

- TitleScreenシーンに`View`という名前でTitleScreenViewスクリプトをアタッチしたGameObjectを作成します。
- Buttonオブジェクトをインスペクタで設定します。
- TitleScreenシーンに`Scope`という名前でTitleScreenScopeスクリプトをアタッチしたGameObjectを作成します。
- Viewオブジェクトをインスペクタで設定します。

この状態でAppシーンを実行すると次のエラーになります。

![AppScope](/img/learning-core-mvp-error.png)

TitleScreenPresenterにStageNavigatorを設定していますがスコープに登録されていないためエラーとなっています。
StageNavigatorはAppScope、TitleScreenPresenterはTitleScreenScopeと異なるスコープのためこのエラーが発生しています。

VContainerではスコープの親を指定してオブジェクトの検索範囲を親まで広げることができます。
TitleScreenScopeのインスペクタでParentにAppScopeを指定するとこのエラーが解消します。

![AppScope](/img/learning-core-mvp-parent.png)

このようにスコープは階層を意識して作成します。
共通利用されるスコープをより親となるように全体のスコープを設計します。

Appシーンを実行します。タイトル画面からアバター選択画面に遷移できれば成功です。

## Next Step

これでCoreのハンズオンは終了です。
お疲れさまでした。

このハンズオンを通じて[Extrealが想定するアプリケーションアーキテクチャ](/intro#application)に必要な機能を構築済みです。
次のステップとしてハンズオンで構築したアーキテクチャがより本格的なアプリケーションでどのように使われるのか関心があると思います。
その期待に応えるため、より本格的な実装例として[Sample Application](/category/sample-application)を提供しています。
ぜひSample Applicationをご覧ください。
