---
title: Image
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

Used to display images. It supports properties such as `src`, `alt`, `width`, `height`, and responsive `sources` for different screen sizes.

![Image](../../../../static/img/pt/nube-sdk-ui-img-1.png "Image")

### Usage

```typescript title="Example"
import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { Image, Box } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Box direction="col" gap={16}>
      {/* Basic image */}
      <Image
      src="https://app-insti-cdn.nuvemshop.com.br/site/dist/images/widgets/closing-cta/image-3.webp"
      alt="Nuvemshop Logo"
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
