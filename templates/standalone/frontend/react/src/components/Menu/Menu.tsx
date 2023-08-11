import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Thumbnail, Text } from "@nimbus-ds/components";
import { CogIcon } from "@nimbus-ds/icons";
import { Menu as MenuNimbus } from "@nimbus-ds/patterns";

import { useConfig } from "@/hooks";
import { IPage } from "./menu.types";
import { handleActive, isExample } from "./menu.definitions";

const Menu: React.FC<{ routes?: IPage[] }> = ({ routes }) => {
  const router = useLocation();
  const { t } = useTranslation("translations");
  const { config } = useConfig();

  return (
    <MenuNimbus>
      <MenuNimbus.Header>
        <Box display="flex" gap="2" alignItems="center">
          <Thumbnail width="40px" alt="App logo" />
          <Box display="flex" flexDirection="column">
            <Text>{config?.appName ?? "App Template"}</Text>
          </Box>
        </Box>
      </MenuNimbus.Header>
      <MenuNimbus.Body>
        <MenuNimbus.Section>
          {routes?.map((route) =>
            route.name !== "examples-gallery" ? (
              <MenuNimbus.Button
                as={RouterLink}
                to={route.slug}
                key={route.slug}
                startIcon={route.icon}
                active={handleActive(route.slug, router.pathname)}
                label={t(`menu.${route.title}`)}
              />
            ) : (
              <Box
                backgroundColor={
                  isExample(router.pathname)
                    ? "primary-surface"
                    : "neutral-background"
                }
                borderRadius="0-5"
                key={route.slug}
              >
                <MenuNimbus.Button
                  as={RouterLink}
                  to={route.slug}
                  key={route.slug}
                  label={t(`menu.${route.title}`)}
                  startIcon={route.icon}
                  active={isExample(router.pathname)}
                  id="control-examples-accordion"
                  aria-expanded={isExample(router.pathname)}
                  aria-controls="content-examples-accordion"
                />
                {isExample(router.pathname) && (
                  <Box
                    id="content-examples-accordion"
                    aria-hidden={!isExample(router.pathname)}
                    height={isExample(router.pathname) ? "auto" : "0"}
                    overflow="hidden"
                    pl="6"
                    pt="1"
                    pb="1"
                    pr="1"
                  >
                    {routes?.map((subroute) => (
                      <MenuNimbus.Button
                        as={RouterLink}
                        to={subroute.slug}
                        key={subroute.slug}
                        label={t(`menu.${subroute.title}`)}
                        active={handleActive(subroute.slug, router.pathname)}
                      />
                    ))}
                  </Box>
                )}
              </Box>
            )
          )}
        </MenuNimbus.Section>
      </MenuNimbus.Body>
      <MenuNimbus.Footer
        label="Configuração"
        startIcon={CogIcon}
        onClick={() => {
          localStorage.removeItem("config");
          localStorage.removeItem("auth");
          window.location.reload();
        }}
      />
    </MenuNimbus>
  );
};

export default Menu;
