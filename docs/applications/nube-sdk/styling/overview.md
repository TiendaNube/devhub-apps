---
title: Styling Components
---

# Styling Components

NubeSDK provides multiple ways to style your components, ensuring flexibility while maintaining consistency with the store's theme. All styling APIs are exported from `@tiendanube/nube-sdk-ui`.

| Approach | API | Description |
|----------|-----|-------------|
| **styled()** | `styled(Component)\`...css\`` | CSS-in-JS with template literals; supports pseudo-classes, media queries, and keyframes. |
| **StyleSheet** | `StyleSheet.create({ key: { ...css } })` | Reusable style objects with TypeScript support; pass to the `style` prop. |
| **Theme** | `theme` object | Design tokens (colors, typography, borders) that adapt to the store's theme. |

You can combine these: use `theme` inside `styled()` or `StyleSheet.create()`, and use `StyleSheet` for reusable bits and `styled()` for component-level CSS.

:::tip JSX and Declarative syntax
All examples use **JSX syntax**. For the **declarative** equivalent, import components in lowercase from `@tiendanube/nube-sdk-ui` (e.g., `box` instead of `Box`) and pass props as function arguments instead of JSX. See the [styled() Basic Usage](./styled-components#basic-usage) example for both patterns side by side.
:::
