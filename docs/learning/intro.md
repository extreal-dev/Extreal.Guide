---
sidebar_position: 1
---

# Introduction

Extrealは私たちのプロダクト開発で培ったノウハウをベースとしています。
プロダクト開発は開発経験が豊富なエンジニアが試行錯誤しながら生産性や品質を高めるために新たな仕組みや設計原則、ライブラリを適用しているので前提とするスキルが多くなり、新規参画者の学習コストが高くなります。
そうしたプロダクト開発で獲得したノウハウを取り込んでいるExtrealも同様に学習コストは高くなります。
その見返りとしてExtrealに必要なスキルを習得した場合、そのチームの生産性は高くなると考えています。

Extrealの機能を活用したアプリケーションの作り方を体験できるように、Learningはハンズオンで提供します。
はじめてExtrealを使う人は[Core](/learning/core)から学習してください。
Core以外のLearningはCoreを学習していることを前提としています。

Introductionの残りでは、Extrealを活用するために必要となるスキルを示します。
このスキルはLearningを実施するための前提スキルでもあります。
これらのスキルの学習コストを少しでも下げるために私たちが参考にしているリソースを合わせて紹介します。
Learningをやってみて分からないことが多い場合はここで紹介したリソースを参考に自習してみてください。

:::info
アプリケーション開発にはコンテンツを作成するためにライティングやカメラワーク、アニメーション、エフェクト、レンダリングなど、下記のスキルに加えてコンテンツ作成のスキルが必要になります。
:::

## Basic skills

Extrealを活用したアプリケーション開発を行うためには次のスキルが必要です。

### Unity

#### Skills

- エディタの基本操作
- Unityの概念
  - Scene、GameObject、Prefab
- Unityの機能
  - Package Manager、Assembly Definition
- Unityのスクリプト
  - イベント関数、MonoBehaviour

#### Resources

- [XR 開発を始めたい方への個人的 Unity Learning Roadmap 2020](https://qiita.com/xrdnk/items/12f3f04f1238bb362d51)
- [Unityエンジニアになるためにやってきたこと](https://fintan.jp/page/5869/)
- [Unity ユーザーマニュアル 2021.3 (LTS)](https://docs.unity3d.com/ja/2021.3/Manual/UnityManual.html)

### C\#

#### Skills

- 基本構文
- 非同期処理
- デリゲート、イベント

#### Resources

- [XR 開発を始めたい方への個人的 Unity Learning Roadmap 2020>プログラミング言語は C#](https://qiita.com/xrdnk/items/12f3f04f1238bb362d51#%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E8%A8%80%E8%AA%9E%E3%81%AF-c)
- [C# 関連のドキュメント](https://learn.microsoft.com/ja-jp/dotnet/csharp/)

### Library

#### Skills

- VContainer
  - DIの基本的な使い方
- UniTask
  - 非同期処理の基本的な使い方
- UniRx
  - イベント処理の基本的な使い方

#### Resources

- VContainer
  - [VContainer](https://vcontainer.hadashikick.jp/)
- UniTask
  - [UniTask入門](https://learning.unity3d.jp/2974/)
- UniRx
  - [ObserverパターンからはじめるUniRx](https://learning.unity3d.jp/1324/)
  - [ゼロからしっかり覚える UniRx HandsOn](https://www.slideshare.net/oshimashoji1/unirxhandsonvol1)
    - [HandsOnプロジェクト](https://github.com/sansuu/UniRxHandsOnVol1)

### Design principles

#### Skills

- Observerパターン
- MV(R)Pパターン

#### Resources

- Observerパターン
  - [ObserverパターンからはじめるUniRx](https://learning.unity3d.jp/1324/)
- MV(R)Pパターン
  - [三種の神器とMVRPパターン](https://speakerdeck.com/xrdnk/xrdnk-three-sacred-treasures-and-mvrp-pattern)
  - [【Unity】Model-View-(Reactive)Presenterパターンとは何なのか](https://qiita.com/toRisouP/items/5365936fc14c7e7eabf9)

## Optional skills

アプリケーションの要件によって必要となるスキルは次の通りです。

### Multiplayer

#### Skills

- Netcode for GameObjects
  - マルチプレイの基本的な使い方

#### Resources

- Netcode for GameObjects
  - [Netcode for GameObjects](https://docs-multiplayer.unity3d.com/netcode/current/about/index.html)
  - [Unity Netcode for GameObjectsでオンラインマルチプレイゲームを作る](https://qiita.com/pakiln/items/e2a971260479385cd928)

### Chat

#### Skills

- Vivox Unity SDK
  - ボイス/テキストチャットの基本的な使い方

#### Resources

- Vivox Unity SDK
  - [Vivox Developer Portal](https://developer.vivox.com/)
