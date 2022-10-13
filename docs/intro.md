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

FrameworkのアーキテクチャとExtrealが想定するアプリケーションアーキテクチャを説明します。
FrameworkやSample Applicationはこのアーキテクチャを前提に作成しています。

### Framework architecture

![Framework architecture](/img/fw-arch.png)

FrameworkはUnityやサードパーティのパッケージを使って機能を実現します。
Frameworkは機能を次のカテゴリに分類しています。

- Core
  - アプリケーションのベースとなるコア機能を提供します。
  - ロギング、シーン遷移、ライフサイクルといった機能です。
- Integration
  - アプリケーションの要件に合わせてアプリケーションに統合する機能を提供します。
  - ボイスチャット、テキストチャット、マルチプレイといった機能です。

### Application architecture

TODO: MVP、マルチシーン、FW機能などアプリ実現イメージが分かる図を書く

## License

[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)

Extrealが提供しているコンテンツは無償でご利用いただけます。
外部のプロダクト、サービス、OSS等は提供元のライセンスに従ってください。

## Versioning



TODO: モジュールとフレームワーク全体のバージョン体系、その関係、確認方法を伝える

## Backward compatibility

TODO: 後方互換の考え方、公開APIを伝える

## Installation

TODO: インストール方法を伝える。Package ManagerのGit URL指定など

## Feedback or Contribute

TODO: フィードバック、コントリビュートの方法を伝える

