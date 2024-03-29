// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Extreal',
  url: 'https://extreal-dev.github.io',
  baseUrl: '/Extreal.Guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'extreal-dev', // Usually your GitHub org/user name.
  projectName: 'Extreal.Guide', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Fintan',
          src: 'img/fintan-logo.jpg',
          href: 'https://fintan.jp',
        },
        items: [
          {
            href: '/',
            label: 'Extreal',
            position: 'left',
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right'
          },
          {
            type: 'localeDropdown',
            position: 'right'
          },
          {
            href: 'https://fintan.jp/blog-category/xr/',
            label: 'Fintan - XR',
            position: 'right',
          },
          {
            href: 'https://github.com/extreal-dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'License',
            items: [
              {
                label: 'Apache License 2.0',
                href: 'https://www.apache.org/licenses/LICENSE-2.0',
              },
            ],
          },
          {
            title: 'Feedback',
            items: [
              {
                label: 'GitHub Issues',
                href: 'https://github.com/extreal-dev',
              },
            ],
          },
          {
            title: 'Used by',
            items: [
              {
                label: 'BURALIT',
                href: 'https://www.buralit.com/',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                html: `
                    <a class="footer__link-item" href="javascript:void(0);" onclick="goTermsOfUse()">Terms of Use</a>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TIS, Inc. Built with Docusaurus.<br/><small>本サイトに掲載されている商品またはサービスなどの名称は各社の商標または登録商標です。</small>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp']
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
    }),

  plugins: [
    require.resolve("docusaurus-plugin-image-zoom")
  ],

  scripts: [
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'extreal-dev.github.io,all.fintan'
    },
    '/Extreal.Guide/js/custom.js',
    '/Extreal.Guide/en/js/custom.js',
  ],
};

module.exports = config;
