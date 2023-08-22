import React from "react";
import Link from "@docusaurus/Link";
import { Box, Button } from "@nimbus-ds/components";

const Hero: React.FC = () => (
  <Box
    display="flex"
    flexDirection="column"
    height="432px"
    justifyContent="center"
    gap="4"
    width={{ xs: "100%", md: "100%", lg: "50%" }}
  >
    <Box
      as="h1"
      fontSize="12"
      lineHeight="14"
      fontWeight="regular"
      color="primary-textLow"
    >
      Desenvolva aplicativos para o ecosistema Nuvemshop e potencialize seus
      ganhos
    </Box>
    <Button as={Link} to="/docs/getting-started">
      Getting started
    </Button>
  </Box>
);

export default Hero;
