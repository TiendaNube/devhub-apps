---
title: Accordion
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

An `accordion` is a collapsible content component that allows users to expand and collapse sections of content. 
It's commonly used to organize information into manageable sections, improving the user experience by reducing visual clutter.

The accordion is a compound component composed of `Root`, `Item`, `Header`, and `Content` subcomponents.

### Usage

```typescript title="Example"
import { Accordion } from "@tiendanube/nube-sdk-jsx";

<Accordion.Root defaultValue="item-1" style={{ backgroundColor: "red" }}>
  <Accordion.Item value="item-1">
    <Accordion.Header showIcon>Accordion Item 1</Accordion.Header>
    <Accordion.Content>Accordion Content 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item value="item-2">
    <Accordion.Header>Accordion Item 2</Accordion.Header>
    <Accordion.Content>Accordion Content 2</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>;
```

## Subcomponents

### Accordion.Root

The root container that manages the accordion state.

| Property     | Type                  | Required | Description                                          |
| ------------ | --------------------- | -------- | ---------------------------------------------------- |
| children     | NubeChildrenComponent | No       | Accordion items to be rendered.                      |
| defaultValue | string                | No       | Default expanded item value.                         |
| style        | StyleSheet            | No       | Custom styles for the accordion root.                |
| id           | string                | No       | Optional unique identifier for the component.        |

### Accordion.Item

Individual accordion item container.

| Property | Type                  | Required | Description                                          |
| -------- | --------------------- | -------- | ---------------------------------------------------- |
| children | NubeChildrenComponent | No       | Header and content components.                       |
| id       | string                | No       | Optional unique identifier for the component.        |
| style    | StyleSheet            | No       | Custom styles for the accordion item.                |

### Accordion.Header

The clickable header that toggles the accordion item.

| Property | Type                  | Required | Description                                          |
| -------- | --------------------- | -------- | ---------------------------------------------------- |
| children | string                | No       | Text content of the header.                          |
| showIcon | boolean               | No       | Whether to show expand/collapse icon.                |
| style    | StyleSheet            | No       | Custom styles for the header.                        |

### Accordion.Content

The collapsible content area of the accordion item.

| Property | Type                  | Required | Description                                          |
| -------- | --------------------- | -------- | ---------------------------------------------------- |
| children | NubeChildrenComponent | No       | Content to be displayed when item is expanded.       |
| style    | StyleSheet            | No       | Custom styles for the content area.                  |
