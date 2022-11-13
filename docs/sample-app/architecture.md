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

AppシーンとModelsシーンは個別の機能提供でなく、特別なシーンなのでここで説明します。

Appシーンがアプリケーションのエントリーポイントになります。
Appシーンではアプリケーションの初期化処理やステージ構成など、アプリケーション全体に関わる処理を行います。

ModelsシーンはMV(R)PパターンのModelを集めたシーンです。
Modelは複数シーンのPresenterから使用する可能性があるので、個別機能のシーンではなくModelsシーンに集めて全てのシーンから使用できるようにしています。
例えば、PlayerというModelをModelsシーンに配置しておき、AvatarSelectionScreenシーンで名前とアバターをPlayerに設定し、PlayerControlシーンでプレイヤーをスポーンするためにPlayerを使っています。
