---
sidebar_position: 3
---

# Stage Navigation

## What for?

[Frameworkが想定するアプリケーションアーキテクチャ](../intro.md#application)で説明した複数のシーンを組み合わせたステージの作成やステージの切り替えを簡単にできるようにStage Navigationを提供します。

[Frameworkが想定するアプリケーションアーキテクチャ](../intro.md#application)で示した図を再掲します。
![Multiple scenes](../img/multi-scenes.png)

あなたのアプリケーションでStage Navigationを使い機能を自由に組み合わせてステージを作れるようになると機能の再利用性が高まりメンテナンスしやすいアプリケーションが手に入ります。

## Specification

Stage Navigationの仕様は次の通りです。

- 複数のシーンを組み合わせてステージを設定できます。
- 全てのステージに共通するシーンをまとめて一箇所で設定できます。
- 指定したステージに遷移できます。
- ステージ遷移をトリガーに処理を追加できます。

## Architecture

```mermaid
classDiagram

    StageNavigator ..> IStageConfig
    IStageConfig <|.. StageConfigBase
    StageConfigBase <|-- StageConfig
    ScriptableObject <|-- StageConfigBase
    IStageConfig *-- Stage : Stages
    IStageConfig o-- SceneName : CommonStages
    Stage --> StageName : StageName
    Stage o-- SceneName : SceneNames
    DisposableBase　<|-- StageNavigator

    class StageName {
        <<enumeration>>
    }

    class SceneName {
        <<enumeration>>
    }

    class StageConfig {
    }

    class StageNavigator {
        +OnStageTransitioning IObservable
        +OnStageTransitioned IObservable
        +StageNavigator(stageConfig)
        +ReplaceAsync(stageName) void
    }

    class IStageConfig {
        +CommonScenes List
        +Stages List
    }

    class StageConfigBase {
        
    }

    class ScriptableObject {
        <<unity>>
    }

    class Stage {
        +StageName Enum
        +SceneNames List
    }

    class DisposableBase {
        <<extreal>>
    }
```

:::info
次のタイプはアプリケーションで作成します。

- StageName：ステージ名を表すEnum
- SceneName：シーン名を表すEnum
- StageConfig：ステージ設定を保持するクラス
:::

## Installation

### Package

```text
https://github.com/extreal-dev/Extreal.Core.StageNavigation.git
```

### Dependencies

Stage Navigationは次のパッケージを使います。

- [Extreal.Core.Logging](./logging.md)
- [Extreal.Core.Common](./common.md)
- [UniTask](https://github.com/Cysharp/UniTask)
- [UniRx](https://github.com/neuecc/UniRx)

モジュールバージョンと各パッケージバージョンの対応は[Release](../../category/release)を参照ください。

### Settings

アプリケーションで使用するステージを設定します。
次の3つのタイプを作成します。

- ステージ名を表すEnum
- シーン名を表すEnum
- ステージ設定を保持するクラス

```csharp
// Enum for the stage name
public enum StageName
{
    TitleStage = 0,
    AvatarSelectionStage = 1,
    SpaceSelectionStage = 2,
    VirtualStage = 3,
}
```

```csharp
// Enum for the scene name
public enum SceneName
{
    // Control
    CameraControl = 100,
    InputControl = 101,
    NetworkControl = 102,
    PlayerControl = 103,
    LobbyControl = 104,
    TextChatControl = 105,
    VoiceChatControl = 106,
    ReactionControl = 107,
    
    // Screen
    TitleScreen = 200,
    AvatarSelectionScreen = 201,
    SpaceSelectionScreen = 202,

    // Space
    VirtualSpace = 300,
}
```

ステージ設定のような定数値は編集しやすいようにUnityエディタのインスペクタで指定できるようにします。
インスペクタでEnumを使う場合は次の問題があるため、ステージ名とシーン名のEnumは定数値を指定してください。

:::caution
C#の仕様でEnumは定義した順に上から自動で定数値が振られます。
UnityエディタのインスペクタでEnumを指定すると定数値で状態が保存されるため、Enumの変更で定義順が変わると意図せずインスペクタの設定値も変わってしまいます。
この問題に対応するため、インスペクタで使うEnumには定数値を指定します。
定数値は識別以外に意味はないので各Enumで重複しなければどんな数でも大丈夫です。
:::

IStageConfigインタフェースがステージ設定を保持します。
ステージ設定をUnityエディタのインスペクタで編集できるようにScriptableObjectを継承したBaseクラスを提供しています。
ステージ設定を保持するクラスはStageConfigBaseクラスを継承してください。

```csharp
// Class that holds the stage config
[CreateAssetMenu(
    menuName = "Config/" + nameof(StageConfig),
    fileName = nameof(StageConfig))]
public class StageConfig : StageConfigBase<StageName, SceneName>
{
}
```

Unityエディタのインスペクタでステージ設定を行います。
設定例は次の通りです。

![Stage config](../img/core-stagenavigation-stageconfig.png)

- CommonScenesプロパティ
  - 全てのステージに共通するシーンを指定します。
- Stagesプロパティ
  - ステージ毎のシーン構成を指定します。

StageNavigatorとStageConfigの初期化はVContainerを使います。

```csharp
    public class AppScope : LifetimeScope
    {
        [SerializeField] private StageConfig stageConfig;

        protected override void Configure(IContainerBuilder builder)
        {
            builder.RegisterComponent(stageConfig).AsImplementedInterfaces();
            builder.Register<StageNavigator<StageName, SceneName>>(Lifetime.Singleton);
        }
    }
```

## Usage

### 指定したステージに遷移する

StageNavigatorのReplaceAsyncを使って指定したステージに遷移します。

```csharp
// Transition to the title stage
stageNavigator.ReplaceAsync(StageName.TitleStage);

// Transition to the avatar selection stage
stageNavigator.ReplaceAsync(StageName.AvatarSelectionStage);

// Transition to the space selection stage
stageNavigator.ReplaceAsync(StageName.SpaceSelectionStage);
```

ステージ遷移で同じシーンが続く場合、StageNavigatorは処理時間を短縮するためそのシーンを再ロードせず再利用します。

```text
TitleStage
  PlayerControl -> Loaded
  TitleScreen -> Loaded

AvatarSelectionStage
  PlayerControl -> Not loading
  AvatarSelectionScreen -> Loaded

SpaceSelectionStage
  PlayerControl -> Not loading
  AvatarSelectionScreen -> Loaded
```

再利用されたシーンのGameObjectのAwakeやStartはロードされたタイミングでのみ実行され、再利用されたタイミングでは実行されません。
ステージ遷移のタイミングで処理を実行したい場合は、StageNavigatorが発行する[イベント通知](#core-sn-event)を使用してくだい。

### ステージ遷移をトリガーに処理を追加する {#core-sn-event}

StageNavigatorは次のイベント通知を設けています。

- OnStageTransitioning
  - タイミング：ステージ遷移する直前
  - タイプ：IObservable
  - パラメータ：遷移するステージの名前
- OnStageTransitioned
  - タイミング：ステージ遷移した直後
  - タイプ：IObservable
  - パラメータ：遷移したステージの名前

OnStageTransitionedのタイミングでログを出力する例は次の通りです。

```csharp
stageNavigator.OnStageTransitioned.Subscribe(stageName =>
{
    Logger.LogInfo(stageName);
}).AddTo(compositeDisposable);
```
