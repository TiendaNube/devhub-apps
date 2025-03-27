---
title: UI Components
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

:::warning
This SDK is a Work In Progress! All features are subject to change.
:::

We support multiple UI components built in JSX, some of which support nesting, to enable the creation of rich user interfaces. The UI components are assigned to [slots](./ui-slots) by sending the [ui:slot:set](./events#uislotset) event.

## `Box`

Box container, supports multiple sizes, styling and alignment options.
It's used mostly to embed other components that don't have their own layout options (fields, texts, images, etc..)

![Box](../../../static/img/pt/nube-sdk-ui-box-1.png "Box")

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Txt } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box width={100} height={200}>
      <Txt>Hello!!</Txt>
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

## `Check`

Check allow the user to select one or more items from a set. Checkboxes can be used to turn an option on or off.

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box, Check } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box>
      <Check
        id="my-checkbox"
        label="Checkbox"
        name="checkbox"
        onChange={(e) => {
          console.log(`User name: ${e.value}`);
        }}
      />
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

## `Col`

Column container, layouts children in a column, supports multiple sizes, styling and alignment options.

![Column](../../../static/img/pt/nube-sdk-ui-col-1.png "Column")

```typescript title="Example"
import { Col, Txt } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Col width={100} height={200}>
      <Txt>Hello 1</Txt>
      <Txt>Hello 2</Txt>
    </Col>
  );
}
```

## `Row`

Row container, layouts children in a row, supports multiple sizes, styling and alignment options.

![Row](../../../static/img/pt/nube-sdk-ui-row-1.png "Row")

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

## `Txt`

Text component, support multiple styles.
It needs to be embedded inside a box to control anything related to layout.

![Text](../../../static/img/pt/nube-sdk-ui-txt-1.png "Text")

```typescript title="Example"
import { Box, Txt } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box>
      <Txt color="red" background="blue">Hello!!</Txt>
    </Box>
  );
}
```


## `Field`

Text input field, supports multiple styles and change events / focus events.
It needs to be embedded inside a box to control anything related to layout.

![Field](../../../static/img/pt/nube-sdk-ui-field-1.png "Field")

```typescript title="Example"
import { Box, Field } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box>
      <Field
        id="myField"
        label="Field"
        name="field"
        onChange={(e) => {
          console.log(`value: ${e.value}`);
        }}
      />
    </Box>
  );
}
```

## `TxtArea`

Multi-line text input for extended content.

```typescript title="Example"
import { Box, TxtArea } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box>
      <TxtArea
        id="my-textarea"
        maxLength={300}
        row={3}
        label="TxtArea"
        name="txtarea"
        onChange={(e) => {
          console.log(`value: ${e.value}`);
        }}
      />
    </Box>
  );
}
```

## `Img`

Displays an image.
It needs to be embedded inside a box to control anything related to layout.

![Field](../../../static/img/pt/nube-sdk-ui-img-1.png "Field")

```typescript title="Example"
import { Col, Img } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Col width={100} height={200}>
      <Img
        src="https://app-insti-cdn.nuvemshop.com.br/site/dist/images/widgets/closing-cta/image-3.webp"
        alt="Nuvemshop Logo"
      />
    </Col>
  );
}
```

Optionally, the `Img` component can receive alternative sources loaded by media query.

```typescript title="Example"
export function Logo() {
  return (
    <Img
      src="https://hostname/default.png"
      alt="Hello"
      sources={[
        {
          src: "https://hostname/desktop.png",
          media: "(min-width: 769px)",
        },
        {
          src: "https://hostname/mobile.png",
          media: "(max-width: 768px)",
        },
      ]}
    />
  );
}
```
