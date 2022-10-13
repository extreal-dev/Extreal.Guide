import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Quickstart - 30min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Unity based XR framework">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.block}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--12')}>
                <div className="text--center padding--md">
                  <h3>Extrealを使ってこのようなアプリケーションをあなたにも開発できます！</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className={clsx('col col--6')}>
                <div className="text--center padding-horiz--md">
                  <h4>ヴィーナスフォート最後のイルミネーションをバーチャル体験</h4>
                  <p>
                    <div className={styles.youtube}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/5OxtfxyWdA8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </p>
                </div>
              </div>
              <div className={clsx('col col--6')}>
                <div className="text--center padding-horiz--md">
                  <h4>全国各地をバーチャルで観光＆体験</h4>
                  <p>
                    <div className={styles.youtube}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/O8wFOeL-IkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
