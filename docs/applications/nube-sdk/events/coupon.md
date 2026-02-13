---
title: Coupon Events
---

These events handle adding and removing coupon codes from the cart.

## `coupon:add`

**Checkout only.** Dispatched by `app` to add a coupon code to the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("coupon:add", () => ({
    cart: {
      coupon: {
        code: "SUMMER2024",
      },
    },
  }));
}
```

## `coupon:add:success`

Dispatched by `store` when a coupon is successfully added to the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("coupon:add:success", ({ cart }) => {
    console.log("Coupon", cart.coupon?.code, "was successfully applied");
  });
}
```

## `coupon:add:fail`

Dispatched by `store` when there's a failure in adding a coupon to the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("coupon:add:fail", ({ cart }) => {
    console.log("Failed to apply coupon", cart.coupon?.code);
  });
}
```

## `coupon:remove`

**Checkout only.** Dispatched by `app` to remove a coupon code from the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.send("coupon:remove");
}
```

## `coupon:remove:success`

Dispatched by `store` when a coupon is successfully removed from the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("coupon:remove:success", () => {
    console.log("Coupon was successfully removed from cart");
  });
}
```

## `coupon:remove:fail`

Dispatched by `store` when there's a failure in removing a coupon from the cart.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.on("coupon:remove:fail", () => {
    console.log("Failed to remove coupon from cart");
  });
}
```
