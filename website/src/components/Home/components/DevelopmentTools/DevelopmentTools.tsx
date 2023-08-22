import React from "react";
import Link from "@docusaurus/Link";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import {
  Box,
  Card,
  Title,
  Text,
  Link as NimbusLink,
  Icon as NimbusIcon,
} from "@nimbus-ds/components";
import { developerTools } from "./developmentTools.definitions";

const DevelopmentTools: React.FC = () => (
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
              <NimbusLink
                as={Link}
                to={developerTool.link}
                appearance="primary"
              >
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
);

export default DevelopmentTools;
