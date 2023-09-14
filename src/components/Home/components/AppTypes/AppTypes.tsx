import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import {
  Box,
  Text,
  Link as NimbusLink,
  Icon as NimbusIcon,
} from "@nimbus-ds/components";

const AppTypes: React.FC = () => (
  <Box
    display="flex"
    flexDirection={{ xs: "column", md: "row", lg: "row" }}
    alignItems="center"
    backgroundColor="primary-textLow"
    borderRadius="4"
    padding="8"
    gap="8"
  >
    <Box as="h2" color="neutral-background" fontWeight="regular" fontSize="8">
      <Translate id="home.appTypes.title">
        Descubra os diferentes tipos de aplicativos disponíveis
      </Translate>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      gap="4"
      maxWidth={{ xs: "100%", md: "100%", lg: "40%", xl: "24%" }}
    >
      <Box
        fontSize="h4"
        lineHeight="h4"
        fontWeight="bold"
        color="neutral-background"
        mt="none"
      >
        <Translate id="home.appTypes.card.1.title">
          Aplicativo incorporado
        </Translate>
      </Box>
      <Text color="neutral-background">
        <Translate id="home.appTypes.card.1.text">
          Construa aplicativos incorporados ao administrador dos lojistas para
          oferecer uma experiência aprimorada e recursos de fácil acesso.
        </Translate>
      </Text>
      <NimbusLink
        as={Link}
        to="/docs/applications/native"
        appearance="neutral-background"
      >
        <Translate id="home.appTypes.card.1.linkText">
          Ler a documentação
        </Translate>
        <NimbusIcon color="neutral-background" source={<ExternalLinkIcon />} />
      </NimbusLink>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      gap="4"
      maxWidth={{ xs: "100%", md: "100%", lg: "40%", xl: "24%" }}
      height="100%"
      backgroundColor="danger-interactive"
    >
      <Box
        fontSize="h4"
        lineHeight="h4"
        fontWeight="bold"
        color="neutral-background"
        mt="none"
      >
        <Translate id="home.appTypes.card.2.title">
          Aplicativo externo
        </Translate>
      </Box>
      <Text color="neutral-background">
        <Translate id="home.appTypes.card.2.text">
          Construa aplicativos de forma independente, para uma experiência mais
          personalizada e recursos integrados ao seu produto.
        </Translate>
      </Text>
      <NimbusLink
        as={Link}
        to="/docs/applications/standalone"
        appearance="neutral-background"
      >
        <Translate id="home.appTypes.card.2.linkText">
          Ler a documentação
        </Translate>
        <NimbusIcon color="neutral-background" source={<ExternalLinkIcon />} />
      </NimbusLink>
    </Box>
  </Box>
);

export default AppTypes;
