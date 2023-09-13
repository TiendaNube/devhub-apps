import React from "react";
import Translate from "@docusaurus/Translate";' '
import {
  Title,
  Card,
  Text,
  Box,
  Link as NimbusLink,
  Icon,
} from "@nimbus-ds/components";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import Link from "@docusaurus/Link";

import { appTypes } from "./appTypes.definitions";
import { ITemplateCard } from "./appTypes.types";

const TemplateCard: React.FC<ITemplateCard> = ({
  title,
  description,
  link,
  icon: TemplateIcon,
}) => (
  <Card>
    <Card.Header>
      <Box display="flex" gap="2" alignItems="center">
        <Icon color="neutral-textLow" source={<TemplateIcon size="medium" />} />
        <Title as="h3">{title}</Title>
      </Box>
    </Card.Header>
    <Box
      height="100%"
      gap="4"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Text fontSize="base">{description}</Text>
      <NimbusLink as={Link} to={link} appearance="primary">
        <Translate id="docs.appTypes.card.linkText">Ver mais</Translate>
        <Icon color="primary-interactive" source={<ExternalLinkIcon />} />
      </NimbusLink>
    </Box>
  </Card>
);

const AppTypes: React.FC = () => {
  return (
    <Box display="flex" gap="4" flexDirection="column" mb="6">
      {appTypes.map((template, index) => (
        <TemplateCard key={index} {...template} />
      ))}
    </Box>
  );
};

export default AppTypes;
