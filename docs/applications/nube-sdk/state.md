---
title: State
---

import AppTypes from '@site/src/components/AppTypes';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

The state in the Nube SDK allows you to access, monitor, and react to changes in the checkout process. The consolidated state comprises several key sections:

- **Cart**: Contains details about the items in the cart, such as `products`, `quantities`, and `prices`.
- **Payment**: Holds information regarding payment methods and transaction statuses.
- **Customer**: Includes customer-specific data such as `name`, `email` and `phone`.
- **Shipping**: Covers shipping options, delivery addresses, and associated fees or estimates.
- **Store**: Provides information about the store itself, such as `name`, `domain`, `currency` and `language`.
- **Location**: Represents the current state of the application's URL and routing information. It follows the AppLocation type and includes `url`, `page` and `queries` properties.

## Example: Retrieving the Current Location State

You can also access the current state directly using the `getState()` method. This method returns the entire consolidated state, allowing you to inspect properties like Cart, Payment, Customer, Shipping, Store, and Location at any given moment.

```typescript
import type { NubeSDK } from '@tiendanube/nube-sdk-types';

export function App(nube: NubeSDK) {
  const { location } = nube.getState();
  console.log(location);
}
```

In this example, the `getState()` method is used to extract the location property from the consolidated state, which contains the current URL, page details, and query parameters. This is particularly useful when you need to render components based on the current route or perform logic based on the URL parameters.

## Example: Monitoring State Updates

For more details on how to monitor state updates and subscribe to various state events, please see [Events](./events). This page provides comprehensive examples and explanations on how to listen for updates such as `cart:update`, `customer:update`, `shipping:update`, and more, allowing you to build a dynamic, responsive application.
