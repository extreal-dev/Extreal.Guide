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

### メンテナーへのメッセージ

- ファビコン、ロゴのファイルは次のサイトで作成しました。
  - https://favicon.io/
