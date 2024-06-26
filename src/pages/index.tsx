import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate
            id='homepage.tagline'
          >
            UnityベースのXRフレームワーク
          </Translate>
        </p>
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
                  <h3>
                    <Translate
                      id='homepage.feature.title'
                    >
                      Extrealを使ってこのようなアプリケーションをあなたにも開発できます！
                    </Translate>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className={clsx('col col--6')}>
                <div className="text--center padding-horiz--md">
                  <h4>
                    <Translate
                      id='homepage.feature.venus-fort-virtual-experience'
                    >
                      ヴィーナスフォート最後のイルミネーションをバーチャル体験
                    </Translate>
                  </h4>
                  <p>
                    <div className={styles.youtube}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/5OxtfxyWdA8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
                    </div>
                  </p>
                </div>
              </div>
              <div className={clsx('col col--6')}>
                <div className="text--center padding-horiz--md">
                  <h4>
                    <Translate
                      id='homepage.feature.country-wide-virtual-sightseeing'
                    >
                      360°実写観光メタバースアプリBURALIT
                    </Translate>
                  </h4>
                  <p>
                    <div className={styles.youtube}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/c446Qe_l8s0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
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
