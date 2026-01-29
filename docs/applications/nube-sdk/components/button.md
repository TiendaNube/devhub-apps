---
title: Button
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

A `button` is a clickable element used to trigger actions.
It supports properties such as `children`, `variant`, `onClick`, and style configurations.

![Button](../../../../static/img/pt/nube-sdk-ui-button-1.png "Button")

### Usage

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Button } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Button variant="primary" onClick={() => {}}>
      Hello world!
    </Button>
  );
}

export function App(nube: NubeSDK) {
  nube.send("ui:slot:set", () => ({
    ui: {
      slots: {
        after_line_items: <MyComponent />,
      },
    },
  }));
}
```

### Event Handlers

The button component supports an event handler that receives an object with the following properties:

```typescript
onClick: (data: {
  type: "click";        // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value?: string;       // Optional value associated with the button
}) => void
```

Example usage:

```tsx title="Button with onClick handler"
import type {
  NubeSDK,
  NubeComponentButtonEventHandler,
} from "@tiendanube/nube-sdk-types";
import { Button, Box, Text, Toast } from "@tiendanube/nube-sdk-jsx";

function MyComponent(nube: NubeSDK) {
  // Typed event handler for button
  const handleButtonClick: NubeComponentButtonEventHandler = (event) => {
    // event.type is "click"
    // event.value is string (optional)
    // event.state is the full NubeSDKState
    const itemCount = event.state.cart?.items?.length ?? 0;
    const storeName = event.state.store?.name ?? "Store";

    console.log("Button clicked:", {
      type: event.type,
      itemCount,
      storeName,
    });

    // Show toast notification
    nube.send("ui:slot:set", () => ({
      ui: {
        slots: {
          corner_top_right: (
            <Toast.Root variant="info" duration={3000}>
              <Toast.Title>Cart Info</Toast.Title>
              <Toast.Description>
                You have {String(itemCount)} items in your cart
              </Toast.Description>
            </Toast.Root>
          ),
        },
      },
    }));
  };

  return (
    <Box direction="col" gap={12}>
      <Text modifiers={["bold"]}>Cart Actions</Text>

      <Button variant="primary" onClick={handleButtonClick}>
        Show Item Count
      </Button>
    </Box>
  );
}

export function App(nube: NubeSDK) {
  nube.send("ui:slot:set", () => ({
    ui: {
      slots: {
        after_line_items: MyComponent(nube),
      },
    },
  }));
}
```

### Properties

| Property | Type                                                   | Required | Description                                  |
| -------- | ------------------------------------------------------ | -------- | -------------------------------------------- |
| children | string                                                 | No       | Text or content of the button.               |
| disabled | boolean                                                | No       | Whether the button is disabled.              |
| variant  | "primary"<br/>"secondary"<br/>"transparent"<br/>"link" | No       | Button style variant.                        |
| width    | Size                                                   | No       | Width of the button (e.g., "100%", "200px"). |
| height   | Size                                                   | No       | Height of the button.                        |
| onClick  | NubeComponentButtonEventHandler                        | No       | Function called when the button is clicked.  |
| style    | StyleSheet                                             | No       | Custom styles for the button.                |
