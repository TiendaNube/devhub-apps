import React from "react";
import Link from "@docusaurus/Link";
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
      Descubra os diferentes tipos de aplicativos disponíveis
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
        Aplicativo nativo
      </Box>
      <Text color="neutral-background">
        Construa aplicativos integrados a no administrador de lojas de forma
        nativa, para experiência aprimorada e recursos de fácil acesso.
      </Text>
      <NimbusLink as={Link} to="/docs/applications/native" appearance="primary">
        Ler a documentação
        <NimbusIcon color="primary-interactive" source={<ExternalLinkIcon />} />
      </NimbusLink>
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
        Aplicativo standalone
      </Box>
      <Text color="neutral-background">
        Construa aplicativos de forma independente, para uma experiência mais
        personalizada e recursos integrados ao seu produto.
      </Text>
      <NimbusLink
        as={Link}
        to="/docs/applications/standalone"
        appearance="primary"
      >
        Ler a documentação
        <NimbusIcon color="primary-interactive" source={<ExternalLinkIcon />} />
      </NimbusLink>
    </Box>
  </Box>
);

export default AppTypes;
