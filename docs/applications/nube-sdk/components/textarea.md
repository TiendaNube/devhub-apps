---
title: Textarea
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

A `textarea` represents a multi-line text input field that allows users to enter longer texts.
It supports properties such as `name`, `label`, and event handlers (`onChange`, `onBlur`, `onFocus`).

### Usage

```typescript title="Example"
import { Box, Textarea } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box>
      <Textarea
        id="my-textarea"
        maxLength={300}
        row={3}
        label="Textarea"
        name="txtarea"
        onChange={(e) => {
          console.log(`value: ${e.value}`);
        }}
      />
    </Box>
  );
}
```

### Properties

| Property  | Type                              | Required | Description                                                            |
| --------- | --------------------------------- | -------- | -----------------------------------------------------------------------|
| name      | string                            | Yes      | The name of the textarea, used to identify it in forms.                |
| label     | string                            | Yes      | The label text displayed above the textarea.                           |
| value     | string                            | No       | The current value of the textarea.                                     |
| maxLength | number                            | No       | The maximum number of characters allowed in the textarea.              |
| rows      | number                            | No       | The number of visible text lines in the textarea.                      |
| mark     | string                             | No       | Format mask for the field input (e.g., "000.000.000-00" for CPF).      |
| style    | StyleSheet                         | No       | Custom styles for the field.                                           |
| autoFocus | boolean                           | No       | Whether the textarea should automatically receive focus when mounted.  |
| onChange  | NubeComponentTextareaEventHandler | No       | Function called when the textarea value changes.                       |
| onBlur    | NubeComponentTextareaEventHandler | No       | Function called when the textarea loses focus.                         |
| onFocus   | NubeComponentTextareaEventHandler | No       | Function called when the textarea receives focus.                      |

### Event Handlers

The textarea component supports three event handlers that receive an object with the following properties:

```typescript
onChange: (data: {
  type: "change";       // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value?: string;       // The new value of the textarea
}) => void

onBlur: (data: {
  type: "blur";         // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value?: string;       // The current value of the textarea
}) => void

onFocus: (data: {
  type: "focus";        // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value?: string;       // The current value of the textarea
}) => void
```
