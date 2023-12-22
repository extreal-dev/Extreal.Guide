---
sidebar_position: 4
---

# Test Planning

[テスト種別＆テスト観点カタログ](https://fintan.jp/page/1456/)に下記を加えてテスト方法や合格基準を決めています。

- レビュー

## Review

- テスト方法
  - 全成果物のピアレビュー
  - GitHubのブランチ設定でマージを制限しています。
  - 1人以上の承認、全てのConversationのResolvedがマージ条件です。
- 合格基準
  - 全FB対応済み

## Syntax check

- テスト方法
  - [Roslyn Analyzers](https://github.com/dotnet/roslyn-analyzers)、[Code Cracker](https://github.com/code-cracker/code-cracker)による静的解析
- 合格基準
  - 問題なし

## Functional test

- テスト方法
  - 手動テスト
  - [テストケース](./test-case.md#functional-test)
- 合格基準
  - 全件合格、テストカバレッジ100%

## Data compatibility test

対象なし。

## Business scenario test

機能テストと合わせて実施します。

## Configuration test

- テスト方法
  - Chromeでの手動テスト
  - [テストケース](./test-case.md#functional-test)
- 合格基準
  - 全件合格、テストカバレッジ100%

## Security test

- テスト方法
  - [セキュリティ関連リンク](https://fintan-contents.github.io/mobile-app-crib-notes/reference/security/awesome-sites)のセルフチェック
- 合格基準
  - 問題なし

## Performance test

- テスト方法
- マルチプレイ、テキストチャット
  - バーチャル空間に100人アクセスした状態で1.5時間実行します。
    - テスト用アプリケーションでアクセス数を確保します。
      - テスト用アプリケーションはUIを無くしプレイヤー操作のみを実施します。
    - 手元のPCでアプリケーションの合格基準を目視で判断します。
    - アプリケーションのCPU使用率/メモリ使用量を監視してデータから合格基準を判断します。
  - 合格基準
    - アプリケーションのフレーム落ちや停止が発生しないこと
    - アプリケーションのCPU使用率/メモリ使用量が一定の範囲に収まり、メモリリーク等の問題がないこと
- ボイスチャット
  - バーチャル空間に10人アクセスした状態で1.5時間実行します。
    - テスト用アプリケーションでアクセス数を確保します。
      - テスト用アプリケーションはUIを無くしプレイヤー操作のみを実施します。
    - 手元のPCでアプリケーションの合格基準を目視で判断します。
    - アプリケーションのCPU使用率/メモリ使用量を監視してデータから合格基準を判断します。
  - 合格基準
    - アプリケーションのフレーム落ちや停止が発生しないこと
    - アプリケーションのCPU使用率/メモリ使用量が一定の範囲に収まり、メモリリーク等の問題がないこと

## Stress test

性能テストと合わせて実施します。

## Volume test

対象なし。

## Long run test

性能テストと合わせて実施します。

## Failure test

- テスト方法
  - 手動テスト
    - 障害事象を手動で発生させる
  - [テストケース](./test-case.md#failure-test)
- 合格基準
  - 全件合格

## Operational scenario test

次のような観点がありますが本番運用しないため未実施です。

- サーバーの起動/停止を手順通りに実施できること
- サーバー障害が発生した場合に手順通りに復旧できること
- スタッフがアプリケーションに入って正常稼働を監視できること

## Migration test

次のような観点がありますがリリースしないため未実施です。

- 次のバージョンと現行のバージョンが本番環境で動作すること
- バージョンアップできること

## Current vs. new comparison test

対象なし。

## Usability test

サンプルアプリケーションのため未実施です。
