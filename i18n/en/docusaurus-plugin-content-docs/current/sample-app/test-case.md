---
sidebar_position: 5
---

# Test Case

[Test Planning](/sample-app/test-planning)で実施対象としたテスト種別のうちテストケースが必要なテストのみ記載しています。

## Functional test

- タイトル画面
  - タイトルが表示されること
  - Goボタンでアバター選択画面に移動できること
- アバター選択画面
  - 名前を入力できること
  - アバターを選択できること
    - [Starter Assets - Third Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526)のArmature
    - [Mixamo](https://www.mixamo.com)のMichelle、Amy
  - Goボタンでバーチャル空間に移動できること
- バーチャル空間
  - ボイスチャットができること
    - ミュートの切り替えができること
  - テキストチャットができること
    - メッセージを打ち込むと画面に表示されること
  - マルチプレイができること
    - 移動とジャンプができること
  - アバター選択画面に戻れること
  - 最大人数を超えた場合はユーザーに通知してアバター選択画面に戻ること

## Configuration test

- [Functional test](/sample-app/test-case#functional-test)と同じ

## Failure test

- バーチャル空間
  - Vivox（SaaS）にアクセスできない場合
    - クライアントがネットワークに繋がらない場合
      - アクセスできないことがユーザーに通知されること
      - テキスト/ボイスチャット以外の機能が使用できること
    - Vivox（SaaS）で障害が発生しクライアントに応答できない場合
      - 実現方法がないため未実施
  - Multiplayサーバにアクセスできない場合
    - クライアントがネットワークに繋がらない場合
      - アクセスできないことがユーザーに通知されること
      - マルチプレイ以外の機能が使用できること
    - Multiplayサーバで障害が発生しクライアントに応答できない場合
      - アクセスできないことがユーザーに通知されること
      - マルチプレイ以外の機能が使用できること