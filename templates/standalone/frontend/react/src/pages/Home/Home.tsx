import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { Layout, Page } from "@nimbus-ds/patterns";
import {
  Card,
  Text,
  Link,
  Icon,
  Box,
  Button,
  Title,
} from "@nimbus-ds/components";
import { ExternalLinkIcon, PlusCircleIcon } from "@nimbus-ds/icons";
import HomeDataProvider from "./HomeDataProvider";

const Home: React.FC = () => {
  const { t } = useTranslation("translations");

  return (
    <Page
      maxWidth="800px"
      minHeight={{
        xs: "calc(100vh - 65px)",
        md: "calc(100vh - 66px)",
        lg: "calc(100vh - 66px)",
      }}
    >
      <Page.Header title={process.env.APP_NAME || "App Template"} />
      <Page.Body>
        <Layout columns="1">
          <Layout.Section>
            <Card>
              <Card.Header title={t("home.first-card.title")} />
              <Card.Body>
                <Text>
                  <Trans
                    i18nKey={t("home.first-card.description")}
                    components={[
                      <Link
                        as="a"
                        href="https://nimbus.tiendanube.com/"
                        target="_blank"
                        appearance="primary"
                        textDecoration="none"
                        children=""
                      />,
                      <Link
                        as="a"
                        href="https://tiendanube.github.io/api-documentation/intro"
                        target="_blank"
                        appearance="primary"
                        textDecoration="none"
                        children=""
                      />,
                    ]}
                  />
                </Text>
              </Card.Body>
              <Card.Footer>
                <Link
                  as="a"
                  target="_blank"
                  href={t("home.first-card.link.url")}
                >
                  {t("home.first-card.link.text")}
                  <Icon color="currentColor" source={<ExternalLinkIcon />} />
                </Link>
              </Card.Footer>
            </Card>
            <HomeDataProvider>
              {({ totalProducts, onCreateProduct }) => (
                <Card>
                  <Card.Header title={t("home.second-card.title")} />
                  <Card.Body>
                    <Box display="flex" flexDirection="column" gap="4" mb="2">
                      <Text>{t("home.second-card.description")}</Text>
                      <Box display="flex" gap="2">
                        <Text color="neutral-textDisabled">
                          {t("home.second-card.total-product")}:
                        </Text>
                        <Title as="h6" fontSize="h1">
                          {totalProducts}
                        </Title>
                      </Box>
                    </Box>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      appearance="primary"
                      onClick={onCreateProduct}
                      // disabled={onSubmit.isLoading}
                    >
                      <Icon color="currentColor" source={<PlusCircleIcon />} />
                      {t("home.second-card.create-products")}
                      {/* {onSubmit.isLoading && (
                      <Spinner color="currentColor" size="small" />
                    )} */}
                    </Button>
                  </Card.Footer>
                </Card>
              )}
            </HomeDataProvider>
          </Layout.Section>
        </Layout>
      </Page.Body>
    </Page>
  );
};

export default Home;
