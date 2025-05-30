---
title: Checkbox
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

## `Checkbox`

Checkbox allows the user to select one or more items from a set. Checkboxes can be used to turn an option on or off.

### Usage

```typescript title="Example"
import { Checkbox } from "@tiendanube/nube-sdk-jsx";

<Checkbox
  name="terms"
  label="I agree to the terms and conditions"
  checked={false}
  onChange={() => {}}
/>;
```

### Event Handlers

The checkbox component supports an event handler that receives an object with the following properties:

```typescript
onChange: (data: {
  type: "change";       // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value?: boolean;      // The new checked state of the checkbox
}) => void
```

Example usage:

```tsx [JSX]
import { Checkbox } from "@tiendanube/nube-sdk-jsx";
import type { NubeComponentCheckEventHandler } from "@tiendanube/nube-sdk-types";

const handleEvents: NubeComponentCheckEventHandler = (event) => {
  const { type, value, state } = event;
  // Perform some action
};

<Checkbox
  name="terms"
  label="I agree to the terms and conditions"
  checked={false}
  onChange={handleEvents}
/>;
```

### Properties

| Property | Type                           | Required | Description                                                   |
| -------- | ------------------------------ | -------- | ------------------------------------------------------------- |
| name     | string                         | Yes      | The name of the checkbox, used to identify it in forms.       |
| label    | string                         | Yes      | The label text displayed next to the checkbox.                |
| checked  | boolean                        | Yes      | The current checked state of the checkbox.                    |
| onChange | NubeComponentCheckEventHandler | No       | Function called when the checkbox state changes.              |
| style    | StyleSheet                     | No       | Custom styles for the checkbox.                               |
