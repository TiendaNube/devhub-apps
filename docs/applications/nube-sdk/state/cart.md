---
title: Cart
---

## `cart: Cart`

The current cart state, containing products, pricing, and validation status.

| Property          | Type                      | Always present | Description                              |
| ----------------- | ------------------------- | -------------- | ---------------------------------------- |
| `id`              | string                    | Yes      | Unique identifier for the cart session.  |
| `validation`      | CartValidation            | Yes      | Validation status of the cart.           |
| `items`           | CartItem[]                | Yes      | List of items currently in the cart.     |
| `prices`          | Prices                    | Yes      | Breakdown of the cart's pricing details. |
| `coupon`          | DeepPartial&lt;Coupon&gt; | No       | Optional coupon applied to the cart.     |
| `is_subscription` | boolean                   | Yes      | Indicates if the cart is a subscription. Only available on **checkout**. |

**CartItem** (each element of `cart.items`):

| Property               | Type                                                  | Always present | Description                                             |
| ---------------------- | ----------------------------------------------------- | -------------- | ------------------------------------------------------- |
| `id`                   | number                                                | Yes      | Unique identifier for the product instance in the cart. |
| `name`                 | string                                                | Yes      | Name of the product.                                    |
| `price`                | string                                                | Yes      | Price in string format (to match API response).         |
| `quantity`             | number                                                | Yes      | Quantity of this product in the cart.                   |
| `free_shipping`        | boolean                                               | Yes      | Whether the product qualifies for free shipping.        |
| `product_id`           | number                                                | Yes      | Unique identifier for the product (not cart-specific).  |
| `variant_id`           | number                                                | Yes      | Unique identifier for the selected product variant.     |
| `thumbnail`            | string                                                | Yes      | URL of the product's thumbnail image.                   |
| `variant_values`       | string                                                | Yes      | Variant details (e.g. selected attributes).             |
| `sku`                  | string or null                                        | No       | SKU (Stock Keeping Unit) for the product variant.       |
| `properties`           | Array&lt;unknown&gt; or Record&lt;string, unknown&gt; | No       | Additional product properties.                          |
| `url`                  | string                                                | Yes      | URL of the product's page.                              |
| `is_ahora_12_eligible` | boolean                                               | Yes      | Whether the product is eligible for Ahora 12 financing. |

**Prices** (`cart.prices`):

| Property             | Type   | Always present | Description                                   |
| -------------------- | ------ | -------------- | --------------------------------------------- |
| `discount_coupon`    | number | Yes      | Discount applied through a coupon.            |
| `discount_gateway`   | number | Yes      | Discount applied through a payment gateway.   |
| `discount_promotion` | number | Yes      | Discount applied through a store promotion.   |
| `shipping`           | number | Yes      | Cost of shipping.                             |
| `subtotal`           | number | Yes      | Subtotal before discounts and shipping.       |
| `total`              | number | Yes      | Final total after all discounts and shipping. |

**Coupon** (`cart.coupon`):

| Property | Type   | Always present | Description                                     |
| -------------- | ------ | -------------- | ----------------------------------------------- |
| `code`   | string | Yes      | The coupon code used.                           |
| `type`   | string | Yes      | The type of discount (percentage, fixed, etc.). |
| `value`  | string | Yes      | The discount value (format depends on `type`).  |

**CartValidation** (`cart.validation`): One of `{ status: "success" }`, `{ status: "pending" }`, or `{ status: "fail"; reason: string }`.

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Cart`, `CartItem`, `Prices`, `Coupon`, `CartValidation`).
