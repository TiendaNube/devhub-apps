---
title: Complete Example
---

# Complete Example

A full component combining `styled()`, `StyleSheet`, and `theme`:

:::tip Testing this example
In order to see this example in action, navigate to the checkout in your store.
:::

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled, StyleSheet, theme } from "@tiendanube/nube-sdk-ui";
import { Box, Button, Text } from "@tiendanube/nube-sdk-jsx";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.main.background,
    borderRadius: theme.border.radius,
    padding: "24px",
  },
  title: {
    color: theme.color.main.foreground,
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  },
});

const StyledButton = styled(Button)`
  background-color: ${theme.color.accent};
  color: white;
  padding: 12px 24px;
  border-radius: ${theme.border.radius};
  border: 1px solid ${theme.border.color};
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

function MyComponent() {
  return (
    <Box style={styles.container}>
      <Text style={styles.title}>Welcome to NubeSDK</Text>
      <StyledButton>Get Started</StyledButton>
    </Box>
  );
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```
