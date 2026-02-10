---
title: UI & Custom Events
---

These events handle UI slot rendering, quick buy modals, and custom event patterns.

## `ui:slot:set`

Dispatched by `app` to setup the content of a ui slot.

:::note
For simpler component rendering, you can also use the `nube.render()` and `nube.clearSlot()` methods. See [Script Structure](../script-structure#rendering-components) for more information.
:::

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Row, Txt } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Row>
      <Txt>Hello!</Txt>
    </Row>
  );
}

export function App(nube: NubeSDK) {
  nube.send("ui:slot:set", () => ({
    ui: {
      slots: {
        after_line_items: <MyComponent />,
      },
    },
  }));
}

```

It can also be used to remove the content of a slot, by specifying `undefined` as the content.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("ui:slot:set", () => ({
    ui: {
      slots: {
        before_line_items: undefined,
      },
    },
  }));
}
```

## `quickbuy:open`

**Storefront only.** Dispatched by `store` when a quick buy modal is opened for a product.

### `eventPayload`

This event includes `state.eventPayload` with the full product data for the product associated with the quick buy modal. Key properties include:

| Property            | Type              | Description                                            |
| ------------------- | ----------------- | ------------------------------------------------------ |
| `id`                | number            | Unique identifier for the product.                     |
| `name`              | object            | Localized product name (e.g. `{ es: "...", pt: "..." }`). |
| `description`       | object            | Localized product description.                         |
| `handle`            | object            | Localized product URL handle.                          |
| `brand`             | string or null    | Product brand name.                                    |
| `canonical_url`     | string            | Product canonical URL.                                 |
| `images`            | array             | Product images (each with `src`, `alt`, `width`, `height`). |
| `variants`          | array             | Product variants (each with `id`, `price`, `stock`, values, etc.). |
| `published`         | boolean           | Whether the product is published.                      |
| `free_shipping`     | boolean           | Whether the product qualifies for free shipping.       |
| `requires_shipping` | boolean           | Whether the product requires shipping.                 |
| `tags`              | string            | Product tags.                                          |
| `created_at`        | string            | ISO 8601 creation timestamp.                           |
| `updated_at`        | string            | ISO 8601 last update timestamp.                        |

The full type is `Record<string, unknown>`, so additional properties may be present.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("quickbuy:open", ({ eventPayload }) => {
    console.log(`Quick buy opened for product: ${eventPayload?.id}`);
    console.log("Variants:", eventPayload?.variants);
  });
}
```

## `quickbuy:close`

**Storefront only.** Dispatched by `store` when a quick buy modal is closed.

### `eventPayload`

This event includes `state.eventPayload` with the same product data as [`quickbuy:open`](#quickbuyopen).

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("quickbuy:close", ({ eventPayload }) => {
    console.log(`Quick buy closed for product: ${eventPayload?.id}`);
  });
}
```

## Custom events

Custom events follow the pattern `custom:<namespace>:<action>`. They can be both listened to and sent (when the platform supports it). For example, when content is rendered in the `modal_content` slot, the SDK dispatches `custom:modal:close` when the user closes the modal.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("custom:modal:close", (state) => {
    // Handle cleanup or state updates when the modal is closed
  });
}
```

Use the same pattern for other custom namespaces (e.g. `custom:drawer:close`). The listener always receives `(state, event)` where `event` is the full event name string.

- Learn more about [Browser API's](../browser-apis)
- Learn more about [Components](../components)
- Learn more about [UI Slots](../slots/overview)
