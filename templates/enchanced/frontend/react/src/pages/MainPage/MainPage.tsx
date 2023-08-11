import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Icon,
  Button,
  Box,
  IconButton,
  Card,
  Text,
  Link,
} from '@nimbus-ds/components';
import { Layout, Page } from '@nimbus-ds/patterns';
import { ExternalLinkIcon, PictureIcon } from '@nimbus-ds/icons';
import tokens from '@nimbus-ds/tokens/dist/js/tokens';
import { goTo, navigateHeaderRemove } from '@tiendanube/nexo/helpers';

import nexo from '../../nexoClient';
import { useWindowWidth } from '../../hooks';

function PageMain() {
  const { push } = useHistory();
  const windowWidth = useWindowWidth();

  const breakpointMd = tokens.breakpoint.md.value.replace('px', '');

  const handleGoToExamples = () => push('/examples');
  const handleGoToOrders = () => goTo(nexo, '/orders');

  const actions =
    windowWidth !== null && windowWidth <= breakpointMd ? (
      <IconButton
        backgroundColor="transparent"
        borderColor="transparent"
        onClick={handleGoToExamples}
        source={<PictureIcon />}
        size="2rem"
      />
    ) : (
      <Box display="flex" gap="2">
        <Button onClick={handleGoToExamples}>
          <Icon source={<PictureIcon />} color="currentColor" />
          Ejemplos
        </Button>
        <Button appearance="primary" onClick={handleGoToOrders}>
          Ir a ventas
        </Button>
      </Box>
    );

  useEffect(() => {
    navigateHeaderRemove(nexo);
  }, []);

  return (
    <>
      <Page maxWidth="800px">
        <Page.Header title="Demo app" buttonStack={actions} />
        <Page.Body>
          <Layout columns="1">
            <Layout.Section>
              <Card>
                <Card.Header title="Demo app" />
                <Card.Body>
                  <Text>
                    Esta app de ejemplo incluye nuestro&nbsp;
                    <Link
                      as="a"
                      href="https://nimbus.tiendanube.com/"
                      target="_blank"
                      appearance="primary"
                      textDecoration="none"
                    >
                      design system Nimbus
                    </Link>
                    &nbsp;y la integración a la&nbsp;
                    <Link appearance="primary" textDecoration="none">
                      API de Tiendanube
                    </Link>
                    &nbsp;para facilitar el desarrollo de nuevas aplicaciones
                    para nuestro ecosistema.
                  </Text>
                </Card.Body>
                <Card.Footer>
                  <Link>
                    Conocé más sobre cómo crear tu app
                    <Icon color="currentColor" source={<ExternalLinkIcon />} />
                  </Link>
                </Card.Footer>
              </Card>
            </Layout.Section>
          </Layout>
        </Page.Body>
      </Page>
    </>
  );
}

export default PageMain;
