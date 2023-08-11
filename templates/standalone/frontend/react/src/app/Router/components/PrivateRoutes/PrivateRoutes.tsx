import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "@/components";
import { Home, Products } from "@/pages";

const PrivateRoutes: React.FC = () => (
  <Routes>
    <Route key="index" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Route>
  </Routes>
);

export default PrivateRoutes;
