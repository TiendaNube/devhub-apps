import { connect, iAmReady } from '@tiendanube/nexo/helpers';
import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import nexo from './nexoClient';
import NexoSyncRoute from './NexoSyncRoute';
import {
  ConfirmationModalExamplePage,
  ExamplesPage,
  FormExamplePage,
  LoginExamplePage,
  MainPage,
  PageTemplateExamplePage,
  ProductListExamplePage,
  SettingsExamplePage,
  SimpleListExamplePage,
} from './pages';
import { DarkModeProvider, BaseLayout } from './components';

import { ToastProvider } from '@nimbus-ds/components';

function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    connect(nexo).then(async () => {
      setIsConnect(true);
      iAmReady(nexo);
    });
  }, []);

  if (!isConnect) return <div>connecting..</div>;

  return (
    <DarkModeProvider>
      <BrowserRouter>
        <ToastProvider>
          <BaseLayout>
            <NexoSyncRoute>
              <Switch>
                <Route path="/" exact>
                  <MainPage />
                </Route>
                <Route path="/examples">
                  <ExamplesPage />
                </Route>
                <Route path="/examples-confirmation-modal">
                  <ConfirmationModalExamplePage />
                </Route>
                <Route path="/examples-form">
                  <FormExamplePage />
                </Route>
                <Route path="/examples-login">
                  <LoginExamplePage />
                </Route>
                <Route path="/examples-page-template">
                  <PageTemplateExamplePage />
                </Route>
                <Route path="/examples-product-list">
                  <ProductListExamplePage />
                </Route>
                <Route path="/examples-settings">
                  <SettingsExamplePage />
                </Route>
                <Route path="/examples-simple-list">
                  <SimpleListExamplePage />
                </Route>
              </Switch>
            </NexoSyncRoute>
          </BaseLayout>
        </ToastProvider>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
