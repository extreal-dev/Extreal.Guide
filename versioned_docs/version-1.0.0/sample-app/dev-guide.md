---
sidebar_position: 6
---

# Development Guide

## Project

### Directory structure

#### Overview

- Assets
  - AddressableAssetsData
    - Addressablesを使うための設定
  - Analyzer
    - [Code Cracker](https://github.com/code-cracker/code-cracker)を使うための設定
  - Google Fonts
    - [Noto Sans Japanese](https://fonts.google.com/noto/specimen/Noto+Sans+JP)から作成したUnityのフォントアセット
  - Holiday
    - Holidayのアプリケーションで作成するアセット
  - Holiday.MultiplayCommon
    - Holidayのアプリケーションとマルチプレイサーバーに共通するアセット
  - Holiday.MultiplayServer
    - Holidayのマルチプレイサーバーで作成するアセット
  - Holiday.PerformanceTest
    - Holidayのパフォーマンステスト向けの資材
  - Mixamo
    - [Mixamo](https://www.mixamo.com/)から作成したUnityのキャラクタモデル
  - Plugins
    - Android向けビルドの設定ファイル
  - StarterAssets
    - [Starter Assets - Third Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526?locale=ja-JP)のインストール先
  - TextMesh Pro
    - TextMesh Proを使うための設定
  - URP
    - Universal Render Pipelineを使うための設定
- Packages
  - アプリケーション開発で使用するUnityパッケージ

自分達で作成したアセットの格納場所としてHolidayから始まる名前を付けたディレクトリを設けています。
サードパーティを元に作成したアセットと自分達で作成したアセットを見分けやすくするためです。
Holiday以外のディレクトリはサードパーティやUnityの機能利用時に作成された設定になります。
アプリケーション用のディレクトリを設けたのでそれ以外のディレクトリは作成された状態、またはサードバーティと分かる名前を付けて配置しています。

#### Holiday

- App
  - アプリケーションのエントリーポイント
  - アプリケーション全体の設定/状態
  - Common
    - アプリケーション全体で共通する処理
- Controls
  - XxxControl
    - Controlシーン。シーン毎のアセットをまとめて配置
  - Common
    - Controlシーン間で共通する処理
- Screens
  - XxxScreen
    - Screenシーン。シーン毎のアセットをまとめて配置
  - Common
    - Screenシーン間で共通するUIや処理
- Spaces
  - XxxSpace
    - Spaceシーン。シーン毎のアセットをまとめて配置
  - Common
    - Spaceシーン間で共通するUIや処理

Unityのアプリケーションではアセットの種類毎にディレクトリを分けることが多いですが、1つの機能を構成するアセットが散らばり探すのが大変なので、Holidayではシーン単位でディレクトリを分けてシーン毎のアセットをまとめて配置します。

ディレクトリとシーンの対応が分かるようにアプリケーション構成を再掲します。

![application structure](../img/holiday-app-structure.png)

### Static analysis

ルート直下にある`.editorconfig`でAnalyzerの設定をしています。
[EditorConfig](https://editorconfig.org/)に対応したエディタを使ってスクリプトを編集し、Analyzerの問題がないことを確認してからプッシュしてください。

### Assembly Definition(AD)

アプリケーション単位でADを1つ作成します。

- アプリケーションで使用するサードパーティのパッケージを制限するため
- 自動テストの導入をしやすくするため
- [Code Cracker](https://github.com/code-cracker/code-cracker)を適用するため
  - Code Crackerを適用するにはチェック対象のADにCode Crackerを含める必要があります。

### File settings

意図しない変更差分が出ないようにスクリプトや設定ファイルは次の設定にしてください。

- エンコーディング: `UTF-8のBOM付き`
- 改行コード: `LF`

:::info
Visual Studioで`UTF-8のBOM無し`を設定できないため`UTF-8のBOM付き`としています。
:::

## Application

### Entry point

アプリケーションのエントリーポイントは次のシーンです。

```text
Assets/Holiday/App/App
```

### Initialization

アプリケーションの初期化処理は次のスクリプトのInitializeAppで実施しています。
Awakeの先頭でInitializeAppを呼び出しています。

```text
Assets/Holiday/App/AppScope
```

フレームレートの設定や[Loggingの設定](../core/logging.md#settings)を行っています。

### Stage configuration

ステージ構成は[Stage Navigationの設定](../core/stage-navigation.md#settings)にある通り、3つのタイプを作成しています。
ステージやシーンの作成時に変更してください。

```text
Assets/Holiday/App/Config/StageName
```

```text
Assets/Holiday/App/Config/SceneName
```

```text
Assets/Holiday/App/Config/StageConfig
```

### Application state

アプリケーション状態を保持するクラスを設けています。
プレイヤーの名前や選択したアバター、シーンをまたがる情報を保持するのに使います。

```text
Assets/Holiday/App/AppState
```

### Utility class

アプリケーション全体に共通する処理はユーティリティクラスとして提供しています。

```text
Assets/Holiday/App/AppUtils
```

## Objects

各シーンで使うオブジェクトの管理には[VContainer](https://vcontainer.hadashikick.jp/)を使います。

### DI

DIについては[What is DI ?](https://vcontainer.hadashikick.jp/about/what-is-di)を参照してください。

DIにはいくつかやり方があります。
VContainerが推奨する方法を採用します。

- C# Type
  - [Constructor Injection](https://vcontainer.hadashikick.jp/resolving/constructor-injection)
- MonoBehaviour
  - [Method Injection](https://vcontainer.hadashikick.jp/resolving/method-injection)

VContainerの推奨理由については[Constructor Injection](https://vcontainer.hadashikick.jp/resolving/constructor-injection)のRECOMMENDATIONを参照してください。

VContainerへの登録は次のRegisterを使います。

```csharp title="C# Type"
builder.Register<AppState>(Lifetime.Singleton);
```

```csharp title="MonoBehaviour"
builder.RegisterComponent(networkManager);
```

MonoBehaviourのようなインスタンスの登録はRegisterInstanceとRegisterComponentを使えますがRegisterComponentを使ってください。
RegisterInstanceは引数のオブジェクトに対してDIが行われないため、DIを使いたいオブジェクトを誤って指定した際に問題解決まで時間を要する可能性があります。

```csharp title="Entry point"
builder.RegisterEntryPoint<AppPresenter>();
```

### Scope

[VContainer](https://vcontainer.hadashikick.jp/)ではLifetimeScopeを継承したクラスをアタッチしたオブジェクトをシーンに置き、これが1つのスコープ（1つのコンテナ）を表現します。
スコープに親のスコープを指定することでオブジェクトの検索を親まで広げることができます。
Holidayでは親のスコープ指定を使って、Appシーンのオブジェクトを各シーンで使えるようにします。
Holidayのスコープ階層は下記になります。

```text
Appシーン
↑
各シーン（Controlシーン、Screenシーン、Spaceシーン）
```

各シーンのスコープの親にはAppシーンのスコープを指定してください。

![オブジェクトスコープの親](../img/holiday-object-scope-parent.png)

## Assets

現状は全てのアセットをアプリケーションに含めていますが、コンテンツの容量が増えてきた場合はコンテンツを外部化し必要なコンテンツのみダウンロードしてアプリケーションを使えるようにする想定です。コンテンツのみ変更したいケースやアプリケーションの容量を減らしてダウンロード時間を短くするためです。

Holidayではアセット管理にUnityのAddressablesを使用します。
Addressablesは次の目的で使用します。

- 使用するアセットに名前を付け物理的なパスに依存せずアプリケーションでアセットを取得する
- アプリケーションのソースコードを変更せずにアセットの取得先をローカルからリモートに切り替える

アセット名のルールは下記とします。

```text
タイプ＋名前

（例）
AvatarAmy
AvatarMichelle
```

## Scenes

### Design policy

シーンの設計方針を示します。
各シーンはこの設計方針に合わせて作成してください。
各シーンの作り方を統一することでメンテナンスしやすいアプリケーションを目指します。

- シーンはMV(R)Pパターンで作成します。
- アプリケーション全体で使用するモデルはAppシーンのスコープで管理します。
  - StageNavigator、AppState、データアクセスのためのリポジトリ、NetworkManagerなど
- シーンをまたがる情報のやりとりは[AppState](#application-state)を使います。
- 各シーンでしか使わないモデルは各シーンのスコープで管理します。
  - MultiplayRoom、TextChatChannelなど
- シーンのロード/アンロード時の処理はIInitializable/IDisposableで行います。
  - PresenterでIInitializable/IDisposableを実装して行います。
  - **IInitializable/IDisposableが呼ばれるタイミングはステージ遷移のタイミングではないことに注意してください。ステージ遷移で同じシーンが続く場合はシーンが再利用されIInitializable/IDisposableは呼ばれません。**
- ステージ遷移時の処理はStageNavigatorの[イベント通知](../core/stage-navigation.md#core-sn-event)を使用します。
  - PresenterでIInitializableを実装してStageNavigatorのイベント購読を登録します。
  - マルチプレイのルームやテキストチャットのチャンネルへの接続/切断など空間毎に処理を行いたい場合はステージ遷移時の処理として実装します。

### Base class for Presenter

ステージ遷移時の処理呼び出しは各シーンのPresenterスクリプトに共通する処理となるためBaseクラスを設けています。
PresenterスクリプトはこのBaseクラスを使ってください。

```text
Assets/Holiday/App/Common/StagePresenterBase
```

Baseクラスは次の共通処理を提供します。

- シーンのロード時の初期化処理呼び出し
- ステージに入る時と出る時の処理呼び出し
- ステージから出る時のDispose呼び出し
- シーンのアンロード時のDispose呼び出し

Baseクラスを継承したPresenterスクリプトのひな型は次の通りです。

```csharp
public class XxxxxPresenter : StagePresenterBase
{

    public XxxxxPresenter(StageNavigator<StageName, SceneName> stageNavigator) : base(stageNavigator)
    {
        // コンストラクタ
        // BaseクラスにStageNavigatorを渡します。
        // シーンに必要なオブジェクトをコンストラクタインジェクションで受け取ります。
    }

    protected override void Initialize(StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)
    {
        // シーンのロード時の初期化処理をここに実装します。
        // シーンのアンロード時にDisposeしたいオブジェクトをsceneDisposablesに追加します。
    }

    protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)
    {
        // ステージに入る時の処理をここに実装してください。
        // ステージから出る時にDisposeしたいオブジェクトをstageDisposablesに追加します。
    }

    protected override void OnStageExiting(StageName stageName)
    {
        // ステージから出る時の処理をここに実装してください。
    }
}
```

### Basic structure

各シーンでは次のアセット名でGameObjectを作ります。

- Scope
  - VContainerのLifetimeScopeをアタッチする空のGameObject
- View
  - Viewをアタッチする空のGameObject
- (任意の名前)
  - Screen/Spaceシーン
    - 画面のUIや空間の3Dオブジェクト等のGameObject
  - Controlシーン
    - カメラ等のGameObject

機能の実現に不要なものは作らなくても大丈夫です。

参考としてアバター選択画面シーンのオブジェクトやスクリプトを示します。

![シーンのScopeとView](../img/holiday-scene-scope-view.png)

アバター選択画面シーンはプレイヤーの名前入力とアバター選択、次の画面へ移動ができます。

```csharp
public class AvatarSelectionScreenScope : LifetimeScope
{
    [SerializeField] private AvatarSelectionScreenView avatarSelectionScreenView;

    protected override void Configure(IContainerBuilder builder)
    {
        builder.RegisterComponent(avatarSelectionScreenView);

        builder.RegisterEntryPoint<AvatarSelectionScreenPresenter>();
    }
}
```

AvatarSelectionScreenScopeではViewとPresenterをスコープに登録します。
Presenterはエントリーポイントとして登録しシーン処理の起点となります。
エントリーポイントで使用できる処理のタイミングは[Plain C# Entry point](https://vcontainer.hadashikick.jp/integrations/entrypoint)を参照してください。

```csharp
public class AvatarSelectionScreenPresenter : StagePresenterBase
{
    private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(AvatarSelectionScreenPresenter));

    private readonly AvatarService avatarService;
    private readonly AvatarSelectionScreenView avatarSelectionScreenView;
    private readonly AppState appState;

    public AvatarSelectionScreenPresenter
    (
        StageNavigator<StageName, SceneName> stageNavigator,
        AvatarService avatarService,
        AvatarSelectionScreenView avatarSelectionScreenView,
        AppState appState
    ) : base(stageNavigator)
    {
        this.avatarSelectionScreenView = avatarSelectionScreenView;
        this.avatarService = avatarService;
        this.appState = appState;
    }

    protected override void Initialize(
        StageNavigator<StageName, SceneName> stageNavigator, CompositeDisposable sceneDisposables)
    {
        avatarSelectionScreenView.OnNameChanged
            .Subscribe(appState.SetPlayerName)
            .AddTo(sceneDisposables);

        avatarSelectionScreenView.OnAvatarChanged
            .Subscribe(avatarName =>
            {
                var avatar = avatarService.FindAvatarByName(avatarName);
                appState.SetAvatar(avatar);
            })
            .AddTo(sceneDisposables);

        avatarSelectionScreenView.OnGoButtonClicked
            .Subscribe(_ => stageNavigator.ReplaceAsync(StageName.VirtualStage).Forget())
            .AddTo(sceneDisposables);
    }

    protected override void OnStageEntered(StageName stageName, CompositeDisposable stageDisposables)
    {
        var avatars = avatarService.Avatars;
        if (appState.Avatar.Value == null)
        {
            appState.SetAvatar(avatars.First());
        }

        var avatarNames = avatars.Select(avatar => avatar.Name).ToList();
        avatarSelectionScreenView.Initialize(avatarNames);

        avatarSelectionScreenView.SetInitialValues(appState.PlayerName.Value, appState.Avatar.Value.Name);

        if (Logger.IsDebug())
        {
            Logger.LogDebug($"player: name: {appState.PlayerName.Value} avatar: {appState.Avatar.Value.Name}");
        }
    }

    protected override void OnStageExiting(StageName stageName)
    {
    }
}
```

PresenterはViewやModelをインジェクトし、ViewとModelの処理のマッピングやステージ遷移を行います。
スコープの親にAppシーンのスコープを指定しているため、Appシーンで管理しているStageNavigatorやAppStateを設定して使用できます。

```csharp
public class AvatarSelectionScreenView : MonoBehaviour
{
    [SerializeField] private TMP_InputField nameInputField;
    [SerializeField] private TMP_Dropdown avatarDropdown;
    [SerializeField] private Button goButton;

    private readonly List<string> avatarNames = new List<string>();

    public void Initialize(List<string> avatarNames)
    {
        this.avatarNames.Clear();
        this.avatarNames.AddRange(avatarNames);
        avatarDropdown.options =
            this.avatarNames.Select(avatarName => new TMP_Dropdown.OptionData(avatarName)).ToList();
    }

    public void SetInitialValues(string name, string avatarName)
    {
        nameInputField.text = name;
        avatarDropdown.value = avatarNames.IndexOf(avatarName);
    }

    public IObservable<string> OnNameChanged =>
        nameInputField.onEndEdit.AsObservable().TakeUntilDestroy(this);

    public IObservable<string> OnAvatarChanged =>
        avatarDropdown.onValueChanged.AsObservable()
            .TakeUntilDestroy(this).Select(index => avatarNames[index]);

    public IObservable<Unit> OnGoButtonClicked => goButton.OnClickAsObservable().TakeUntilDestroy(this);
}
```

Viewはアバタープルダウンの初期化、入力項目の初期値設定、入力項目のイベント通知を行っています。

## UI

### Font

[Noto Sans Japanese](https://fonts.google.com/noto/specimen/Noto+Sans+JP)を取り込みTextMesh Proのデフォルトに設定済みです。
フォントはNoto Sans Japaneseを使ってください。

### Resolution

解像度は汎用的なサイズの1920x1080を基準にします。
PCは1920x1080、モバイルはポートレートモードの1080x1920で使う想定です。
GameViewの解像度に1080x1920を追加し、Unityエディタ上では2つのサイズで確認してください。

### Modularization

画面やボタンなどデザインが共通するUIはメンテナンスしやすいように共通化します。
UIの共通化にはUnityのPrefabを使います。
Prefabを追加した場合は下記に追記してください。

Prefabのパス
```text
Assets/Holiday/Stages/Common
```

- ScreenCanvas
  - 画面用のCanvas
  - バックグラウンドの色指定、SafeArea対応が入っています。
  - SafeAreaの下に画面のUIを配置してください。
- ScreenTitle
  - 画面用のタイトル
  - フォント、文字の設定が入っています。
- ScreenButton
  - 画面用のボタン
  - フォント、文字の設定が入っています。
- SpaceCanvas
  - 空間用のCanvas
  - SafeArea対応が入っています。
  - SafeAreaの下に画面のUIを配置してください。
- SpaceTitle
  - 空間用のタイトル
  - フォント、文字の設定が入っています。
- SpaceButton
  - 空間用のボタン
  - フォント、文字の設定が入っています。

### Canvas

バックグラウンド画面やローディング画面のように画面や空間に重ねて使用する共通画面のCanvasにはSortOrderを指定して前面に表示されるようにしてください。
