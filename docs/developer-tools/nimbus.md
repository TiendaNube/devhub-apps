---
sidebar_position: 3
title: Nimbus
---

import NimbusExample from '@site/src/components/NimbusExample';
import NimbusPackages from '@site/src/components/NimbusPackages';
import NimbusTemplates from '@site/src/components/NimbusTemplates';

# Nimbus Design System

O [Nimbus](https://nimbus.nuvemshop.com.br) é o design system da Nuvemshop, projetado para elevar o comércio eletrônico na América Latina. Com componentes validados em produtos Nuvemshop, padrões e templates otimizados, documentação rica em exemplos e sincronização perfeita entre o UI kit e o código, o Nimbus capacita desenvolvedores e designers a criar soluções consistentes, acessíveis e de alto desempenho. Simplifique o desenvolvimento, mantenha a coesão visual e junte-se a nós no movimento para potencializar histórias de sucesso com o poder do **Nimbus**.

O painel de administração da Nuvemshop é o centro de operações onde os usuários gerenciam seus negócios. Os aplicativos nativos da Nuvemshop estão integrados a este admin, proporcionando uma sinergia perfeita com os fluxos de trabalho dos usuários. O admin da Nuvemshop oferece uma plataforma para que os aplicativos incorporados possam renderizar sua interface de usuário. No ambiente web, isso é alcançado por meio de um iframe. O **Nimbus** desempenha um papel fundamental na manutenção da coerência visual entre o painel de administração e os aplicativos nativos, garantindo uma experiência integrada e harmoniosa.

Dentro do contexto do aplicativo, incentivamos o uso do [Nimbus](https://nimbus.nuvemshop.com.br) para desenvolver experiências de usuário coesas e reconhecíveis. É importante que seu aplicativo incorpore e faça uso das [bibliotecas do Nimbus](./nimbus.md#principais-pacotes-do-nimbus), seguindo tanto as diretrizes de design de aplicativos quanto as diretrizes mais abrangentes do **Nimbus**. Isso garantirá a criação de experiências de usuário que sejam ao mesmo tempo familiares e consistentes.

## Principais pacotes do Nimbus

A seguir, apresentamos uma lista dos principais pacotes do Nimbus que podem ajudar a acelerar a sua criação de aplicativos:

<NimbusPackages />

## Templates

No Nimbus, oferecemos uma gama diversificada de templates pré-construídos que utilizam nossos componentes, como telas de login, tabelas e formulários. Esses modelos prontos para uso permitem criar com facilidade, aproveitando a eficiência e a consistência do design do Nimbus.

<NimbusTemplates />

## Configurando o Nimbus

1. Para esse exemplo vamos instalar apenas os pacotes essenciais do nimbus.

```bash
yarn add @nimbus-ds/styles @nimbus-ds/components
```

or

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
