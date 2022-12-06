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
- バーチャル空間
  - ボイスチャットができること
    - ミュートの切り替えができること
  - テキストチャットができること
    - メッセージを打ち込むと画面に表示されること
  - マルチプレイができる
    - 移動とジャンプができること
  - アバター選択画面に戻れること

## Configuration test

- [Functional test](/sample-app/test-case#functional-test)と同じ

## Failure test

- バーチャル空間
  - Vivox（SaaS）にアクセスできない場合
    - アクセスできないことがユーザーに通知されること
  - Multiplayサーバにアクセスできない場合
    - アクセスできないことがユーザーに通知されること
  - アバター選択画面に戻り再接続されること
    - バーチャル空間でネットワークを切断する
    - アバター選択画面に戻りネットワークを復旧する
    - バーチャル空間に入りマルチプレイ、ボイス/テキストチャットができること

<!--
  - テストケース
    - Vivox（SaaS）にアクセスできない場合
      - テキスト/ボイスチャット以外の機能が使用できること
      - アクセスが復旧した場合は再接続されテキスト/ボイスチャットが使用できること
      - アクセスできないことがユーザーに通知されること
    - Multiplayサーバにアクセスできない場合
      - マルチプレイ以外の機能が使用できること
      - アクセスが復旧した場合は再接続されマルチプレイが使用できること
      - アクセスできないことがユーザーに通知されること
-->
