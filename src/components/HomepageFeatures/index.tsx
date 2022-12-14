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
    title: 'Virtual spaces for communication',
    description: (
      <>
        Extrealは人々が集まってコミュニケーションできるバーチャル空間を作るための土台を提供します。
        ボイスチャット、テキストチャット、マルチプレイといったコミュニケーションのベースとなる機能をExtrealが提供するので、あなたはそれらの機能を使ったアイデアの作成に集中できます。
        友人と遊園地へ出かけるようなアクティビティ体験など、Extrealを使って楽しい体験に繋がるバーチャル空間を沢山作ってください。
        <div>
          <b><Link to="/intro#framework">Learn more</Link></b>
        </div>
      </>
    ),
  },
  {
    title: 'Easy to develop virtual spaces',
    description: (
      <>
        バーチャル空間を作るにはカメラ制御、入力制御、ボイスチャット、マルチプレイなど複数の機能が必要になります。
        こういった機能を自由に組み合わせてバーチャル空間を作れると、機能の再利用性が高まり様々なバーチャル空間の作成をスピーディに進められます。
        機能の再利用性を高めるために私たちがプロダクト開発で実践してきたアプリケーションの構造や仕組みを実現する機能をExtrealが提供します。
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
