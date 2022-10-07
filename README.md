# Extreal.Guide

このガイドは[Docusaurus 2](https://docusaurus.io/)で作成しています。

### インストール

```
$ yarn
```

### ローカル開発

```
$ yarn start
```

このコマンドはローカルの開発サーバーを起動しブラウザウィンドウを開きます。
サーバーを再起動することなく、ほとんどの変更はライブで反映されます。

### ビルド

```
$ yarn build
```

このコマンドは`build`ディレクトリに静的コンテンツを生成し、任意の静的コンテンツホスティングサービスを使用して提供できます。

### デプロイ

SSHを使う場合:

```
$ USE_SSH=true yarn deploy
```

SSHを使わない場合:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

ホスティングにGitHub pagesを使っている場合、このコマンドでウェブサイトを構築して `gh-pages`ブランチにプッシュするのが便利です。

### メンテナーへ

- ファビコン、ロゴのファイルは[favicon.io](https://favicon.io/)で作成しています。
- クラス図は[Mermaid](http://mermaid-js.github.io/mermaid/)で作成しています。
  - [mdx-mermaid](https://github.com/sjwall/mdx-mermaid)を導入しています。
- 機能ページは下記のテンプレートを使ってください。

#### 機能ページのテンプレート

```
## What for?

TODO: 何のために提供した機能なのかを伝えます。

##Specification

TODO: スペックを伝えます。スペックの理解に必要な概念なども伝えます。

## Architecture

TODO: 以降の説明イメージが湧くようにクラス構成を伝えます。

## Installation

### Package

TODO: この機能のGit URLを伝えます。

### Dependencies

TODO: 他に用意する必要がある依存パッケージを伝えます。

### Settings

TODO: 設定方法を伝えます。

## Usage

TODO: スペックを網羅するように使い方を伝えます。利用シーンを表す「XXXする」という見出しを付けて目次から探しやすくします。
```

### コントリビュータへ

- mainブランチはリリースしたもの、developブランチが開発の最新です。
- developブランチの最新からブランチを作成してPRを出してください。
- PRテンプレートを設定しているので中身を埋めてPRの状況を私たちに伝えてください。
- 作業が完了したら私たちにレビュー依頼してください。