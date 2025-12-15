---
title: SideScroll
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The `SideScroll` component creates a horizontal scrollable container for displaying content in a row.
It's useful for creating carousels, image galleries, or any horizontal list of items that may overflow the available width.
The component supports customizable scrollbar visibility, spacing between items, and scroll step configuration.

### Usage

```typescript title="Example"
import { Box, SideScroll, Text } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

function MyComponent() {
  return (
    <SideScroll width="400px" hideScrollbar>
      {Array.from({ length: 10 }).map((_, index) => {
        return (
          <Box key={index.toString()} style={{ background: "red" }}>
            <Text>{(index + 1).toString()}</Text>
          </Box>
        );
      })}
    </SideScroll>
  );
}

export function App(nube: NubeSDK) {
  nube.render("before_main_content", <MyComponent />);
}
```

### Properties

| Property      | Type                  | Required | Description                                                           |
| ------------- | --------------------- | -------- | --------------------------------------------------------------------- |
| children      | NubeChildrenComponent | No       | Array of child components nested inside the scroll container.         |
| width         | Size                  | No       | Width of the scroll container (e.g., "100%", "400px").                |
| gap           | Size                  | No       | Spacing between child elements (e.g., "1rem", "16px").                |
| hideScrollbar | boolean               | No       | Whether to hide the scrollbar while keeping scroll functionality.     |
| step          | number                | No       | Number of pixels to scroll when using navigation controls.            |
| style         | NubeComponentStyle    | No       | Custom styles for the scroll container.                               |
