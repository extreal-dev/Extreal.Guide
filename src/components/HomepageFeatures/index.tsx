import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bustling virtual spaces',
    description: (
      <>
        Extrealはあなたが賑やかなバーチャル体験を作るための土台を提供します。
        ボイスチャット、テキストチャット、マルチプレイといったコミュニケーションやインタラクションのベースとなる機能をExtrealが提供するので、あなたはそれらの機能を使ったアイデアの作成に集中できます。
        友人と遊園地へ出かけるようなアクティビティ体験など、Extrealを使って賑やかなバーチャル体験を沢山作ってください。
        <div>
          <b><Link to="/intro#framework">Learn more</Link></b>
        </div>
      </>
    ),
  },
  {
    title: 'Highly maintainable',
    description: (
      <>
        私たちがプロダクト開発で利用実績のあるアプリケーションアーキテクチャの構築に必要な機能をExtrealが提供します。
        このアプリケーションアーキテクチャを使用するには学習コストがかかりますが十分な見返りがあると私たちは信じています。
        Extrealを使って構築したアプリケーションアーキテクチャを使いこなして高いメンテナンス性を持つアプリケーションを手に入れてください。
        <div>
          <b><Link to="/intro#application">Learn more</Link></b>
        </div>
      </>
    ),
  },
  {
    title: 'Production ready',
    description: (
      <>
        Extrealはアプリケーションの機能要件だけでなく非機能要件に対応する機能も順次提供していきます。
        例えばアプリケーションの利用状況を可視化する機能などです。
        これらプロダクションに向けたExtrealの機能を活用し、アプリケーションの魅力を高めてユーザーを幸せにしてください。
        <div>
          <b>Available from June 2023</b>
        </div>
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
