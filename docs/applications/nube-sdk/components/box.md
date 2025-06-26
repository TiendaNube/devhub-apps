---
title: Box
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

Box container, supports multiple sizes, styling and alignment options.
It's used mostly to embed other components that don't have their own layout options (fields, texts, images, etc..)

### Usage

![Box](../../../../static/img/pt/nube-sdk-ui-box-1.png "Box")

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box width={100} height={200}>
      {/* children */}
    </Box>
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

### Properties

| Property       | Type                  | Required | Description                                                                                          |
| -------------- | --------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| children       | NubeChildrenComponent | No       | Array of child components nested inside the box.                                                     |
| width          | Size                  | No       | Width of the box (e.g., "100%", "200px").                                                            |
| height         | Size                  | No       | Height of the box.                                                                                   |
| margin         | Size                  | No       | Outer spacing around the box.                                                                        |
| padding        | Size                  | No       | Inner spacing of the box (e.g., "16px").                                                             |
| style          | StyleSheet            | No       | Custom styles for the box.                                                                           |
| gap            | Size                  | No       | Spacing between child elements (e.g., "1rem").                                                       |
| borderRadius   | Size                  | No       | Border radius of the box (e.g., "8px").                                                              |
| reverse        | boolean               | No       | Whether children should wrap to the next line when space runs out.                                   |
| background     | string                | No       | Background color (can be CSS variable like "var(--primary-color)").                                  |
| color          | string                | No       | Content color (can be CSS variable like "var(--primary-color)").                                     |
| alignItems     | FlexItems             | No       | The CSS property [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)         |
| alignContent   | FlexContent           | No       | The CSS property [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)     |
| justifyContent | FlexContent           | No       | The CSS property [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) |
| direction      | "row"<br/>"column"    | No       | Layout direction for children (row for horizontal, column for vertical).                             |
| id             | string                | No       | Optional unique identifier for the component.                                                        |
