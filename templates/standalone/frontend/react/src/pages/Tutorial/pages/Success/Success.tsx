import React from "react";
import { Title, Text, Card, Button, Box } from "@nimbus-ds/components";

const success: React.FC = () => (
  <Card>
    <Card.Header>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title as="h3">Tudo Pronto</Title>
      </Box>
    </Card.Header>
    <Card.Body>
      <Text>Seu aplicativo foi configurado com sucesso</Text>
    </Card.Body>
    <Card.Footer>
      <Button
        onClick={() => {
          window.location.href = "/";
        }}
        appearance="primary"
      >
        Abri template
      </Button>
    </Card.Footer>
  </Card>
);

export default success;
