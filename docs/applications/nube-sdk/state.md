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

For more details on how to monitor state updates and subscribe to various state events, please see [Events](./events). This page provides comprehensive examples and explanations on how to listen for updates such as `cart:update`, `shipping:update`, and more, allowing you to build a dynamic, responsive application.

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
| `cart`         | `Cart`                                  | Current cart (items, prices, validation).                                               |
| `order`        | `Order` &#124; `undefined`              | Order status and tracking. **Available when:** Checkout success page only.              |
| `config`       | `AppConfig`                             | App-wide configuration (e.g. cart validation).                                          |
| `device`       | `Device`                                | Device and screen information.                                                          |
| `location`     | `AppLocation`                           | Current page, URL, and query params.                                                    |
| `store`        | `Store`                                 | Store id, name, domain, currency, language.                                             |
| `ui`           | `UI`                                    | Slots and component values. See [UI Slots](./slots/overview) for slot names.            |
| `shipping`     | `Shipping` &#124; `null`                | Selected shipping option and options. **Available when:** Checkout / context-dependent. |
| `customer`     | `Customer` &#124; `null`                | Contact and addresses. **Available when:** Checkout / context-dependent.                |
| `payment`      | `Payment` &#124; `null`                 | Payment status and selected method. **Available when:** Checkout / context-dependent.   |
| `eventPayload` | `Record<string, unknown>` &#124; `null` | Extra data on certain events (e.g. success events).                                     |
| `session`      | `Session`                               | Session information (e.g. session id).                                                  |

### `cart: Cart`

The current cart state, containing products, pricing, and validation status.

| Property          | Type                      | Required | Description                              |
| ----------------- | ------------------------- | -------- | ---------------------------------------- |
| `id`              | string                    | Yes      | Unique identifier for the cart session.  |
| `validation`      | CartValidation            | Yes      | Validation status of the cart.           |
| `items`           | CartItem[]                | Yes      | List of items currently in the cart.     |
| `prices`          | Prices                    | Yes      | Breakdown of the cart's pricing details. |
| `coupon`          | DeepPartial&lt;Coupon&gt; | No       | Optional coupon applied to the cart.     |
| `is_subscription` | boolean                   | Yes      | Indicates if the cart is a subscription. |

**CartItem** (each element of `cart.items`):

| Property               | Type                                                  | Required | Description                                             |
| ---------------------- | ----------------------------------------------------- | -------- | ------------------------------------------------------- |
| `id`                   | number                                                | Yes      | Unique identifier for the product instance in the cart. |
| `name`                 | string                                                | Yes      | Name of the product.                                    |
| `price`                | string                                                | Yes      | Price in string format (to match API response).         |
| `quantity`             | number                                                | Yes      | Quantity of this product in the cart.                   |
| `free_shipping`        | boolean                                               | Yes      | Whether the product qualifies for free shipping.        |
| `product_id`           | number                                                | Yes      | Unique identifier for the product (not cart-specific).  |
| `variant_id`           | number                                                | Yes      | Unique identifier for the selected product variant.     |
| `thumbnail`            | string                                                | Yes      | URL of the product's thumbnail image.                   |
| `variant_values`       | string                                                | Yes      | Variant details (e.g. selected attributes).             |
| `sku`                  | string or null                                        | No       | SKU (Stock Keeping Unit) for the product variant.       |
| `properties`           | Array&lt;unknown&gt; or Record&lt;string, unknown&gt; | No       | Additional product properties.                          |
| `url`                  | string                                                | Yes      | URL of the product's page.                              |
| `is_ahora_12_eligible` | boolean                                               | Yes      | Whether the product is eligible for Ahora 12 financing. |

**Prices** (`cart.prices`):

| Property             | Type   | Required | Description                                   |
| -------------------- | ------ | -------- | --------------------------------------------- |
| `discount_coupon`    | number | Yes      | Discount applied through a coupon.            |
| `discount_gateway`   | number | Yes      | Discount applied through a payment gateway.   |
| `discount_promotion` | number | Yes      | Discount applied through a store promotion.   |
| `shipping`           | number | Yes      | Cost of shipping.                             |
| `subtotal`           | number | Yes      | Subtotal before discounts and shipping.       |
| `total`              | number | Yes      | Final total after all discounts and shipping. |

**Coupon** (`cart.coupon`):

| Property | Type   | Required | Description                                     |
| -------- | ------ | -------- | ----------------------------------------------- |
| `code`   | string | Yes      | The coupon code used.                           |
| `type`   | string | Yes      | The type of discount (percentage, fixed, etc.). |
| `value`  | string | Yes      | The discount value (format depends on `type`).  |

**CartValidation** (`cart.validation`): One of `{ status: "success" }`, `{ status: "pending" }`, or `{ status: "fail"; reason: string }`.

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Cart`, `CartItem`, `Prices`, `Coupon`, `CartValidation`).

### `order?: Order`

The current order state, containing order status and tracking statuses.
This property is only available on the checkout `success` page after the order has been completed, and will be `null` on all other pages.

| Property            | Type                                      | Required | Description                     |
| ------------------- | ----------------------------------------- | -------- | ------------------------------- |
| `status`            | "open" or "closed" or "cancelled" or null | No       | Status of the order.            |
| `tracking_statuses` | OrderTrackingStatus[]                     | No       | Tracking statuses of the order. |

**OrderTrackingStatus** (each element of `order.tracking_statuses`):

| Property    | Type                                        | Required | Description                       |
| ----------- | ------------------------------------------- | -------- | --------------------------------- |
| `type`      | "shipped" or "packed" or "shipping_failure" | Yes      | Type of the tracking status.      |
| `title`     | string                                      | Yes      | Title of the tracking status.     |
| `timestamp` | string                                      | Yes      | Timestamp of the tracking status. |

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Order`, `OrderTrackingStatus`).

### `config: AppConfig`

Application-wide configuration settings, including cart validation rules.

| Property                        | Type    | Required | Description                                               |
| ------------------------------- | ------- | -------- | --------------------------------------------------------- |
| `has_cart_validation`           | boolean | Yes      | Determines whether cart validation is enabled.            |
| `disable_shipping_more_options` | boolean | Yes      | Determines whether the user can select a shipping option. |

For the exact TypeScript definition, use `AppConfig` from `@tiendanube/nube-sdk-types`.

### `device: Device`

Information about the device being used to access the application, including screen dimensions and device type.

| Property | Type                  | Required | Description                                  |
| -------- | --------------------- | -------- | -------------------------------------------- |
| `screen` | DeviceScreen          | Yes      | Screen dimensions, orientation, pixel ratio. |
| `type`   | "mobile" or "desktop" | Yes      | The type of device.                          |

**DeviceScreen** (`device.screen`):

| Property      | Type                      | Required | Description                           |
| ------------- | ------------------------- | -------- | ------------------------------------- |
| `width`       | number                    | Yes      | Width of the screen in pixels.        |
| `height`      | number                    | Yes      | Height of the screen in pixels.       |
| `orientation` | "portrait" or "landscape" | Yes      | Orientation of the screen.            |
| `pixelRatio`  | number                    | Yes      | Pixel ratio of the screen.            |
| `innerWidth`  | number                    | Yes      | Width of the inner window in pixels.  |
| `innerHeight` | number                    | Yes      | Height of the inner window in pixels. |

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Device`, `DeviceScreen`).

### `location: AppLocation`

The user's current location within the application, including the page type and URL. Each key in `queries` is a query parameter name; each value is that parameter's value.

| Property  | Type                         | Required | Description                                    |
| --------- | ---------------------------- | -------- | ---------------------------------------------- |
| `url`     | string                       | Yes      | The current URL of the application.            |
| `page`    | Page                         | Yes      | The current page type and its associated data. |
| `queries` | Record&lt;string, string&gt; | Yes      | Query parameters extracted from the URL.       |

**Page** (`location.page`) is a discriminated union: the shape of `page.data` depends on `page.type`. Use `page.type` to narrow the type before reading `page.data`.

| page.type       | page.data shape                   | Description                           |
| --------------- | --------------------------------- | ------------------------------------- |
| `"home"`        | Home                              | Homepage (optional sections).         |
| `"checkout"`    | Checkout                          | Checkout step and flow.               |
| `"product"`     | ProductPageData                   | Product detail and optional sections. |
| `"category"`    | Category and product list         | Category and optional products.       |
| `"products"`    | Category (id: 0) and product list | All-products page.                    |
| `"search"`      | Search and product list           | Search query and optional products.   |
| `"account"`     | Account                           | Account page data.                    |
| `"custom_page"` | CustomPageData                    | Custom page name.                     |

**Checkout** (`page.data` when `page.type === "checkout"`):

| Property | Type   | Required | Description                             |
| -------- | ------ | -------- | --------------------------------------- |
| `step`   | string | Yes      | `"start"`, `"payment"`, or `"success"`. |

**Home** (`page.data` when `page.type === "home"`): `undefined` or an object with optional `sections` (see WithSections).

**ProductPageData** (`page.data` when `page.type === "product"`):

| Property   | Type                       | Required | Description               |
| ---------- | -------------------------- | -------- | ------------------------- |
| `product`  | ProductDetails             | Yes      | The product being viewed. |
| `sections` | Section&lt;"product"&gt;[] | No       | Optional sections.        |

**Category** (used when `page.type === "category"` or `"products"`):

| Property | Type   | Required | Description                                    |
| -------- | ------ | -------- | ---------------------------------------------- |
| `id`     | number | Yes      | Category id (0 for "products" = all products). |
| `name`   | string | Yes      | Category name.                                 |

**Search** (`page.data` when `page.type === "search"`):

| Property | Type   | Required | Description          |
| -------- | ------ | -------- | -------------------- |
| `q`      | string | Yes      | Search query string. |

**WithProductList** (category and search pages may include): optional `products?: ProductDetails[]`.

**WithSections&lt;T&gt;** (home and product pages may include): optional `sections?: Section&lt;T&gt;[]`.

**CustomPageData** (`page.data` when `page.type === "custom_page"`):

| Property | Type   | Required | Description       |
| -------- | ------ | -------- | ----------------- |
| `name`   | string | Yes      | Custom page name. |

For the exact TypeScript definitions (including `Page`, `AppLocation`, `ProductDetails`, `Section`, `Account`, and all page data types), use the types from `@tiendanube/nube-sdk-types`.

### `store: Store`

Information about the current store, such as its domain, currency, and language.

| Property   | Type                 | Required | Description                            |
| ---------- | -------------------- | -------- | -------------------------------------- |
| `id`       | number               | Yes      | Unique identifier for the store.       |
| `name`     | string               | Yes      | Name of the store.                     |
| `domain`   | string               | Yes      | Domain name associated with the store. |
| `currency` | string               | Yes      | Currency code (e.g. "USD", "EUR").     |
| `language` | "es" or "pt" or "en" | Yes      | Language code of the store.            |

For the exact TypeScript definition, use `Store` from `@tiendanube/nube-sdk-types`.

### `ui: UI`

Represents UI-related state, including dynamically injected components and their values.

| Property | Type                                               | Required | Description                                                                                                                           |
| -------- | -------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `slots`  | Partial&lt;Record&lt;UISlot, NubeComponent&gt;&gt; | Yes      | Map of slot names to components. Manage with `nube.render()` and `nube.clearSlot()`. See [UI Slots](./slots/overview) for slot names. |
| `values` | Record&lt;string, string&gt;                       | Yes      | Values for UI components (e.g. form inputs). Managed internally by the SDK; modifying directly may cause unexpected behavior.         |

Slot names (`UISlot`) include common slots (e.g. `before_main_content`, `modal_content`, `corner_*`), checkout slots (e.g. `before_line_items`, `after_contact_form`), and storefront slots (e.g. `product_grid_item_image_top_left`, `before_start_checkout_button`). For the full list, see [UI Slots](./slots/overview).

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `UI`, `UISlots`, `UISlot`).

### `shipping: Nullable<Shipping>`

Information about shipping, such as available options, selected option and custom labels.
This property may be null depending on the page it is accessed from.

| Property        | Type                         | Required | Description                                 |
| --------------- | ---------------------------- | -------- | ------------------------------------------- |
| `selected`      | string or null               | No       | Selected shipping option ID.                |
| `options`       | ShippingOption[]             | No       | List of available shipping options.         |
| `custom_labels` | Record&lt;string, string&gt; | No       | Custom labels assigned to shipping options. |

**ShippingOption** (each element of `shipping.options`):

| Property                 | Type           | Required | Description                                                                   |
| ------------------------ | -------------- | -------- | ----------------------------------------------------------------------------- |
| `id`                     | string         | Yes      | Unique identifier for the shipping option.                                    |
| `original_name`          | string or null | No       | Original name of the shipping option.                                         |
| `name`                   | string or null | No       | Display name of the shipping option.                                          |
| `code`                   | string or null | No       | Shipping method code.                                                         |
| `reference`              | string or null | No       | Reference code for the shipping option.                                       |
| `type`                   | string or null | No       | Type of shipping method.                                                      |
| `price`                  | number         | Yes      | Price of the shipping option.                                                 |
| `price_merchant`         | number         | Yes      | Merchant price of the shipping option.                                        |
| `currency`               | string         | Yes      | Currency of the shipping cost.                                                |
| `min_delivery_date`      | string or null | No       | Estimated minimum delivery date.                                              |
| `max_delivery_date`      | string or null | No       | Estimated maximum delivery date.                                              |
| `phone_required`         | boolean        | Yes      | Whether a phone number is required for shipping.                              |
| `id_required`            | boolean        | Yes      | Whether an ID is required for shipping.                                       |
| `accepts_cod`            | boolean        | Yes      | Whether cash on delivery is accepted.                                         |
| `free_shipping_eligible` | boolean        | Yes      | Whether the option is eligible for free shipping.                             |
| `extra`                  | object         | No       | Extra shipping details (e.g. `show_time`, `warning`, `free_shipping` fields). |
| `method`                 | string or null | No       | Shipping method identifier.                                                   |
| `app_id`                 | string or null | No       | Application ID associated with the shipping option.                           |
| `hidden`                 | boolean        | Yes      | Whether the shipping option is hidden.                                        |
| `priority`               | number or null | No       | Priority of the shipping option.                                              |
| `shippable`              | boolean        | Yes      | Whether the shipping option is available.                                     |
| `smart_date`             | object         | No       | Smart date information for delivery estimates.                                |

For the exact TypeScript definitions (including nested `extra` and `smart_date` shapes), use the types from `@tiendanube/nube-sdk-types` (e.g. `Shipping`, `ShippingOption`).

### `customer: Nullable<Customer>`

Details about the customer, including identification, contact information, and address.
This property may be null depending on the page it is accessed from.

| Property           | Type            | Required | Description                               |
| ------------------ | --------------- | -------- | ----------------------------------------- |
| `id`               | number or null  | No       | Unique identifier for the customer.       |
| `contact`          | object          | Yes      | Customer contact information (see below). |
| `shipping_address` | ShippingAddress | Yes      | Customer's shipping address.              |
| `billing_address`  | BillingAddress  | Yes      | Customer's billing address.               |

**Customer contact** (`customer.contact`):

| Property                       | Type            | Required | Description                                                |
| ------------------------------ | --------------- | -------- | ---------------------------------------------------------- |
| `email`                        | string or null  | No       | Customer's email address.                                  |
| `name`                         | string or null  | No       | Customer's full name.                                      |
| `phone`                        | string or null  | No       | Customer's phone number.                                   |
| `accepts_marketing`            | boolean or null | No       | Whether the customer accepts marketing communications.     |
| `accepts_marketing_updated_at` | string or null  | No       | Timestamp of when marketing preferences were last updated. |

**Address** (base shape for both `customer.shipping_address` and `customer.billing_address`):

| Property     | Type           | Required | Description                               |
| ------------ | -------------- | -------- | ----------------------------------------- |
| `zipcode`    | string         | Yes      | Postal code of the address.               |
| `first_name` | string or null | No       | First name of the address owner.          |
| `last_name`  | string or null | No       | Last name of the address owner.           |
| `address`    | string or null | No       | Street address.                           |
| `number`     | string or null | No       | Street number.                            |
| `floor`      | string or null | No       | Floor or apartment number.                |
| `locality`   | string or null | No       | Locality or neighborhood.                 |
| `city`       | string or null | No       | City name.                                |
| `state`      | string or null | No       | State or province.                        |
| `country`    | string or null | No       | Country name.                             |
| `phone`      | string or null | No       | Phone number associated with the address. |

**ShippingAddress** extends Address and adds:

| Property         | Type           | Required | Description                                         |
| ---------------- | -------------- | -------- | --------------------------------------------------- |
| `between_street` | string or null | No       | Additional address information between streets.     |
| `reference`      | string or null | No       | Reference points or additional address information. |

**BillingAddress** extends Address and adds:

| Property             | Type           | Required | Description                                |
| -------------------- | -------------- | -------- | ------------------------------------------ |
| `id_number`          | string or null | No       | Tax identification number.                 |
| `customer_type`      | string or null | No       | Type of customer (individual or business). |
| `business_name`      | string or null | No       | Legal business name.                       |
| `trade_name`         | string or null | No       | Trade name or commercial name.             |
| `state_registration` | string or null | No       | State registration number.                 |
| `fiscal_regime`      | string or null | No       | Fiscal regime classification.              |
| `invoice_use`        | string or null | No       | Invoice usage classification.              |
| `document_type`      | string or null | No       | Type of identification document.           |
| `business_activity`  | string or null | No       | Business activity or industry.             |

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Customer`, `ShippingAddress`, `BillingAddress`, `Address`).

### `payment: Nullable<Payment>`

Information about the payment method, including status and selected option.
This property may be null depending on the page it is accessed from.

| Property   | Type                    | Required | Description                      |
| ---------- | ----------------------- | -------- | -------------------------------- |
| `status`   | PaymentStatus or null   | No       | Current status of the payment.   |
| `selected` | SelectedPayment or null | No       | Selected payment method details. |

**PaymentStatus**: One of `"pending"`, `"paid"`, `"voided"`, `"open"`, `"abandoned"`, `"authorized"`, `"refunded"`, `"recovered"`, `"partially_paid"`.

**SelectedPayment** (`payment.selected`):

| Property              | Type            | Required | Description                                          |
| --------------------- | --------------- | -------- | ---------------------------------------------------- |
| `id`                  | string or null  | No       | Unique identifier for the payment method.            |
| `app_id`              | number or null  | No       | Application ID associated with the payment provider. |
| `payment_provider_id` | string or null  | No       | Payment provider identifier.                         |
| `method_name`         | string or null  | No       | Name of the payment method.                          |
| `type`                | string or null  | No       | Type of payment.                                     |
| `method_type`         | string or null  | No       | Method type.                                         |
| `bypass_gateway`      | boolean or null | No       | Whether to bypass the payment gateway.               |
| `render_gateway_name` | boolean or null | No       | Whether to render the gateway name.                  |
| `method`              | string or null  | No       | Payment method identifier.                           |
| `template`            | string or null  | No       | Template for the payment method.                     |
| `name`                | string or null  | No       | Display name.                                        |
| `category`            | string or null  | No       | Payment category.                                    |
| `billing_address`     | boolean or null | No       | Whether billing address is required.                 |

For the exact TypeScript definitions, use the types from `@tiendanube/nube-sdk-types` (e.g. `Payment`, `PaymentStatus`, `SelectedPayment`).

### `eventPayload: Nullable<Record<string, unknown>>`

Optional event payload data that may be available when certain events are triggered.

This property contains additional context about specific events, such as product information when a quick buy modal is opened or closed, or item details when cart operations succeed. Type: `Record<string, unknown> | null`.

### `session: Session`

Session information, including the session identifier.

| Property | Type           | Required | Description                        |
| -------- | -------------- | -------- | ---------------------------------- |
| `id`     | string or null | No       | Unique identifier for the session. |

For the exact TypeScript definition, use `Session` from `@tiendanube/nube-sdk-types`.

## Notes

- Properties marked as `Nullable<T>` may be `null` depending on the context or page where they are accessed
- The **Available when** column in the table above indicates context-dependent properties (e.g. `order` only on checkout success page)
- The `UI` property contains dynamically injected components and their values; for the full list of slot names see [UI Slots](./slots/overview)
- The `location` property helps determine the current context of the application
- All monetary values in the `cart` property are in the store's base currency
- The state is immutable and can only be modified through the `send` method of `NubeSDK`
- The `eventPayload` property is available in success events (e.g., `cart:add:success`, `quickbuy:open`)
- `DeepPartial<T>` means all properties of type T and their nested properties are optional
