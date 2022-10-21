---
sidebar_position: 1
---

# Introduction

:::danger
Extrealは現在開発中です。2022年12月に正式リリースを予定しています。
正式リリースまでは試す程度にとどめ本格利用はご遠慮ください。
:::

ここではExtrealのグランドデザインを説明します。
Extrealの全コンテンツはこのグランドデザインをベースに作成しています。

## Contents

Extrealは次のコンテンツを提供します。

- Framework
  - UnityベースのXRフレームワーク。
  - Unityパッケージで提供します。
- Sample Application
  - Frameworkを使ったサンプルアプリケーション。
  - Unityプロジェクトで提供します。
- Learning
  - Frameworkの使い方を学習する教材。
  - このガイドに含まれています。
- Guide
  - Extrealの活用方法を案内するガイド。
  - このドキュメントがガイドです。

## Architecture

FrameworkのアーキテクチャとFrameworkが想定するアプリケーションアーキテクチャを説明します。
FrameworkやSample Applicationはこのアーキテクチャを前提に作成しています。

### Framework

![Framework architecture](/img/fw-arch.png)

FrameworkはUnityやサードパーティのパッケージを活用して機能を実現します。
Frameworkは機能を次のカテゴリに分類しています。

- Core
  - アプリケーションのベースとなるコア機能を提供します。
  - Logging、SceneTransitionといった機能です。
- Integration
  - アプリケーションの要件に合わせてアプリケーションに統合する機能を提供します。
  - Chat、Multiplayといった機能です。

CoreとIntegrationはさらに機能毎に分かれモジュールに分割しています。
Frameworkはモジュールの集まりです。

全てのモジュールはログ出力を統一するためLoggingに依存しています。
モジュールはLogging以外のモジュールに依存しないように作成しているのでLoggingと併せれば単体で使用できます。

### Application

ゲームやXRのアプリケーションはGUIだけでなく走り回る空間なども含まれるため画面やページではなく場面で構成します。
例えば、イベントルームに集まって何かするようなアプリケーションであれば、タイトルページ→アバター選択ページ→イベント選択ページ→イベントルームといった複数の場面で構成します。
入力制御のように複数の場面に共通する機能やボイスチャットのように特定の場面でのみ使う機能が存在します。
こういった機能を自由に組み合わせて場面を作れると機能の再利用性が高まりメンテナンスしやすくなります。

これを実現するため、Unityの1つのSceneで1つの機能を作成し、複数のUnityのSceneを組み合わせて場面を作ります。

![Multiple scenes](/img/multi-scenes.png)

複数のUnityのSceneを組み合わせた場面の作成や場面の切り替えにはFrameworkが提供する[SceneTransition](/core/scene-transition)を使います。

UnityのSceneで作る機能はMV(R)Pパターンを使って作ります。
MV(R)Pパターンについては[【Unity】Model-View-(Reactive)Presenterパターンとは何なのか](https://qiita.com/toRisouP/items/5365936fc14c7e7eabf9)を参照ください。

![MVP pattern](/img/mvp-pattern.png)

MV(R)Pパターンに必要なイベント通知にはサードパーティの[UniRx](https://github.com/neuecc/UniRx)を使います。
MVPの各オブジェクトの生成や参照関係の構築、各オブジェクトのライフサイクルイベントの実行制御にはサードパーティの[VContainer](https://vcontainer.hadashikick.jp/)を使います。

テキストチャット機能の実現イメージは次の通りです。

![MVP example](/img/mvp-example.png)

アプリケーションの要件に合わせてUIとMVPを作成し、ModelからFrameworkが提供する機能を使ってテキストチャットを実現します。

## License

[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)

Extrealが提供しているコンテンツは無償でご利用いただけます。
外部のプロダクト、サービス、OSS等は提供元のライセンスを確認ください。

## Versioning

ExtrealはFrameworkに含まれるモジュールの特定バージョンの組み合わせに対してバージョンが決まります。
各モジュールはモジュール毎にバージョンが決まります。

Extrealバージョンとモジュールバージョンの例を示します。

- Extreal 1.0 `Initial release`
  - Extreal.Core.Logging 1.0.0
  - Extreal.Core.SceneTransition 1.0.0
  - Extreal.Core.ResourceProvider 1.0.0
- Extreal 1.1 `Bug fixed only`
  - Extreal.Core.Logging 1.0.0
  - Extreal.Core.SceneTransition 1.0.1
  - Extreal.Core.ResourceProvider 1.0.0
- Extreal 1.2 `Added feature`
  - Extreal.Core.Logging 1.0.1
  - Extreal.Core.SceneTransition 1.1.0
  - Extreal.Core.ResourceProvider 1.1.0

Extrealバージョンは<メジャーバージョン>.<アップデート回数>です。
メジャーバージョンは大規模な変更をした場合に更新します。
アップデート回数は機能追加・変更、不具合対応をした場合に更新します。

モジュールバージョンには[Semantic Versioning 2.0.0](https://semver.org/)を使います。

Extrealバージョンとモジュールバージョンの対応は[Release](/category/release)を参照ください。

## Backward compatibility

ExtrealはUnityやサードパーティのパッケージを活用して機能を実現しています。
私たちがコントロールできない要素がExtrealには多いため後方互換の維持を約束できません。
できるだけExtrealの後方互換を維持するように努めますが後方互換を維持できないケースが発生する可能性があります。
後方互換を維持できない場合は[Release](/category/release)でアップグレード方法をガイドします。

:::note
TODO: 公開APIの確認方法を追記する。
:::

## Unity version

Extrealの開発やテストで使用するUnityはLTS([Long Term Support](https://unity3d.com/unity/qa/lts-releases))ストリームの最新バージョンを使う方針です。
Extrealが使っているサードパーティのライブラリの対応状況等を確認し、Unityバージョンを上げるタイミングを私たちで判断します。

## Installation

FrameworkはUnityパッケージで提供します。
Package Managerを使いGit URLからインストールしてください。

[Installing from a Git URL](https://docs.unity3d.com/2021.3/Documentation/Manual/upm-ui-giturl.html)

Git URLは各機能のページを参照ください。

- [Core](/category/core)
- [Integration](/category/integration)

## Feedback or Contribution

フィードバックはGitHubのIssue、コントリビューションはGitHubのPRにお願いします。

- [GitHub](https://github.com/extreal-dev)

### コントリビュータへ

- READMEに開発方法を記載しています。
- mainブランチはリリースしたもの、developブランチが開発の最新です。
- developブランチの最新からブランチを作成してPRを出してください。
- PRテンプレートを設定しているので中身を埋めてPRの状況を私たちに伝えてください。
- 作業が完了したら私たちにレビュー依頼してください。
