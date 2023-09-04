---
sidebar_position: 4
---

# Nexo

Nexo provides resources to facilitate communication between an external application and the Nuvemshop administrator. This interaction between the admin and the app is established through messages, following the observer pattern, allowing for event subscription and unsubscription.

These messages, called "Actions," are carefully defined and associated with "Helpers." These Helpers enable the use of Actions as promises, providing an effective and reliable approach to exchange information and synchronize operations between the involved parties.

## Installation

### npm

```bash
$ npm install @tiendanube/nexo
```

### yarn

```bash
$ yarn add @tiendanube/nexo
```

## Getting Started

### Create a Nexo instance

| Config   | Type                      | Description                                                        |
| -------- | ------------------------- | ------------------------------------------------------------------ |
| clientId | `string` required         | This value is provided by Nuvemshop                                |
| log      | `boolean` default `false` | Allows to show the message transfers between the App and the Admin |

<br />

```ts
import nexo from "@tiendanube/nexo";

const instance = nexo.create({
  clientId: "123",
  log: true,
});

export default instance;
```

### Check if the app is connected

Through the `connect` util you can check if the Admin allows you to exchange messages and at the same time with `iAmReady` notify that your application is ready to show.

To react application

```tsx
import { useEffect, useState } from "react";
import { connect, iAmReady } from "@tiendanube/nexo/helpers";
import nexo from "./nexoClient"; // Nexo instance

function App() {
  const [isConnect, setIsConnect] = useState(false);

  useEffect(() => {
    connect(nexo).then(() => {
      setIsConnect(true);
      iAmReady(nexo);
    });
  }, []);

  if (!isConnect) return <MyAppSkeleton />;

  return <MyApp />;
}
```

### Enable route synchronization

This functionality will allow you to record the app navigation of your app in the browser URL via fragment (#myroute)

This example is made with [React Router](https://reactrouter.com/en/main).

```jsx
import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { syncPathname } from "@tiendanube/nexo/helpers";

import nexo from "./nexoClient";
import {
  ACTION_NAVIGATE_SYNC,
  NavigateSyncResponse,
} from "@tiendanube/nexo/actions";

const NexoSyncRoute: React.FC<{ children: React.ReactNode }>({ children } ) => {
  const { pathname } = useLocation();
  const { push: goTo, replace: replaceTo } = useHistory();

  //to send the current path of the app to the browser url
  useEffect(() => {
    syncPathname(nexo, pathname);
  }, [pathname]);

  //to navigate in the app if the browser url changes
  useEffect(() => {
    const unsuscribe = nexo.suscribe(
      ACTION_NAVIGATE_SYNC,
      ({ path, replace }: NavigateSyncResponse) => {
        replace ? goTo(path) : replaceTo(path);
      }
    );
    return unsuscribe;
  }, [goTo, replaceTo]);

  return children;
}

export default NexoSyncRoute;
```

### Get Session Token

Through the `getSessionToken` util we can obtain a session token (JWT) that will be used to verify the authenticity of the request to your Backend. The JWT is signed with the Application's Client Secret

```ts
import axios from "axios";
import { getSessionToken } from "@tiendanube/nexo/helpers";
import nexo from "./nexoClient";

const axiosIntance = axios.create({
  baseURL: "https://my-backend.com",
});

axiosIntance.interceptors.request.use(async (request) => {
  const token = await getSessionToken(nexo);
  const bearerToken = `Bearer ${token}`;
  request.headers = { ...request.headers, Authorization: bearerToken };
  return request;
});

export default axiosIntance;
```

## Actions

### `ACTION_NAVEGATE_EXIT`

To navigate to the route from which the application was accessed.

**Internal name**:

- `app/navigate/exit`;

**Payload**:

- `none`;

**Response**:

- `none`;

### `ACTION_NAVIGATE_SYNC`

To update his current location to propagate the internal navigation.

**Internal name**:

- `app/navigate/sync`;

**Payload**:

```ts
{
  pathname: string;
}
```

**Response**:

- `none`;

### `ACTION_NAVIGATE_GOTO`

To navigate to a specific route in Admin.

**Internal name**:

- `app/navigate/goTo`;

**Payload**:

```ts
{
  pathname: string;
}
```

**Response**:

```ts
{
  path: string;
  replace?: boolean;
}
```

### `ACTION_NAVIGATE_PATHNAME`

To current subPathname, which represents the path of the embedded app.

**Internal name**:

- `app/navigate/pathname`;

**Payload**:

- `none`;

**Response**:

```ts
{
  pathname: string;
}
```

### `ACTION_AUTH_SESSION_TOKEN`

To requests the session token (JWT).

**Internal name**:

- `app/auth/sessionToken`;

**Payload**:

- `none`;

**Response**:

```ts
{
  token: string;
}
```

### `ACTION_STORE_INFO`

To request information about current Store logged.

**Internal name**:

- `app/store/info`;

**Payload**:

- `none`;

**Response**:

```ts
{
  id: string;
  name: string;
  url: string;
  country: string;
  language: string;
  currency: string;
}
```

### `ACTION_NAVIGATE_GOTO_OLD_ADMIN`

To navigate to a specific route located in the old admin (admin/...).

**Internal name**:

- `app/navigate/goToOldAdmin`;

**Payload**:

```ts
{
  pathToOldAdmin: string;
}
```

**Response**:

- `none`;

### `ACTION_NAVIGATE_HEADER`

To show the navigation action in the Header Top.

**Internal name**:

- `app/navigate/header`;

**Payload**:

```ts
{
    goTo?: 'back' | string;
    goToAdmin?: string;
    text?: string;
    remove?: boolean;
}
```

**Response**:

- `none`;

### `ACTION_DEVICE`

To requests information about if mobile device.

**Internal name**:

- `app/device`;

**Payload**:

- `none`;

**Response**:

```ts
{
  isMobileDevice: boolean;
}
```

## Helpers

### `connect`

To wait if the application is ready to render.

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;
- `ttl (number)`: Maximum time waiting for the admin, default 3000;

**Response**:

- `Promise<void>` Success or Fail;

**Example**:

```ts
connect(nexo)
  .then(() => {
    //success
  })
  .catch(() => {
    //fail
  });
```

### `iAmReady`

To notify that the app is rendering.

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `void`

**Example**:

```ts
iAmReady(nexo);
```

### `navigateExit`

To navigate to the route from which the application was accessed.

**Action**: `app/navigate/exit`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `void`;

**Example**:

```ts
navigateExit(nexo);
```

### `getSessionToken`

To requests the session token (JWT).

**Action**: `app/auth/sessionToken`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `Promise<token: string>`: Promise with session token;

**Example**:

```ts
const token = await getSessionToken(nexo);
```

### `syncPathname`

To update his current location to propagate the internal navigation.

**Action**: `app/navigate/sync`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `Promise<token: string>`: Promise with session token;

**Example**:

```ts
syncPathname(nexo, pathname);
```

### `getStoreInfo`

To request information about current Store.

**Action**: `app/store/info`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `Promise<StoreInfoResponse>`: Promise with store info;

```ts
StoreInfoResponse {
  id: string;
  name: string;
  url: string;
  country: string;
  language: string;
  currency: string;
}
```

**Example**:

```ts
const storeInfo = await getStoreInfo(nexo);
```

### `getIsMobileDevice`

To check if the app is being loaded from the Mobile Device.

**Action**: `app/device`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `Promise<boolean>`: True / False;

**Example**:

```ts
const isMobileDevice = await getIsMobileDevice(nexo);
```

### `goTo`

To navigate to a specific route in Admin.

**Action**: `app/navigate/goTo`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;
- `path (string)`: Specific path to navigate;

**Response**:

- `void`;

**Example**:

```ts
goTo(nexo, "/products");
```

### `goToOldAdmin`

To navigate to a specific route in Old Admin, only available Web mode (non mobile device).

**Action**: `app/navigate/goToOldAdmin`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;
- `path (string)`: Specific path to navigate;

**Response**:

- `void`;

**Example**:

```ts
goToOldAdmin(nexo, "/products");
```

### `copyToClipboard`

To copy the sent text to the device's clipboard.

**Action**: `app/utils/copyToClipboard`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;
- `text (string)`: Text to copy;

**Response**:

- `Promise<boolean>`: If copied successfully;

**Example**:

```ts
copyToClipboard(nexo, "text to copy");
```

### `navigateHeader`

To show the navigation action in the Header Top, only available Web mode (non mobile device).

**Action**: `app/utils/copyToClipboard`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;
- `config (NavigateHeaderRequest)`: Config to navegate header;

```ts
 NavigateHeaderRequest {
   goTo: "back" | string;
   text: string;
 };
```

**Response**:

- `void`;

**Example**:

```ts
navigateHeader(nexo, { goTo: "/", text: "Product List" });
//or
navigateHeader(nexo, { goTo: "back", text: "Back" });
```

### `navigateHeaderRemove`

Removes the action of Header Top, available only in Web mode (non-mobile devices).

**Action**: `app/utils/copyToClipboard`;

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `void`;

**Example**:

```typescript
navigateHeaderRemove(nexo);
```

---

## Next steps

- Learn more about our [API](./nuvemshop-api)
