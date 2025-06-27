---
title: Toast
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

A `toast` is a non-disruptive message that appears temporarily at the edge of the interface to provide quick, at-a-glance feedback to the user.
It is a compound component composed of `Root`, `Title`, and `Description` subcomponents.

![Toast](../../../../static/img/pt/nube-sdk-toast.png "Toast")

### Usage

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Toast } from "@tiendanube/nube-sdk-jsx";

const ToastComponent = () => (
  <Toast.Root duration={3000} variant="success">
    <Toast.Title>Success!</Toast.Title>
    <Toast.Description>
      Your changes have been saved.
    </Toast.Description>
  </Toast.Root>
);

export function App(nube: NubeSDK) {
  nube.send("ui:slot:set", () => ({
    ui: {
      slots: {
        corner_bottom_right: <ToastComponent />,
      },
    },
  }));
}
```

## Available Slots

The Toast component can be rendered in the following UI slots:

- `corner_top_left`: Displays the toast in the top-left corner of the interface
- `corner_top_right`: Displays the toast in the top-right corner of the interface
- `corner_bottom_left`: Displays the toast in the bottom-left corner of the interface
- `corner_bottom_right`: Displays the toast in the bottom-right corner of the interface

## Subcomponents

### Toast.Root

The root container that manages the toast state and appearance.

| Property  | Type                                                    | Required | Description                                                |
| --------- | ------------------------------------------------------- | -------- | ---------------------------------------------------------- |
| children  | NubeComponent[]                                    | No       | Title and description components.                          |
| duration  | number                                                   | No       | Time in milliseconds before the toast disappears.          |
| variant   | "success"<br/>"error"<br/>"warning"<br/>"info"          | No       | Visual style variant of the toast.                         |
| style     | StyleSheet                                               | No       | Custom styles for the toast root.                          |
| id        | string                                                   | No       | Optional unique identifier for the component.              |

### Toast.Title

The title component of the toast message.

| Property | Type       | Required | Description                                    |
| -------- | ---------- | -------- | ---------------------------------------------- |
| children | string     | No       | Text content of the title.                     |
| style    | StyleSheet | No       | Custom styles for the title.                   |

### Toast.Description

The description component of the toast message.

| Property | Type       | Required | Description                                    |
| -------- | ---------- | -------- | ---------------------------------------------- |
| children | string     | No       | Text content of the description.               |
| style    | StyleSheet | No       | Custom styles for the description.             |
