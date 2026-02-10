---
title: Order Events
---

These events handle order completion and tracking status updates.

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
