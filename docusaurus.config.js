// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Microsoft Word Documentation',
  tagline: 'Comprehensive Overview, Getting Started, User Guide & Troubleshooting Manual',
  favicon: 'img/favicon.ico',

  url: 'https://anumitaray.github.io',
  baseUrl: '/word-docs/',

  organizationName: 'anumitaray',
  projectName: 'word-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/anumitaray/word-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Microsoft Word Docs',
        logo: {
          alt: 'Word Docs Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/docs/overview',
            label: 'Overview',
            position: 'left',
          },
          {
            to: '/docs/getting-started',
            label: 'Getting Started',
            position: 'left',
          },
          {
            to: '/docs/user-guide',
            label: 'User Guide',
            position: 'left',
          },
          {
            to: '/docs/troubleshooting',
            label: 'Troubleshooting',
            position: 'left',
          },
          {
            href: 'https://github.com/anumitaray/word-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Product Overview',
                to: '/docs/overview',
              },
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'User Guide',
                to: '/docs/user-guide',
              },
              {
                label: 'Troubleshooting',
                to: '/docs/troubleshooting',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Microsoft 365 Portal',
                href: 'https://portal.office.com',
              },
              {
                label: 'Office Support',
                href: 'https://support.microsoft.com/word',
              },
            ],
          },
          {
            title: 'Repository',
            items: [
              {
                label: 'GitHub Repository',
                href: 'https://github.com/anumitaray/word-docs',
              },
            ],
          },
        ],
        copyright: `Copyright ? ${new Date().getFullYear()} Microsoft Word Documentation Portal. Published on GitHub Pages.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
