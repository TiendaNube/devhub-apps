import React from "react";
import Translate from "@docusaurus/Translate";
import Link from "@docusaurus/Link";
import { Box, Button, Text } from "@nimbus-ds/components";

const Hero: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    gap="6"
    py="20"
    width={{ xs: "100%", md: "100%", lg: "70%" }}
  >
    <Box
      as="h1"
      fontSize="14"
      lineHeight="16"
      fontWeight="regular"
      color="primary-textLow"
      mb="none"
    >
      <Translate id="home.hero.title">
        Crie aplicativos para o maior ecossistema de e-commerce da América
        Latina
      </Translate>
    </Box>
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      gap="4"
      alignItems={{ xs: "flex-start", md: "center" }}
    >
      <Text fontSize="highlight" color="neutral-textLow">
        <Translate id="home.hero.stats">
          +180 mil lojas ativas · 5 países · US$335M em vendas anuais
        </Translate>
      </Text>
    </Box>
    <Box>
      <Button as={Link} to="/docs/getting-started" appearance="primary">
        <Translate id="home.hero.button">Começar a construir</Translate>
      </Button>
    </Box>
  </Box>
);

export default Hero;
