---
sidebar_position: 2
---

# Core

ここでは[Core](/category/core)で提供している機能をアプリケーションで活用する方法について学習します。

- 学習形式
  - ハンズオン
- 学習時間
  - 60分
- Unityバージョン
  - 2021.3.11f1

TODO:作るアプリの説明を入れる。

TODO:作るステップを入れる。

## Create project

まずはプロジェクトを作りましょう。
Unity Hubから新しいプロジェクトを作成します。

- エディターバージョン: `2021.3.11f1`
- テンプレート: `3D`
- プロジェクト名: `ExtrealCoreLearning`

![プロジェクト作成](/img/learning-core-create-project.png)

Unityエディタが起動したらSampleSceneを実行してみましょう。
シーンに何も配置していないので何も起こりません。
Consoleに何も出ていなければ成功です。

## Create entry point

アプリケーション用のディレクトリとエントリーポイントとなるAppシーンを作ります。

- 初期設定してある`Assets/Scenes`ディレクトリを削除します。
- `Assets/ExtrealCoreLearning/App`となるディレクトリを作ります。
- Appディレクトリに`App`シーンを作成します。

![Appシーン](/img/learning-core-app-scene.png)

## Add Logging

Extrealの[Logging](/core/logging)をアプリケーションに追加します。

### Package Manager

Package ManagerのGit URL指定から追加します。
Git URLは[LoggingのPackage](/core/logging#package)から取得します。

Package Managerに`Extreal.Core.Logging`が追加されれば成功です。
バージョンは実施タイミングにより異なります。

![Logging追加](/img/learning-core-logging-package.png)

### Assembly Definition

アプリケーションのAssembly DefinitionにLoggingを設定し、スクリプトからLoggingを参照できるようにします。

ExtrealCoreLearningディレクトリに`ExtrealCoreLearning`という名前のAssembly Definitionを作成します。
Assembly Definition Referencesに`Extreal.Core.Logging`を追加します。
Assembly Definition ReferencesのUse GUIDsのチェックは外してください。

![Loggingアセンブリ設定](/img/learning-core-logging-assembly.png)

### Settings

LoggingのデフォルトのログレベルはInfoです。開発用にDebugレベルのログを出力したいのでLoggingの設定を追加します。

- Appディレクトリに`AppInitializer`スクリプトを作ります。
- [LoggingのSettings](/core/logging#settings)を参照してAppInitializerスクリプトを作成します。

作成したAppInitializerスクリプトではLoggingの動作確認ができないので、Loggingの初期化直後にログ出力するようにAppInitializerスクリプトに処理を追加します。
次のコードをAppInitializerスクリプトに追加してください。

```csharp
ELogger logger = LoggingManager.GetLogger(nameof(AppInitializer));
if (logger.IsDebug())
{
    logger.LogDebug("Hello, world!");
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
Scope(s)に指定した`com.cysharp`がUniTaskのための設定です。

- Name: `OpenUPM`
- URL: `https://package.openupm.com`
- Scope(s): `com.cysharp`

![Unitask追加](/img/learning-core-stagenavigation-unitask.png)

UniTaskを追加できたのでLoggingの時と同じ手順でPackage ManagerとAssembly Definitionを操作してStage Navigationをスクリプトから使えるようにします。
Stage NavigationのGit URLは[Stage NavigationのPackage](/core/stage-navigation#package)から取得します。
Assembly DefinitionにUniTaskも設定します。

![Stage Navigation追加](/img/learning-core-stagenavigation-add.png)

### Title screen

ステージ遷移を試すためタイトル画面を追加し、アプリ起動後すぐにタイトル画面に遷移させてみましょう。

![タイトル画面](/img/learning-core-stagenavigation-titlescreen.png)

Appディレクトリと同じ階層に`TitleScreen`ディレクトリを作成し、その中に`TitleScreen`シーンを作成します。
TitleScreenシーンのカメラなど初期設定されているGameObjectを削除しシーンを一旦空にします。

シーンに`Canvas`を追加します。インスペクタで次の設定をします。

- Canvas Scaler
  - UI Scale Mode: `Scale With Screen Size`

![タイトル画面Canvas](/img/learning-core-stagenavigation-canvas.png)

Canvasの下に`Image`を追加します。インスペクタで次の設定をします。

- Rect Transform
  - Anchor Presets
    - stretch x stretch
  - LeftからButtomまで全て0（Zero）
- Image
  - Color
    - Hexadecimal: `FF6F61`

![タイトル画面Image](/img/learning-core-stagenavigation-image.png)

Imageの下に`Text - TextMeshPro`を追加します。
`Extreal Core Learning`というタイトルを作ります。
サイズやポジションは自由に決めてください。

TMP Importerが表示されたらImport TMP Essentialsを選択します。
TextMeshProの初回利用時のみTMP Importerが表示されます。
インポートされたらTMP Importerを閉じます。

Imageの下に`Button - TextMeshPro`を追加します。
`Go`というボタンを作ります。
こちらもサイズやポジションは自由に決めてください。

### Settings

タイトル画面を追加できたので[Stage NavigationのSettings](/core/stage-navigation#settings)を参照してステージ設定を作成します。

ステージ設定で作成する3つのタイプはAppディレクトリに配置します。
Enumが変更された際に値が変わらないようにステージ名とシーン名のEnumは定数値を指定してください。
定数値の値は識別以外に意味はないので各Enumで重複しなければどんな数でも大丈夫です。

```csharp
public enum StageName
{
    TitleScreen = 0,
}
public enum SceneName
{
    TitleScreen = 100,
}
```

Assetsメニューから`StageConfig`オブジェクトをAppディレクトリに作成します。StageConfigオブジェクトにタイトル画面のステージを設定します。

![Stage設定](/img/learning-core-stagenavigation-config.png)

これでステージ遷移の準備が整ったのでアプリ起動後すぐにタイトル画面に遷移させるスクリプトをAppシーンに作成します。
次のスクリプトを作成し、作成したスクリプトをアタッチしたGameObjectをAppシーンに配置します。
インスペクタでStageConfigオブジェクトを指定してください。

```csharp
public class StageTest : MonoBehaviour
{
    [SerializeField] private StageConfig stageConfig;

    private void Start()
    {
        IStageNavigator<StageName> stageNavigator = new StageNavigator<StageName, SceneName>(stageConfig);
        stageNavigator.ReplaceAsync(StageName.TitleScreen);
    }
}
```

この状態でAppシーンを実行するとエラーになります。

![Stage遷移エラー](/img/learning-core-stagenavigation-error.png)

Build SettingsのScenes In Buildに`TitleScreen`シーンを追加します。

Appシーンを実行します。
タイトル画面が表示され、Consoleに`[Debug:StageNavigator] Replace: TitleScreen`と出ていれば成功です。

![Stage遷移成功](/img/learning-core-stagenavigation-success.png)

## Apply MV(R)P pattern

Extrealが提供するCoreの機能は以上となりますが、[VContainer](https://vcontainer.hadashikick.jp/)と[UniRx](https://github.com/neuecc/UniRx)を追加してExtrealが想定するアプリケーションアーキテクチャに近づけていきたいと思います。

### Avatar selection screen

タイトル画面の遷移先となるアバター選択画面を追加します。
アバター選択画面は遷移先として使用するだけなのでタイトル画面をコピーして作ります。

Appディレクトリと同じ階層に`AvatarSelectionScreen`ディレクトリを作成し、その中に`AvatarSelectionScreen`シーンを作成します。
AvatarSelectionScreenシーンのカメラなど初期設定されているGameObjectを削除しシーンを一旦空にします。

TitleScreenシーンのCanvasとEventSystemをコピーしてAvatarSelectionScreenシーンにペーストします。タイトルを`Avatar Selection`に変更します。

![アバター選択画面](/img/learning-core-mvp-avatarselection.png)

StageNameとSceneNameに`AvatarSelectionScreen`を追加し、StageConfigオブジェクトにもインスペクタでステージ設定を追加します。

![アバター選択のステージ設定](/img/learning-core-mvp-stageconfig.png)

UIとステージ設定の準備が整いました。

### Package Manager & Assembly Definition

VContainerとUniRxをアプリケーションに追加します。VContainerとUniRxはUniTaskと同様にOpenUPMから取得します。

`Edit` -> `Project Settings...` -> `Package Manager`からOpenUPMのScope(s)を追加します。

- VContainer: `jp.hadashikick`
- UniRx: `com.neuecc`

![VContainerとUniRx追加](/img/learning-core-mvp-thirdparty.png)

Package ManagerでPackages: `My Registry`を選択しVContainerとUniRxをインストールします。
アプリケーションのAssembly DefinitionにVContainerとUniRxを設定します。

![VContainerとUniRx設定](/img/learning-core-mvp-pmandad.png)

これでVContainerとUniRxが使える状態になりました。

### AppPresenter

VContainerを使って先ほど確認用に作ったStageTestを作り変えます。

まずAppディレクトリにエントリーポイントとなる`AppPresenter`スクリプトを作成します。
Appシーンが開始するとタイトル画面に遷移させます。

```csharp
public class AppPresenter : IAsyncStartable
{
    [Inject] private IStageNavigator<StageName> stageNavigator;
    
    public async UniTask StartAsync(CancellationToken cancellation)
    {
        await stageNavigator.ReplaceAsync(StageName.TitleScreen);
    }
}
```

### AppScope

次にAppディレクトリにVContainerのLifetimeScopeとして`AppScope`スクリプトを作成します。
StageConfig、StageNavigator、エントリーポイントとしてAppPresenterを登録しています。
この登録によりAppPresenterの処理が実行できるようになります。

```csharp
public class AppScope : LifetimeScope
{
    [SerializeField] private StageConfig stageConfig;

    protected override void Configure(IContainerBuilder builder)
    {
        builder.RegisterComponent(stageConfig).AsImplementedInterfaces();
        builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton).AsImplementedInterfaces();

        builder.RegisterEntryPoint<AppPresenter>();
    }
}
```

Appシーンに`Scope`という名前でAppScopeスクリプトをアタッチしたGameObjectを配置します。
StageConfigオブジェクトをインスペクタで設定します。
不要になったのでAppシーンからStageTestオブジェクトとStageTestスクリプトを削除します。

![AppScope](/img/learning-core-mvp-appscope.png)

Appシーンを実行します。先ほどと同様にタイトル画面が表示されConsoleにステージ遷移のログが出力されていれば成功です。

### TitleScreenView

UniRxを使ってタイトル画面のGoボタンを実装します。


