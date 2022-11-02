---
sidebar_position: 3
---

# Architecture

## System Structure

ユーザは各ストアやAWS S3からダウンロードしてアプリケーションを使用します。
アプリケーションに3DモデルなどのアセットやVivoxなどの接続情報を含めて配布します。
アプリケーションから直接処理に必要なSaaSやサーバに接続します。

![system structure](/img/holiday-sys-structure.png)

## Application Structure

HolidayのアプリケーションアーキテクチャはExtrealが想定している[アーキテクチャ](/intro#application)を採用します。
Holidayのステージとシーンは次の通りです。

![application structure](/img/holiday-app-structure.png)

:::note
TODO: 完成したら実装に合わせて修正する
:::
