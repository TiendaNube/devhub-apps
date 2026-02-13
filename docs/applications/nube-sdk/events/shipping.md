---
title: Shipping Events
---

These events handle shipping method changes, selection, and label customization. All shipping events are **checkout only**.

## `shipping:update`

**Checkout only.** Dispatched by `checkout` when the shipping method changes.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("shipping:update", ({ shipping }) => {
    if (shipping?.selected) {
      console.log(
        "Shipping method selected has changed to:",
        shipping.selected,
      );
    }
  });
}
```

## `shipping:select`

**Checkout only.** Dispatched by `app` to change checkout shipping option.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("shipping:select", () => ({
    shipping: {
      selected: "OPTION_ID",
    },
  }));

  nube.on("shipping:select:success", ({ shipping }) => {
    console.log("Selected option", shipping?.selected);
  });

  nube.on("shipping:select:fail", (state) => {
    console.log("Failed to select shipping option", state.shipping?.selected);
  });
}
```

## `shipping:select:success`

Dispatched by `checkout` when a shipping option is selected successfully. The listener receives the updated state; `state.shipping.selected` contains the selected option id.

## `shipping:select:fail`

Dispatched by `checkout` when selecting a shipping option fails. The listener receives the current state.

## `shipping:update:label`

**Checkout only.** Dispatched by `app` to change checkout shipping method label.

The `custom_labels` property accepts a `Record<string, CustomLabel>` where each value can be either:

- A simple `string` for a basic label
- An object with optional `title` and `description` properties for more detailed labeling

:::note
When using the object format, setting `description` to `null` will hide the description information in the Checkout.
:::

```typescript title="Example with string labels"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("shipping:update:label", () => ({
    shipping: {
      selected: null,
      custom_labels: {
        "ne-correios-sedex": "My custom label",
      },
      options: [],
    },
  }));
}
```

```typescript title="Example with object labels"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("shipping:update:label", () => ({
    shipping: {
      selected: null,
      custom_labels: {
        "ne-correios-sedex": {
          title: "Express Delivery",
          description: "Arrives in 2-3 business days",
        },
        "ne-correios-pac": "Standard Shipping",
      },
      options: [],
    },
  }));
}
```
