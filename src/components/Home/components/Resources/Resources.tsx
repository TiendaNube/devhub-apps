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
import { resources } from "./resources.definitions";

const Resources: React.FC = () => (
  <Box display="flex" flexDirection="column" my="20" gap="4">
    <Title as="h2">
      <Translate id="home.resources.title">Recursos</Translate>
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
      {resources.map((resource, index) => {
        const linkProps = resource.isExternal
          ? {
              as: "a" as const,
              href: resource.link,
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : { as: Link, to: resource.link };

        return (
          <Card key={index}>
            <Card.Body>
              <Box display="flex" flexDirection="column" gap="1">
                <Title as="h4">{resource.title}</Title>
                <Text fontSize="caption">{resource.description}</Text>
              </Box>
            </Card.Body>
            <Card.Footer>
              <NimbusLink {...linkProps} appearance="primary">
                {resource.linkText}
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

export default Resources;
