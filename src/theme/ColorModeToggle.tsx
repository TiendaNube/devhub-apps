import React, { useEffect } from "react";
import ColorModeToggle from "@theme-original/ColorModeToggle";

import { useDarkMode } from "./Root";

interface IColorModeToggleWrapper {
  value: "dark" | "light";
}

const ColorModeToggleWrapper: React.FC<IColorModeToggleWrapper> = (props) => {
  const { setDarkMode } = useDarkMode();
  const { value } = props;

  useEffect(() => {
    setDarkMode(value === "dark");
  }, [value]);

  return (
    <>
      <ColorModeToggle {...props} />
    </>
  );
};

export default ColorModeToggleWrapper;
