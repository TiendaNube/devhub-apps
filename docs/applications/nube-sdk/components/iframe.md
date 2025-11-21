---
title: Iframe
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The `Iframe` component allows you to embed external web content directly into your application's UI. It creates an inline frame that loads content from a specified URL within a designated UI slot.

<Alert appearance="warning" title="Important">
  The Iframe component is only available in storefront. It is not available in checkout.
</Alert>

### Usage

```typescript title="Example"
import { Iframe } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.render(
    "before_main_content",
    <Iframe src="https://www.nuvemshop.com.br" />
  );
}
```

You can also customize the iframe dimensions and styling:

```typescript title="Example with custom properties"
import { Iframe } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.render(
    "after_line_items",
    <Iframe 
      src="https://example.com/widget" 
      width="100%"
      height="400px"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}
    />
  );
}
```

### Security Considerations

When embedding external content using iframes, consider the following security best practices:

- **Only use trusted sources**: Ensure the URL you're embedding is from a trusted and secure source
- **HTTPS required**: Always use HTTPS URLs to prevent man-in-the-middle attacks
- **Content restrictions**: Some websites actively prevent iframe embedding. If your content doesn't load, check the browser console for X-Frame-Options or CSP errors
- **Sandbox restrictions**: The iframe runs in a sandboxed environment with limited permissions for security

### Properties

| Property | Type       | Required | Description                                                          |
| -------- | ---------- | -------- | -------------------------------------------------------------------- |
| src      | string     | Yes      | The URL of the content to embed. Must use "https://".               |
| width    | Size       | No       | Width of the iframe (e.g., "100%", "600px", 600).                   |
| height   | Size       | No       | Height of the iframe (e.g., "400px", "50vh", 400).                  |
| style    | StyleSheet | No       | Custom styles for the iframe container.                             |
| id       | string     | No       | Optional unique identifier for the component.                       |
