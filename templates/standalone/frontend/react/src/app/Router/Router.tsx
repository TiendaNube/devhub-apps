import React from "react";

import { useAuth } from "@/hooks";
import { PrivateRoutes, PublicRoures } from "./components";

const Router: React.FC = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.access_token && <PrivateRoutes />}
      {!auth?.access_token && <PublicRoures />}
    </>
  );
};

export default Router;
