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
    <Iframe src="https://your-app-domain.com" />
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
      src="https://your-app-domain.com" 
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

### Communication

The `Iframe` component supports bidirectional communication between your app and the embedded content.

#### Receiving messages from iframe

Use the `onMessage` prop to listen for messages sent from the iframe:

```typescript title="Example with onMessage"
import { Iframe } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  nube.render(
    "before_main_content",
    <Iframe
      src="https://your-app-domain.com"
      height={300}
      onMessage={(event) => {
        console.log(event.value);
      }}
    />
  );
}
```

#### Sending messages to iframe

To send messages from your app to the iframe, use the `NubeBrowserAPIs`:

```typescript title="Example sending message to iframe"
import { Iframe } from "@tiendanube/nube-sdk-jsx";
import type { NubeSDK } from "@tiendanube/nube-sdk-types";

export function App(nube: NubeSDK) {
  const Component = (
    <Iframe
      src="https://your-app-domain.com"
      height={300}
      onMessage={(event) => {
        console.log(event.value);
      }}
    />
  );

  nube.render("before_main_content", Component);

  const browser = nube.getBrowserAPIs();
  browser.postMessageToIframe(Component, {
    message: "Hello World",
  });
}
```

#### Implementing iframe content

When implementing the code that runs inside the iframe, use `window.parent.postMessage` to send messages to the parent window:

```javascript title="Example sending message from iframe to parent"
// Code inside the iframe
window.parent.postMessage(
  {
    type: "custom-event",
    data: { message: "Hello from iframe" }
  },
  "*" // Target origin - use specific origin in production
);
```

To listen for messages sent from the parent window to the iframe:

```javascript title="Example listening to messages from parent"
// Code inside the iframe
window.addEventListener("message", (event) => {
  // Verify origin for security
  if (event.origin !== "https://your-app-domain.com") return;
  
  console.log("Message from parent:", event.data);
});
```

### Security Considerations

When embedding external content using iframes, consider the following security best practices:

- **Only use trusted sources**: Ensure the URL you're embedding is from a trusted and secure source
- **HTTPS required**: Always use HTTPS URLs to prevent man-in-the-middle attacks
- **Content restrictions**: Some websites actively prevent iframe embedding. If your content doesn't load, check the browser console for X-Frame-Options or CSP errors
- **Sandbox restrictions**: The iframe runs in a sandboxed environment with limited permissions for security

### Properties

| Property  | Type                                    | Required | Description                                                          |
| --------- | --------------------------------------- | -------- | -------------------------------------------------------------------- |
| src       | string                                  | Yes      | The URL of the content to embed. Must use "https://".               |
| width     | Size                                    | No       | Width of the iframe (e.g., "100%", "600px", 600).                   |
| height    | Size                                    | No       | Height of the iframe (e.g., "400px", "50vh", 400).                  |
| style     | StyleSheet                              | No       | Custom styles for the iframe container.                              |
| id        | string                                  | No       | Optional unique identifier for the component.                        |
| onMessage | (event: { value: unknown }) => void     | No       | Callback function called when a message is received from the iframe. |
