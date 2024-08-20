---
sidebar_position: 4
---

# Nexo

Nexo proporciona recursos para facilitar la comunicación entre una aplicación externa y el administrador de Tiendanube. Esta interacción entre el administrador y la aplicación se establece mediante mensajes, siguiendo el patrón de observador, lo que permite la suscripción y cancelación de eventos.

Estos mensajes, llamados "Actions", están cuidadosamente definidos y asociados con "Helpers". Estos Helpers permiten que las Actions se utilicen como promesas, lo que proporciona un enfoque eficaz y confiable para intercambiar información y sincronizar operaciones entre las partes involucradas.

## Instalación

### npm

```bash
$ npm install @tiendanube/nexo
```

### yarn

```bash
$ yarn add @tiendanube/nexo
```

## Empezando

### Crear una instancia de Nexo

| Config   | Tipo                          | Descripción                                                                           |
| -------- | ----------------------------- | ------------------------------------------------------------------------------------- |
| clientId | `string` requerido            | Este valor es proporcionado por Tiendanube                                            |
| log      | `boolean` por defecto `false` | Permite mostrar las transferencias de mensajes entre la Aplicación y el Administrador |

<br />

```ts
import nexo from "@tiendanube/nexo";

const instance = nexo.create({
  clientId: "123",
  log: true,
});

export default instance;
```

### Comprobar si la aplicación está conectada

A través del utilitario `connect` puedes verificar si el Administrador permite el intercambio de mensajes y al mismo tiempo, con `iAmReady`, notificar que tu aplicación está lista para mostrarse.

Para la aplicación React:

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

> **Importante**: Es necesario que luego de haber enviado el `iAmReady` la app esté escuchando la acción `ACTION_NAVIGATE_SYNC`. Esto se debe a que cuando el new admin recibe la señal de que la app esta READY se le envía `ACTION_NAVIGATE_SYNC` con la ruta inicial a la que debe navegar la app.

### Habilitar la sincronización de rutas

Esta funcionalidad te permitirá registrar la navegación de la aplicación en la URL del navegador a través de fragmentos (#myroute).
Este ejemplo está hecho con [React Router](https://reactrouter.com/en/main).

```jsx
import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  ACTION_NAVIGATE_SYNC,
  NavigateSyncResponse,
} from "@tiendanube/nexo/actions";
import { syncPathname } from "@tiendanube/nexo/helpers";
import nexo from "./nexoClient";

const NexoSyncRoute: React.FC<{ children: React.ReactNode }>({ children } ) => {
  const { pathname, search } = useLocation();
  const { push: goTo, replace: replaceTo } = useHistory();

  // to send the current path of the app to the browser url
  useEffect(() => {
    const path = search ? `${pathname}${search}` : pathname;
    syncPathname(nexo, path);
  }, [pathname]);

  // to navigate in the app if the browser url changes
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

> **Importante**: Tal como se mencionó en el apartado anterior, se debe garantizar que este componente se esté renderizando luego de haber enviado el `iAmReady`.

### Obtener el token de sesión

A través del utilitario `getSessionToken`, podemos obtener un token de sesión (JWT) que se utilizará para verificar la autenticidad de la solicitud a tu Backend. El JWT está firmado con el Cliente Secreto de la Aplicación.

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

### Manejo de errores

El componente `ErrorBoundary` permite mejorar el manejo de errores entre sus aplicaciones y el panel de administración de los comerciantes, lo que hace que sus aplicaciones sean más confiables y brinden una excelente experiencia a los usuarios.

Simplemente configure el componente `ErrorBoundary` en la parte superior del árbol de componentes de su aplicación. Será responsable de despachar automáticamente la acción [`ACTION_LOG_ERROR`](#action_log_error). Esto activa la visualización de una interfaz de respaldo integrada en el panel de administración de los comerciantes.

Este enfoque asegurará que los errores se manejen de manera efectiva, mejorando la confiabilidad de sus aplicaciones y brindando una experiencia más fluida a los usuarios. Recuerde que el uso de `ErrorBoundary` es obligatorio para publicar su aplicación en nuestra tienda de aplicaciones.

## Actions

### `ACTION_NAVEGATE_EXIT`

Navegar hasta la ruta desde la que se accedió a la aplicación.

**Internal name**:

- `app/navigate/exit`;

**Payload**:

- `none`;

**Response**:

- `none`;

### `ACTION_NAVIGATE_SYNC`

Actualizar su ubicación actual para propagar la navegación interna.

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

Para navegar a una ruta específica en Admin.

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

Al subPathname actual, que representa la ruta de la aplicación integrada.

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

Para solicitar el token de sesión (JWT).

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

Para solicitar información sobre la tienda actual registrada.

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

Para navegar a una ruta específica ubicada en el antiguo administrador (admin/...).

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

Para mostrar la acción de navegación en el encabezado superior.

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

Para solicitar información sobre si dispositivo móvil.

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

### `ACTION_LOG_ERROR`

Permite el registro de errores, capturando información crucial como la URL, el mensaje y la traza de pila (stack trace) con fines de diagnóstico.

**Internal name**:

- `app/log/error`;

**Payload**:

```ts
{
  url: string;
  message: string;
  stack: string;
}
```

## Helpers

### `connect`

Esperar si la aplicación está lista para procesarse.

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

Para notificar que la aplicación se está procesando.

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `void`

**Example**:

```ts
iAmReady(nexo);
```

### `navigateExit`

Navegar hasta la ruta desde la que se accedió a la aplicación.

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

Para solicitar el token de sesión (JWT).

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

Actualizar su ubicación actual para propagar la navegación interna.

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

Para solicitar información sobre la Tienda actual.

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

Para verificar si la aplicación se está cargando desde el dispositivo móvil.

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

Para navegar a una ruta específica en Admin.

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

Para navegar a una ruta específica en Old Admin, solo está disponible el modo web (no para dispositivos móviles).

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

Copiar el texto enviado al portapapeles del dispositivo.

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

Para mostrar la acción de navegación en el encabezado superior, solo está disponible el modo web (no para dispositivos móviles).

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

Elimina la acción de Header Top, disponible solo en modo Web (dispositivos no móviles).

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

## Próximos pasos

- Obtenga más información sobre nuestra [API](./nuvemshop-api)
