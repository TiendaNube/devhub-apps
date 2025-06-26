---
title: Select
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

A `select` represents a dropdown input element that allows users to choose from a predefined list of options.
It supports properties such as `name`, `label`, `options`, and event handlers (`onChange`, `onBlur`, `onFocus`).

### Usage

```typescript title="Example"
import { Box, Select } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box>
      <Select
        id="my-select"
        name="country"
        label="Country"
        value="br"
        options={[
          { value: "us", label: "United States" },
          { value: "br", label: "Brazil" },
          { value: "ar", label: "Argentina" },
          { value: "mx", label: "Mexico" }
        ]}
        onChange={(e) => {
          console.log(`Selected value: ${e.value}`);
        }}
      />
    </Box>
  );
}
```

### Properties

| Property    | Type                            | Required | Description                                                                |
| ----------- | ------------------------------- | -------- | -------------------------------------------------------------------------- |
| name        | string                          | Yes      | The name of the select, used to identify it in forms.                     |
| label       | string                          | Yes      | The label text displayed above the select.                                |
| options     | SelectOption[]                  | Yes      | Array of options available for selection.                                 |
| value       | string                          | No       | The current selected value of the select.                                 |
| disabled    | boolean                         | No       | Whether the select is disabled and cannot be interacted with.             |
| style       | StyleSheet                      | No       | Custom styles for the select.                                             |
| onChange    | NubeComponentSelectEventHandler | No       | Function called when the selected value changes.                          |

### SelectOption Type

Each option in the `options` array should follow this structure:

```typescript
type SelectOption = {
  value: string;    // The value that will be submitted with the form
  label: string;    // The text displayed to the user
}
```

### Event Handlers

The select component supports three event handlers that receive an object with the following properties:

```typescript
onChange: (data: {
  type: "change";       // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value: string; // The new selected value
}) => void
```
