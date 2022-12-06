---
sidebar_position: 4
---

# Test Planning

[テスト種別＆テスト観点カタログ](https://fintan.jp/page/1456/)のテスト種別ごとにテスト方法、合格基準を決めています。

## Common

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
  - [テストケース](/sample-app/test-case#functional-test)
- 合格基準
  - 全件合格、テストカバレッジ100%

## Data compatibility test

- 対象なし

## Business scenario test

- 機能テストと合わせて実施

## Configuration test

- テスト方法
  - Android、iOS、Winでの手動テスト
  - [テストケース](/sample-app/test-case#functional-test)
- 合格基準
  - 全件合格、テストカバレッジ100%

## Security test

- テスト方法
  - [セキュリティ関連リンク](https://fintan-contents.github.io/mobile-app-crib-notes/reference/security/awesome-sites)のセルフチェック
- 合格基準
  - 問題なし

## Performance test

- テスト方法
  - バーチャル空間に100人アクセス状態で1.5時間実行します。
  - ヘッドレスクライアントでアクセス数とプレイヤー操作を確保します。
  - 手元の端末数台でアプリケーションの合格基準を目視で判断します。
  - サーバはCPU/メモリ使用量を監視してデータから合格基準を判断します。
- 合格基準
  - アプリケーションのフレーム落ちや停止が発生しないこと
  - MultiplayサーバのCPU/メモリ使用状況が60%以内であること

## Stress test

- 性能テストと合わせて実施

## Volume test

- 対象なし

## Long run test

- 性能テストと合わせて実施

## Failure test

- テスト方法
  - 手動テスト
    - 障害事象を手動で発生させる
  - [テストケース](/sample-app/test-case#failure-test)
- 合格基準
  - 全件合格

## Operational scenario test

- 対象なし

## Migration test

- 対象なし

## Current vs. new comparison test

- 対象なし

## Usability test

- 今後改善予定のため未実施
