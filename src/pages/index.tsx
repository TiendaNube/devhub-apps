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
          "Crie aplicativos para o maior ecossistema de e-commerce da América Latina",
      })}
    >
      <Home />
    </Layout>
  );
};

export default Index;
