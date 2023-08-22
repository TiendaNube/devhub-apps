import React from "react";
import MDXContent from "@theme-original/MDXContent";
import { ThemeProvider } from "@nimbus-ds/styles";
import { useDarkMode } from "./Root";

const MDXContentWrapper: React.FC = (props) => {
  const { darkMode } = useDarkMode();
  return (
    <ThemeProvider theme={darkMode ? "dark" : "base"}>
      <MDXContent {...props} />
    </ThemeProvider>
  );
};

export default MDXContentWrapper;
