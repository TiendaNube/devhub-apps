---
title: Markdown
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The `Markdown` component is used to render markdown content safely. It processes markdown text and renders HTML in a secure way, stripping direct HTML tags and scripts to prevent XSS, and validates URLs for links and images.

<Alert appearance="warning" title="Important">
  The Markdown component is only available in the storefront. It is not supported on checkout pages.
</Alert>

### Usage

```typescript title="Example"
import { Markdown } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  const content = `
# Main Title

This is a paragraph with **bold**, *italic* and a [link](https://example.com).

## Subtitle

- Item with **formatting**
- Other item with \`inline code\`
- Item with [link](https://example.com)

![Image](https://placehold.co/400x300)

More text here.`;

  return <Markdown content={content} />;
}
```

### Integration with the Link component

When the Markdown component renders a link (using the `[text](url)` syntax), that link is treated as the NubeSDK [Link](/docs/applications/nube-sdk/components/link) component:

- **External links**: When the user clicks a link to an external domain (outside the store), a confirmation modal appears asking the user to confirm before redirecting.
- **Internal links**: Links to pages within the same store domain do not show the confirmation modal and navigate directly.

This behavior is automatic and matches the [External vs Internal Links](/docs/applications/nube-sdk/components/link#external-vs-internal-links) behavior of the Link component.

### Security and formatting

The Markdown component processes markdown and renders HTML safely:

**Security features:**

- Removes all HTML tags from the content
- Removes scripts
- Validates URLs for links and images (only http/https allowed)
- Escapes HTML automatically

**Supported formatting:**

- Headers (`#`, `##`, `###`)
- Bold (`**text**`)
- Italic (`*text*`)
- Bold and italic (`***text***`)
- Links (`[text](url)`)
- Images (`![alt](url)`)
- Ordered lists (`1. item`)
- Unordered lists (`- item`)
- Inline code (`` `code` ``)

### Properties

| Property | Type   | Required | Description                             |
| -------- | ------ | -------- | --------------------------------------- |
| content  | string | Yes      | The markdown content to be rendered.    |
