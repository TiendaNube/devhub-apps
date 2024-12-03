---
title: Events
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

## `config:set`

Dispatched by `script` to setup initial script configuration

```typescript title="Example"
    nube.send("config:set", () => {
		config: {
            // Enable cart validation
			has_cart_validation: true
		},
    });
```

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
