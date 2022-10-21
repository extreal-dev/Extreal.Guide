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
            to="/quickstart">
            Quickstart - 30min ⏱️
          </Link>
        </div>
        <div style={{maxWidth: "520px", margin: "30px auto 0 auto"}} className="theme-admonition theme-admonition-danger alert alert--danger admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
          <div className="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><svg viewBox="0 0 12 16"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg></span>danger</div><div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module">
            <p>Extrealは現在開発中です。2022年12月に正式リリースを予定しています。
正式リリースまでは試す程度にとどめ本格利用はご遠慮ください。</p>
          </div>
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
