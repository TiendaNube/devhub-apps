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
      label: "Getting started",
      id: "getting-started",
    },
    {
      type: "category",
      label: "Developer tools",
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
      label: "Applications",
      items: [
        "applications/overview",
        "applications/authentication",
        "applications/native",
        "applications/standalone",
      ],
    },
    {
      type: "category",
      label: "Design guidelines",
      items: [
        "design-guidelines/overview",
        "design-guidelines/template-usage",
        "design-guidelines/concept-usage",
      ],
    },
    {
      type: "category",
      label: "Homologation",
      items: ["homologation/overview", "homologation/checklist"],
    },
  ],
};

module.exports = sidebars;
