import React from "react";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import {
  Box,
  Text,
  Title,
  Link as NimbusLink,
  Icon as NimbusIcon,
  Tag,
} from "@nimbus-ds/components";
import { paths } from "./guidedPaths.definitions";

const GuidedPaths: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    backgroundColor="primary-textLow"
    borderRadius="4"
    padding="8"
    gap="6"
    my="20"
  >
    <Box
      as="h2"
      color="neutral-background"
      fontWeight="regular"
      fontSize="8"
      mb="none"
    >
      <Translate id="home.guidedPaths.title">
        O que você quer construir?
      </Translate>
    </Box>
    <Text color="neutral-background">
      <Translate id="home.guidedPaths.subtitle">
        Escolha seu caso de uso e siga o caminho recomendado
      </Translate>
    </Text>
    <Box
      display="grid"
      gridGap="4"
      gridTemplateColumns={{
        xs: "1fr",
        md: "repeat(2,minmax(0,1fr))",
      }}
    >
      {paths.map((path, index) => (
        <Box
          key={index}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          gap="3"
          p="4"
          borderRadius="2"
          backgroundColor="neutral-background"
        >
          <Box display="flex" flexDirection="column" gap="2">
            <Title as="h4">{path.useCase}</Title>
            <Text fontSize="caption">{path.description}</Text>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Tag appearance="primary">{path.pillars}</Tag>
            <NimbusLink as={Link} to={path.link} appearance="primary">
              <Translate id="home.guidedPaths.linkText">Ver guia</Translate>
              <NimbusIcon
                color="primary-interactive"
                source={<ExternalLinkIcon />}
              />
            </NimbusLink>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default GuidedPaths;
