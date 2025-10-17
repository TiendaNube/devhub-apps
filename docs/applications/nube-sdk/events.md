---
title: Events
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The communication between the main page and the scripts is handled through events, ensuring a reactive and flexible integration where each component operates independently without direct calls.

- **Events Dispatched by the Main Page:**
  When significant changes occur—such as an update to the shopping cart—the main page dispatches events (e.g., `cart_updated`) to notify scripts that a change has occurred.

- **Events Dispatched by the Scripts:**
  Conversely, the scripts can emit events (like `cart:validate`) to report on the validity of the cart contents or to signal that additional actions might be required.

This event-driven approach allows the application to respond in real-time to state changes, simplifying maintenance and enhancing scalability.

## `checkout:ready`

Dispatched by  `checkout` every time a new checkout page is loaded and ready to use.
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
️
For more details about the `state.location` object, see the [state page](/docs/applications/nube-sdk/state#location-applocation).

## `config:set`

Dispatched by `script` to setup initial script configuration

```typescript title="Example"
nube.send("config:set", () => ({
  config: {
    has_cart_validation: true
  },
}));
```

### AppConfig

| Config Type                           | Type      | What for?                                                 |
|---------------------------------------|-----------|-----------------------------------------------------------|
| `has_cart_validation`                 | boolean   |Enables cart validation feature                            |
| `disable_shipping_more_options`       | boolean   |Determines whether the user can select a shipping option   |

## `cart:update`

Dispatched by `checkout` when the cart content changes

```typescript title="Example"
nube.on("cart:update", ({ cart }) => {
  if (cart.items > 5) {
    console.log("Purchased more than 5 different items");
  }
});
```

## `cart:validate`

Dispatched by `script` to signal if the content of the cart is valid or not. Requires `has_cart_validation: true` in the script configuration to work, otherwise cart validation events are ignored.

```typescript title="Example"
// Tell NubeSDK that this script wants to validate the content of the cart
nube.send("config:set", () => ({
  config: {
    has_cart_validation: true
  },
}));

nube.on("cart:update", ({ cart }) => {
  // Reject the cart if it has fewer than 5 items
  if (cart.items.length < 5) {
    // Dispatch a failed `cart:validate` event with the reason why it failed to validate
    nube.send("cart:validate", () => ({
      cart: {
        validation: {
          status: "fail",
          reason: "Cart must have at least 5 items!",
        },
      },
    }));
  } else {
    // Dispatch a successful `cart:validate` event
    nube.send("cart:validate", () => ({
      cart: {
        validation: {
          status: "success",
        },
      },
    }));
  }
}
```

## `cart:add`

Dispatched by `app` to add an item to the cart.

```typescript
nube.send("cart:add", () => ({
  cart: {
    items: [{
      variant_id: 123,
      product_id: 321,
      quantity: 1,
    }]
  },
}))
```

## `cart:add:success`

Dispatched by `store` when an item is successfully added to the cart.

```typescript
nube.on("cart:add:success", ({ cart }) => {
  console.log(`Item ${cart.item.variant_id} was successfully added to cart`);
});
```

## `cart:add:fail`

Dispatched by `store` when there's a failure in adding an item to the cart.

```typescript
nube.on("cart:add:fail", ({ cart }) => {
  console.log(`Failed to add item ${cart.item.variant_id} to cart`);
});
```

## `cart:remove`

Dispatched by `app` to remove an item from the cart.

```typescript
nube.send("cart:remove", () => ({
  cart: {
    items: [{
      variant_id: 123,
      product_id: 321,
      quantity: 1,
    }]
  },
}));
```

## `cart:remove:success`

Dispatched by `store` when an item is successfully removed from the cart.

```typescript
nube.on("cart:remove:success", ({ cart }) => {
  console.log(`Item ${cart.items[0].variant_id} was successfully removed from cart`);
});
```

## `cart:remove:fail`

Dispatched by `store` when there's a failure in removing an item from the cart.

```typescript
nube.on("cart:remove:fail", ({ cart }) => {
  console.log(`Failed to remove item ${cart.items[0].variant_id} from cart`);
});
```

## `coupon:add`

Dispatched by `app` to add a coupon code to the cart.

```typescript
nube.send("coupon:add", () => ({
  cart: {
    coupon: {
      code: "SUMMER2024",
    },
  },
}));
```

## `coupon:add:success`

Dispatched by `store` when a coupon is successfully added to the cart.

```typescript
nube.on("coupon:add:success", ({ coupon }) => {
  console.log(`Coupon ${coupon.code} was successfully applied`);
});
```

## `coupon:add:fail`

Dispatched by `store` when there's a failure in adding a coupon to the cart.

```typescript
nube.on("coupon:add:fail", ({ coupon }) => {
  console.log(`Failed to apply coupon ${coupon.code}`);
});
```

## `coupon:remove`

Dispatched by `app` to remove a coupon code from the cart.

```typescript
nube.send("coupon:remove");
```

## `coupon:remove:success`

Dispatched by `store` when a coupon is successfully removed from the cart.

```typescript
nube.on("coupon:remove:success", () => {
  console.log("Coupon was successfully removed from cart");
});
```

## `coupon:remove:fail`

Dispatched by `store` when there's a failure in removing a coupon from the cart.

```typescript
nube.on("coupon:remove:fail", () => {
  console.log("Failed to remove coupon from cart");
});
```

## `shipping:update`

Dispatched by `checkout` when the shipping method changes.

```typescript title="Example"
nube.on("shipping:update", ({ shipping }) => {
  if (shipping?.selected) {
    console.log(`Shipping method selected has changed to: ${shipping?.selected}`);
  }
});
```

## `shipping:select`

Dispatched by `script` to change checkout shipping option.

```typescript title="Example"
function App (nube: NubeSDK) {
  nube.send("shipping:select", () => ({
    shipping: {
      selected: "OPTION_ID",
    }
  }));

  nube.on("shipping:select:success", ({ shipping }) => {
    console.log("selected option", shipping.selected)
  });

  nube.on("shipping:select:fail", ({ shipping }) => {
    console.log("selected option", shipping.selected)
  });
}
```

## `customer:update`

Dispatched by `checkout` when the customer data changes.

```typescript title="Example"
nube.send("shipping:select", () => ({
  shipping: {
    selected: "OPTION_ID",
  }
}));
```

## `payment:update`

Dispatched by `checkout` when the payment method changes.

```typescript title="Example"
nube.on("payment:update", ({ payment }) => {
  console.log(`payment method has changed to: ${payment?.selected}`);
});
```

## `shipping:update:label`

Dispatched by `script` to change checkout shipping method label.

The `custom_labels` property accepts a `Record<string, CustomLabel>` where each value can be either:
- A simple `string` for a basic label
- An object with optional `title` and `description` properties for more detailed labeling

:::note
When using the object format, setting `description` to `null` will hide the description information in the Checkout.
:::

```typescript title="Example with string labels"
nube.send("shipping:update:label", () => ({
  shipping: {
    selected: null,
    custom_labels: {
      "ne-correios-sedex": "My custom label"
    },
    options: []
  }
}));
```

```typescript title="Example with object labels"
nube.send("shipping:update:label", () => ({
  shipping: {
    selected: null,
    custom_labels: {
      "ne-correios-sedex": {
        title: "Express Delivery",
        description: "Arrives in 2-3 business days"
      },
      "ne-correios-pac": "Standard Shipping"
    },
    options: []
  }
}));
```

## `ui:slot:set`

Dispatched by `script` to setup the content of a ui slot.

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
nube.send("ui:slot:set", () => ({
  ui: {
    slots: {
      before_line_items: undefined
    }
  }
}));
```

- Learn more about [Browser API's](./browser-apis)
- Learn more about [Components](./components)
- Learn more about [UI Slots](./ui-slots)
