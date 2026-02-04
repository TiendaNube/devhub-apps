---
sidebar_position: 5
title: Extra Info (Product List)
---

import { Alert, Text, Box } from '@nimbus-ds/components';

# Extra Info on Product Lists

Render components dynamically on each product card in product grids. This pattern is essential for adding badges, labels, or custom content to product listings across home pages, category pages, and search results.

## Overview

This example demonstrates how to:

- Use product grid slots to render content on product cards
- Handle the global nature of `nube.render()` across different pages
- Access products from different page types (home, products, search)
- Use the `key` prop correctly for product grid rendering

---

## Dynamic Product Grid Rendering

<Alert appearance="primary" title="Understanding Product Grid Slots">
  Rendering components in product grid slots requires a different approach than single product pages. You must iterate over all products and provide a unique key prop for each one.
</Alert>

This example demonstrates how to render components dynamically on each product card in a product grid. It covers the key concepts needed to work with product grid slots effectively.

### Key Concepts

When rendering to product grid slots, you need to understand these important concepts:

1. **Slots are Global**: The `product_grid_item_image_top_left` slot exists on any page that displays a product grid (home page, products page, search results, etc.). Once you register a renderer with `nube.render()`, it applies to all pages where the slot exists.

2. **Use the State Parameter**: The render callback receives `state` as a parameter, giving you fresh data on each render. Always use this parameter instead of capturing state in a closure.

3. **Handle Different Page Types**: Products are located differently depending on the page type. Check `state.location.page.type` inside the callback to handle each case appropriately.

4. **The `key` Prop**: Each root element **must** have a `key` prop set to the product's ID. This is how the SDK knows which component belongs to which product card.

### Complete Example

```tsx title="src/components/ProductGridBadges.tsx"
import type { NubeSDK, NubeSDKState, ProductDetails } from "@tiendanube/nube-sdk-types";
import { Text } from "@tiendanube/nube-sdk-jsx";
import { styled } from "@tiendanube/nube-sdk-ui";

// Styled badge component for product grid
const SaleBadge = styled(Text)`
  background: #e91e63;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`;

/**
 * Sets up a "Summer Sale" badge on product grid items.
 * Works on all pages with product grids (home, products, search).
 */
export function setupProductGridBadges(nube: NubeSDK) {
  // Register the renderer once - it will be called on all pages with this slot
  nube.render("product_grid_item_image_top_left", (state: NubeSDKState) => {
    const { page } = state.location;

    // Handle products page (categories, search results)
    if (page.type === "products") {
      const products = page.data?.products || [];
      return products.map((product: ProductDetails) => (
        <SaleBadge key={product.id}>Summer Sale</SaleBadge>
      ));
    }

    // Handle home page (products are nested in sections)
    if (page.type === "home") {
      const sections = page.data?.sections || [];
      const allProducts = sections.reduce((acc: ProductDetails[], section) => {
        if (section?.products && Array.isArray(section.products)) {
          acc.push(...section.products);
        }
        return acc;
      }, []);
      return allProducts.map((product: ProductDetails) => (
        <SaleBadge key={product.id}>Summer Sale</SaleBadge>
      ));
    }

    // Return empty array for other page types
    return [];
  });
}
```

### Usage

```tsx title="src/main.tsx"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { setupProductGridBadges } from "./components/ProductGridBadges";

export function App(nube: NubeSDK) {
  setupProductGridBadges(nube);
}
```

---

## Understanding the Code

### 1. Register Once, Render Everywhere

```tsx
nube.render("product_grid_item_image_top_left", (state: NubeSDKState) => {
  // This callback is called on every page where the slot exists
});
```

The `nube.render()` function registers a renderer for the slot **globally**. Once registered, it applies to all pages where the slot exists (home, products, search, etc.). The callback receives fresh `state` on each render, allowing you to respond to the current page context.

### 2. Handle Different Page Types

```tsx
const { page } = state.location;

if (page.type === "products") {
  const products = page.data?.products || [];
  // Handle products page...
}

if (page.type === "home") {
  const sections = page.data?.sections || [];
  // Flatten and handle home page...
}
```

Check the page type **inside the callback** to handle each case appropriately. Products are located differently depending on the page type.

### 3. Mapping Products with Keys

```tsx
return products.map((product: ProductDetails) => (
  <SaleBadge key={product.id}>Summer Sale</SaleBadge>
));
```

The `key={product.id}` is **critical**. It tells the SDK which component belongs to which product card in the grid. Without this, badges won't appear in the correct positions.

---

## Products Location by Page Type

| Page Type | Products Location | Notes |
|-----------|-------------------|-------|
| `"products"` | `page.data.products` | Direct array (categories, search) |
| `"home"` | `page.data.sections[].products` | Nested in sections, needs flattening |

### Flattening Products on Home Page

On the home page, products are nested inside sections, so you need to flatten them into a single array:

```tsx
const sections = page.data?.sections || [];
const allProducts = sections.reduce((acc: ProductDetails[], section) => {
  if (section?.products && Array.isArray(section.products)) {
    acc.push(...section.products);
  }
  return acc;
}, []);
```

---

## Best Practices

1. **Always provide keys**: When rendering to grid slots, every root element must have a `key` matching the product ID
2. **Use the state parameter**: Always use the `state` parameter in the render callback instead of capturing state in a closure
3. **Handle all page types**: Consider all pages where the slot exists (home, products, search)
4. **Return empty arrays**: For page types you don't want to handle, return an empty array `[]`

## Related

- [Extra Info (Tags)](./extra-info-tags) - Display badges based on product tags
- [Storefront Slots](../slots/storefront-slots) - Complete list of available slots
