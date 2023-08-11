import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Title } from "@nimbus-ds/components";
import { Header, ListSteps } from "..";

const Layout: React.FC = () => (
  <>
    <Header />
    <Box
      width="100%"
      minHeight="calc(100vh - 60px)"
      display="flex"
      alignItems="center"
      flexDirection="column"
      gap="8"
      backgroundColor="neutral-surface"
    >
      <Box
        mx="auto"
        display="flex"
        flexDirection="column"
        gap="8"
        width="100%"
        maxWidth="1200px"
      >
        <Box mt="6">
          <Title fontSize="8" textAlign="left">
            Configurar aplicativo
          </Title>
        </Box>
        <Box mx="auto" display="flex" gap="6" width="100%">
          <Box width="70%">
            <Outlet />
          </Box>
          <Box width="30%">
            <ListSteps />
          </Box>
        </Box>
      </Box>
    </Box>
  </>
);

export default Layout;
