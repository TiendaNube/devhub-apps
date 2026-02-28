import React from "react";
import Link from "@docusaurus/Link";
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
import { pillars } from "./threePillars.definitions";

const ThreePillars: React.FC = () => (
  <Box display="flex" flexDirection="column" my="20" gap="4">
    <Title as="h2">
      <Translate id="home.threePillars.title">
        Três formas de estender a plataforma
      </Translate>
    </Title>
    <Text>
      <Translate id="home.threePillars.subtitle">
        Escolha onde construir de acordo com o que seu aplicativo precisa
      </Translate>
    </Text>
    <Box
      display="grid"
      gridGap="5"
      gridTemplateColumns={{
        xs: "1fr",
        md: "repeat(3,minmax(0,1fr))",
      }}
    >
      {pillars.map((pillar, index) => {
        const Icon = pillar.icon;
        return (
          <Card key={index}>
            <Card.Header>
              <NimbusIcon source={<Icon size="medium" />} />
            </Card.Header>
            <Card.Body>
              <Box display="flex" flexDirection="column" gap="2">
                <Title as="h3">{pillar.title}</Title>
                <Text>{pillar.text}</Text>
              </Box>
            </Card.Body>
            <Card.Footer>
              <NimbusLink as={Link} to={pillar.link} appearance="primary">
                {pillar.linkText}
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
);

export default ThreePillars;
