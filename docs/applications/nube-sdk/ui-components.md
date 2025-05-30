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

### Usage

![Box](../../../static/img/pt/nube-sdk-ui-box-1.png "Box")

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Box } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box width={100} height={200}>
      {/* children */}
    </Box>;
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

## `Column`

A `column` is a flexible vertical container used to align child components in a column.
It inherits all the capabilities of the [box component](/docs/applications/nube-sdk/ui-components#box), with the direction property preset to `"column"`.

### Usage

![Column](../../../static/img/pt/nube-sdk-ui-col-1.png "Column")

```typescript title="Example"
import { Column, Text } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Column width={100} height={200}>
      <Text>Hello 1</Text>
      <Text>Hello 2</Text>
    </Column>
  );
}
```

### Properties

| Property       | Type                  | Required | Description                                                                                          |
| -------------- | --------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| children       | NubeChildrenComponent | No       | Array of child components nested inside the column.                                                  |
| style          | StyleSheet            | No       | Custom styles for the column.                                                                        |
| width          | Size                  | No       | Width of the column (e.g., "100%", "200px").                                                         |
| height         | Size                  | No       | Height of the column.                                                                                |
| margin         | Size                  | No       | Outer spacing around the column.                                                                     |
| padding        | Size                  | No       | Inner spacing of the column (e.g., "16px").                                                          |
| gap            | Size                  | No       | Spacing between child elements (e.g., "1rem").                                                       |
| borderRadius   | Size                  | No       | Border radius of the column (e.g., "8px").                                                           |
| reverse        | boolean               | No       | Whether children should wrap to the next line when space runs out.                                   |
| background     | string                | No       | Background color (can be CSS variable like "var(--primary-color)").                                  |
| color          | string                | No       | Content color (can be CSS variable like "var(--primary-color)").                                     |
| alignItems     | FlexItems             | No       | The CSS property [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)         |
| alignContent   | FlexContent           | No       | The CSS property [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)     |
| justifyContent | FlexContent           | No       | The CSS property [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) |
| id             | string                | No       | Optional unique identifier for the component.                                                        |

## `Row`

A `row` is a flexible horizontal container used to align child components in a row.
It inherits all the capabilities of the [box component](/docs/applications/nube-sdk/ui-components#box), with the direction property preset to `"row"`.

![Row](../../../static/img/pt/nube-sdk-ui-row-1.png "Row")

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

## `Text`

The `text` component is used to render text with optional styling.
It supports properties such as `color`, `background`, `heading` levels (h1-h6),
text formatting `modifiers` (bold, italic, etc.), and inline display.

![Text](../../../static/img/pt/nube-sdk-ui-txt-1.png "Text")

### Usage

```typescript title="Example"
import { Box, Text } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box>
      <Text color="red" background="blue">Hello!!</Text>
    </Box>
  );
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

## `Button`

A `button` is a clickable element used to trigger actions.
It supports properties such as `children`, `variant`, `onClick`, and style configurations.

![Button](../../../static/img/pt/nube-sdk-ui-button-1.png "Button")

### Usage

```typescript title="Example"
import { Button } from "@tiendanube/nube-sdk-jsx";

<Button variant="primary" onClick={() => {}}>
  Click here
</Button>;
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

## `Field`

A `field` represents a text input element in a form.
It supports properties like `name`, `label`, and event handlers (`onChange`, `onBlur`, `onFocus`).

![Field](../../../static/img/pt/nube-sdk-ui-field-1.png "Field")

### Usage

```tsx [JSX]
import { Field } from "@tiendanube/nube-sdk-jsx";

<Field
  name="email"
  label="Email"
  onChange={() => {}}
  onBlur={() => {}}
  onFocus={() => {}}
/>;
```

### Properties

| Property | Type                           | Required | Description                                                        |
| -------- | ------------------------------ | -------- | -------------------------------------------------------------------|
| name     | string                         | Yes      | The name of the field, used to identify it in forms.               |
| label    | string                         | Yes      | The label text displayed above the field.                          |
| value    | string                         | No       | The current value of the field input.                              |
| mark     | string                         | No       | Format mask for the field input (e.g., "000.000.000-00" for CPF).  |
| style    | StyleSheet                     | No       | Custom styles for the field.                                       |
| autoFocus| boolean                        | No       | Whether the field should automatically receive focus when mounted. |
| onChange | NubeComponentFieldEventHandler | No       | Function called when the field value changes.                      |
| onBlur   | NubeComponentFieldEventHandler | No       | Function called when the field loses focus.                        |
| onFocus  | NubeComponentFieldEventHandler | No       | Function called when the field receives focus.                     |

### Event Handlers

The field component supports three event handlers that receive an object with the following properties:

```typescript
onChange: (data: {
  type: "change";       // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value?: string;       // The new value of the field
}) => void

onBlur: (data: {
  type: "blur";         // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value?: string;       // The current value of the field
}) => void

onFocus: (data: {
  type: "focus";        // The type of event
  state: NubeSDKState;  // The current state of the SDK
  value?: string;       // The current value of the field
}) => void
```

## `Textarea`

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

## `Image`

Used to display images. It supports properties such as `src`, `alt`, `width`, `height`, and responsive `sources` for different screen sizes.

![Field](../../../static/img/pt/nube-sdk-ui-img-1.png "Field")

### Usage

```typescript title="Example"
import { Image } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Image
      src="https://app-insti-cdn.nuvemshop.com.br/site/dist/images/widgets/closing-cta/image-3.webp"
      alt="Nuvemshop Logo"
    />
  );
}
```

Optionally, the `Img` component can receive alternative sources loaded by media query.

```typescript title="Example"
export function Logo() {
  return (
    <Image
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

### Properties

| Property | Type          | Required | Description                                                     |
| -------- | ------------- | -------- | --------------------------------------------------------------- |
| src      | string        | Yes      | URL of the image to display. Must use "https://".               |
| alt      | string        | Yes      | Alternative text for the image, used for accessibility.         |
| sources  | ImageSource[] | No       | Array of alternative image sources with optional media queries. |
| width    | Size          | No       | Width of the image (e.g., "100px", "50%", "auto", 100).         |
| height   | Size          | No       | Height of the image (same format as width).                     |
| id       | string        | No       | Optional unique identifier for the component.                   |
| style    | StyleSheet    | No       | Custom styles for the image.                                    |

### ImageSource

| Property | Type   | Required | Description                                    |
| -------- | ------ | -------- | ---------------------------------------------- |
| src      | string | Yes      | The alternative image source URL (https only). |
| media    | string | No       | Optional media query to match this source.     |
