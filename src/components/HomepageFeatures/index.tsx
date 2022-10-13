import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bustling virtual spaces',
    description: (
      <>
        Extrealはあなたが賑やかなバーチャル空間を作ることをサポートします。
        ボイスチャット、テキストチャット、マルチプレイといったコミュニケーションやインタラクションのベースとなる機能をExtrealが提供するので、あなたはそれらの機能を使ったアイデアの作成に集中できます。
        友人と遊園地へ出かけるようなアクティビティ体験など、Extrealを使って賑やかなバーチャル空間を沢山作ってください。
      </>
    ),
  },
  {
    title: 'Highly maintainable',
    description: (
      <>
        Extrealはあなたが高いメンテナンス性を持つアプリケーションを作ることをサポートします。
        私たちがプロダクト開発で利用実績のあるアプリケーションアーキテクチャの構築に必要な機能をExtrealが提供します。
        このアプリケーションアーキテクチャを使用するには学習コストがかかりますが十分な見返りがあると私たちは信じています。
        Extrealを使って構築したアプリケーションアーキテクチャを使いこなして高いメンテナンス性を持つアプリケーションを手に入れましょう。
      </>
    ),
  },
  {
    title: 'Production ready',
    description: (
      <>
        Extrealはあなたがリリース可能なアプリケーションを作ることをサポートします。
        Extrealはアプリケーションの機能要件だけでなく非機能要件に対応する機能も順次提供していきます。
        例えばアセットを切り替える機能、アプリケーションの利用状況を可視化する機能などです。
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
