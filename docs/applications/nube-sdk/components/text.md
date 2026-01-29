---
title: Text
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The `text` component is used to render text with optional styling.
It supports properties such as `color`, `background`, `heading` levels (h1-h6),
text formatting `modifiers` (bold, italic, etc.), and inline display.

![Text](../../../../static/img/pt/nube-sdk-ui-txt-1.png "Text")

### Usage

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box direction="col" gap={8}>
      {/* Basic text */}
      <Text>Hello world!</Text>

      {/* Text with color and background */}
      <Text color="white" background="blue">Highlighted text</Text>

      {/* Heading text */}
      <Text heading={2}>This is a heading</Text>

      {/* Text with modifiers */}
      <Text modifiers={["bold", "italic"]}>Bold and italic text</Text>

      {/* Inline text */}
      <Text inline>Inline</Text>
      <Text inline>text</Text>
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

| Property   | Type                         | Required | Description                                                             |
| ---------- | ---------------------------- | -------- | ----------------------------------------------------------------------- |
| text       | string                       | Yes      | The text content to be displayed.                                       |
| color      | string                       | No       | The text color (can be CSS variable like "var(--primary-color)").       |
| background | string                       | No       | The background color (can be CSS variable like "var(--primary-color)"). |
| heading    | 1\|2\|3\|4\|5\|6             | No       | The heading level (h1-h6).                                              |
| modifiers  | TxtModifier[]                | No       | Array of text formatting modifiers.                                     |
| inline     | boolean                      | No       | Whether the text should be displayed inline.                            |
| style      | StyleSheet                   | No       | Custom styles for the text.                                             |

