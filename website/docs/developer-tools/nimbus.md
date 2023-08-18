---
sidebar_position: 3
title: Nimbus
---

import Example from '@site/src/components/NimbusExample';

# Nimbus Design System

O [Nimbus](https://nimbus.nuvemshop.com.br) é o design system da Nuvemshop, projetado para elevar o comércio eletrônico na América Latina. Com componentes validados em produtos Nuvemshop, padrões e templates otimizados, documentação rica em exemplos e sincronização perfeita entre o UI kit e o código, o Nimbus capacita desenvolvedores e designers a criar soluções consistentes, acessíveis e de alto desempenho. Simplifique o desenvolvimento, mantenha a coesão visual e junte-se a nós no movimento para potencializar histórias de sucesso com o poder do Nimbus.

O admin da Nuvemshop é o centro de operações onde os usuários gerenciam seus negócios. Os apps nativos da Nuvemshop estão integrados a este admin, proporcionando uma sinergia perfeita com os fluxos de trabalho dos usuários. O admin da Nuvemshop oferece uma plataforma para que os aplicativos incorporados possam renderizar sua interface de usuário. No ambiente web, isso é alcançado por meio de um iframe. O Nimbus desempenha um papel fundamental na manutenção da coerência visual entre o admin e os apps nativos, garantindo uma experiência integrada e harmoniosa.

**Imagem**

Dentro do contexto do aplicativo, incentivamos o uso do [Nimbus](https://nimbus.nuvemshop.com.br) para desenvolver experiências de usuário coesas e reconhecíveis. É importante que seu aplicativo incorpore e faça uso das [bibliotecas do Nimbus](https://nimbus.nuvemshop.com.br/documentation/overview/getting-started), seguindo tanto as Diretrizes de Design de Aplicativos quanto as Diretrizes mais abrangentes do Nimbus. Isso garantirá a criação de experiências de usuário que sejam ao mesmo tempo familiares e consistentes.

---

## Principais pacotes do Nimbus

A seguir, apresentamos uma lista dos principais pacotes do Nimbus que podem ajudar a acelerar a sua criação de aplicativos:

- [**@nimbus-ds/styles**](https://www.npmjs.com/package/@nimbus-ds/styles): o pacote essencial que fornece variáveis e estilos necessários para o funcionamento dos componentes.
- [**@nimbus-ds/components**](https://www.npmjs.com/package/@nimbus-ds/components): o pacote que reúne uma coleção de componentes atômicos e compostos, essenciais para a construção no Nimbus. De botões a inputs e checkboxes, esses blocos de construção formam a base do design de interface, permitindo a criação de componentes mais complexos e reutilizáveis.
- [**@nimbus-ds/patterns**](https://www.npmjs.com/package/@nimbus-ds/patterns): o conjunto central de padrões pré-construídos que oferece combinações inteligentes de componentes atômicos e compostos no Nimbus. Essas soluções pré-definidas, testadas e validadas pela equipe, resolvem desafios de design e interação com eficácia, promovendo uma abordagem coesa e consistente para implementar soluções de design.
- [**@nimbus-ds/tokens**](https://www.npmjs.com/package/@nimbus-ds/tokens): os design tokens representam as variáveis fundamentais usadas para manter a coerência em um sistema de design. No contexto do Nimbus, eles abrangem elementos como cores, tipografias e espaçamentos essenciais. Esses tokens são a base para garantir uma aparência e sensação uniformes em todos os componentes e aplicações.
- [**@nimbus-ds/icons**](https://www.npmjs.com/package/@nimbus-ds/icons): um conjunto de ícones open-source exclusivamente criados para o Nimbus, moldados a partir da morfologia do nosso logotipo de marca. Projetados para agilizar o design e desenvolvimento, esses ícones oferecem flexibilidade, localização e gratuidade, enriquecendo as soluções de quem deseja impulsionar histórias na América Latina.

---

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

<Example />

---

## Templates

No Nimbus, oferecemos uma gama diversificada de templates pré-construídos que utilizam nossos componentes, como telas de login, tabelas e formulários. Esses modelos prontos para uso permitem criar com facilidade, aproveitando a eficiência e a consistência do design do Nimbus.

1. [**Tela de Ajustes**](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-settingspage--basic): controles interativos e componentes para manipulação de estados agrupados.
2. [**Modal de Confirmação**](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic): Aberto para confirmar ações destrutivas.
3. [**Página de Formulário**](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic): Inclui diversos componentes de entrada de dados para uma variedade de opções.
4. [**Modelo de Página Básico**](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-page--basic): Exemplo completo com todos os elementos possíveis em uma página.
5. [**Tela de Login**](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-login--basic): Modelo para autenticação em aplicativos externos.
6. [**Página de Lista Simples**](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-simplelist--basic): Exibe uma lista de dados com texto e ações.
7. [**Página de Lista de Produtos**](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-productlist--basic): Simula a lista de produtos do administrador Nuvemshop.

---

## Próximos passos

- Saiba mais sobre a [Nimbus](https://nimbus.nuvemshop.com.br)
- Saiba mais sobre o [Nexo](./nexo)
