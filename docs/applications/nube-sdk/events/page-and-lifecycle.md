---
title: Page & Lifecycle Events
---

These events handle page initialization, checkout lifecycle, configuration, and navigation.

## `page:loaded`

Dispatched by `store` when the page is loaded and the SDK is ready to use. Use this to run initialization logic.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("page:loaded", (state) => {
    console.log("SDK ready", state.store?.name);
  });
}
```

## `checkout:ready`

Dispatched by `checkout` every time a new checkout page is loaded and ready to use.
This includes page transitions such as going from the start to the payment step, or from shipping to the success page.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("checkout:ready", ({ location }) => {
    // Trigger logic every time the user navigates to a new checkout page
    const { page } = location;
    // You can inspect the current page using:
    console.log("Current page:", page);

    // Example: Only run logic on the success page
    if (page.type === "checkout" && page.data.step === "success") {
      // Your custom behavior here
    }
  });
}
```

For more details about the `state.location` object, see the [Location state page](../state/location).

## `checkout:success`

Dispatched by `checkout` when the checkout completes successfully (success page). Use this for conversion tracking or post-purchase logic.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("checkout:success", (state) => {
    console.log("Checkout completed", state.order);
  });
}
```

## `config:set`

Dispatched by `app` to setup initial script configuration.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("config:set", () => ({
    config: {
      has_cart_validation: true,
    },
  }));
}
```

### Payload (AppConfig)

| Property                        | Type    | Required | Description                                               |
| ------------------------------- | ------- | -------- | --------------------------------------------------------- |
| `has_cart_validation`           | boolean | Yes      | Enables cart validation feature.                          |
| `disable_shipping_more_options` | boolean | Yes      | Determines whether the user can select a shipping option. |

## `location:updated`

Dispatched by `store` when the page changes (e.g., moving between product, cart, or category pages) or when visible content updates (e.g., products loaded via infinite scroll).

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("location:updated", ({ location }) => {
    // Trigger logic every time the user navigates to a new page
    const { page } = location;

    // Check the current page type
    if (page?.type === "home") {
      console.log("User is viewing the home page", page.data);
    } else if (page?.type === "product") {
      console.log("User is viewing a product page", page.data);
    } else if (page?.type === "category") {
      console.log("User is viewing a category page", page.data);
    }
  });
}
```

For more details about the `state.location` object, see the [Location state page](../state/location).
