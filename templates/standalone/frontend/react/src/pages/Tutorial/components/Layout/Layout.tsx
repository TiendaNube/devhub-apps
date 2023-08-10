import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Card, Text } from "@nimbus-ds/components";

const Layout: React.FC = () => (
  <Box
    width="100%"
    minHeight="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Box mx="auto" display="flex" gap="6">
      <Box width="500px">
        <Outlet />
      </Box>
      <Box width="230px">
        <Card>
          <Box display="flex" flexDirection="column">
            <Text>Configuração</Text>
            <Text>Instalação</Text>
            <Text>Sucesso</Text>
          </Box>
        </Card>
      </Box>
    </Box>
  </Box>
);

export default Layout;
