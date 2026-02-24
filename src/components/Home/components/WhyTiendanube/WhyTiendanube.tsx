import React from "react";
import Translate from "@docusaurus/Translate";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import {
  Box,
  Card,
  Title,
  Text,
  Link as NimbusLink,
  Icon as NimbusIcon,
} from "@nimbus-ds/components";
import { stats, benefits } from "./whyTiendanube.definitions";

const WhyTiendanube: React.FC = () => (
  <Box display="flex" flexDirection="column" gap="8" my="20">
    <Title as="h2">
      <Translate id="home.whyTiendanube.title">
        Por que desenvolver para Tiendanube?
      </Translate>
    </Title>
    <Box
      display="grid"
      gridGap="5"
      gridTemplateColumns={{
        xs: "1fr",
        md: "repeat(2,minmax(0,1fr))",
        lg: "repeat(4,minmax(0,1fr))",
      }}
    >
      {stats.map((stat, index) => (
        <Card key={index}>
          <Card.Body>
            <Box display="flex" flexDirection="column" gap="2">
              <Box
                as="p"
                fontSize="h2"
                fontWeight="bold"
                color="primary-interactive"
                mb="none"
              >
                {stat.value}
              </Box>
              <Title as="h4">{stat.label}</Title>
              <Text fontSize="caption">{stat.description}</Text>
            </Box>
          </Card.Body>
        </Card>
      ))}
    </Box>
    <Box
      display="grid"
      gridGap="4"
      gridTemplateColumns={{
        xs: "1fr",
        md: "repeat(2,minmax(0,1fr))",
      }}
    >
      {benefits.map((benefit, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          gap="2"
          p="4"
          borderRadius="2"
          borderColor="neutral-surfaceHighlight"
          borderStyle="solid"
          borderWidth="1"
        >
          <Text>✦</Text>
          <Text>{benefit.text}</Text>
        </Box>
      ))}
    </Box>
    <Box>
      <NimbusLink
        as="a"
        href="https://www.tiendanube.com/socios/tecnologicos"
        target="_blank"
        rel="noopener noreferrer"
        appearance="primary"
      >
        <Translate id="home.whyTiendanube.partnerLink">
          Conheça o Programa de Partners
        </Translate>
        <NimbusIcon
          color="primary-interactive"
          source={<ExternalLinkIcon />}
        />
      </NimbusLink>
    </Box>
  </Box>
);

export default WhyTiendanube;
