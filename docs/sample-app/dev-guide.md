---
sidebar_position: 5
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
    - Holidayアプリケーションで作成するアセット
  - Mixamo
    - [Mixamo](https://www.mixamo.com/)から作成したUnityのキャラクタモデル
  - StarterAssets
    - [Starter Assets - Third Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526?locale=ja-JP)のインストール先
  - TextMesh Pro
    - TextMesh Proを使うための設定
  - URP
    - Universal Render Pipelineを使うための設定
- Packages
  - アプリケーション開発で使用するUnityパッケージ

自分達で作成したアセットの格納場所としてAssets/Holidayディレクトリを設けています。
サードパーティを元に作成したアセットと自分達で作成したアセットの見分けを付きやすくするためです。
Assets/Holiday以外のディレクトリはサードパーティやUnityの機能利用時に作成された設定になります。
アプリケーション用にAssets/Holidayディレクトリを設けたのでそれ以外のディレクトリは作成された状態、またはサードバーティと分かる名前を付けて配置しています。

#### Holiday

- App
  - アプリケーションのエントリーポイント
  - アプリケーションの初期化処理、ステージ構成
  - 全シーンから使えるようにアプリケーション全体の設定や共通処理を集約
- Controls
  - XxxControl
    - Controlシーン。シーン毎のアセットをまとめて配置
- Models
  - MV(R)PパターンのModelを配置
  - 全シーンから使えるようにアプリケーションの全モデルを集約
- Stages
  - XxxScreenまたはXxxSpace
    - Stageシーン。シーン毎のアセットをまとめて配置
  - Common
    - シーン間で共通するUIや処理

Unityのアプリケーションではアセットの種類毎にディレクトリを分けることが多いですが、1つの機能を構成するアセットが散らばり探すのが大変なので、Holidayではシーン単位でディレクトリを分けてシーン毎のアセットをまとめて配置します。

ディレクトリとシーンの対応が分かるようにアプリケーション構成を再掲します。

![application structure](/img/holiday-app-structure.png)

### Static analysis

ルート直下にある`.editorconfig`でAnalyzerの設定をしています。
[EditorConfig](https://editorconfig.org/)に対応したエディタを使ってスクリプトを編集し、Analyzerの問題がないことを確認してからプッシュしてください。

### Assembly Definition(AD)

アプリケーション単位でADを1つ作成します。

- アプリケーションで使用するサードパーティのパッケージを制限するため
- 自動テストの導入をしやすくするため
- [Code Cracker](https://github.com/code-cracker/code-cracker)を適用するため
  - Code Crackerを適用するにはチェック対象のADにCode Crackerを含める必要があります。

### File encoding

意図しない変更差分が出ないようにスクリプトや設定ファイルのエンコーディングは`UTF-8`に統一してください。

## Application

### Entry point

アプリケーションのエントリーポイントは次のシーンです。

```
Assets/Holiday/App/App
```

### Initialization

アプリケーションの初期化処理は次のスクリプトのInitializeAppで実施しています。
Awakeの先頭でInitializeAppを呼び出しています。

```
Assets/Holiday/App/AppScope
```

フレームレートの設定や[Loggingの設定](/core/logging#settings)を行っています。

### Stage configuration

ステージ構成は[Stage Navigationの設定](/core/stage-navigation#settings)にある通り、3つのタイプを作成しています。
ステージやシーンの作成時に変更してください。

```
# ステージ名を表すEnum（スクリプト）
Assets/Holiday/App/StageName
# シーン名を表すEnum（スクリプト）
Assets/Holiday/App/SceneName
# ステージ設定を保持するクラス（ScriptableObject）
Assets/Holiday/App/StageConfig
```

```csharp
public enum StageName
{
    TitleStage = 100,
    AvatarSelectionStage = 101,
    VirtualStage = 200,
}
public enum SceneName
{
    Models = 0,

    CameraControl = 100,
    LightControl = 103,
    InputControl = 101,
    PlayerControl = 102,

    BackgroundScreen = 204,
    LoadingScreen = 203,
    TitleScreen = 200,
    AvatarSelectionScreen = 201,

    VirtualSpace = 300,
}
```

## Object

各シーンで使うオブジェクトの管理には[VContainer](https://vcontainer.hadashikick.jp/)を使います。

### DI

DIについては[What is DI ?](https://vcontainer.hadashikick.jp/about/what-is-di)を参照してください。

DIにはいくつかやり方があります。
VContainerが推奨するDIコンテナに依存せずオブジェクトを設定できる方法を採用します。

- C# Type: [Constructor Injection](https://vcontainer.hadashikick.jp/resolving/constructor-injection)
- MonoBehaviour: [Method Injection](https://vcontainer.hadashikick.jp/resolving/method-injection)

VContainerの推奨理由については[Constructor Injection](https://vcontainer.hadashikick.jp/resolving/constructor-injection)のRECOMMENDATIONを参照してください。

### Scope

[VContainer](https://vcontainer.hadashikick.jp/)ではLifetimeScopeを継承したクラスをアタッチしたオブジェクトをシーンに置き、これが1つのスコープ（1つのコンテナ）を表現します。
スコープに親のスコープを指定することでオブジェクトの検索を親まで広げることができます。
Holidayでは親のスコープ指定を使って、AppシーンやModelsシーンのオブジェクトを各シーンで使えるようにします。
Holidayのスコープ階層は下記になります。

```
Appシーン
↑
Modelsシーン
↑
各シーン（Controlシーン、Stageシーン）
```

各シーンのスコープの親にはModelsシーンのスコープを指定してください。

![オブジェクトスコープの親](/img/object-scope-parent.png)

## Asset

現状は全てのアセットをアプリケーションに含めていますが、コンテンツの容量が増えてきた場合はコンテンツを外部化し必要なコンテンツのみダウンロードしてアプリケーションを使えるようにする想定です。コンテンツのみ変更したいケースやアプリケーションの容量を減らしてダウンロード時間を短くするためです。

Holidayではアセット管理にUnityのAddressablesを使用します。
Addressablesは次の目的で使用します。

- 使用するアセットに名前を付け物理的なパスに依存せずアプリケーションでアセットを取得する
- アプリケーションのソースコードを変更せずにアセットの取得先をローカルからリモートに切り替える

アセット名のルールは下記とします。

```
タイプ＋名前

（例）
AvatarAmy
AvatarMichelle
```

## Scene

### Basic structure

各シーンはMV(R)Pパターンで作成します。
各シーンでは次のアセットを作ります。

- Scope
  - VContainerのLifetimeScopeをアタッチする空のGameObject
- View
  - Viewをアタッチする空のGameObject
- (任意の名前)
  - 画面のUIや空間の3Dオブジェクト等のGameObject
  - Controlシーンの場合はカメラ等のGameObject
  - Modelsシーンの場合はMonoBehaviourを継承したクラスをアタッチしたGameObject

機能の実現に不要なものは作らなくても大丈夫です。
ModelはModelsシーンに作成するため個別のシーンには作成しません。

参考としてアバター選択画面シーンのオブジェクトやスクリプトを示します。

![シーンのScopeとView](/img/scene-scope-view.png)

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
public class AvatarSelectionScreenPresenter : IStartable
{
    private static readonly ELogger Logger = LoggingManager.GetLogger(nameof(AvatarSelectionScreenPresenter));

    private readonly IStageNavigator<StageName> stageNavigator;

    private readonly AvatarSelectionScreenView avatarSelectionScreenView;

    private readonly Player player;

    public AvatarSelectionScreenPresenter(IStageNavigator<StageName> stageNavigator,
        AvatarSelectionScreenView avatarSelectionScreenView, Player player)
    {
        this.stageNavigator = stageNavigator;
        this.avatarSelectionScreenView = avatarSelectionScreenView;
        this.player = player;
    }

    public void Start()
    {
        if (Logger.IsDebug())
        {
            Logger.LogDebug($"player: name: {player.Name.Value} avatar: {player.Avatar.Value.Name}");
        }

        var avatars = player.Avatars.Select(avatar => avatar.Name).ToList();
        avatarSelectionScreenView.Initialize(avatars);

        avatarSelectionScreenView.SetInitialValues(player.Name.Value, player.Avatar.Value.Name);

        avatarSelectionScreenView.OnNameChanged.Subscribe(player.SetName);

        avatarSelectionScreenView.OnAvatarChanged.Subscribe(player.SetAvatar);

        avatarSelectionScreenView.OnGoButtonClicked.Subscribe(_ =>
        {
            stageNavigator.ReplaceAsync(StageName.VirtualSpace).Forget();
        });
    }
}
```

PresenterはViewやModelをインジェクトし、ViewとModelの処理のマッピングやステージ遷移を行います。
スコープの親にModelsシーンのスコープを指定しているため、Appシーンで管理しているStageNavigatorやModelsシーンで管理しているPlayerもインジェクトできます。

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

### Initialization

ステージ遷移で同じシーンが続く場合、シーンはアンロードされず再利用されるためAwakeやStartは実行されません。
シーンの初期化処理はStageNavigatorが発行する[イベント通知](/core/stage-navigation#core-sn-event)を使用してくだい。

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
```
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
