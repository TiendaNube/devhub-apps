---
title: StyleSheet
---

# StyleSheet

The `StyleSheet.create()` function creates reusable style objects with type safety. It accepts an object whose keys are style names and whose values are style objects (camelCase CSS properties). Use the result with the `style` prop on components.

## Basic Usage

```tsx [JSX]
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { StyleSheet } from "@tiendanube/nube-sdk-ui";
import { Box, Button } from "@tiendanube/nube-sdk-jsx";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: "16px",
    borderRadius: "8px",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: "12px 24px",
  },
});

function MyComponent() {
  return (
    <Box style={styles.container}>
      <Button style={styles.button}>Click me</Button>
    </Box>
  );
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

or

```typescript [Declarative]
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { StyleSheet } from "@tiendanube/nube-sdk-ui";
import { box, button } from "@tiendanube/nube-sdk-ui";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    padding: "16px",
    borderRadius: "8px",
  },
  button: {
    backgroundColor: "blue",
    color: "white",
    padding: "12px 24px",
  },
});

export function App(nube: NubeSDK) {
  nube.render("before_main_content", box({
    style: styles.container,
    children: [
      button({
        style: styles.button,
        children: "Click me",
      }),
    ],
  }));
}
```

## Type Safety

StyleSheet provides full TypeScript support with CSS property validation:

```typescript
const styles = StyleSheet.create({
  container: {
    // ✅ Valid CSS properties
    backgroundColor: "red",
    padding: "16px",
    margin: "8px",
    width: "100%",
    height: "200px",

    // ✅ Size type support
    fontSize: "18px",
    lineHeight: "1.5",
    borderRadius: "8px",

    // ❌ TypeScript will catch invalid properties
    // invalidProperty: "value", // Error
  },
});
```

## Theme Integration

StyleSheet works seamlessly with the theme system:

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { StyleSheet, theme } from "@tiendanube/nube-sdk-ui";
import { Box, Button } from "@tiendanube/nube-sdk-jsx";

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: theme.color.accent,
    color: theme.color.main.foreground,
    padding: "12px 24px",
    borderRadius: theme.border.radius,
  },
  card: {
    backgroundColor: theme.color.main.background,
    border: `1px solid ${theme.border.color}`,
    borderRadius: theme.box.border.radius,
    padding: "16px",
  },
});

function MyComponent() {
  return (
    <Box style={styles.card}>
      <Button style={styles.primaryButton}>Themed button</Button>
    </Box>
  );
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```
