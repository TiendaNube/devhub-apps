import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Title,
  Text,
  Card,
  Button,
  Box,
  useToast,
} from "@nimbus-ds/components";
import { useAuth, useConfig } from "@/hooks";

const Success: React.FC = () => {
  const { auth } = useAuth();
  const { config } = useConfig();
  const { addToast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      window.location.href = "/";
    }
  }, []);

  const onRedirect = () => {
    if (config?.apiURL && config?.clientId) {
      window.location.href = "/";
    } else {
      addToast({
        type: "danger",
        text: "Please fill in your app settings",
        duration: 4000,
        id: "error-config",
      });
      navigate("/configuration");
    }
  };

  return (
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
        <Button onClick={onRedirect} appearance="primary">
          Abri template
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Success;
