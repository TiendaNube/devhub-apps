---
title: Shipping
---

## `shipping: Nullable<Shipping>`

Information about shipping, such as available options, selected option and custom labels.
This property may be null depending on the page it is accessed from.

| Property        | Type                         | Required | Description                                 |
| --------------- | ---------------------------- | -------- | ------------------------------------------- |
| `selected`      | string or null               | No       | Selected shipping option ID.                |
| `options`       | ShippingOption[]             | No       | List of available shipping options.         |
| `custom_labels` | Record&lt;string, string&gt; | No       | Custom labels assigned to shipping options. |

**ShippingOption** (each element of `shipping.options`):

| Property                 | Type           | Required | Description                                                                   |
| ------------------------ | -------------- | -------- | ----------------------------------------------------------------------------- |
| `id`                     | string         | Yes      | Unique identifier for the shipping option.                                    |
| `original_name`          | string or null | No       | Original name of the shipping option.                                         |
| `name`                   | string or null | No       | Display name of the shipping option.                                          |
| `code`                   | string or null | No       | Shipping method code.                                                         |
| `reference`              | string or null | No       | Reference code for the shipping option.                                       |
| `type`                   | string or null | No       | Type of shipping method.                                                      |
| `price`                  | number         | Yes      | Price of the shipping option.                                                 |
| `price_merchant`         | number         | Yes      | Merchant price of the shipping option.                                        |
| `currency`               | string         | Yes      | Currency of the shipping cost.                                                |
| `min_delivery_date`      | string or null | No       | Estimated minimum delivery date.                                              |
| `max_delivery_date`      | string or null | No       | Estimated maximum delivery date.                                              |
| `phone_required`         | boolean        | Yes      | Whether a phone number is required for shipping.                              |
| `id_required`            | boolean        | Yes      | Whether an ID is required for shipping.                                       |
| `accepts_cod`            | boolean        | Yes      | Whether cash on delivery is accepted.                                         |
| `free_shipping_eligible` | boolean        | Yes      | Whether the option is eligible for free shipping.                             |
| `extra`                  | object         | No       | Extra shipping details (e.g. `show_time`, `warning`, `free_shipping` fields). |
| `method`                 | string or null | No       | Shipping method identifier.                                                   |
| `app_id`                 | string or null | No       | Application ID associated with the shipping option.                           |
| `hidden`                 | boolean        | Yes      | Whether the shipping option is hidden.                                        |
| `priority`               | number or null | No       | Priority of the shipping option.                                              |
| `shippable`              | boolean        | Yes      | Whether the shipping option is available.                                     |
| `smart_date`             | object         | No       | Smart date information for delivery estimates.                                |

For the exact TypeScript definitions (including nested `extra` and `smart_date` shapes), use the types from `@tiendanube/nube-sdk-types` (e.g. `Shipping`, `ShippingOption`).
