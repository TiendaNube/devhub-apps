import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Box, Title, Accordion, Text, Card, Link } from "@nimbus-ds/components";

const Instalation: React.FC = () => {
  const { t } = useTranslation("translations");

  return (
    <Box width="100%">
      <Card padding="none">
        <Accordion selectedDefault="step-1">
          <Accordion.Item index="step-1">
            <Accordion.Header borderTop="none" title="1. Dados básicos" />
            <Accordion.Body>
              <Text fontSize="highlight" lineHeight="highlight">
                <Trans
                  i18nKey={t("tutorial.first")}
                  components={[
                    <Link
                      as="a"
                      href={`https://partners.nuvemshop.com.br/applications/update/${process.env.CLIENT_ID}`}
                      target="blank"
                      appearance="primary"
                      children=""
                    />,
                  ]}
                />
              </Text>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item index="step-2">
            <Accordion.Header title="2. Redirecionamento" />
            <Accordion.Body>
              <Text fontSize="highlight" lineHeight="highlight">
                <Trans
                  i18nKey={t("tutorial.second")}
                  components={[
                    <Text as="span" fontWeight="bold" children="" />,
                  ]}
                />
              </Text>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item index="step-3">
            <Accordion.Header title="3. Autorização de URL" />
            <Accordion.Body>
              <Text fontSize="highlight" lineHeight="highlight">
                <Trans
                  i18nKey={t("tutorial.third", {
                    clientId: process.env.CLIENT_ID,
                  })}
                  components={[
                    <Text as="span" fontWeight="bold" children="" />,
                  ]}
                />
              </Text>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item index="step-4">
            <Accordion.Header title="4. Solicitação de aceite" />
            <Accordion.Body>
              <Text fontSize="highlight" lineHeight="highlight">
                <Trans
                  i18nKey={t("tutorial.fourth")}
                  components={[
                    <Text as="span" fontWeight="bold" children="" />,
                  ]}
                />
              </Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card>
    </Box>
  );
};

export default Instalation;
