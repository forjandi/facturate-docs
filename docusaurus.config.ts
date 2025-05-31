import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Facturate.pro',
  tagline: 'Documentación oficial de Facturate.pro - Sistema de Facturación Electrónica',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.facturatepro.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'forjandi', // Usually your GitHub org/user name.
  projectName: 'facturate-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese,
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/forjandi/facturate-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: 'Facturate.pro Blog',
            description: 'Blog de Facturate.pro',
            language: 'es',
            copyright: `Copyright © ${new Date().getFullYear()} Facturate.pro`,
          },
          editUrl:
            'https://github.com/forjandi/facturate-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/facturate-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Facturate.pro',
      logo: {
        alt: 'Facturate.pro Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://facturate.pro/documentacion',
          label: 'API',
          position: 'right',
        },
        {
          href: 'https://facturatepro.com',
          label: 'Sitio Web',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/docs/intro',
            },
            {
              label: 'Guía de Inicio',
              to: '/docs/getting-started',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Soporte',
              href: 'https://facturatepro.com/support',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'Facturate.pro',
              href: 'https://facturatepro.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Forjandi. Construido con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
