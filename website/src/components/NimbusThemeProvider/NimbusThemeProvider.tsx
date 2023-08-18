import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { ThemeProvider } from "@nimbus-ds/styles";

const NimbusThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  return (
    <ThemeProvider theme={isDarkMode ? "dark" : "base"}>
      {children}
    </ThemeProvider>
  );
};

export default NimbusThemeProvider;
