---
title: Row
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

## `Row`

A `row` is a flexible horizontal container used to align child components in a row.
It inherits all the capabilities of the [box component](/docs/applications/nube-sdk/components/box), with the direction property preset to `"row"`.

![Row](../../../../static/img/pt/nube-sdk-ui-row-1.png "Row")

### Usage

```typescript title="Example"
import { Row, Txt } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Row width={100} height={200}>
      <Txt>Hello!!</Txt>
    </Row>
  );
}
```

### Properties

| Property       | Type                  | Required | Description                                                                                          |
| -------------- | --------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| children       | NubeChildrenComponent | No       | Array of child components nested inside the row.                                                     |
| width          | Size                  | No       | Width of the row (e.g., "100%", "200px").                                                            |
| height         | Size                  | No       | Height of the row.                                                                                   |
| style          | StyleSheet            | No       | Custom styles for the row.                                                                           |
| margin         | Size                  | No       | Outer spacing around the row.                                                                        |
| padding        | Size                  | No       | Inner spacing of the row (e.g., "16px").                                                             |
| gap            | Size                  | No       | Spacing between child elements (e.g., "1rem").                                                       |
| borderRadius   | Size                  | No       | Border radius of the row (e.g., "8px").                                                              |
| reverse        | boolean               | No       | Whether children should wrap to the next line when space runs out.                                   |
| background     | string                | No       | Background color (can be CSS variable like "var(--primary-color)").                                  |
| color          | string                | No       | Content color (can be CSS variable like "var(--primary-color)").                                     |
| alignItems     | FlexItems             | No       | The CSS property [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)         |
| alignContent   | FlexContent           | No       | The CSS property [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)     |
| justifyContent | FlexContent           | No       | The CSS property [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) |
| id             | string                | No       | Optional unique identifier for the component.                                                        |

