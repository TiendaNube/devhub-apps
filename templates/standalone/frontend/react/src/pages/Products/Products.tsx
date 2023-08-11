import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Layout, Page } from "@nimbus-ds/patterns";
import { Box, Pagination, Text } from "@nimbus-ds/components";

import { Responsive } from "@/components";
import { ListDesktop, ListMobile } from "./components";
import { PAGE_SIZE } from "./products.definitions";
import ProductsDataProvider from "./ProductsDataProvider";

const Home: React.FC = () => {
  const { t } = useTranslation("translations");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <Page
      maxWidth="1200px"
      minHeight={{
        xs: "calc(100vh - 65px)",
        md: "calc(100vh - 66px)",
        lg: "calc(100vh - 66px)",
      }}
    >
      <Page.Header title={t("products.title")} />
      <Page.Body px={{ xs: "none", md: "6" }}>
        <Layout columns="1">
          <Layout.Section>
            <ProductsDataProvider>
              {({ products, onDeleteProduct }) => {
                const total = products.length;
                const productsPaginated = products.slice(
                  currentPage === 1 ? 0 : (currentPage - 1) * PAGE_SIZE,
                  (currentPage - 1) * PAGE_SIZE + PAGE_SIZE
                );

                return (
                  <Responsive
                    mobileContent={
                      <ListMobile
                        products={products}
                        onDeleteProduct={onDeleteProduct}
                      />
                    }
                    desktopContent={
                      <>
                        <ListDesktop
                          products={productsPaginated}
                          onDeleteProduct={onDeleteProduct}
                        />
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Text>
                            Mostrando <strong>1</strong> -{" "}
                            <strong>{PAGE_SIZE}</strong> elementos de{" "}
                            <strong>{total}</strong>
                          </Text>
                          <Pagination
                            activePage={currentPage}
                            onPageChange={handlePageChange}
                            pageCount={Math.ceil(total / PAGE_SIZE)}
                          />
                        </Box>
                      </>
                    }
                  />
                );
              }}
            </ProductsDataProvider>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default Home;
