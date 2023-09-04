---
sidebar_position: 4
---

# Nexo

O Nexo disponibiliza recursos para facilitar a comunicação entre um aplicativo externo e o administrador da Nuvemshop. Essa interação entre o Admin e o App é estabelecida através de mensagens, seguindo o padrão do observador, permitindo inscrição e desinscrição de eventos.

Essas mensagens, denominadas "Actions", são cuidadosamente definidas e associadas a "Helpers". Essas Helpers habilitam o uso das Actions como promessas, proporcionando uma abordagem eficaz e confiável para trocar informações e sincronizar operações entre as partes envolvidas.

## Instalação

### npm

```bash
$ npm install @tiendanube/nexo
```

### yarn

```bash
$ yarn add @tiendanube/nexo
```

## Começando

### Criar uma instância do Nexo

| Config   | Tipo                     | Descrição                                                       |
| -------- | ------------------------ | --------------------------------------------------------------- |
| clientId | `string` obrigatório     | Este valor é fornecido pela Nuvemshop                           |
| log      | `boolean` padrão `false` | Permite mostrar as mensagens transferidas entre o App e o Admin |

<br />

```ts
import nexo from "@tiendanube/nexo";

const instance = nexo.create({
  clientId: "123",
  log: true,
});

export default instance;
```

### Verificar se o aplicativo está conectado

Através do utilitário `connect`, você pode verificar se o Administrador permite a troca de mensagens e, ao mesmo tempo, com `iAmReady`, notificar que sua aplicação está pronta para ser exibida.

Para a aplicação React

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

### Ativar a sincronização de rotas

Essa funcionalidade permitirá que você registre a navegação do aplicativo na URL do navegador por meio de fragmentos (#myroute).

Este exemplo é feito com o [React Router](https://reactrouter.com/en/main).

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

### Obter o Token de Sessão

Por meio do utilitário `getSessionToken`, podemos obter um token de sessão (JWT) que será usado para verificar a autenticidade da solicitação ao seu Backend. O JWT é assinado com o Segredo do Cliente da Aplicação.

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

Para navegar até a rota a partir da qual o aplicativo foi acessado.

**Internal name**:

- `app/navigate/exit`;

**Payload**:

- `none`;

**Response**:

- `none`;

### `ACTION_NAVIGATE_SYNC`

Para atualizar sua localização atual para propagar a navegação interna.

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

Para navegar para uma rota específica no Admin.

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

Para o subPathname atual, que representa o caminho do aplicativo incorporado.

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

Para solicitar o token de sessão (JWT).

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

Para solicitar informações sobre a loja atual registrada.

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

Para navegar para uma rota específica localizada no antigo admin (admin/...).

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

Para mostrar a ação de navegação no topo do cabeçalho.

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

Para solicitar informações sobre o dispositivo móvel.

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

Aguardar se o aplicativo estiver pronto para renderizar.

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

Para notificar que o aplicativo está sendo renderizado.

**Arguments**:

- `nexo (NexoClient)`: The Nexo Instance;

**Response**:

- `void`

**Example**:

```ts
iAmReady(nexo);
```

### `navigateExit`

Para navegar até a rota a partir da qual o aplicativo foi acessado.

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

Para solicitar o token de sessão (JWT).

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

Para atualizar sua localização atual para propagar a navegação interna.

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

Para solicitar informações sobre a Loja atual.

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

Para verificar se o aplicativo está sendo carregado do dispositivo móvel.

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

Para navegar para uma rota específica no Admin.

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

Para navegar para uma rota específica no Old Admin, apenas está disponível o modo Web (dispositivo não móvel).

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

Para copiar o texto enviado para a área de transferência do dispositivo.

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

Para mostrar a ação de navegação no cabeçalho superior, apenas está disponível o modo Web (dispositivo não móvel).

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

Remove a ação do Header Top, disponível apenas no modo Web (dispositivos não móveis).

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

## Próximos passos

- Saiba mais sobre nossa [API](./nuvemshop-api)
