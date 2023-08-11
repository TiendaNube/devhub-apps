import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "@/components";
import { Home, Products } from "@/pages";

const PrivateRoutes: React.FC = () => (
  <Routes>
    <Route key="index" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Route>
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>
);

export default PrivateRoutes;
