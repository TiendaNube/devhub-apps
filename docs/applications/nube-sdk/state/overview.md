---
title: State
---

import AppTypes from '@site/src/components/AppTypes';

The `NubeSDKState` type represents the complete state of a Nuvemshop / Tiendanube application, providing access to all available data and configurations. This state object is passed to various SDK functions and components, allowing developers to access and react to the current application state.

The canonical type is exported from `@tiendanube/nube-sdk-types`.

## How to read the NubeSDKState

There are 3 ways to get the `NubeSDKState` in your app.

### 1. The getState function

This function returns the current state of the SDK, ideal for getting information at app startup.

```typescript
import { NubeSDK, NubeSDKState } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  // Get current state
  const currentState: Readonly<NubeSDKState> = nube.getState();

  // Access state properties
  const cartTotal = currentState.cart.total;
  const storeCurrency = currentState.store.currency;
  const currentPage = currentState.location.page.type;
}
```

### 2. Listening to State Changes

Whenever an event is triggered, the listener function receives a snapshot of the state at the time of the event. The listener signature is `(state, event) => void`, where `event` is the event name string (e.g. `"cart:update"`).

```typescript
import { NubeSDK, NubeSDKState } from '@tiendanube/nube-sdk-types';

export function App(nube: NubeSDK) {
  // Listen for state changes
  nube.on('customer:update', (state: Readonly<NubeSDKState>) => {
      const customerEmail = state.customer.email;
      const customerAddress = state.customer.address;
    }
  });
}
```

For more details on how to monitor state updates and subscribe to various state events, please see [Events](../events/overview). This page provides comprehensive examples and explanations on how to listen for updates such as `cart:update`, `shipping:update`, and more, allowing you to build a dynamic, responsive application.

### 3. Modifying State

When an event is sent, a modified function can be defined as the second parameter, this function receives a snapshot of the state and should return a partial version of the state to be merged into the current state.

```tsx
import { NubeSDK, NubeSDKState } from "@tiendanube/nube-sdk-types";
import { Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  // Send events with state modifications
  nube.send("ui:slot:set", (state: Readonly<NubeSDKState>) => {
    // Return a DeepPartial<NubeSDKState>
    const storeName = state.store.name;
    return {
      ui: {
        slots: {
          before_main_content: <Text>{`Hello ${storeName}!`}</Text>,
        },
      },
    };
  });
}
```

## Properties

| Property       | Type                                    | Description                                                                             |
| -------------- | --------------------------------------- | --------------------------------------------------------------------------------------- |
| [`cart`](./cart)         | `Cart`                                  | Current cart (items, prices, validation).                                               |
| [`order`](./order)        | `Order` &#124; `undefined`              | Order status and tracking. **Available when:** Checkout success page only.              |
| [`config`](./store-and-config#config-appconfig)       | `AppConfig`                             | App-wide configuration (e.g. cart validation).                                          |
| [`device`](./store-and-config#device-device)       | `Device`                                | Device and screen information.                                                          |
| [`location`](./location)     | `AppLocation`                           | Current page, URL, and query params.                                                    |
| [`store`](./store-and-config#store-store)        | `Store`                                 | Store id, name, domain, currency, language.                                             |
| [`ui`](./ui-and-session#ui-ui)           | `UI`                                    | Slots and component values. See [UI Slots](../slots/overview) for slot names.            |
| [`shipping`](./shipping)     | `Shipping` &#124; `null`                | Selected shipping option and options. **Available when:** Checkout / context-dependent. |
| [`customer`](./customer)     | `Customer` &#124; `null`                | Contact and addresses. **Available when:** Checkout / context-dependent.                |
| [`payment`](./payment)      | `Payment` &#124; `null`                 | Payment status and selected method. **Available when:** Checkout / context-dependent.   |
| [`eventPayload`](./ui-and-session#eventpayload-nullablerecordstring-unknown) | `Record<string, unknown>` &#124; `null` | Extra data on certain events (e.g. success events).                                     |
| [`session`](./ui-and-session#session-session)      | `Session`                               | Session information (e.g. session id).                                                  |

## State groups

- [**Cart**](./cart) — Cart items, pricing, coupons, and validation
- [**Order**](./order) — Order status and tracking statuses
- [**Location**](./location) — Current page, URL, query params, and page-specific data
- [**Store, Device & Config**](./store-and-config) — Store info, device details, and app configuration
- [**Shipping**](./shipping) — Shipping options, selection, and custom labels
- [**Customer**](./customer) — Customer contact info and addresses
- [**Payment**](./payment) — Payment status and selected method
- [**UI, Session & Event Payload**](./ui-and-session) — UI slots, session info, and event payload

## Notes

- Properties marked as `Nullable<T>` may be `null` depending on the context or page where they are accessed
- The **Available when** column in the table above indicates context-dependent properties (e.g. `order` only on checkout success page)
- The `UI` property contains dynamically injected components and their values; for the full list of slot names see [UI Slots](../slots/overview)
- The `location` property helps determine the current context of the application
- All monetary values in the `cart` property are in the store's base currency
- The state is immutable and can only be modified through the `send` method of `NubeSDK`
- The `eventPayload` property is available in success events (e.g., `cart:add:success`, `quickbuy:open`)
- `DeepPartial<T>` means all properties of type T and their nested properties are optional
