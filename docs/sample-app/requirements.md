---
sidebar_position: 2
---

# Requirements

ここではHolidayで実現している要件を示します。

:::caution
Holidayの要件は本番運用するアプリケーションに必要な要件を網羅していません。
本番運用するアプリケーションの場合は[非機能要求グレード](https://www.ipa.go.jp/sec/softwareengineering/std/ent03-b.html)を参考に非機能要件の観点を洗い出して要件定義を実施してください。
:::

## Functional requirements

Holidayは友人や家族で集まって休日のひと時を過ごしてもらうことを目指したアプリケーションです。

![holiday](/img/holiday.png)

- タイトル画面
  - タイトル表示のみ
- アバター選択画面
  - 名前を入力できる
  - アバターを選択できる
    - [Starter Assets - Third Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526)のArmature
    - [Mixamo](https://www.mixamo.com)のMichelle、Amy
- バーチャル空間
  - ボイスチャットができる
  - テキストチャットができる
  - マルチプレイができる
  - アバター選択画面に戻れる

## Non-functional requirements

- 開催時間
  - 1回1時間、不定期開催
- 利用人数
  - タイトル画面、アバター選択画面
    - 制限なし
  - バーチャル空間
    - 最大人数100人
- 利用環境
  - PC
    - Windows 10
    - 解像度：1920x1080
  - モバイル
    - iOS 14
    - Android 11
    - 解像度：1080x1920（ポートレートモード）
  - インターネット回線
    - 上り/下り 40Mbps以上
- 地域、言語
  - 日本、日本語のみ

<!--
    - マルチプレイ
      - 100人目まではマルチプレイに参加できる
        - 自分が全員に表示される
      - 101～120人目までは待機状態となりマルチプレイに参加できない
        - 自分が非表示、100人の様子は見える
        - 待機状態、他の人から見えていないことをユーザに通知
        - 他の人が抜けて順番が回ってくるとマルチプレイに参加できる
        - マルチプレイに参加したことをユーザに通知
      - 121人目以降はステージにアクセスできない
        - 人数オーバーでアクセスできないことをユーザに通知
    - テキストチャット
      - 待機状態を含めた120人全員が使用できる
    - ボイスチャット
      - 待機状態を含めた120人全員が使用できる
-->