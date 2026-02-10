---
title: Overview
---

import { Alert, Text } from '@nimbus-ds/components';

UI slots are containers for UI components.
When you want to add a UI component, you need to specify their location on the screen, and to support the widest range of themes and layouts, we created predefined slots that are available across all templates that can be used to put your UI components inside.

You can render components into these slots using the `nube.render()` method and clear them using `nube.clearSlot()`. For more information, see [Script Structure](../script-structure#rendering-components).

## Slot Types

The Nube SDK provides different types of slots depending on where you want to render your components:

### [Checkout Slots](./checkout-slots)

Slots available in the checkout flow (start and payment pages). These slots allow you to add custom content at specific points in the checkout process, such as before or after forms, payment options, and shipping information.

[Learn more about Checkout Slots →](./checkout-slots)

### [Storefront Slots](./storefront-slots)

Slots available in the storefront pages (home, product, category, search, and cart). These slots are supported when the store is using the Patagonia theme and allow you to customize the shopping experience across different pages.

[Learn more about Storefront Slots →](./storefront-slots)

### Fixed Slots

Fixed slots are positioned at specific locations on the screen and remain in place regardless of scrolling:

| Slot                  | Description                    |
| --------------------- | ------------------------------ |
| corner_top_left       | Fixed position - top left      |
| corner_top_right      | Fixed position - top right     |
| corner_bottom_left    | Fixed position - bottom left   |
| corner_bottom_right   | Fixed position - bottom right  |
| modal_content         | Modal dialog content           |

#### `modal_content` behavior

Any content rendered into the `modal_content` slot is displayed inside a `dialog`. When opened, the dialog adds a transparent backdrop to the page.

```tsx
nube.render("modal_content", <Text>modal_content</Text>);
```

The dialog opens only when the slot has valid content. It can be closed by the customer by clicking the backdrop or pressing the Esc key. Clearing the slot will also close the dialog:

```tsx
nube.clearSlot("modal_content")
```

When the dialog closes by the customer or programmatically the SDK dispatches the `custom:modal:close` event. For details on listening to custom events, see [Events — Custom events](../events/ui-and-custom#custom-events).

```tsx
nube.on("custom:modal:close", () => {
  // handle cleanup or state updates
});
```

## Usage

To render components into a slot, use the `nube.render()` method:

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("before_main_content", [
    <Text key="custom-text">Your custom content</Text>,
  ]);
}
```

To clear a slot, use the `nube.clearSlot()` method:

```tsx
nube.clearSlot("before_main_content");
```

