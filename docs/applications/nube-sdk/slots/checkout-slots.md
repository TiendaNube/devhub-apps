---
title: Checkout Slots
---

import { Text } from '@nimbus-ds/components';
import uiSlotsDesktopUrl from '../../../../static/img/pt/nube-sdk-ui-slots-checkout-desktop.png';
import uiSlotsMobileUrl from '../../../../static/img/pt/nube-sdk-ui-slots-checkout-mobile.png';

Checkout slots are containers available in the checkout flow where you can render your UI components. These slots allow you to add custom content at specific points in the checkout process.

## Available Slots

These are the slots that are available in checkout:

| Slot                      | Page           |
| ------------------------- | -------------- |
| before_main_content       | start, payment |
| after_main_content        | start, payment |
| after_line_items_price    | start, payment |
| before_line_items         | start          |
| after_line_items          | start, payment |
| after_contact_form        | start          |
| after_address_form        | start          |
| after_billing_form        | start          |
| after_payment_options     | payment        |
| before_payment_options    | payment        |
| before_address_form       | start          |
| before_billing_form       | start          |
| before_contact_form       | start          |
| before_shipping_form      | start          |
| after_shipping_form       | start          |
| after_shipping_description| start          |

## Visual Reference

### Desktop Layout

This is the usual location of checkout slots on desktop:

<img src={uiSlotsDesktopUrl}/>

### Mobile Layout

And this is their usual location on mobile devices:

<img src={uiSlotsMobileUrl} />

## Examples

### Shipping Options Slot

The `after_shipping_description` slot allows you to add custom content after the shipping method description in the checkout page.

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("after_shipping_description", [
    <Text key="ne-correios-pac">This is a custom shipping description</Text>,
  ]);
}
```

### Adding Content Before Payment Options

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("before_payment_options", [
    <Box key="payment-notice">
      <Text>Please review your order before selecting a payment method.</Text>
    </Box>,
  ]);
}
```

### Adding Content After Contact Form

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

export function App(nube: NubeSDK) {
  nube.render("after_contact_form", [
    <Box key="contact-info">
      <Text>We'll send order updates to this email address.</Text>
    </Box>,
  ]);
}
```

## Best Practices

- Use descriptive `key` props for all components rendered into slots
- Consider mobile and desktop layouts when positioning content
- Keep content concise and relevant to the checkout context
- Test your components on different screen sizes
- Clear slots when they're no longer needed using `nube.clearSlot()`

