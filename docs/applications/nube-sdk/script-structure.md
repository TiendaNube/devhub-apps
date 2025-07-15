---
title: Script Structure
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

## Script structure

The main entry point for the script is located in `src/main.ts`.

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // your code goes here
}
```

This exported function, `App(nube: NubeSDK)` is called by the NubeSDK during initialization, and it's the main entry point for your application's script.

The received `nube: NubeSDK` object contains all the helper functions required to interact with the sdk.

```typescript
export type NubeSDK = {
  // Start listening to an event
  on(event: NubeSDKListenableEvent, listener: NubeSDKListener): void;
  // Stop listening to an event
  off(event: NubeSDKListenableEvent, listener: NubeSDKListener): void;
  // Dispatch an event
  send(event: NubeSDKSendableEvent, modifier?: NubeSDKStateModifier): void;
  // Get current state
  getState(): Readonly<NubeSDKState>;
  // Get browser APIs
  getBrowserAPIs(): NubeBrowserAPIs;
  // Render a component into a UI slot
  render(slot: UISlot, component: NubeComponent | ((state: Readonly<NubeSDKState>) => NubeComponent)): void;
  // Clear a component from a UI slot
  clearSlot(slot: UISlot): void;
};
```

The programming model used by NubeSDK is mostly event based, that is, the SDK dispatches events to report changes in the store, and sometimes expects events as response.

### Listening to events

Listening to events is done through the received `nube` instance:

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
// Listen to cart update event, dispatched every time that the cart is updated
nube.on("cart:update", ({ cart }) => {
  // Log the total price of the cart to console
  console.log(cart.prices.total);
});
}
```

### Dispatching events

Dispatching events is done through the received `nube` instance:

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // Listen to cart update event, dispatched every time that the cart is updated
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
  });
}
```

### Script configuration

There is a special event that can be dispatched by the script to configure some special parameters related to the behavior of the script:

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
// Tell NubeSDK that this script wants to validate the content of the cart
nube.send("config:set", () => ({
  config: {
    has_cart_validation: true
  },
}));
}
```

In this example, the script is telling `NubeSDK` that it wants to validate the content of the cart.

### Rendering components

The NubeSDK provides methods to render components into UI slots and clear them when needed.

#### Rendering a component

The `render` method allows you to render a component into a specific UI slot. The component can be either a static component or a function that receives the current state and returns a component to render.

For a complete list of available UI slots, see [UI Slots](./ui-slots).

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Text } from "@tiendanube/nube-sdk";

export function App(nube: NubeSDK) {
  // Render a static component
  nube.render("after_address_form", <Text>Hello World</Text>);
  
  // Render a dynamic component based on state
  nube.render("after_contact_form", (state) => {
    const cartItems = state.cart.items.length;
    return (
      <Text>
        You have {cartItems} items in your cart
      </Text>
    );
  });
}
```

#### Clearing a component

The `clearSlot` method removes a component from a specific UI slot.

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // Clear the component from the slot
  nube.clearSlot("after_address_form");
}
```

For more information about available UI slots, see [UI Slots](./ui-slots).

### Browser APIs

The `getBrowserAPIs()` method provides access to browser-specific APIs that allow you to interact with the browser environment:

```typescript
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // Get browser APIs
  const browser = nube.getBrowserAPIs();
  
  // Use browser APIs for various operations
  // Example: Making HTTP requests, accessing localStorage, etc.
}
```

For detailed information about available browser APIs, see [Browser APIs](./browser-apis).

## Next Steps

- Learn more about [Events](./events)
- Learn more about [Components](./components)
- Learn more about [Browser APIs](./browser-apis)
