---
title: Storefront Slots
---

import { Alert, Text, Box, Button } from '@nimbus-ds/components';

Storefront slots are containers available in the storefront pages where you can render your UI components. These slots allow you to customize the shopping experience across different pages.

<Alert appearance="success" title="Theme Compatibility">
  Storefront apps built with NubeSDK are supported on all themes.
</Alert>

## Available Slots

These are the slots that are available in the storefront:

| Slot                                  | Page                                  |
| ------------------------------------- | ------------------------------------- |
| before_main_content                   | home, product, category, search       |
| after_header                          | home, product, category, search, cart |
| drawer_left                           | home, product, category, search, cart |
| drawer_right                          | home, product, category, search, cart |
| before_quick_buy_add_to_cart          | home, category, search                |
| before_product_grid_item_name         | home, category, search                |
| after_product_grid_item_name          | home, category, search                |
| before_product_grid_item_price        | home, category, search                |
| after_product_grid_item_price         | home, category, search                |
| product_grid_item_image_top_left      | home, product, category, search       |
| product_grid_item_image_top_right     | home, product, category, search       |
| product_grid_item_image_bottom_left   | home, product, category, search       |
| product_grid_item_image_bottom_right  | home, product, category, search       |
| before_go_to_checkout                 | home, product, category, search       |
| before_product_detail_name            | product                               |
| after_product_detail_name             | product                               |
| before_product_detail_price           | product                               |
| after_product_detail_price            | product                               |
| before_product_detail_payment_options | product                               |
| after_product_detail_payment_options  | product                               |
| before_product_detail_add_to_cart     | product                               |
| after_product_detail_add_to_cart      | product                               |
| after_product_description             | product                               |
| before_line_items                     | cart                                  |
| before_line_item                      | cart                                  |
| after_cart_summary                    | cart                                  |
| after_go_to_checkout                  | cart                                  |
| before_footer                         | home, product, category, search       |
| before_register_form                  | register                              |
| after_register_form                   | register                              |

## Slot Visual Reference

### Home, Category, and Search Pages

- `before_main_content`

![Before Main Content Slot](/img/pt/nube-sdk-before_main_content.png)

- `after_header`

<Alert appearance="warning" title="Important">
  <Text>On the Patagonia theme, merchants can enable a transparent header option. When this setting is active, the <code>after_header</code> slot is hidden and will not be rendered.</Text>
</Alert>

<br />

![After Header Slot](/img/pt/nube-sdk-after_header.png)

- `drawer_left`

![Drawer Left Slot](/img/pt/nube-sdk-drawer_left.png)

- `drawer_right`

![Drawer Right Slot](/img/pt/nube-sdk-drawer_right.png)

- `before_go_to_checkout`

![Before Go to Checkout Slot](/img/pt/nube-sdk-before_start_checkout_button.png)

- `before_footer`

![Before Footer Slot](/img/pt/nube-sdk-before_footer.png)

## Product Grid Slots

Product grid slots are special slots that allow you to render components on product cards within product grids. These slots include:

- `product_grid_item_image_top_left`
- `product_grid_item_image_top_right`
- `product_grid_item_image_bottom_left`
- `product_grid_item_image_bottom_right`
- `before_product_grid_item_name`
- `after_product_grid_item_name`
- `before_product_grid_item_price`
- `after_product_grid_item_price`

![Product Grid Slots](/img/pt/nube-sdk-product_grid_slots.png)

### Rendering Components in Product Grids

To render components in product grids, return an array of components where the root element for each product includes the `key` prop set to that product's ID. This allows your app to render components across multiple items in the grid.

```tsx
import { Text } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  const productIds = [1, 2, 3];
  nube.render("product_grid_item_image_top_left", () => {
    return productIds.map((id) => <Text key={id}>ID: {id.toString()}</Text>);
  });
}
```

For a complete example of rendering components dynamically in product grids, see the [Dynamic Product Grid Rendering](#dynamic-product-grid-rendering) section below:

## Product Page Slots

- `before_product_detail_name`
- `after_product_detail_name`
- `before_product_detail_price`
- `after_product_detail_price`
- `before_product_detail_payment_options`
- `after_product_detail_payment_options`
- `before_product_detail_add_to_cart`
- `after_product_detail_add_to_cart`

![Product Page Slots Overview](/img/pt/nube-sdk-product_slots.png)

- `before_product_detail_price`

![Before Product Detail Price Slot](/img/pt/nube-sdk-before_price_pdp.png)

- `after_product_detail_price`

![After Product Detail Price Slot](/img/pt/nube-sdk-after_price_pdp.png)

- `before_product_detail_payment_options`

![Before Product Detail Payment Options Slot](/img/pt/nube-sdk-before_product_detail_payment_options.png)

- `after_product_detail_payment_options`

![After Product Detail Payment Options Slot](/img/pt/nube-sdk-after_product_detail_payment_options.png)

- `before_product_detail_add_to_cart`

![Before Product Detail Add to Cart Slot](/img/pt/nube-sdk-before_add_to_cart_pdp.png)

- `after_product_detail_add_to_cart`

![After Product Detail Add to Cart Slot](/img/pt/nube-sdk-after_ad_to_cart_pdp.png)

- `after_product_description`

![After Product Description Slot](/img/pt/nube-sdk-after_product_description.png)

## Cart Page Slots

- `before_line_items`

![Before Line Items Slot](/img/pt/nube-sdk-before-line-items.jpg)

- `before_line_item`

The `key` prop must be set to the line item's ID for each component.

```tsx
export function App(nube: NubeSDK) {
  nube.render("before_line_item", (state) => {
    return state.cart.items.map((item) => <Text key={item.id}>Content</Text>);
  });
}
```

![Before Line Item Slot](/img/pt/nube-sdk-cart-line-item-top.png)

- `after_cart_summary`

![After Cart Summary Slot](/img/pt/nube-sdk-after_cart_summary.png)

- `after_go_to_checkout`

![After Go to Checkout Slot](/img/pt/nube-sdk-after_go_to_checkout.png)

## Register Page Slots

- `before_register_form`
- `after_register_form`

These slots are available on the storefront register page, where customers create a new account. Use them to inject custom content immediately before or after the registration form.

- `before_register_form`

![Before Register Form Slot](/img/pt/nube-sdk-before_register_form.png)

- `after_register_form`

![After Register Form Slot](/img/pt/nube-sdk-after_register_form.png)

## Examples

### Adding Content to Product Page

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("after_product_detail_name", [
    <Box key="product-badge">
      <Text>Free Shipping Available!</Text>
    </Box>,
  ]);
}
```

### Adding Content Before Add to Cart

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("before_product_detail_add_to_cart", [
    <Box key="size-guide">
      <Text>View Size Guide</Text>
    </Box>,
  ]);
}
```

### Adding Content Around Payment Options

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("before_product_detail_payment_options", [
    <Box key="payment-banner">
      <Text>Up to 12 interest-free installments available.</Text>
    </Box>,
  ]);
}
```

### Adding Content Around the Register Form

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("before_register_form", [
    <Box key="register-promo">
      <Text>Create an account to track your orders and earn rewards.</Text>
    </Box>,
  ]);
}
```

### Adding Content to Cart Page

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("after_cart_summary", [
    <Box key="cart-promo">
      <Text>Add $50 more for free shipping!</Text>
    </Box>,
  ]);
}
```

### Dynamic Product Grid Rendering

![Product Grid Slots](/img/pt/nube-sdk-slot-product-grid.png)

```tsx
import { Text } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK, ProductDetails } from "@tiendanube/nube-sdk-types";
import { styled } from "@tiendanube/nube-sdk-ui";

const StyledText = styled(Text)`
  color: red;
  font-weight: bold;
`;

export function App(nube: NubeSDK) {
  const state = nube.getState();

  if (state.location.page.type === "home") {
    const sections = state.location.page.data?.sections || [];
    const allProducts = sections.reduce((acc: ProductDetails[], section) => {
      if (section?.products && Array.isArray(section.products)) {
        acc.push(...section.products);
      }
      return acc;
    }, []);

    nube.render("product_grid_item_image_top_left", () => {
      return allProducts.map((product) => (
        <StyledText key={product.id}>ID: {product.id.toString()}</StyledText>
      ));
    });
  }
}
```

This is a **Dynamic Product Grid Rendering** example that displays a styled badge on the top-left corner of each product image in the home page grid.

```tsx
const sections = state.location.page.data?.sections || [];
const allProducts = sections.reduce((acc: ProductDetails[], section) => {
  if (section?.products && Array.isArray(section.products)) {
    acc.push(...section.products);
  }
  return acc;
}, []);
```

The previous code flattens all products from all sections into a single array.

```tsx
nube.render("product_grid_item_image_top_left", () => {
  return allProducts.map((product) => (
    <StyledText key={product.id}>ID: {product.id.toString()}</StyledText>
  ));
});
```

Then, to understand the slot rendering, `key={product.id}` is **required**. Links each rendered element to its corresponding product card.

## Deprecated Slot Aliases

Some slot names have been renamed for consistency. The old names still work — the SDK automatically redirects them to the new name at runtime — but they are **deprecated** and may be removed in a future major version.

:::warning
We recommend updating your code to use the new slot names as soon as possible. The deprecated aliases will continue to work for now, but **they may stop working in a future release**.
:::

| Deprecated name                | Use instead                         |
| ------------------------------ | ----------------------------------- |
| `before_price_pdp`             | `before_product_detail_price`       |
| `after_price_pdp`              | `after_product_detail_price`        |
| `before_add_to_cart_pdp`       | `before_product_detail_add_to_cart` |
| `after_add_to_cart_pdp`        | `after_product_detail_add_to_cart`  |
| `cart_line_item_top`           | `before_line_item`                  |
| `before_start_checkout_button` | `before_go_to_checkout`             |

If your app uses both the deprecated name and the new name for the same slot, the new name takes precedence and the deprecated entry is ignored.

## Best Practices

- Always use the product's ID as the `key` prop when rendering in product grid slots
- Test your components on multiple themes to ensure consistent compatibility
- Consider the visual impact of your components on the storefront design
- Use responsive design principles for components that appear on different screen sizes
- Clear slots when they're no longer needed using `nube.clearSlot()`
