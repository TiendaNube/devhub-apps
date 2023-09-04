---
sidebar_position: 3
title: Nimbus
---

import NimbusExample from '@site/src/components/NimbusExample';
import NimbusPackages from '@site/src/components/NimbusPackages';
import NimbusTemplates from '@site/src/components/NimbusTemplates';

# Nimbus Design System

[Nimbus](https://nimbus.nuvemshop.com.br) is Nuvemshop's open-source design system. With components validated in Nuvemshop products, optimized patterns and templates, documentation with examples, and synchronization between the UI kit in Figma and the code, Nimbus enables developers and designers to create consistent, accessible, and high-performance interfaces. You can use it to build your apps within the Nuvemshop ecosystem or for your own project, considering the current license.

Within the context of the application, we encourage the use of [Nimbus](https://nimbus.nuvemshop.com.br) to develop cohesive and recognizable user experiences. It's important that your application incorporates and makes use of [Nimbus libraries](./nimbus.md#principais-pacotes-do-nimbus), following both app design guidelines and broader **Nimbus** guidelines. For native apps, using Nimbus is a prerequisite to maintain consistency and quality in interfaces integrated into the store admin.

## Key Nimbus Packages

<NimbusPackages />

## Templates

<NimbusTemplates />

## Configuring and Using Nimbus

1. For this example, we will install only the essential Nimbus packages.

```bash
yarn add @nimbus-ds/styles @nimbus-ds/components
```

or

```bash
npm add @nimbus-ds/styles @nimbus-ds/components
```

2. We import all the necessary Nimbus components and the CSS styles file into our project, enabling the use of any Nimbus component in the project.

```jsx
import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import "@nimbus-ds/styles/dist/index.css";

import { Title, Card, Text, Button, Alert, Box } from "@nimbus-ds/components";

const App: React.FC = () => (
  <Box display="flex" flexDirection="column" gap="4">
    <Title as="h1">My simple app</Title>
    <Alert appearance="primary" title="Hello world">
      This is a simple alert to show Nimbus components
      <Button>Click me</Button>
    </Alert>
    <Card>
      <Card.Body>
        <Text fontSize="base">
          This is a sample paragraph inside a Card component.
        </Text>
      </Card.Body>
    </Card>
  </Box>
);

export default App;
```

3. After implementing the above within your project, you will have the following output.

<NimbusExample />

---

## Next Steps

- Learn more about [Nimbus](https://nimbus.nuvemshop.com.br)
- Learn more about [Nexo](./nexo)
- Learn more about our [API](./nuvemshop-api)
