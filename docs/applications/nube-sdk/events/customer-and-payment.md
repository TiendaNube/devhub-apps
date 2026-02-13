---
title: Customer & Payment Events
---

These events handle customer data changes and payment method updates.

## `customer:update`

Dispatched by `store` when the customer data changes.

### `eventPayload`

**Storefront only.** When triggered by a login or logout action, this event includes `state.eventPayload` with context about the action:

| Property | Type   | Description                                                          |
| -------- | ------ | -------------------------------------------------------------------- |
| `action` | string | The action that triggered the update: `"customer:login"` or `"customer:logout"`. |
| `data`   | object | The customer data at the time of the action (matches `state.customer`). For logout, this is the customer data before the logout. |
| `path`   | string | Always `"customer"`.                                                 |

:::note
In checkout, this event may not include `eventPayload` (it will be `null`). Always check before accessing.
:::

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("customer:update", ({ customer, eventPayload }) => {
    if (eventPayload?.action === "customer:login") {
      console.log("Customer logged in:", customer?.contact?.email);
    } else if (eventPayload?.action === "customer:logout") {
      console.log("Customer logged out");
    } else {
      console.log("Customer data updated", customer?.contact?.email);
    }
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
