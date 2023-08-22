import React from "react";
import { Title, Card, Text, Box, Link, Icon } from "@nimbus-ds/components";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import { tools } from "./developerTools.definitions";

const DeveloperTools: React.FC = () => {
  return (
    <Box
      display="grid"
      gridGap="5"
      gridTemplateColumns={{
        xs: "repeat(1,minmax(0,1fr))",
        lg: "repeat(2,minmax(0,1fr))",
      }}
    >
      {tools.map((tool, index) => (
        <Card key={index}>
          <Box
            height="100%"
            gap="4"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Title as="h3">{tool.title}</Title>
            <Text fontSize="base">{tool.description}</Text>
            <Link as="a" href={tool.link} appearance="primary">
              Ver mais
              <Icon color="primary-interactive" source={<ExternalLinkIcon />} />
            </Link>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default DeveloperTools;
