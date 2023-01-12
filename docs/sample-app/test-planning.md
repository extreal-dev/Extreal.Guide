---
sidebar_position: 4
---

# Test Planning

[テスト種別＆テスト観点カタログ](https://fintan.jp/page/1456/)に下記を加えてテスト方法や合格基準を決めています。

- レビュー
- モバイルアプリケーション

## Review

- テスト方法
  - 全成果物のピアレビュー
  - GitHubのブランチ設定でマージを制限しています。
  - 1人以上の承認、全てのConversationのResolvedがマージ条件です。
- 合格基準
  - 全FB対応済み

## Mobile Application

次のような観点がありますが今後対応予定のため未実施です。

- アプリケーションがバックグラウンドに遷移/復帰した時、フォーカスが外れた時の動作
- アプリケーション使用時の電池消耗への対応

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

対象なし。

## Business scenario test

機能テストと合わせて実施します。

## Configuration test

- テスト方法
  - Android、iOS、Winでの手動テスト
  - マイク付き有線イヤホンで実施
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
  - バーチャル空間に90人アクセスした状態で1.5時間実行します。
  - テスト用アプリケーションでアクセス数を確保します。
    - テスト用アプリケーションはUIを無くしプレイヤー操作のみを実施します。
  - 手元の端末数台でアプリケーションの合格基準を目視で判断します。
  - サーバはCPU使用率/メモリ使用量を監視してデータから合格基準を判断します。
- 合格基準
  - アプリケーションのフレーム落ちや停止が発生しないこと
  - マルチプレイサーバのCPU使用率/メモリ使用量が一定の範囲に収まり、メモリリーク等の問題がないこと

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
  - [テストケース](/sample-app/test-case#failure-test)
- 合格基準
  - 全件合格

## Operational scenario test

次のような観点がありますが本番運用しないため未実施です。

- サーバーの起動/停止を手順通りに実施できること
- サーバー障害が発生した場合に手順通りに復旧できること
- スタッフがアプリケーションに入って正常稼働を監視できること

## Migration test

次のような観点がありますがストア（Google Play、Apple Store）にリリースしないため未実施です。

- 次のバージョンと現行のバージョンが本番環境で動作すること
  - ストアにリリースする場合は審査用と現行の2バージョンを本番環境で動作させる必要があります。
- バージョンアップできること

## Current vs. new comparison test

対象なし。

## Usability test

今後改善予定のため未実施です。
