// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

require("dotenv").config();
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "DevHub Nuvemshop",
  tagline: "DevHub Nuvemshop",
  favicon: "img/favicon.ico",
  // Set the production url of your site here
  url: "https://dev.nuvemshop.com.br",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "TiendaNube", // Usually your GitHub org/user name.
  projectName: "devhub-apps", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: process.env.DEFAULT_LOCALE,
    locales: ["pt", "en", "es"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/TiendaNube/devhub-apps/tree/master/",
        },
        gtag: {
          trackingID: process.env.GA_TRACKING_ID,
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: ["docusaurus-plugin-hotjar"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: `img/${process.env.DEFAULT_LOCALE}/social-card.png`,
      colorMode: {
        defaultMode: "light",
      },
      hotjar: {
        applicationId: process.env.HOTJAR_ID,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: process.env.ALGOLIA_APP_ID,
        // Public API key: it is safe to commit it
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: "devhub-apps",
        replaceSearchResultPathname: {
          from: '/devhub-apps/',
          to: '/'
        }
      },
      navbar: {
        logo: {
          alt: "DevHub Nuvemshop",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          height: 24,
          width: 140,
        },
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            type: "docSidebar",
            sidebarId: "sidebar",
            position: "right",
            label: "Documentação",
          },
          {
            type: "dropdown",
            label: "Ferramentas",
            position: "right",
            items: [
              {
                to: "docs/developer-tools/templates",
                label: "App Templates",
              },
              {
                to: "docs/developer-tools/nimbus",
                label: "Nimbus",
              },
              {
                to: "docs/developer-tools/nexo",
                label: "Nexo",
              },
              {
                to: "docs/developer-tools/nuvemshop-api",
                label: "Nuvemshop API",
              },
            ],
          },
        ],
      },
      footer: {
        logo: {
          alt: "DevHub Nuvemshop",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          height: 24,
          width: 140,
        },
        links: [
          {
            title: "Documentação",
            items: [
              {
                label: "Primeiros passos",
                to: "/docs/getting-started",
              },
              {
                label: "Ferramentas",
                to: "/docs/developer-tools/overview",
              },
              {
                label: "Aplicativos",
                to: "/docs/applications/overview",
              },
              {
                label: "Diretrizes de design",
                to: "/docs/design-guidelines/overview",
              },
              {
                label: "Homologação",
                to: "/docs/homologation/overview",
              },
            ],
          },

          {
            title: "Outros",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/TiendaNube/devhub-apps",
              },
              {
                label: "Nimbus",
                href: "https://nimbus.tiendanube.com/",
              },
              {
                label: "Termos e condições",
                href: "https://www.nuvemshop.com.br/parceiros/termos-de-uso",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
