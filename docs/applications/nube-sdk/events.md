---
title: Events
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The communication between the main page and the scripts is handled through events, ensuring a reactive and flexible integration where each component operates independently without direct calls.

- **Events Dispatched by the Store / Checkout:** When significant changes occur—such as an update to the shopping cart—the store or checkout dispatches events (e.g., `cart:update`) to notify scripts that a change has occurred.
- **Events Dispatched by the Apps:** Conversely, the scripts can emit events (like `cart:validate`) to report on the validity of the cart contents or to signal that additional actions might be required.

The listener always receives the current [state](./state) at the time of the event. The listener signature is `(state, event) => void`, where `event` is the event name string. For `nube.send`, the second argument is optional: a function `(state) => partialState`; only the returned keys are merged into the current state.

This event-driven approach allows the application to respond in real-time to state changes, simplifying maintenance and enhancing scalability.

## Events overview

| Event                         | Dispatched by | Listen / Send | Description                                                                      |
| ----------------------------- | ------------- | ------------- | -------------------------------------------------------------------------------- |
| `page:loaded`                 | store         | Listen        | Fired when the page is loaded and the SDK is ready to use.                       |
| `checkout:ready`              | checkout      | Listen        | Fired when a new checkout page is loaded and ready.                              |
| `checkout:success`            | checkout      | Listen        | Fired when checkout completes successfully.                                      |
| `config:set`                  | app           | Send          | Set initial script configuration.                                                |
| `cart:update`                 | store         | Listen        | Fired when the cart content changes.                                             |
| `cart:view`                   | store         | Listen        | Fired when the user views the cart.                                              |
| `cart:validate`               | app           | Send          | Signal whether the cart content is valid (requires `has_cart_validation: true`). |
| `cart:add`                    | app           | Send          | Add an item to the cart.                                                         |
| `cart:add:success`            | store         | Listen        | Fired when an item is successfully added; `state.eventPayload` has item context. |
| `cart:add:fail`               | store         | Listen        | Fired when adding an item fails; `state.eventPayload` has context.               |
| `cart:remove`                 | app           | Send          | Remove an item from the cart.                                                    |
| `cart:remove:success`         | store         | Listen        | Fired when an item is successfully removed.                                      |
| `cart:remove:fail`            | store         | Listen        | Fired when removing an item fails.                                               |
| `order:update`                | checkout      | Listen        | Fired when the order is completed (success page).                                |
| `order:add:tracking_statuses` | app           | Send          | Add tracking statuses to the order.                                              |
| `coupon:add`                  | app           | Send          | Add a coupon to the cart.                                                        |
| `coupon:add:success`          | store         | Listen        | Fired when a coupon is successfully added.                                       |
| `coupon:add:fail`             | store         | Listen        | Fired when adding a coupon fails.                                                |
| `coupon:remove`               | app           | Send          | Remove a coupon from the cart.                                                   |
| `coupon:remove:success`       | store         | Listen        | Fired when a coupon is successfully removed.                                     |
| `coupon:remove:fail`          | store         | Listen        | Fired when removing a coupon fails.                                              |
| `shipping:update`             | checkout      | Listen        | Fired when the shipping method changes.                                          |
| `shipping:select`             | app           | Send          | Change the selected shipping option.                                             |
| `shipping:select:success`     | checkout      | Listen        | Fired when a shipping option is selected successfully.                           |
| `shipping:select:fail`        | checkout      | Listen        | Fired when selecting a shipping option fails.                                    |
| `shipping:update:label`       | app           | Send          | Update custom labels for shipping options.                                       |
| `customer:update`             | store         | Listen        | Fired when customer data changes.                                                |
| `payment:update`              | checkout      | Listen        | Fired when the payment method changes.                                           |
| `ui:slot:set`                 | app           | Send          | Set or clear the content of a UI slot.                                           |
| `location:updated`            | store         | Listen        | Fired when the page or visible content changes.                                  |
| `quickbuy:open`               | store         | Listen        | Fired when the quick buy modal is opened; `state.eventPayload` has product data. |
| `quickbuy:close`              | store         | Listen        | Fired when the quick buy modal is closed; `state.eventPayload` has product data. |
| `custom:*:*`                  | app / store   | Listen & Send | Custom events (e.g. `custom:modal:close`). See [Custom events](#custom-events).  |

:::info Where events run
Some events are only available in **checkout**: `cart:validate`, `coupon:add`, `coupon:remove`, `shipping:update`, `shipping:select`, `shipping:update:label`, `payment:update`, `order:add:tracking_statuses`. Others are only available in **storefront**: `cart:view`, `quickbuy:open`, `quickbuy:close`. All other events work in both contexts (or depend on the page). Each restricted event is marked below.
:::

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

For more details about the `state.location` object, see the [state page](./state#location-applocation).

## `cart:view`

**Storefront only.** Dispatched by `store` when the user views their shopping cart. Use this to run logic when the cart page is displayed.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:view", (state) => {
    console.log("User is viewing cart with", state.cart.items.length, "items");
  });
}
```

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

## `cart:update`

Dispatched by `store` when the cart content changes.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:update", ({ cart }) => {
    if (cart.items.length > 5) {
      console.log("Purchased more than 5 different items");
    }
  });
}
```

## `cart:validate`

**Checkout only.** Dispatched by `app` to signal if the content of the cart is valid or not. Requires `has_cart_validation: true` in the script configuration to work, otherwise cart validation events are ignored.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // Tell NubeSDK that this script wants to validate the content of the cart
  nube.send("config:set", () => ({
    config: {
      has_cart_validation: true,
    },
  }));

  nube.on("cart:update", ({ cart }) => {
    if (cart.items.length < 5) {
      nube.send("cart:validate", () => ({
        cart: {
          validation: {
            status: "fail",
            reason: "Cart must have at least 5 items!",
          },
        },
      }));
    } else {
      nube.send("cart:validate", () => ({
        cart: {
          validation: {
            status: "success",
          },
        },
      }));
    }
  });
}
```

## `cart:add`

Dispatched by `app` to add an item to the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("cart:add", () => ({
    cart: {
      items: [
        {
          // Use real variant_id and product_id from your store (e.g. from state.location.page.data on a product page)
          variant_id: 123,
          product_id: 321,
          quantity: 1,
        },
      ],
    },
  }));
}
```

## `cart:add:success`

Dispatched by `store` when an item is successfully added to the cart. For this event, `state` includes `eventPayload` with context about the added item.

| Property             | Type                          | Description                                                 |
| -------------------- | ----------------------------- | ----------------------------------------------------------- |
| `state.eventPayload` | Record&lt;string, unknown&gt; | Context about the added item (e.g. variant_id, product_id). |
| `state.cart`         | Cart                          | Updated cart state including the new item in `cart.items`.  |

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:add:success", (state) => {
    const payload = state.eventPayload;
    const lastItem = state.cart.items[state.cart.items.length - 1];
    console.log(
      `Item ${lastItem?.variant_id ?? payload?.variant_id} was successfully added to cart`,
    );
  });
}
```

## `cart:add:fail`

Dispatched by `store` when there's a failure in adding an item to the cart. For this event, `state` includes `eventPayload` with context about the failed operation.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:add:fail", (state) => {
    const payload = state.eventPayload;
    console.log("Failed to add item", payload);
  });
}
```

## `cart:remove`

Dispatched by `app` to remove an item from the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("cart:remove", () => ({
    cart: {
      items: [
        {
          // Use real variant_id and product_id from the item to remove (e.g. from state.cart.items)
          variant_id: 123,
          product_id: 321,
          quantity: 1,
        },
      ],
    },
  }));
}
```

## `cart:remove:success`

Dispatched by `store` when an item is successfully removed from the cart. The listener receives the updated state; `state.cart.items` reflects the removal.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:remove:success", (state) => {
    console.log(
      "Item was successfully removed; cart now has",
      state.cart.items.length,
      "items",
    );
  });
}
```

## `cart:remove:fail`

Dispatched by `store` when there's a failure in removing an item from the cart. For this event, `state.eventPayload` may contain context about the failure.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:remove:fail", (state) => {
    console.log("Failed to remove item", state.eventPayload);
  });
}
```

## `order:update`

Dispatched by `checkout` when the order is completed on the success page.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("order:update", ({ order }) => {
    console.log("Order completed", order?.id);
    // This event is only triggered on the checkout success page
    // You can use it to track conversions, send analytics, etc.
  });
}
```

## `order:add:tracking_statuses`

**Checkout only.** Dispatched by `app` to add tracking statuses to an order. This allows apps to update the order with custom tracking information that will be visible to the success page.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("order:add:tracking_statuses", () => ({
    order: {
      tracking_statuses: [
        {
          type: "packed",
          title: "Order has been packed and ready to ship",
          timestamp: new Date().toISOString(),
        },
        {
          type: "shipped",
          title: "Order shipped via express delivery",
          timestamp: new Date().toISOString(),
        },
      ],
    },
  }));
}
```

### Payload (Tracking status)

| Property    | Type   | Required | Description                                                                    |
| ----------- | ------ | -------- | ------------------------------------------------------------------------------ |
| `type`      | string | Yes      | The type of tracking status: `"shipped"`, `"packed"`, or `"shipping_failure"`. |
| `title`     | string | Yes      | A descriptive message about the tracking status.                               |
| `timestamp` | string | Yes      | ISO 8601 formatted timestamp indicating when the status occurred.              |

## `coupon:add`

**Checkout only.** Dispatched by `app` to add a coupon code to the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("coupon:add", () => ({
    cart: {
      coupon: {
        code: "SUMMER2024",
      },
    },
  }));
}
```

## `coupon:add:success`

Dispatched by `store` when a coupon is successfully added to the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("coupon:add:success", ({ cart }) => {
    console.log("Coupon", cart.coupon?.code, "was successfully applied");
  });
}
```

## `coupon:add:fail`

Dispatched by `store` when there's a failure in adding a coupon to the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("coupon:add:fail", ({ cart }) => {
    console.log("Failed to apply coupon", cart.coupon?.code);
  });
}
```

## `coupon:remove`

**Checkout only.** Dispatched by `app` to remove a coupon code from the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("coupon:remove");
}
```

## `coupon:remove:success`

Dispatched by `store` when a coupon is successfully removed from the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("coupon:remove:success", () => {
    console.log("Coupon was successfully removed from cart");
  });
}
```

## `coupon:remove:fail`

Dispatched by `store` when there's a failure in removing a coupon from the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("coupon:remove:fail", () => {
    console.log("Failed to remove coupon from cart");
  });
}
```

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

## `customer:update`

Dispatched by `store` when the customer data changes.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("customer:update", ({ customer }) => {
    console.log("Customer data updated", customer?.contact?.email);
  });
}
```

## `payment:update`

**Checkout only.** Dispatched by `checkout` when the payment method changes.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("payment:update", ({ payment }) => {
    console.log("Payment method has changed to:", payment?.selected);
  });
}
```

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

## `ui:slot:set`

Dispatched by `app` to setup the content of a ui slot.

:::note
For simpler component rendering, you can also use the `nube.render()` and `nube.clearSlot()` methods. See [Script Structure](./script-structure#rendering-components) for more information.
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

For more details about the `state.location` object, see the [state page](./state#location-applocation).

## `quickbuy:open`

**Storefront only.** Dispatched by `store` when a quick buy modal is opened for a product.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("quickbuy:open", ({ eventPayload }) => {
    const product = eventPayload;
    console.log(`Quick buy opened for product: ${product.id}`);
  });
}
```

## `quickbuy:close`

**Storefront only.** Dispatched by `store` when a quick buy modal is closed.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("quickbuy:close", ({ eventPayload }) => {
    const product = eventPayload;
    console.log(`Quick buy closed for product: ${product.id}`);
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

- Learn more about [Browser API's](./browser-apis)
- Learn more about [Components](./components)
- Learn more about [UI Slots](./slots/overview)
