import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Card, Text, Icon } from "@nimbus-ds/components";
import { steps } from "./listSteps.definitions";

const ListSteps: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Card>
      <Box display="flex" flexDirection="column" gap="2">
        {steps.map((step) => {
          const IconStep = step.icon;
          const isActive = step.link === pathname;
          return (
            <Box
              display="flex"
              gap="2"
              alignItems="center"
              as={Link}
              to={step.link}
              key={step.link}
            >
              <Box
                backgroundColor={
                  isActive
                    ? "primary-surfaceHighlight"
                    : "neutral-surfaceHighlight"
                }
                width="16px"
                height="16px"
                p="1"
                boxSizing="content-box"
                justifyContent="center"
                display="flex"
                alignItems="center"
                borderRadius="full"
              >
                <Icon color="primary-textLow" source={<IconStep />} />
              </Box>
              <Text>{step.name}</Text>
            </Box>
          );
        })}
      </Box>
    </Card>
  );
};

export default ListSteps;
