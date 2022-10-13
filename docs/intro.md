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
  - 賑やかなバーチャル空間の作成に必要な機能を提供するフレームワーク。
  - Unityパッケージで提供します。
- Sample Application
  - Frameworkを使ったサンプルアプリケーション。
  - Unityプロジェクトで提供します。
- Learning
  - Frameworkの使い方を学習する教材。
  - このガイドで提供します。
- Guide
  - Extrealを活用するためのガイド。
  - このドキュメントがガイドです。

## Architecture

想定するアプリケーションとFrameworkのアーキテクチャを説明します。
FrameworkやSample Applicationはこのアーキテクチャをベースに作成しています。

### Application architecture

賑やかなバーチャル空間は様々な機能を組み合わせて実現します。
機能を組み合わせるために私たちはマルチシーンを使います。

TODO: マルチシーンとアプリ実現イメージが分かる図を書く

### Framework architecture

FrameworkはUnityをベースにしています。

Frameworkは機能を次のカテゴリに分類しています。

- Core
  - アプリケーションのベースとなるコア機能を提供します。
  - ロギング、シーン遷移、オブジェクトのライフサイクルといった機能です。
- Integration
  - アプリケーションの要件に合わせて統合する機能を提供します。
  - ボイスチャット、テキストチャット、マルチプレイといった機能です。

TODO: 全体構造、依存関係が分かる図を書く

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

