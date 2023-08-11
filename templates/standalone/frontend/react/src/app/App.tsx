import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "@nimbus-ds/components";

import Router from "@/app/Router";
import { DarkModeProvider } from "./DarkModeProvider";
import "./I18n";

const App: React.FC = () => (
  <DarkModeProvider>
    <ToastProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ToastProvider>
  </DarkModeProvider>
);

export default App;
