---
title: styled()
---

# styled()

The `styled()` function lets you apply custom CSS to any component using template literals (similar to styled-components). You get a new component that accepts the same props as the original plus your styles.

## Basic Usage

```tsx [JSX]
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled } from "@tiendanube/nube-sdk-ui";
import { Box } from "@tiendanube/nube-sdk-jsx";

const StyledBox = styled(Box)`
  background-color: red;
  padding: 16px;
  border-radius: 8px;
`;

function MyComponent() {
  return <StyledBox>Custom styled content</StyledBox>;
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

or

```typescript [Declarative]
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled } from "@tiendanube/nube-sdk-ui";
import { box } from "@tiendanube/nube-sdk-ui";

const StyledBox = styled(box)`
  background-color: red;
  padding: 16px;
  border-radius: 8px;
`;

export function App(nube: NubeSDK) {
  nube.render(
    "before_main_content",
    StyledBox({
      children: "Custom styled content",
    }),
  );
}
```

## Template Literal Interpolation

You can use JavaScript expressions within your CSS:

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled } from "@tiendanube/nube-sdk-ui";
import { Box } from "@tiendanube/nube-sdk-jsx";

const primaryColor = "var(--primary-color)";

function getSpacing() {
  return 20;
}

const StyledBox = styled(Box)`
  background-color: ${primaryColor};
  padding: ${16}px;
  margin: ${getSpacing()}px;
`;

function MyComponent() {
  return <StyledBox>Interpolated styled content</StyledBox>;
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

## CSS Features

The `styled()` function supports all CSS features:

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled } from "@tiendanube/nube-sdk-ui";
import { Button } from "@tiendanube/nube-sdk-jsx";

const StyledButton = styled(Button)`
  background-color: blue;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: darkblue;
  }

  &:active {
    background-color: navy;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

function MyComponent() {
  return <StyledButton>Click me</StyledButton>;
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

## Media Queries

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled } from "@tiendanube/nube-sdk-ui";
import { Box } from "@tiendanube/nube-sdk-jsx";

const ResponsiveBox = styled(Box)`
  background-color: red;
  padding: 16px;

  @media (max-width: 768px) {
    padding: 8px;
    background-color: blue;
  }

  @media (min-width: 1024px) {
    padding: 24px;
    background-color: green;
  }
`;

function MyComponent() {
  return <ResponsiveBox>Responsive content</ResponsiveBox>;
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

## Keyframes

You can create and use CSS keyframe animations with the `keyframes` function:

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled, keyframes } from "@tiendanube/nube-sdk-ui";
import { Box } from "@tiendanube/nube-sdk-jsx";

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const slideIn = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(-20px);
    opacity: 0;
  }
`;

const AnimatedBox = styled(Box)`
  animation: ${pulse} 2s ease-in-out infinite;
`;

const SlideInBox = styled(Box)`
  animation: ${slideIn} 2s ease-in-out infinite;
`;

function MyComponent() {
  return (
    <Box>
      <AnimatedBox>Pulsing content</AnimatedBox>
      <SlideInBox>Sliding content</SlideInBox>
    </Box>
  );
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

## Complex Animations

You can create more complex animations with multiple keyframes:

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled, keyframes } from "@tiendanube/nube-sdk-ui";
import { Box } from "@tiendanube/nube-sdk-jsx";

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0, 0, 0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 40px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const AnimatedComponent = styled(Box)`
  animation: ${bounce} 1s ease-in-out infinite;

  &:hover {
    animation: ${fadeInUp} 0.6s ease-out;
  }
`;

function MyComponent() {
  return <AnimatedComponent>Bouncing content</AnimatedComponent>;
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

## Animation with Theme Integration

Combine keyframes with theme tokens for consistent animations:

:::tip Testing this example
In order to see this example in action, navigate to the checkout in your store.
:::

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled, keyframes, theme } from "@tiendanube/nube-sdk-ui";
import { Button } from "@tiendanube/nube-sdk-jsx";

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px ${theme.color.accent};
  }
  50% {
    box-shadow: 0 0 20px ${theme.color.accent}, 0 0 30px ${theme.color.accent};
  }
  100% {
    box-shadow: 0 0 5px ${theme.color.accent};
  }
`;

const GlowingButton = styled(Button)`
  background-color: ${theme.color.accent};
  color: white;
  padding: 12px 24px;
  border-radius: ${theme.border.radius};
  animation: ${glow} 2s ease-in-out infinite;
`;

function MyComponent() {
  return <GlowingButton>Glowing action</GlowingButton>;
}

export function App(nube: NubeSDK) {
  nube.render("after_line_items", <MyComponent />);
}
```

## CSS Custom Properties

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled } from "@tiendanube/nube-sdk-ui";
import { Box } from "@tiendanube/nube-sdk-jsx";

const ThemedBox = styled(Box)`
  --custom-color: #ff6b6b;
  --custom-padding: 20px;

  background-color: var(--custom-color);
  padding: var(--custom-padding);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function MyComponent() {
  return <ThemedBox>Custom properties content</ThemedBox>;
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

## Component Composition

You can chain styled components:

```tsx
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { styled } from "@tiendanube/nube-sdk-ui";
import { Box } from "@tiendanube/nube-sdk-jsx";

const BaseStyledBox = styled(Box)`
  background-color: red;
  padding: 16px;
`;

const FinalStyledBox = styled(BaseStyledBox)`
  border: 2px solid black;
  margin: 8px;
`;

function MyComponent() {
  return <FinalStyledBox>Composed styled content</FinalStyledBox>;
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```
