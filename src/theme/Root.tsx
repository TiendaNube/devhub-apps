import React, { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider } from "@nimbus-ds/styles";

interface IDarkModeContext {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const DarkModeContext = createContext<IDarkModeContext>(null as any);

export const useDarkMode = () => useContext(DarkModeContext);

const Root: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const contextValue = useMemo(
    () => ({ darkMode, setDarkMode }),
    [darkMode, setDarkMode]
  );

  return (
    <DarkModeContext.Provider value={contextValue}>
      <ThemeProvider
        theme={darkMode ? "dark" : "base"}
        id="nimbus-theme-provider"
      >
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default Root;
