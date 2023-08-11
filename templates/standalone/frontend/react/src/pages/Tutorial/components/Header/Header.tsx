import React from "react";
import { Box, Link } from "@nimbus-ds/components";
import { CodeIcon } from "@nimbus-ds/icons";
import Logo from "./logo.png";

const Header: React.FC = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    backgroundColor="neutral-background"
    height="60px"
    py="4"
    px="10"
  >
    <Link as="a" href="https://www.nuvemshop.com.br/">
      <img src={Logo} />
    </Link>
    <Link
      textDecoration="none"
      as="a"
      href="https://github.com/TiendaNube/app-templates-hub"
    >
      <CodeIcon />
      Github
    </Link>
  </Box>
);

export default Header;
