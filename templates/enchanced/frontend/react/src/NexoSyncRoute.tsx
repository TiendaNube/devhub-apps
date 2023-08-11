import { useEffect } from 'react';

import { useLocation, useHistory } from 'react-router-dom';
import { syncPathname } from '@tiendanube/nexo/helpers';

import nexo from './nexoClient';
import {
  ACTION_NAVIGATE_SYNC,
  NavigateSyncResponse,
} from '@tiendanube/nexo/actions';

function NexoSyncRoute({ children }: { children: JSX.Element }) {
  const { pathname } = useLocation();
  const { push: goTo, replace: replaceTo } = useHistory();

  useEffect(() => {
    syncPathname(nexo, pathname);
  }, [pathname]);

  useEffect(() => {
    const unsuscribe = nexo.suscribe(
      ACTION_NAVIGATE_SYNC,
      ({ path, replace }: NavigateSyncResponse) => {
        replace ? goTo(path) : replaceTo(path);
      },
    );

    return unsuscribe;
  }, [goTo, replaceTo]);

  return children;
}

export default NexoSyncRoute;
