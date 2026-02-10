---
title: Order
---

### `order?: Order`

The current order state, containing order status and tracking statuses.
This property is only available on the checkout `success` page after the order has been completed, and will be `null` on all other pages.

| Property            | Type                                      | Required | Description                     |
| ------------------- | ----------------------------------------- | -------- | ------------------------------- |
| `status`            | "open" or "closed" or "cancelled" or null | No       | Status of the order.            |
| `tracking_statuses` | OrderTrackingStatus[]                     | No       | Tracking statuses of the order. |

**OrderTrackingStatus** (each element of `order.tracking_statuses`):

| Property    | Type                                        | Required | Description                       |
| ----------- | ------------------------------------------- | -------- | --------------------------------- |
| `type`      | "shipped" or "packed" or "shipping_failure" | Yes      | Type of the tracking status.      |
| `title`     | string                                      | Yes      | Title of the tracking status.     |
| `timestamp` | string                                      | Yes      | Timestamp of the tracking status. |

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Order`, `OrderTrackingStatus`).
