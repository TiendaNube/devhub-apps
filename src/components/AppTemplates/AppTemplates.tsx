import React from "react";
import { Title, Card, Text, Box, Link, Icon, Tag } from "@nimbus-ds/components";
import { ExternalLinkIcon } from "@nimbus-ds/icons";

import { appTemplates } from "./appTemplates.definitions";
import { ITemplateCard } from "./appTemplates.types";

const TemplateCard: React.FC<ITemplateCard> = ({
  type,
  title,
  description,
  link,
  icon: TemplateIcon,
}) => (
  <Card>
    <Card.Header>
      <Box display="flex" justifyContent="space-between">
        <Icon color="neutral-textLow" source={<TemplateIcon />} />
        <Tag appearance={type === "native" ? "primary" : "warning"}>{type}</Tag>
      </Box>
    </Card.Header>
    <Box
      height="100%"
      gap="4"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Title as="h3">{title}</Title>
      <Text fontSize="base">{description}</Text>
      <Link as="a" href={link} appearance="primary" target="_blank">
        Ver mais
        <Icon color="primary-interactive" source={<ExternalLinkIcon />} />
      </Link>
    </Box>
  </Card>
);

const AppTemplates: React.FC = () => {
  return (
    <Box
      display="grid"
      gridGap="5"
      gridTemplateColumns={{
        xs: "repeat(1,minmax(0,1fr))",
        lg: "repeat(2,minmax(0,1fr))",
      }}
    >
      {appTemplates.map((template, index) => (
        <TemplateCard key={index} {...template} />
      ))}
    </Box>
  );
};

export default AppTemplates;
