import React, { useEffect, useState } from "react";
import { Link as RouterLink, Outlet, useLocation } from "react-router-dom";
import {
  Box,
  Button,
  Icon,
  IconButton,
  Link,
  Sidebar,
} from "@nimbus-ds/components";
import { AppShell, NavTabs } from "@nimbus-ds/patterns";
import {
  ChevronLeftIcon,
  MenuIcon,
  MoonIcon,
  QuestionCircleIcon,
  SunIcon,
  CodeIcon,
} from "@nimbus-ds/icons";
import { useDarkMode } from "@/hooks";
import { handleActive, isExample, routes } from "./layout.definitions";
import { Translator } from "@/app/I18n";
import { Languages, Menu, Responsive } from "..";

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const currentTheme = darkMode ? "dark" : "base";
  const currentThemeIcon = darkMode ? <SunIcon /> : <MoonIcon />;

  const [active, setActive] = useState(currentTheme === "dark");
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMobileMenu = () => setOpenMenu(!openMenu);

  useEffect(() => {
    document.body.className = currentTheme;
    setActive(currentTheme === "dark");
  }, [currentTheme, active]);

  return (
    <Box backgroundColor="neutral-background">
      <Responsive
        mobileContent={
          <Box pb="16">
            <Outlet />
            <NavTabs>
              {routes.map((route) => {
                const IconComponent = route.icon;
                return (
                  <RouterLink to={route.slug} key={route.slug}>
                    <NavTabs.Item
                      ariaLabel={route.name}
                      icon={<IconComponent size="medium" />}
                      active={handleActive(route.slug, pathname)}
                      onClick={() => {}}
                    />
                  </RouterLink>
                );
              })}
              <NavTabs.Item
                ariaLabel={
                  (
                    <Translator path="base-layout.aria-label.menu" />
                  ) as unknown as string
                }
                icon={<MenuIcon size="medium" />}
                onClick={handleOpenMobileMenu}
              />
            </NavTabs>
            <Sidebar maxWidth="280px" open={openMenu}>
              <Menu routes={routes} />
            </Sidebar>
          </Box>
        }
        desktopContent={
          <AppShell menu={<Menu routes={routes} />}>
            <AppShell.Header
              pr={{ xs: "4", md: "6" }}
              leftSlot={
                isExample(pathname) && (
                  <Button
                    as={RouterLink}
                    to="/examples"
                    appearance="transparent"
                  >
                    <Icon source={<ChevronLeftIcon />} color="currentColor" />
                    <Translator path="base-layout.back" />
                  </Button>
                )
              }
              rightSlot={
                <Box display="flex" gap="2-5" alignItems="center">
                  <Link
                    textDecoration="none"
                    as="a"
                    href="https://github.com/TiendaNube/app-templates-hub"
                  >
                    <CodeIcon />
                    Github
                  </Link>
                  <Languages />
                  <IconButton
                    source={currentThemeIcon}
                    onClick={toggleDarkMode}
                    size="2rem"
                  />
                </Box>
              }
            />
            <Outlet />
          </AppShell>
        }
      />
    </Box>
  );
};

export default Layout;
