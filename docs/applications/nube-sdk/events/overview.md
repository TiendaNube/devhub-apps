---
title: Events
---

The communication between the main page and the scripts is handled through events, ensuring a reactive and flexible integration where each component operates independently without direct calls.

- **Events Dispatched by the Store / Checkout:** When significant changes occur—such as an update to the shopping cart—the store or checkout dispatches events (e.g., `cart:update`) to notify scripts that a change has occurred.
- **Events Dispatched by the Apps:** Conversely, the scripts can emit events (like `cart:validate`) to report on the validity of the cart contents or to signal that additional actions might be required.

The listener always receives the current [state](../state/overview) at the time of the event. The listener signature is `(state, event) => void`, where `event` is the event name string. For `nube.send`, the second argument is optional: a function `(state) => partialState`; only the returned keys are merged into the current state.

This event-driven approach allows the application to respond in real-time to state changes, simplifying maintenance and enhancing scalability.

## Events reference

| Event                         | Dispatched by | Listen / Send | Description                                                                      |
| ----------------------------- | ------------- | ------------- | -------------------------------------------------------------------------------- |
| [`page:loaded`](./page-and-lifecycle#pageloaded)                 | store         | Listen        | Fired when the page is loaded and the SDK is ready to use.                       |
| [`checkout:ready`](./page-and-lifecycle#checkoutready)            | checkout      | Listen        | Fired when a new checkout page is loaded and ready.                              |
| [`checkout:success`](./page-and-lifecycle#checkoutsuccess)          | checkout      | Listen        | Fired when checkout completes successfully.                                      |
| [`config:set`](./page-and-lifecycle#configset)                | app           | Send          | Set initial script configuration.                                                |
| [`cart:update`](./cart#cartupdate)                 | store         | Listen        | Fired when the cart content changes.                                             |
| [`cart:view`](./cart#cartview)                   | store         | Listen        | Fired when the user views the cart.                                              |
| [`cart:validate`](./cart#cartvalidate)               | app           | Send          | Signal whether the cart content is valid (requires `has_cart_validation: true`). |
| [`cart:add`](./cart#cartadd)                    | app           | Send          | Add an item to the cart.                                                         |
| [`cart:add:success`](./cart#cartaddsuccess)            | store         | Listen        | Fired when an item is successfully added; `state.eventPayload` has item context. |
| [`cart:add:fail`](./cart#cartaddfail)               | store         | Listen        | Fired when adding an item fails; `state.eventPayload` has context.               |
| [`cart:remove`](./cart#cartremove)                 | app           | Send          | Remove an item from the cart.                                                    |
| [`cart:remove:success`](./cart#cartremovesuccess)         | store         | Listen        | Fired when an item is successfully removed.                                      |
| [`cart:remove:fail`](./cart#cartremovefail)            | store         | Listen        | Fired when removing an item fails.                                               |
| [`order:update`](./order#orderupdate)                | checkout      | Listen        | Fired when the order is completed (success page).                                |
| [`order:add:tracking_statuses`](./order#orderaddtracking_statuses) | app           | Send          | Add tracking statuses to the order.                                              |
| [`coupon:add`](./coupon#couponadd)                  | app           | Send          | Add a coupon to the cart.                                                        |
| [`coupon:add:success`](./coupon#couponaddsuccess)          | store         | Listen        | Fired when a coupon is successfully added.                                       |
| [`coupon:add:fail`](./coupon#couponaddfail)             | store         | Listen        | Fired when adding a coupon fails.                                                |
| [`coupon:remove`](./coupon#couponremove)               | app           | Send          | Remove a coupon from the cart.                                                   |
| [`coupon:remove:success`](./coupon#couponremovesuccess)       | store         | Listen        | Fired when a coupon is successfully removed.                                     |
| [`coupon:remove:fail`](./coupon#couponremovefail)          | store         | Listen        | Fired when removing a coupon fails.                                              |
| [`shipping:update`](./shipping#shippingupdate)             | checkout      | Listen        | Fired when the shipping method changes.                                          |
| [`shipping:select`](./shipping#shippingselect)             | app           | Send          | Change the selected shipping option.                                             |
| [`shipping:select:success`](./shipping#shippingselectsuccess)     | checkout      | Listen        | Fired when a shipping option is selected successfully.                           |
| [`shipping:select:fail`](./shipping#shippingselectfail)        | checkout      | Listen        | Fired when selecting a shipping option fails.                                    |
| [`shipping:update:label`](./shipping#shippingupdatelabel)       | app           | Send          | Update custom labels for shipping options.                                       |
| [`customer:update`](./customer-and-payment#customerupdate)      | store         | Listen        | Fired when customer data changes.                                                |
| [`payment:update`](./customer-and-payment#paymentupdate)       | checkout      | Listen        | Fired when the payment method changes.                                           |
| [`ui:slot:set`](./ui-and-custom#uislotset)              | app           | Send          | Set or clear the content of a UI slot.                                           |
| [`location:updated`](./page-and-lifecycle#locationupdated)      | store         | Listen        | Fired when the page or visible content changes.                                  |
| [`quickbuy:open`](./ui-and-custom#quickbuyopen)            | store         | Listen        | Fired when the quick buy modal is opened; `state.eventPayload` has product data. |
| [`quickbuy:close`](./ui-and-custom#quickbuyclose)           | store         | Listen        | Fired when the quick buy modal is closed; `state.eventPayload` has product data. |
| [`custom:*:*`](./ui-and-custom#custom-events)             | app / store   | Listen & Send | Custom events (e.g. `custom:modal:close`). See [Custom events](./ui-and-custom#custom-events). |

:::info Where events run
Some events are only available in **checkout**: `cart:validate`, `coupon:add`, `coupon:remove`, `shipping:update`, `shipping:select`, `shipping:update:label`, `payment:update`, `order:add:tracking_statuses`. Others are only available in **storefront**: `cart:view`, `quickbuy:open`, `quickbuy:close`. All other events work in both contexts (or depend on the page). Each restricted event is marked on its respective page.
:::

## Event groups

- [**Page & Lifecycle**](./page-and-lifecycle) — `page:loaded`, `checkout:ready`, `checkout:success`, `config:set`, `location:updated`
- [**Cart**](./cart) — `cart:update`, `cart:view`, `cart:validate`, `cart:add`, `cart:remove` and their success/fail variants
- [**Order**](./order) — `order:update`, `order:add:tracking_statuses`
- [**Coupon**](./coupon) — `coupon:add`, `coupon:remove` and their success/fail variants
- [**Shipping**](./shipping) — `shipping:update`, `shipping:select`, `shipping:update:label` and their success/fail variants
- [**Customer & Payment**](./customer-and-payment) — `customer:update`, `payment:update`
- [**UI & Custom**](./ui-and-custom) — `ui:slot:set`, `quickbuy:open`, `quickbuy:close`, custom events
