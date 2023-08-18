import React from "react";
import { Card, Text, Box, Link, Icon } from "@nimbus-ds/components";
import { ExternalLinkIcon } from "@nimbus-ds/icons";

import { packages } from "./nimbusPackages.definitions";
import NimbusProvider from "../NimbusThemeProvider";

const NimbusPackages: React.FC = () => (
  <NimbusProvider>
    <Box display="flex" flexDirection="column" gap="4">
      {packages.map((packageNimbus) => (
        <Card key={packageNimbus.name}>
          <Card.Header title={packageNimbus.title} />
          <Card.Body>
            <Text fontSize="base">{packageNimbus.description}</Text>
          </Card.Body>
          <Card.Footer>
            <Link appearance="primary">
              {packageNimbus.name}
              <Icon color="primary-interactive" source={<ExternalLinkIcon />} />
            </Link>
          </Card.Footer>
        </Card>
      ))}
    </Box>
  </NimbusProvider>
);

export default NimbusPackages;
