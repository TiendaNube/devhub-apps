import { useContext } from "react";
import { DarkModeContext } from "@/app";

export const useDarkMode = () => useContext(DarkModeContext);
