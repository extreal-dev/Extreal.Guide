import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Bustling virtual spaces',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
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
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extrealはあなたが高いメンテナンス性を持つアプリケーションを作ることをサポートします。
        私たちがプロダクト開発で利用実績のあるアプリケーションアーキテクチャを想定してExtrealを開発しています。
        このアプリケーションアーキテクチャを使用するには学習コストがかかりますが十分な見返りがあると私たちは信じています。
        Extrealが想定するアプリケーションアーキテクチャを学習し使いこなして高いメンテナンス性を持つアプリケーションを手に入れましょう。
      </>
    ),
  },
  {
    title: 'Production ready',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Extrealはあなたがリリース可能なアプリケーションを作ることをサポートします。
        Extrealはアプリケーションの機能要件だけでなく非機能要件に対応する機能も順次提供していきます。
        例えばアセットを切り替える機能、アプリケーションの利用状況を可視化する機能などです。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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
