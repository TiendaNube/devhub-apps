import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Home } from "../components";
import { translate } from "@docusaurus/Translate";

const Index: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={translate({
        id: "siteConfig.description",
        message:
          "Desenvolva aplicativos para o ecossistema Nuvemshop e potencialize seus ganhos",
      })}
    >
      <Home />
    </Layout>
  );
};

export default Index;
