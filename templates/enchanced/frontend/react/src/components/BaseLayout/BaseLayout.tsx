import React, { useEffect, useState } from 'react';
import { ThemeProvider } from '@nimbus-ds/styles';

import { useDarkMode } from '../';

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const currentTheme = darkMode ? 'dark' : 'base';
  const [active, setActive] = useState(currentTheme === 'dark');

  useEffect(() => {
    document.body.className = currentTheme;
    setActive(currentTheme === 'dark');
  }, [currentTheme, active]);

  // The admin currently doesn't support dark mode. When it does, replace `base` value with `currentTheme` to provide dark mode support.
  return <ThemeProvider theme="base">{children}</ThemeProvider>;
};

export default BaseLayout;
