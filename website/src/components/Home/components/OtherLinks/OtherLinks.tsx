import React from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import {
  Box,
  Card,
  Title,
  Link as NimbusLink,
  Icon as NimbusIcon,
} from "@nimbus-ds/components";
import { links } from "./otherLinks.definitions";

const OtherLinks: React.FC = () => (
  <Box display="flex" flexDirection="column" my="20" gap="4">
    <Title as="h2">Outros links</Title>
    <Box
      display="grid"
      gridGap="5"
      gridTemplateColumns={{
        md: "repeat(2,minmax(0,1fr))",
        lg: "repeat(4,minmax(0,1fr))",
      }}
    >
      {links.map((link, index) => {
        return (
          <Card key={index}>
            <Card.Body>
              <Title as="h4">{link.title}</Title>
            </Card.Body>
            <Card.Footer>
              <NimbusLink as={Link} to={link.link} appearance="primary">
                Ler a documentação
                <NimbusIcon
                  color="primary-interactive"
                  source={<ExternalLinkIcon />}
                />
              </NimbusLink>
            </Card.Footer>
          </Card>
        );
      })}
    </Box>
  </Box>
);

export default OtherLinks;
