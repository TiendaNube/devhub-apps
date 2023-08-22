import React from "react";
import { Card, Text, Box, Link, Icon } from "@nimbus-ds/components";
import { ExternalLinkIcon } from "@nimbus-ds/icons";

import { templates } from "./nimbusTemplates.definitions";

const NimbusTemplates: React.FC = () => (
  <Box
    display="grid"
    gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }}
    gap="4"
  >
    {templates.map((packageNimbus) => (
      <Card key={packageNimbus.title}>
        <Card.Header title={packageNimbus.title} />
        <Card.Body>
          <Text lineClamp={4}>{packageNimbus.description}</Text>
        </Card.Body>
        <Card.Footer>
          <Link appearance="primary">
            Ver exemplo
            <Icon color="primary-interactive" source={<ExternalLinkIcon />} />
          </Link>
        </Card.Footer>
      </Card>
    ))}
  </Box>
);

export default NimbusTemplates;
