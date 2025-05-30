---
title: Fragment
---

The `fragment` is a utility component that serves as a logical grouping element.
It allows multiple components to be wrapped together without introducing an additional DOM node.
This is particularly useful when you need to return multiple elements from a component
without adding unnecessary wrapper elements to the DOM.

### Usage

```tsx
import { Fragment } from "@tiendanube/nube-sdk-jsx";

<Fragment>
  <Text>First element</Text>
  <Text>Second element</Text>
</Fragment>;
```

### Properties

| Property | Type              | Required | Description                                                   |
| -------- | ----------------- | -------- | ------------------------------------------------------------- |
| children | NubeComponent[]   | No       | The child components to be grouped together.                  |

### When to Use

- When you need to return multiple elements from a component
- When you want to group elements without adding extra DOM nodes
- When you need to maintain a clean DOM structure
- When working with lists or conditional rendering
