---
title: Browser API's
---

# Browser APIs

Since NubeSDK applications run inside Web Workers, they don't have direct access to certain browser APIs like `localStorage` or `sessionStorage`. The SDK bridges this gap through the `getBrowserAPIs()` method, which provides async access to these capabilities.

## Overview

| API                   | Method                                 | Description                                                 |
| --------------------- | -------------------------------------- | ----------------------------------------------------------- |
| `asyncLocalStorage`   | `getItem`, `setItem`, `removeItem`     | Async access to `localStorage` with optional TTL support.   |
| `asyncSessionStorage` | `getItem`, `setItem`, `removeItem`     | Async access to `sessionStorage` with optional TTL support. |
| `navigate`            | `navigate(route)`                      | Programmatic navigation within the current domain.          |
| `postMessageToIframe` | `postMessageToIframe(iframe, message)` | Send messages to an embedded `Iframe` component.            |

All APIs are accessed through the `nube.getBrowserAPIs()` method:

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  const browser = nube.getBrowserAPIs();
}
```

:::info Using fetch
The native `fetch` API is available directly in the Web Worker environment. You can use it as you normally would to make HTTP requests — no special SDK method is needed. The target server must support [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) for the request to succeed.

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
```

:::

## localStorage and sessionStorage

The `asyncLocalStorage` and `asyncSessionStorage` interfaces provide the same methods: `getItem`, `setItem`, and `removeItem`. All operations return promises since communication with the main thread is asynchronous.

### setItem

Stores a value associated with the given key.

```typescript title="main.ts"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  const browser = nube.getBrowserAPIs();

  // Store a value in sessionStorage
  browser.asyncSessionStorage.setItem("my_key", "Hello World!").then(() => {
    console.log("Value stored in session storage");
  });

  // Store a value in localStorage
  browser.asyncLocalStorage.setItem("my_key", "Hello World!").then(() => {
    console.log("Value stored in local storage");
  });
}
```

### getItem

Retrieves a stored value by key. Returns `null` if the key does not exist or has expired.

```typescript title="main.ts"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  const browser = nube.getBrowserAPIs();

  browser.asyncSessionStorage.getItem("my_key").then((value) => {
    console.log("my_key:", value);
  });

  browser.asyncLocalStorage.getItem("my_key").then((value) => {
    console.log("my_key:", value);
  });
}
```

### removeItem

Removes a stored value by key.

```typescript title="main.ts"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  const browser = nube.getBrowserAPIs();

  browser.asyncSessionStorage.removeItem("my_key").then(() => {
    console.log("Value removed from session storage");
  });

  browser.asyncLocalStorage.removeItem("my_key").then(() => {
    console.log("Value removed from local storage");
  });
}
```

### Time To Live

Both `asyncLocalStorage` and `asyncSessionStorage` support an optional third parameter called `ttl` (time-to-live) on `setItem`, which defines how long the stored value should remain valid, in seconds.

When provided, the value will no longer be accessible via `getItem` after the specified duration has passed.

```typescript title="main.ts"
const browser = nube.getBrowserAPIs();

// Store a value that expires in 60 seconds
await browser.asyncLocalStorage.setItem("my_key", "Hello World!", 60);

// Store a value that expires in 5 minutes
await browser.asyncSessionStorage.setItem("session_token", "abc123", 300);
```

If no `ttl` is provided, the value will persist indefinitely, following the default behavior of `localStorage` and `sessionStorage`.

:::warning Storage keys
Storage keys are automatically scoped to your application. This means different apps cannot read or overwrite each other's stored values.
:::

## navigate

The `navigate` method allows you to programmatically navigate to different routes within the store. The route parameter must start with `/`.

```typescript title="main.ts"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  const browser = nube.getBrowserAPIs();

  // Navigate to a specific route
  browser.navigate("/products");
}
```

The `navigate` method is particularly useful when you need to:

- Redirect users after completing certain actions
- Implement custom navigation logic in your application
- Handle programmatic navigation based on user interactions

:::warning Navigation restrictions
The `navigate` method only allows navigation within the current domain:

- Routes **must** start with `/` (e.g., `/products`, `/cart`)
- External URLs and cross-origin navigation are **not** supported
- Navigation to the current URL is ignored
:::

## postMessageToIframe

The `postMessageToIframe` method allows you to send messages from your app to an embedded `Iframe` component. This enables bidirectional communication between your application and the content loaded within the iframe.

The method accepts two parameters:

- The `Iframe` component instance
- A message object containing the data you want to send

```typescript title="main.ts"
import { Iframe } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  const Component = (
    <Iframe
      src="https://tiendanube.com/"
      height={300}
      onMessage={(event) => {
        console.log(event.value);
      }}
    />
  );

  nube.render("before_main_content", Component);

  const browser = nube.getBrowserAPIs();
  browser.postMessageToIframe(Component, {
    message: "Hello World",
  });
}
```

The `postMessageToIframe` method is particularly useful when you need to:

- Send data or commands to the embedded iframe content
- Synchronize state between your app and the iframe
- Trigger actions within the iframe from your application

:::info
To receive messages from the iframe, use the `onMessage` prop on the `Iframe` component. Learn more about [Iframe component](./components/iframe).
:::

## Next Steps

- Learn more about [Components](./components/overview)
- Learn more about [Slots](./slots/overview)
- Learn more about [Script Structure](./script-structure)
