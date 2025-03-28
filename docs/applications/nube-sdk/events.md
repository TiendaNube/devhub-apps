---
title: Events
---

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

## `config:set`

Dispatched by `script` to setup initial script configuration

```typescript title="Example"
nube.send("config:set", () => {
  config: {
    has_cart_validation: true
  },
});
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

## `shipping:update`

Dispatched by `checkout` when the shipping method changes.

```typescript title="Example"
nube.on("shipping:update", ({ shipping }) => {
  if (shipping?.selected) {
    console.log(`Shipping method selected has changed to: ${shipping?.selected}`);
  }
});
```

## `shipping:update:label`

Dispatched by `script` to change checkout shipping method label.

```typescript title="Example"
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

## `ui:slot:set`

Dispatched by `script` to setup the content of a ui slot.

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
- Learn more about [UI Components](./ui-components)
- Learn more about [UI Slots](./ui-slots)
