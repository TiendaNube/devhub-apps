---
sidebar_position: 1
title: First Steps
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

# First Steps

The NubeSDK contains the typescript definitions of the types required for development.

## Installation

### npm

```bash
$ npm install -D @tiendanube/nube-sdk-types
```

### yarn

```bash
$ yarn add -D @tiendanube/nube-sdk-types
```

## Usage

```typescript
import { NubeSDK, NubeSDKState } from "@tiendanube/nube-sdk-types";
```

## Creation a of a new application script from scratch

Creating a new application script from scratch that uses nube-sdk is really simple thanks to our existing [application template](https://github.com/TiendaNube/nube-sdk/tree/alpha/examples/minimal).

1. Download the application template located in https://github.com/TiendaNube/nube-sdk/tree/alpha/examples/minimal

2. Copy that template to your own folder

3. Go into your own folder

4. Run `npm install` or `yarn install` to install the dependencies

5. Run `npm run build` or `yarn build` to build the example application

After performing these steps, you will have the output of the compilation available in a single file located in `dist/main.min.js`

## Script structure

The main entry point for the script is located in `src/main.ts`. 

```typescript
export function App(nube: NubeSDK) {
    // your code goes here
}
```

This exported function, `App(nube: NubeSDK)` is called by the NubeSDK during initialization, and it's the main entry point for your application's script.

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
