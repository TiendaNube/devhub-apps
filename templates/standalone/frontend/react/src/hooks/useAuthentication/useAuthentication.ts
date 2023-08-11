import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@nimbus-ds/components";

import { useAuth, useConfig, useFetch } from "@/hooks";
import { IAuth } from "../useAuth/useAuth.types";

const useAuthentication = () => {
  const query = new URLSearchParams(window.location.search);
  const code = query.get("code");
  const navigate = useNavigate();
  const { request } = useFetch();
  const { setAuth } = useAuth();
  const { addToast } = useToast();
  const { config } = useConfig();

  useEffect(() => onAuthentication(), []);

  const onAuthentication = () => {
    if (config?.apiURL) {
      request<IAuth>({
        url: code ? `/auth/install?code=${code}` : "/auth/login",
        method: code ? "GET" : "POST",
      })
        .then((response) => {
          if (response.content) {
            navigate("/success");
            setAuth(response.content);
          }
        })
        .catch((error) => {
          addToast({
            type: "danger",
            text: error?.message?.description,
            duration: 4000,
            id: "error-authentication",
          });
        });
    }
  };
};

export default useAuthentication;
