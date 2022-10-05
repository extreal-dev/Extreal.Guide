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
    title: 'Lively virtual spaces',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Extrealは賑やかなバーチャル空間を作り出すことを目指したフレームワークです。
        ボイスチャット、テキストチャット、マルチプレイといったコミュニケーションやインタラクションのベースとなる機能をExtrealが提供するので、
        あなたはそれらの機能を使ってアイデアの作成に集中できます。
        友人と遊園地へ出かけるようなアクティビティ体験など、賑やかなバーチャル空間をあなたはすぐに作成できます。
      </>
    ),
  },
  {
    title: 'Quality',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
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
