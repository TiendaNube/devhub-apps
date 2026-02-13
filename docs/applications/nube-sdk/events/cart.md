---
title: Cart Events
---

These events handle shopping cart interactions including viewing, updating, validating, adding, and removing items.

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

Dispatched by `store` when an item is successfully added to the cart.

### `eventPayload`

This event includes `state.eventPayload` with details about the item(s) that were added. The payload shape depends on the context:

- **Storefront:** a single cart item object.
- **Checkout:** an array of cart item objects (one per item successfully added).

Each cart item in the payload has the following properties:

| Property               | Type                                                  | Description                                             |
| ---------------------- | ----------------------------------------------------- | ------------------------------------------------------- |
| `id`                   | number                                                | Unique identifier for the product instance in the cart. |
| `name`                 | string                                                | Name of the product.                                    |
| `price`                | string                                                | Price in string format.                                 |
| `quantity`             | number                                                | Quantity added.                                         |
| `free_shipping`        | boolean                                               | Whether the product qualifies for free shipping.        |
| `product_id`           | number                                                | Unique identifier for the product.                      |
| `variant_id`           | number                                                | Unique identifier for the selected product variant.     |
| `thumbnail`            | string                                                | URL of the product's thumbnail image.                   |
| `variant_values`       | string                                                | Variant details (e.g. selected attributes).             |
| `sku`                  | string or null                                        | SKU (Stock Keeping Unit) for the product variant.       |
| `properties`           | Array&lt;unknown&gt; or Record&lt;string, unknown&gt; | Additional product properties.                          |
| `url`                  | string                                                | URL of the product's page.                              |
| `is_ahora_12_eligible` | boolean                                               | Whether the product is eligible for Ahora 12 financing. |

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:add:success", (state) => {
    const payload = state.eventPayload;

    // In storefront, payload is a single item object
    // In checkout, payload is an array of item objects
    const item = Array.isArray(payload) ? payload[0] : payload;

    console.log("Item added to cart:", item?.variant_id, item?.name);
  });
}
```

## `cart:add:fail`

Dispatched by `store` when there's a failure in adding an item to the cart.

:::note
This event does not include `eventPayload`. The `state.eventPayload` will be `null`.
:::

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:add:fail", (state) => {
    console.log("Failed to add item to cart");
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

### `eventPayload`

This event includes `state.eventPayload` with details about the item(s) that were removed. The payload shape depends on the context:

- **Storefront:** a single cart item object.
- **Checkout:** an array of cart item objects (one per item successfully removed).

The cart item shape is the same as [`cart:add:success`](#cartaddsuccess).

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:remove:success", (state) => {
    const payload = state.eventPayload;
    const item = Array.isArray(payload) ? payload[0] : payload;

    console.log(
      "Item removed:", item?.variant_id,
      "— cart now has", state.cart.items.length, "items",
    );
  });
}
```

## `cart:remove:fail`

Dispatched by `store` when there's a failure in removing an item from the cart.

:::note
This event does not include `eventPayload`. The `state.eventPayload` will be `null`.
:::

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("cart:remove:fail", (state) => {
    console.log("Failed to remove item from cart");
  });
}
```
