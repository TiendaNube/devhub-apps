---
title: Theme
---

# Theme System

The theme system provides design tokens and CSS variables that automatically adapt to the store's theme. The `theme` object gives you access to the variables configured in each store, allowing your components to integrate seamlessly with each store's unique styling. The theme API is exported from `@tiendanube/nube-sdk-ui`.

## Available Theme Tokens

Import with: `import { theme } from "@tiendanube/nube-sdk-ui";`

**Base and main colors**

| Token                         | Description            |
| ----------------------------- | ---------------------- |
| `theme.color.accent`          | Primary accent color.  |
| `theme.color.main.foreground` | Main text color.       |
| `theme.color.main.background` | Main background color. |

**Status colors** (each has `.light`, `.medium`, `.dark`)

| Token                 | Description             |
| --------------------- | ----------------------- |
| `theme.color.success` | Success color variants. |
| `theme.color.warning` | Warning color variants. |
| `theme.color.danger`  | Danger color variants.  |
| `theme.color.info`    | Info color variants.    |
| `theme.color.neutral` | Neutral color variants. |

**Text colors**

| Token                     | Description           |
| ------------------------- | --------------------- |
| `theme.color.text.high`   | High contrast text.   |
| `theme.color.text.medium` | Medium contrast text. |
| `theme.color.text.low`    | Low contrast text.    |

**Typography**

| Token                   | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `theme.typography.body` | `.font`, `.fontSize`, `.lineHeight` for body text. |
| `theme.typography.xl`   | Extra large: `.fontSize`, `.lineHeight`.           |
| `theme.typography.lg`   | Large: `.fontSize`, `.lineHeight`.                 |
| `theme.typography.base` | Base: `.fontSize`, `.lineHeight`.                  |
| `theme.typography.md`   | Medium: `.fontSize`, `.lineHeight`.                |
| `theme.typography.sm`   | Small: `.fontSize`, `.lineHeight`.                 |
| `theme.typography.xs`   | Extra small: `.fontSize`, `.lineHeight`.           |

**Borders**

| Token                     | Description            |
| ------------------------- | ---------------------- |
| `theme.border.color`      | Default border color.  |
| `theme.border.radius`     | Default border radius. |
| `theme.box.border.color`  | Box border color.      |
| `theme.box.border.radius` | Box border radius.     |

**Component tokens**

| Token                      | Description                                                                                                             |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `theme.button`             | `.foreground`, `.background`, `.border.color`, `.border.radius`, `.border.width`                                        |
| `theme.label`              | `.foreground`, `.background`                                                                                            |
| `theme.input.border.color` | Input border color.                                                                                                     |
| `theme.header`             | `.foreground`, `.background`, `.logo.*` (maxWidth, maxHeight, font, fontSize, fontWeight, textTransform, letterSpacing) |
| `theme.footer`             | `.foreground`, `.background`                                                                                            |
| `theme.heading`            | `.font`, `.fontWeight`, `.textTransform`, `.letterSpacing`                                                              |

For the full theme shape and types, see `@tiendanube/nube-sdk-ui`.

## Using Theme Colors

Theme colors automatically adapt to the store's theme:

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { StyleSheet, theme } from "@tiendanube/nube-sdk-ui";
import { Button } from "@tiendanube/nube-sdk-jsx";

const styles = StyleSheet.create({
  adaptiveButton: {
    backgroundColor: theme.color.accent,
    color: theme.color.main.foreground,
  },
});

function MyComponent() {
  return <Button style={styles.adaptiveButton}>Adaptive button</Button>;
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

## Theme Color Opacity

You can create transparent versions of theme base colors using predefined opacity values:

:::tip Testing this example
In order to see this example in action, navigate to the checkout in your store.
:::

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { StyleSheet, theme } from "@tiendanube/nube-sdk-ui";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

const styles = StyleSheet.create({
  container: {
    gap: "8px",
    padding: "16px",
  },
  heavy: {
    backgroundColor: theme.color.accent.opacity(80),
    padding: "12px",
  },
  medium: {
    backgroundColor: theme.color.accent.opacity(50),
    padding: "12px",
  },
  light: {
    backgroundColor: theme.color.accent.opacity(20),
    padding: "12px",
  },
});

function MyComponent() {
  return (
    <Box style={styles.container}>
      <Box style={styles.heavy}>
        <Text>80% opacity</Text>
      </Box>
      <Box style={styles.medium}>
        <Text>50% opacity</Text>
      </Box>
      <Box style={styles.light}>
        <Text>20% opacity</Text>
      </Box>
    </Box>
  );
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

**Available opacity values**: 0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90 (percentage). Use with theme colors that support `.opacity()`, e.g. `theme.color.accent`, `theme.color.main.background`.
