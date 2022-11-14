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

初期設定してある`Assets/Scenes`ディレクトリは使わないので削除します。

下図を参考にディレクトリとAppシーンを作成します。

![Appシーン](/img/learning-core-app-scene.png)

## Add Logging

Extrealの[Logging](/core/logging)をアプリケーションに追加して使えるようにします。

Package ManagerのGit URL指定からLoggingを追加します。
[LoggingのPackage](/core/logging#package)にアクセスしてGit URLを取得します。

Package Managerに`Extreal.Core.Logging`が追加されれば成功です。
バージョンは実施タイミングにより異なります。

![Logging追加](/img/learning-core-logging-package.png)

次にアプリケーションのAssembly Definitionを追加してLoggingを設定します。

`ExtrealCoreLearning`ディレクトリに`ExtrealCoreLearning`という名前でAssembly Definitionを作成します。
Assembly Definition Referencesに`Extreal.Core.Logging`を追加します。
Assembly Definition ReferencesのUse GUIDsのチェックは外してください。

![Loggingアセンブリ設定](/img/learning-core-logging-assembly.png)

LoggingのデフォルトのログレベルはInfoです。開発用にDebugレベルのログを出力したいのでLoggingの初期化を追加します。

- `App`ディレクトリに`AppInitializer`スクリプトを作ります。
- [LoggingのSettings](/core/logging#settings)を参照して`AppInitializer`スクリプトを実装します。

このままだとLoggingの動作確認ができないので`AppInitializer`スクリプトでLoggingの初期化直後にログ出力を追加します。
次のコードをLoggingの初期化直後に追加します。

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

Extrealの[Stage Navigation](/core/stage-navigation)をアプリケーションに追加して使えるようにします。

Stage Navigationは[UniTask](https://github.com/Cysharp/UniTask)に依存しているため先にUniTaskを追加できる状態にします。
UniTaskは[OpenUPM](https://openupm.com/)で提供されているためOpenUPMの設定を追加します。

`Edit` -> `Project Settings...` -> `Package Manager`からScoped RegistriesにOpenUPMを追加します。
Scope(s)に指定した`com.cysharp`がUniTaskのための設定です。

- Name: `OpenUPM`
- URL: `https://package.openupm.com`
- Scope(s): `com.cysharp`

![Unitask追加](/img/learning-core-stagenavigation-unitask.png)

これでUniTaskを追加できる状態になったのでLoggingの時と同じ手順でPackage ManagerとAssembly Definitionを操作してStage Navigationをスクリプトから使えるようにします。
Assembly DefinitionにUniTaskも設定します。

![Stage Navigation追加](/img/learning-core-stagenavigation-add.png)

ステージ遷移を試すためタイトル画面シーンを追加します。

`TitleScree`ディレクトリを作成し、その中に`TitleScree`シーンを作成します。
`TitleScree`シーンのカメラなど初期設定されているGameObjectを削除しシーンを一旦空にします。

シーンに`Canvas`を追加します。インスペクタで次の設定をします。

- Canvas Scaler
  - UI Scale Mode: `Scale With Screen Size`

Canvasの下に`Image`を追加します。インスペクタで次の設定をします。

- Rect Transform
  - Anchor Presets
    - stretch x stretch
  - LeftからButtomまで全て0（Zero）
- Image
  - Color
    - Hexadecimal: `FF6F61`

Imageの下に`Text - TextMeshPro`を追加します。

TMP Importerが表示されたらImport TMP Essentialsを選択します。
TextMeshProの初回利用時のみTMP Importerが表示されます。
インポートされたらTMP Importerを閉じます。

`Extreal Core Learning`というタイトルを作ります。
サイズやポジションは自由に決めてください。

Imageの下に`Button - TextMeshPro`を追加します。
`Go`というボタンを作ります。
こちらもサイズやポジションは自由に決めてください。

