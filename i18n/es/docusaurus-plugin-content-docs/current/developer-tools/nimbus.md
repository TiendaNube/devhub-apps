---
sidebar_position: 3
title: Nimbus
---

import NimbusExample from '@site/src/components/NimbusExample';
import NimbusPackages from '@site/src/components/NimbusPackages';
import NimbusTemplates from '@site/src/components/NimbusTemplates';

# Sistema de Diseño Nimbus

[Nimbus](https://nimbus.nuvemshop.com.br) es el sistema de diseño de código abierto de Nuvemshop. Con componentes validados en productos Nuvemshop, patrones y plantillas optimizados, documentación con ejemplos y sincronización entre el kit de interfaz de usuario en Figma y el código, Nimbus permite a los desarrolladores y diseñadores crear interfaces consistentes, accesibles y de alto rendimiento. Puede usarlo para desarrollar sus aplicaciones dentro del ecosistema de Nuvemshop o para su propio proyecto, teniendo en cuenta la licencia vigente.

Dentro del contexto de la aplicación, fomentamos el uso de [Nimbus](https://nimbus.nuvemshop.com.br) para desarrollar experiencias de usuario cohesivas y reconocibles. Es importante que su aplicación incorpore y utilice las [bibliotecas de Nimbus](./nimbus.md#principales-pacotes-do-nimbus), siguiendo las directrices de diseño de aplicaciones y las directrices más amplias de **Nimbus**. Para las aplicaciones incorporadas, el uso de Nimbus es un requisito previo para mantener la consistencia y calidad de las interfaces integradas en el administrador de tiendas.

## Principales paquetes de Nimbus

<NimbusPackages />

## Plantillas

<NimbusTemplates />

## Configuración y uso de Nimbus

1. Para este ejemplo, solo instalaremos los paquetes esenciales de Nimbus.

```bash
yarn add @nimbus-ds/styles @nimbus-ds/components
```

ou

```bash
npm add @nimbus-ds/styles @nimbus-ds/components
```

2. Importamos todos los componentes necesarios de Nimbus y el archivo de estilos CSS en nuestro proyecto, lo que nos permite utilizar cualquier componente de Nimbus en el proyecto.

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

3. Después de implementar lo anterior en su proyecto, obtendrá la siguiente salida.

<NimbusExample />

---

## Próximos pasos

- Obtenga más información sobre [Nimbus](https://nimbus.nuvemshop.com.br)
- Obtenga más información sobre [Nexo](./nexo)
- Obtenga más información sobre nuestra [API](./nuvemshop-api)
