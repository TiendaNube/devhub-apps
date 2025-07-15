---
title: Icon
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The `icon` component is used to display icons from the [Nimbus Icons library](https://nimbus.nuvemshop.com.br/documentation/resources/nimbus-icons).
It supports properties such as `name`, `size`, and `color` to customize the icon's appearance.

### Usage

```typescript title="Example"
import { Icon } from "@tiendanube/nube-sdk-jsx";

<Icon name="credit-card" size={24} color="blue" />
```

### Properties

| Property | Type                | Required | Description                                                                 |
| -------- | ------------------- | -------- | --------------------------------------------------------------------------- |
| name     | NubeComponentIconName | Yes      | The name of the icon from the Nimbus Icons library.                        |
| size     | Size                | No       | The size of the icon (e.g., 16, "24px", "2rem", "auto").                   |
| color    | string              | No       | The color of the icon (can be CSS color value or CSS variable).            |

### Examples

#### Basic Icon
```typescript
<Icon name="credit-card" />
```

#### Icon with Custom Size
```typescript
<Icon name="shopping-cart" size={32} />
<Icon name="shopping-cart" size="24px" />
<Icon name="shopping-cart" size="2rem" />
```

#### Icon with Custom Color
```typescript
<Icon name="heart" color="red" />
```

#### Icon with Size and Color
```typescript
<Icon name="star" size={24} color="var(--primary-color)" />
```

### Notes

- The icon component automatically adapts to the store's theme when no custom color is specified
- Icon names are case-sensitive and must match exactly with the Nimbus Icons library
- The `size` property accepts numeric values (pixels), CSS units (e.g., "24px", "2rem"), or "auto"
- The `color` property can use any valid CSS color value or CSS custom properties
