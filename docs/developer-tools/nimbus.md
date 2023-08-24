---
sidebar_position: 3
title: Nimbus
---

import NimbusExample from '@site/src/components/NimbusExample';
import NimbusPackages from '@site/src/components/NimbusPackages';
import NimbusTemplates from '@site/src/components/NimbusTemplates';

# Nimbus Design System

O [Nimbus](https://nimbus.nuvemshop.com.br) é o design system open-source da Nuvemshop. Com componentes validados em produtos Nuvemshop, padrões e templates otimizados, documentação com exemplos e sincronização entre o UI kit no Figma e o código, o Nimbus viabiliza desenvolvedores e designers a criarem interfaces consistentes, acessíveis e de alto desempenho. Você poderá usar ele para criar seus aplicativos dentro do ecossistema da Nuvemshop ou também para seu projeto próprio considerando a licença vigente.

Dentro do contexto do aplicativo, incentivamos o uso do [Nimbus](https://nimbus.nuvemshop.com.br) para desenvolver experiências de usuário coesas e reconhecíveis. É importante que seu aplicativo incorpore e faça uso das [bibliotecas do Nimbus](./nimbus.md#principais-pacotes-do-nimbus), seguindo tanto as diretrizes de design de aplicativos quanto as diretrizes mais abrangentes do **Nimbus**. Para aplicativos nativos, o uso do Nimbus é pré-requisito para mantermos a consistência e qualidade das interfaces integradas ao administrador dos lojistas.

## Principais pacotes do Nimbus

<NimbusPackages />

## Templates

<NimbusTemplates />

## Configurando e utilizando o Nimbus

1. Para esse exemplo vamos instalar apenas os pacotes essenciais do nimbus.

```bash
yarn add @nimbus-ds/styles @nimbus-ds/components
```

ou

```bash
npm add @nimbus-ds/styles @nimbus-ds/components
```

2. Importamos todos os componentes necessários do Nimbus e o arquivo de estilos css para o nosso projeto, permitindo assim a utilização de qualquer componente Nimbus no projeto.

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

3. Após a implementação acima dentro do seu projeto teremos a seguinte saida.

<NimbusExample />

---

## Próximos passos

- Saiba mais sobre a [Nimbus](https://nimbus.nuvemshop.com.br)
- Saiba mais sobre o [Nexo](./nexo)
- Saiba mais sobre nossa [API](./nuvemshop-api)
