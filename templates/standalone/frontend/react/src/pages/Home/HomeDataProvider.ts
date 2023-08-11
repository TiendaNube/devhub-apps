import React, { useEffect, useState } from "react";
import { useToast } from "@nimbus-ds/components";
import { useAuth, useFetch } from "@/hooks";
import { IHomeDataProvider } from "./home.types";

const HomeDataProvider: React.FC<IHomeDataProvider> = ({ children }) => {
  const { addToast } = useToast();
  const { auth } = useAuth();
  const { request } = useFetch();
  const [totalProducts, setTotalProduts] = useState("0");

  useEffect(() => onGetTotalProducts(), []);

  const onGetTotalProducts = () => {
    request<{ total: number }>({
      url: `/${auth?.user_id}/products/total`,
      method: "GET",
    })
      .then((response) => {
        setTotalProduts(`${response.content.total}`);
      })
      .catch((error) => {
        setTotalProduts("-");
        addToast({
          type: "danger",
          text: error.message.description ?? error.message,
          duration: 4000,
          id: "error-total-products",
        });
      });
  };

  const onCreateProduct = () => {
    request<{ total: number }>({
      url: `/${auth?.user_id}/products`,
      method: "POST",
    })
      .then(() => {
        onGetTotalProducts();
        addToast({
          type: "success",
          text: "Produto adicionado com sucesso!",
          duration: 4000,
          id: "create-product",
        });
      })
      .catch((error) => {
        setTotalProduts("-");
        addToast({
          type: "danger",
          text: error.message.description ?? error.message,
          duration: 4000,
          id: "error-create-product",
        });
      });
  };

  return children({ totalProducts, onCreateProduct });
};

export default HomeDataProvider;
