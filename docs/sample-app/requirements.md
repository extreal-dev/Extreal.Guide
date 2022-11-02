---
sidebar_position: 2
---

# Requirements

Holidayは友人や家族で集まって休日のひと時を過ごしてもらうことを目指したアプリケーションです。

## Functional requirements

:::note
TODO: 完成したらシーン遷移を入れる
:::

- タイトル画面
  - ライセンスが確認できる
- アバター選択画面
  - 名前を入力できる
  - アバターを選択できる
    - [Unity-Chan! Model](https://assetstore.unity.com/packages/3d/characters/unity-chan-model-18705)
    - [Starter Assets - Third Person Character Controller](https://assetstore.unity.com/packages/essentials/starter-assets-third-person-character-controller-196526)
- ルーム選択画面
  - ルームに入室できる
- バーチャルルーム
  - ボイスチャットができる
  - テキストチャットができる
  - マルチプレイができる（他のアバター、リアクション表示など）
  - ルームから退室してロビーに戻れる

## Non-functional requirements

- 開催時間
  - 1回2時間
- 利用人数
  - タイトルページ、アバター選択ページ、ルーム選択ページ
    - 制限なし
  - ルーム
    - テキストチャット
      - 制限なし
    - ボイスチャット
      - 制限なし
    - マルチプレイ
      - 最大20人
        - 先着20人はマルチプレイに参加できる（全員に表示される）
        - 21人目以降はマルチプレイに参加できない（自分が非表示、マルチプレイの様子は見える）
        - 誰かが抜けて20人に含まれればマルチプレイに参加できる
- 利用環境
  - モバイル
    - iOS 14
    - Android 11
  - インターネット回線
    - 上り/下り 4OMbps以上
- 地域
  - 日本
