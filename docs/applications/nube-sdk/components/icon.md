---
title: Icon
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The `icon` component is used to display icons from the [Nimbus Icons library](https://nimbus.nuvemshop.com.br/documentation/resources/nimbus-icons).
It supports properties such as `name`, `size`, and `color` to customize the icon's appearance.

![Icon](../../../../static/img/pt/nube-sdk-ui-icon.png "Icon")

### Usage

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Icon, Box } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box direction="row" gap={16}>
      {/* Basic icon */}
      <Icon name="credit-card" />

      {/* Icon with custom size */}
      <Icon name="shopping-cart" size={32} />

      {/* Icon with custom color */}
      <Icon name="heart" color="red" />

      {/* Icon with size and color */}
      <Icon name="star" size={24} color="var(--primary-color)" />
    </Box>
  );
}

export function App(nube: NubeSDK) {
  nube.send("ui:slot:set", () => ({
    ui: {
      slots: {
        after_line_items: <MyComponent />,
      },
    },
  }));
}
```

### Properties

| Property | Type                  | Required | Description                                                     |
| -------- | --------------------- | -------- | --------------------------------------------------------------- |
| name     | NubeComponentIconName | Yes      | The name of the icon from the Nimbus Icons library.             |
| size     | Size                  | No       | The size of the icon (e.g., 16, "24px", "2rem", "auto").        |
| color    | string                | No       | The color of the icon (can be CSS color value or CSS variable). |

### Notes

- The icon component automatically adapts to the store's theme when no custom color is specified
- Icon names are case-sensitive and must match exactly with the Nimbus Icons library
- The `size` property accepts numeric values (pixels), CSS units (e.g., "24px", "2rem"), or "auto"
- The `color` property can use any valid CSS color value or CSS custom properties
