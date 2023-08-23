---
sidebar_position: 4
title: Uso de conceitos de UX/UI
---

# Uso de Conceitos de UX/UI

Os componentes Nimbus são elementos para criar interfaces personalizadas conforme necessário, quando não há um padrão disponível. Esses componentes mantêm a consistência com os produtos da Nuvemshop e suas interfaces existentes. É importante usar os componentes corretamente para garantir uma experiência de navegação mais fácil para os usuários da Nuvemshop.

[Consultar checklist de homologação](../homologation/checklist.md)

---

## Priorização e Organização de Ações e Conteúdos - Ver Checklist

### Priorização de Ações

#### Ação Primária

A ação primária é a principal tarefa da página. Deve existir apenas uma por instância. Para dar o devido destaque, ela deve ser representada por um componente [`Button`](https://nimbus.nuvemshop.com.br/documentation/atomic-components/button) na variante `primary`.

#### Ações Secundárias

Ações secundárias são complementares à ação primária. Para destacá-las de forma diferente da ação primária, podemos utilizar o componente `Button` na variante `default`, um `Icon button` ou um `Link`.

### Posicionamento de Ações

#### Ações de Contexto Geral

Ações de contexto geral são posicionadas no cabeçalho do padrão `Page`. Estas ações estão relacionadas a um contexto geral da tela, referindo-se a ações gerais. Elas são alinhadas à direita, distribuindo as mais importantes da direita para a esquerda.

#### Ações de Contexto Local

Ações de contexto local são posicionadas em um elemento específico, como um `Card`. Elas estão relacionadas a um contexto específico de um determinado grupo de informações.

### Organização de Conteúdos

#### Ordenamento

Os conteúdos devem ser organizados sempre por ordem de importância para o usuário. Os temas mais relacionados à função principal da página devem ser apresentados em primeiro lugar. É importante promover uma ordenação lógica dos elementos, contextualizando o usuário de forma gradativa e conectando temas relacionados.

#### Agrupamento

Sempre que possível, agrupamos temas relacionados em cards. Dessa forma, ajudamos o usuário a compreender as divisões de temas e elementos na tela.

---

## Sinalização de Status e padronização de Elementos

Sempre que um elemento pode mudar de status ou quantidade por ação do usuário, devemos mostrar o status atual de forma clara e simples, usando poucas palavras e cores adequadas.

### Como Representar Status?

Temos dois tipos de representação de status: uma representa condições mutáveis e a outra está relacionada a quantidades de elementos.

#### Representando Condições

No caso de diferentes tipos de condições de um objeto, utilizamos o componente `Tag` e suas respectivas variantes que estão documentadas no site do Nimbus.

#### Representando Quantidades

No caso de quantidade de itens, utilizamos o componente `Badge` e suas respectivas variantes que estão documentadas no site do Nimbus.

### Como Posicionar Status?

#### Contexto Global

Quando o status se referir a uma tela como um todo, devemos utilizar o posicionamento pré-determinado no cabeçalho do padrão `page`.

#### Contexto Local

Quando o status se referir a um elemento específico, devemos levar em consideração a organização do componente no qual o status está inserido. No caso de `Cards`, podemos utilizar a variante Default.

---

## Mensagens de Feedback e Confirmações

Sempre que processamos alguma informação, devemos mostrar um feedback sobre a tarefa que acabou de ser executada.

### Tipos de Feedback

Temos dois tipos de feedback: feedback de alerta e feedback informativo.

#### Feedback de Alerta

Quando a notificação tem a função de alertar o usuário sobre um evento importante ou que requer uma ação para resolver um problema, para completar algum dado ou aguardar uma confirmação assíncrona, recomendamos o uso do componente `Alert` e sua respectiva variante adequada ao contexto.

#### Feedback Informativo

Quando a notificação tem um tom informacional, ou seja, apenas descreve que algo aconteceu ou está acontecendo, não requerendo uma ação imediata do usuário, recomendamos o uso do componente `Toast` e sua respectiva variante adequada ao contexto.

### Mensagens de Confirmação

Durante a realização de ações destrutivas ou abandono de formulários, devemos alertar o usuário sobre os respectivos impactos utilizando o template modal de confirmação.

#### Exclusão de Informações

Quando um usuário está excluindo qualquer tipo de informação, devemos alertá-lo de que essa ação não pode ser revertida.

#### Informações não Salvas

Quando um usuário está saindo de uma tela de formulário onde informações não foram salvas, devemos alertá-lo de que ao realizar essa ação os dados do formulário serão perdidos.

---

## Personalização e flexibilidade

### Overrides proibidos

A personalização dos componentes deve estar restrita às propriedades disponíveis no storybook e Ui kit, sendo vedada a prática de overrides. Se caso houver necessidade de modificação ou inclusão de propriedades, é necessário abrir uma discussão no repositório do Github.

### Construção de padrões
É permitido construir novas composições de componentes contanto que não exista nenhuma outro padrão que possa solucionar o desafio imposto. Para se certificar recomendamos a abertura de uma discussão no repositório do Github.

### Construção de componentes locais
Se caso os componentes não solucionarem as necessidades do produto, é possível desenhar um componente local, porém esse recurso deve ser usado com parcimônia. Para se certificar recomendamos a abertura de uma discussão no repositório do Github.
