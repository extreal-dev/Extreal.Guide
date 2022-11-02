---
sidebar_position: 5
---

# Development Guide

:::note
TODO: 開発しながら出てきたら追記する
:::

## UI

### フォント

TODO: NotoSansJP Medium、TextMeshProで作成、デフォルト設定済み

### 解像度

Holidayはポートレートモードで使う想定です。
解像度は汎用的なサイズの1080x1920を基準にします。

GameViewの解像度に1080x1920を追加し、Unityエディタ上での動作確認はこの解像度を使ってください。

### UIの共通化

ページやモーダル、ボタンなどデザインが共通するUIはメンテナンスしやすいように共通化します。
UIの共通化にはUnityのPrefabを使います。
Prefabを追加した場合は下記に追記してください。

Prefabのパス
```
Assets/Holiday/Scenes/Common
```

- Page
  - ページ用のCanvas
  - SafeArea対応が入っています。

TODO: テキスト周りの設定の共通化

## View

AddToでなくTakeUntilDestroyを使う。

[UniRx の AddTo と TakeUntilDestroy](https://qiita.com/hadashiA/items/6c6f37b4b739aca3c29a)
