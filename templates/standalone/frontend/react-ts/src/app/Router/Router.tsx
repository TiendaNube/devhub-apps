import React from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "@/components";
import { Tutorial, Home } from "@/pages";
import { Instalation } from "@/pages/Tutorial/pages";
import { Layout as LayoutTutorial } from "@/pages/Tutorial";

const Router: React.FC = () => (
  <Routes>
    <Route path="/tutorial" element={<Tutorial />} />
    <Route key="index" element={<LayoutTutorial />}>
      <Route path="/tutorial/instalation" element={<Instalation />} />
    </Route>
    <Route key="index" element={<Layout />}>
      <Route path="/" element={<Home />} />
    </Route>
  </Routes>
);

export default Router;
