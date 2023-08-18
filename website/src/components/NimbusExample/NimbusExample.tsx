import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { Title, Card, Text, Button, Alert, Box } from "@nimbus-ds/components";
import NimbusProvider from "../NimbusThemeProvider";

const NimbusExample: React.FC = () => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <NimbusProvider>
      <Box
        backgroundColor={isDarkMode ? "neutral-background" : "neutral-surface"}
        padding="4"
        borderRadius="2"
      >
        <Title as="h1">My simple app</Title>
        <Box display="flex" flexDirection="column" gap="4">
          <Alert appearance="primary" title="Hello world">
            This is a simple alert to show Nimbus components
            <Button>Click me</Button>
          </Alert>
          <Card>
            <Card.Body>
              <Text fontSize="base">
                This is a sample paragraph inside a Card component.
              </Text>
            </Card.Body>
          </Card>
        </Box>
      </Box>
    </NimbusProvider>
  );
};

export default NimbusExample;
