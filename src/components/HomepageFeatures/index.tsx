import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

type FeatureItem = {
  title: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Virtual spaces for communication',
    description: (
      <>
        <Translate
          id='homepage.virtual-space-for-communication'
        >
          Extrealは人々が集まってコミュニケーションできるバーチャル空間を開発するための土台を提供します。
          ボイスチャット、テキストチャット、マルチプレイといったコミュニケーションのベースとなる機能をExtrealが提供するので、あなたはそれらの機能を使ったアイデアの作成に集中できます。
        </Translate>
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
        <Translate
          id='homepage.easy-to-develop-virtual-spaces'
        >
          Extrealは複雑になりがちなバーチャル空間の開発を容易にします。
          バーチャル空間を作るにはカメラ制御、入力制御など複数の機能が必要になります。
          こういった機能を自由に組み合わせてバーチャル空間を作れると、機能の再利用性が高まり様々なバーチャル空間の作成をスピーディに進められます。
          機能の再利用性を高めるために私たちがプロダクト開発で実践してきたアプリケーションの構造や仕組みを実現する機能をExtrealが提供します。
        </Translate>
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
        <Translate
          id='homepage.production-ready'
        >
          Extrealはアプリケーションの機能要件だけでなく非機能要件に対応する機能も順次提供していきます。
          例えばアプリケーションの利用状況を可視化する機能などです。
        </Translate>
        <div>
          <b><Link to="/sample-app/dev-guide#holiday-devguide-appusage">Learn more</Link></b>
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
