---
title: Storefront Slots
---

import { Alert, Text, Box, Button } from '@nimbus-ds/components';

Storefront slots are containers available in the storefront pages where you can render your UI components. These slots allow you to customize the shopping experience across different pages.

<Alert appearance="warning" title="Theme Compatibility">
  Storefront apps built with NubeSDK are supported only when the store is using the Patagonia theme. For all other themes, you must use the legacy storefront app model.
</Alert>

## Available Slots

These are the slots that are available in the storefront:

| Slot                                 | Page                            |
| ------------------------------------ | ------------------------------- |
| before_main_content                  | home, product, category, search |
| before_quick_buy_add_to_cart         | home, category, search          |
| after_product_grid_item_name         | home, category, search          |
| product_grid_item_image_top_left     | home, product, category, search |
| product_grid_item_image_top_right    | home, product, category, search |
| product_grid_item_image_bottom_left  | home, product, category, search |
| product_grid_item_image_bottom_right | home, product, category, search |
| before_start_checkout_button         | home, product, category, search |
| after_product_detail_name            | product                         |
| before_price_pdp                     | product                         |
| before_product_detail_add_to_cart    | product                         |
| before_add_to_cart_pdp               | product                         |
| after_product_detail_add_to_cart     | product                         |
| after_add_to_cart_pdp                | product                         |
| after_product_description            | product                         |
| before_line_items                    | cart                            |
| after_cart_summary                   | cart                            |
| after_go_to_checkout                 | cart                            |
| before_footer                        | home, product, category, search |

## Slot Visual Reference

### Home, Category, and Search Pages

- `before_main_content`

![Before Main Content Slot](/img/pt/nube-sdk-before_main_content.png)

- `before_start_checkout_button`

![Before Start Checkout Button Slot](/img/pt/nube-sdk-before_start_checkout_button.png)

- `before_footer`

![Before Footer Slot](/img/pt/nube-sdk-before_footer.png)

## Product Grid Slots

Product grid slots are special slots that allow you to render components on product cards within product grids. These slots include:

- `product_grid_item_image_top_left`
- `product_grid_item_image_top_right`
- `product_grid_item_image_bottom_left`
- `product_grid_item_image_bottom_right`
- `after_product_grid_item_name`

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

- `after_product_detail_name`
- `before_product_add_to_cart`
- `after_product_add_to_cart`

![Product Page Slots Overview](/img/pt/nube-sdk-product_slots.png)

- `before_price_pdp`

![Before Price PDP Slot](/img/pt/nube-sdk-before_price_pdp.png)

- `after_price_pdp`

![After Price PDP Slot](/img/pt/nube-sdk-after_price_pdp.png)

- `before_add_to_cart_pdp`

![Before Add to Cart PDP Slot](/img/pt/nube-sdk-before_add_to_cart_pdp.png)

- `after_add_to_cart_pdp`

![After Add to Cart PDP Slot](/img/pt/nube-sdk-after_ad_to_cart_pdp.png)

- `after_product_description`

![After Product Description Slot](/img/pt/nube-sdk-after_product_description.png)

## Cart Page Slots

- `before_line_items`

![Before Line Items Slot](/img/pt/nube-sdk-before-line-items.jpg)

- `after_cart_summary`

![After Cart Summary Slot](/img/pt/nube-sdk-after_cart_summary.png)

- `after_go_to_checkout`

![After Go to Checkout Slot](/img/pt/nube-sdk-after_go_to_checkout.png)

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
  nube.render("before_add_to_cart_pdp", [
    <Box key="size-guide">
      <Text>View Size Guide</Text>
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

## Best Practices

- Always use the product's ID as the `key` prop when rendering in product grid slots
- Test your components with the Patagonia theme to ensure compatibility
- Consider the visual impact of your components on the storefront design
- Use responsive design principles for components that appear on different screen sizes
- Clear slots when they're no longer needed using `nube.clearSlot()`

