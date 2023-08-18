import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import {
  Box,
  Button,
  Card,
  Title,
  Text,
  Link as NimbusLink,
  Icon as NimbusIcon,
} from "@nimbus-ds/components";
import { ThemeProvider } from "@nimbus-ds/styles";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./home.module.css";
import { developerTools, links } from "./_home.definitions";

const Home: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  console.log("colorMode", colorMode);
  console.log("isDark", isDarkMode);
  return (
    <>
      <div className={isDarkMode ? styles.homeDark : styles.homeLight}>
        <div
          className={classnames(
            styles.homeBackground,
            isDarkMode ? styles.homeBackgroundDark : styles.homeBackgroundLight
          )}
        />
        <ThemeProvider theme={isDarkMode ? "dark" : "base"} id="theme-provider">
          <div className={classnames("container", styles.homeContainer)}>
            <Box
              display="flex"
              flexDirection="column"
              height="432px"
              justifyContent="center"
              gap="4"
              width={{ xs: "100%", md: "100%", lg: "50%" }}
            >
              <Box
                as="h1"
                fontSize="12"
                lineHeight="14"
                fontWeight="regular"
                color="primary-textLow"
              >
                Desenvolva aplicativos para o ecosistema Nuvemshop e
                potencialize seus ganhos
              </Box>
              <Button as={Link} to="/docs/getting-started">
                Getting started
              </Button>
            </Box>
            <Box display="flex" flexDirection="column" my="20" gap="4">
              <Title as="h2">Ferramentas de desenvolvimento</Title>
              <Box
                display="grid"
                gridGap="5"
                gridTemplateColumns={{
                  md: "repeat(2,minmax(0,1fr))",
                  lg: "repeat(4,minmax(0,1fr))",
                }}
              >
                {developerTools.map((developerTool, index) => {
                  const Icon = developerTool.icon;
                  return (
                    <Card key={index}>
                      <Card.Header>
                        <NimbusIcon source={<Icon size="medium" />} />
                      </Card.Header>
                      <Card.Body>
                        <Box display="flex" flexDirection="column" gap="1">
                          <Title as="h4">{developerTool.title}</Title>
                          <Text>{developerTool.text}</Text>
                        </Box>
                      </Card.Body>
                      <Card.Footer>
                        <NimbusLink appearance="primary">
                          {developerTool.linkText}
                          <NimbusIcon
                            color="primary-interactive"
                            source={<ExternalLinkIcon />}
                          />
                        </NimbusLink>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row", lg: "row" }}
              alignItems="center"
              backgroundColor="primary-textLow"
              borderRadius="4"
              padding="8"
              gap="8"
            >
              <Box
                as="h2"
                color="neutral-background"
                fontWeight="regular"
                fontSize="8"
              >
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
                  Native app
                </Box>
                <Text color="neutral-background">
                  Construa aplicativos integrados a no administrador de lojas de
                  forma nativa, para experiência aprimorada e recursos de fácil
                  acesso.
                </Text>
                <NimbusLink appearance="primary">
                  Ler a documentação
                  <NimbusIcon
                    color="primary-interactive"
                    source={<ExternalLinkIcon />}
                  />
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
                  Standalone app
                </Box>
                <Text color="neutral-background">
                  Construa aplicativos de forma independente, para uma
                  experiência mais personalizada e recursos integrados ao seu
                  produto.
                </Text>
                <NimbusLink appearance="primary">
                  Ler a documentação
                  <NimbusIcon
                    color="primary-interactive"
                    source={<ExternalLinkIcon />}
                  />
                </NimbusLink>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" my="20" gap="4">
              <Title as="h2">Outros links</Title>
              <Box
                display="grid"
                gridGap="5"
                gridTemplateColumns={{
                  md: "repeat(2,minmax(0,1fr))",
                  lg: "repeat(4,minmax(0,1fr))",
                }}
              >
                {links.map((link, index) => {
                  return (
                    <Card key={index}>
                      <Card.Body>
                        <Title as="h4">{link.title}</Title>
                      </Card.Body>
                      <Card.Footer>
                        <NimbusLink appearance="primary">
                          Ler a documentação
                          <NimbusIcon
                            color="primary-interactive"
                            source={<ExternalLinkIcon />}
                          />
                        </NimbusLink>
                      </Card.Footer>
                    </Card>
                  );
                })}
              </Box>
            </Box>
          </div>
        </ThemeProvider>
      </div>
    </>
  );
};

export default Home;
