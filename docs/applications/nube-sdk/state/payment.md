---
title: Payment
---

## `payment: Nullable<Payment>`

Information about the payment method, including status and selected option.
This property may be null depending on the page it is accessed from.

| Property   | Type                    | Always present | Description                      |
| ---------- | ----------------------- | -------------- | -------------------------------- |
| `status`   | PaymentStatus or null   | No       | Current status of the payment.   |
| `selected` | SelectedPayment or null | No       | Selected payment method details. |

**PaymentStatus**: One of `"pending"`, `"paid"`, `"voided"`, `"open"`, `"abandoned"`, `"authorized"`, `"refunded"`, `"recovered"`, `"partially_paid"`.

**SelectedPayment** (`payment.selected`):

| Property              | Type            | Always present | Description                                          |
| --------------------- | --------------- | -------------- | ---------------------------------------------------- |
| `id`                  | string or null  | No       | Unique identifier for the payment method.            |
| `app_id`              | number or null  | No       | Application ID associated with the payment provider. |
| `payment_provider_id` | string or null  | No       | Payment provider identifier.                         |
| `method_name`         | string or null  | No       | Name of the payment method.                          |
| `type`                | string or null  | No       | Type of payment.                                     |
| `method_type`         | string or null  | No       | Method type.                                         |
| `bypass_gateway`      | boolean or null | No       | Whether to bypass the payment gateway.               |
| `render_gateway_name` | boolean or null | No       | Whether to render the gateway name.                  |
| `method`              | string or null  | No       | Payment method identifier.                           |
| `template`            | string or null  | No       | Template for the payment method.                     |
| `name`                | string or null  | No       | Display name.                                        |
| `category`            | string or null  | No       | Payment category.                                    |
| `billing_address`     | boolean or null | No       | Whether billing address is required.                 |

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Payment`, `PaymentStatus`, `SelectedPayment`).
