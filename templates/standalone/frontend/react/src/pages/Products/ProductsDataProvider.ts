import React, { useEffect, useState } from "react";
import { useToast } from "@nimbus-ds/components";
import { useAuth, useFetch } from "@/hooks";
import { IProduct, IProductsDataProvider } from "./products.types";

const ProductsDataProvider: React.FC<IProductsDataProvider> = ({
  children,
}) => {
  const { addToast } = useToast();
  const { auth } = useAuth();
  const { request } = useFetch();
  const [products, setProduts] = useState<IProduct[]>([]);

  useEffect(() => onGetProducts(), []);

  const onGetProducts = () => {
    request<IProduct[]>({
      url: `/${auth?.user_id}/products`,
      method: "GET",
    })
      .then((response) => {
        setProduts(response.content);
      })
      .catch((error) => {
        addToast({
          type: "danger",
          text: error.message.description ?? error.message,
          duration: 4000,
          id: "error-products",
        });
      });
  };

  const onDeleteProduct = (productId: number) => {
    request<IProduct[]>({
      url: `/${auth?.user_id}/products/${productId}`,
      method: "DELETE",
    })
      .then(() => {
        onGetProducts();
        addToast({
          type: "success",
          text: "Produto deletado com sucesso",
          duration: 4000,
          id: "delete-product",
        });
      })
      .catch((error) => {
        addToast({
          type: "danger",
          text: error.message.description ?? error.message,
          duration: 4000,
          id: "error-delete-product",
        });
      });
  };

  return children({ products, onDeleteProduct });
};

export default ProductsDataProvider;
