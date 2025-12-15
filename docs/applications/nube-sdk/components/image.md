---
title: Image
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

We support multiple UI components built in JSX, some of which support nesting, to enable the creation of rich user interfaces. The UI components are assigned to [slots](../slots/overview) by sending the [ui:slot:set](../events#uislotset) event.

Used to display images. It supports properties such as `src`, `alt`, `width`, `height`, and responsive `sources` for different screen sizes.

![Field](../../../../static/img/pt/nube-sdk-ui-img-1.png "Field")

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
