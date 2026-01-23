---
title: Markdown
---

import { Alert, Text, Box } from '@nimbus-ds/components';
import AppTypes from '@site/src/components/AppTypes';

The `Markdown` component is used to render markdown content as formatted HTML.
It supports properties such as `content` for the markdown text.

### Usage

![Markdown component example](/img/pt/nube-sdk-markdown.png)

```typescript title="Example"
import { Markdown } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  return (
    <Markdown content="# Hello World. This is **bold** text and this is ***italic*** text." />
  );
}
```

You can also use it with dynamic content:

```typescript title="Example with dynamic content"
import { Markdown, Box } from "@tiendanube/nube-sdk-jsx";

function MyComponent() {
  const markdownContent = `
# Welcome

This is a markdown component example.

## Features

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- \`Code blocks\`
`;

  return (
    <Box>
      <Markdown content={markdownContent} />
    </Box>
  );
}
```

### Properties

| Property | Type       | Required | Description                                    |
| -------- | ---------- | -------- | ---------------------------------------------- |
| content  | string     | Yes      | The markdown content to be rendered as HTML.   |
