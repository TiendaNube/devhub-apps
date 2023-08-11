import React from "react";
import { Route, Routes } from "react-router-dom";

import { Tutorial } from "@/pages";
import { Configuration, Instalation, Success } from "@/pages/Tutorial/pages";
import { Layout as LayoutTutorial } from "@/pages/Tutorial";

const PublicRoures: React.FC = () => (
  <Routes>
    <Route path="/" element={<Tutorial />} />
    <Route key="index" element={<LayoutTutorial />}>
      <Route path="/configuration" element={<Configuration />} />
      <Route path="/instalation" element={<Instalation />} />
      <Route path="/success" element={<Success />} />
    </Route>
  </Routes>
);

export default PublicRoures;
