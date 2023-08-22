import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Home } from "../components";

const Index: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Desenvolva aplicativos para o ecosistema Nuvemshop e potencialize seus ganhos"
    >
      <Home />
    </Layout>
  );
};

export default Index;
