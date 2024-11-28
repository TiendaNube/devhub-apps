---
title: Script Structure
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

## Script structure

The main entry point for the script is located in `src/main.ts`. 

```typescript
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
};
```

The programming model used by NubeSDK is mostly event based, that is, the SDK dispatches events to report changes in the store, and sometimes expects events as response.

### Listening to events

Listening to events is done through the received `nube` instance:

```typescript
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
export function App(nube: NubeSDK) {
    // Listen to cart update event, dispatched every time that the cart is updated
	nube.on("cart:update", ({ cart }) => {

        // Tell NubeSDK that this script wants to validate the content of the cart
        nube.send("config:set", () => ({
            config: {
                has_cart_validation: true
            },
        }));

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

## Next Steps

- Learn more about [Events](./events)
