/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  sidebar: [
    {
      type: "doc",
      label: "Primeiros passos",
      id: "getting-started",
    },
    {
      type: "category",
      label: "Ferramentas",
      items: [
        "developer-tools/overview",
        "developer-tools/templates",
        "developer-tools/nimbus",
        "developer-tools/nexo",
        "developer-tools/nuvemshop-api",
      ],
    },
    {
      type: "category",
      label: "Aplicativos",
      items: [
        "applications/overview",
        "applications/authentication",
        "applications/native",
        "applications/standalone",
      ],
    },
    {
      type: "category",
      label: "Diretrizes de design",
      items: [
        "design-guidelines/overview",
        "design-guidelines/template-usage",
        "design-guidelines/component-usage",
        "design-guidelines/concept-usage",
        "design-guidelines/ux-writing-usage",
      ],
    },
    {
      type: "category",
      label: "Homologação",
      items: ["homologation/overview", "homologation/checklist"],
    },
  ],
};

module.exports = sidebars;
