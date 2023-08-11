import React from "react";
import { Card, Link } from "@nimbus-ds/components";
import { CodeIcon } from "@nimbus-ds/icons";

const Configuration: React.FC = () => (
  <Card>
    <Card.Header title="Configurar variáveis" />
    <Link
      textDecoration="none"
      as="a"
      href="https://github.com/TiendaNube/app-templates-hub"
    >
      <CodeIcon />
      Github
    </Link>
  </Card>
);

export default Configuration;
