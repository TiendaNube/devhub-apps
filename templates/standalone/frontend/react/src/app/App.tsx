import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "@/app/Router";
import { DarkModeProvider } from "./DarkModeProvider";
import "./I18n";

const App: React.FC = () => (
  <DarkModeProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </DarkModeProvider>
);

export default App;
