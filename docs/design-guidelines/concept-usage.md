---
sidebar_position: 4
title: Conceitos de UX/UI
---

# Uso de conceitos de UX/UI

Os componentes Nimbus são elementos para criar interfaces personalizadas conforme necessário, quando não há um padrão disponível. Esses componentes mantêm a consistência com os produtos da Nuvemshop e suas interfaces existentes. É importante usar os componentes corretamente para garantir uma experiência de navegação mais fácil para os usuários da Nuvemshop.

[Consultar checklist de homologação](../homologation/checklist.md#uso-de-conceitos-de-uxui---prioridade-média)

## Priorização e organização de ações e conteúdos

### Priorização de ações

#### Ação primária

A ação primária é a principal tarefa da página. Deve existir apenas uma por instância. Para dar o devido destaque, ela deve ser representada por um componente [Button](https://nimbus.nuvemshop.com.br/documentation/atomic-components/button) na variante **primary**.

#### Ações secundárias

Ações secundárias são complementares à ação primária. Para destacá-las de forma diferente da ação primária, podemos utilizar o componente [Button](https://nimbus.nuvemshop.com.br/documentation/atomic-components/button) na variante **default**, um [Icon button](https://nimbus.tiendanube.com/documentation/atomic-components/icon-button) ou um [Link](https://nimbus.tiendanube.com/documentation/atomic-components/link).

### Posicionamento de ações

#### Ações de contexto geral

Ações de contexto geral são posicionadas no cabeçalho do padrão [Page](https://nimbus.tiendanube.com/documentation/patterns/page). Estas ações estão relacionadas a um contexto geral da tela, referindo-se a ações gerais. Elas são alinhadas à direita, distribuindo as mais importantes da direita para a esquerda.

#### Ações de contexto local

Ações de contexto local são posicionadas em um elemento específico, como um [Card](https://nimbus.tiendanube.com/documentation/composite-components/card). Elas estão relacionadas a um contexto específico de um determinado grupo de informações.

### Organização de conteúdos

#### Ordenamento

Os conteúdos devem ser organizados sempre por ordem de importância para o usuário. Os temas mais relacionados à função principal da página devem ser apresentados em primeiro lugar. É importante promover uma ordenação lógica dos elementos, contextualizando o usuário de forma gradativa e conectando temas relacionados.

#### Agrupamento

Sempre que possível, agrupamos temas relacionados em [cards](https://nimbus.tiendanube.com/documentation/composite-components/card). Dessa forma, ajudamos o usuário a compreender as divisões de temas e elementos na tela.

## Sinalização de status e padronização de elementos

Sempre que um elemento pode mudar de status ou quantidade por ação do usuário, devemos mostrar o status atual de forma clara e simples, usando poucas palavras e cores adequadas.

### Como representar status?

Temos dois tipos de representação de status: uma representa condições mutáveis e a outra está relacionada a quantidades de elementos.

#### Representando condições

No caso de diferentes tipos de condições de um objeto, utilizamos o componente [Tag](https://nimbus.tiendanube.com/documentation/atomic-components/tag) e suas respectivas variantes que estão documentadas no site do Nimbus.

#### Representando quantidades

No caso de quantidade de itens, utilizamos o componente [Badge](https://nimbus.tiendanube.com/documentation/atomic-components/badge) e suas respectivas variantes que estão documentadas no site do Nimbus.

### Como posicionar status?

#### Contexto global

Quando o status se referir a uma tela como um todo, devemos utilizar o posicionamento pré-determinado no cabeçalho do padrão [page](https://nimbus.tiendanube.com/documentation/patterns/page).

#### Contexto local

Quando o status se referir a um elemento específico, devemos levar em consideração a organização do componente no qual o status está inserido. No caso de [Cards](https://nimbus.tiendanube.com/documentation/composite-components/card) podemos utilizar a variante **default**.

## Mensagens de feedback e confirmações

Sempre que processamos alguma informação, devemos mostrar um feedback sobre a tarefa que acabou de ser executada.

### Tipos de feedback

Temos dois tipos de feedback: feedback de alerta e feedback informativo.

#### Feedback de alerta

Quando a notificação tem a função de alertar o usuário sobre um evento importante ou que requer uma ação para resolver um problema, para completar algum dado ou aguardar uma confirmação assíncrona, recomendamos o uso do componente [Alert](https://nimbus.tiendanube.com/documentation/composite-components/alert) e sua respectiva variante adequada ao contexto.

#### Feedback informativo

Quando a notificação tem um tom informacional, ou seja, apenas descreve que algo aconteceu ou está acontecendo, não requerendo uma ação imediata do usuário, recomendamos o uso do componente [Toast](https://nimbus.tiendanube.com/documentation/atomic-components/toast) e sua respectiva variante adequada ao contexto.

### Mensagens de confirmação

Durante a realização de ações destrutivas ou abandono de formulários, devemos alertar o usuário sobre os respectivos impactos utilizando o template [modal de confirmação](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic).

#### Exclusão de informações

Quando um usuário está excluindo qualquer tipo de informação, devemos alertá-lo de que essa ação não pode ser revertida.

#### Informações não salvas

Quando um usuário está saindo de uma tela de formulário onde informações não foram salvas, devemos alertá-lo de que ao realizar essa ação os dados do formulário serão perdidos.

## Processamento e carregamento de informação
Sempre que uma informação estiver sendo carregada ela deve ser representada de forma clara ao usuário, cada tipo de carregamento é representado de uma forma diferente.

### Carregamento de páginas
Sempre que as informações de uma página estão sendo carregadas utilizamos o [Skeleton](https://nimbus.tiendanube.com/documentation/atomic-components/skeleton) dos componentes para representá-las, dessa forma o usuário já pode ir se familiarizando com a estrutura de elementos que vamos mostrar, além de diminuir a sensação de tempo de carregamento.

### Carregamento contextual
Sempre que um processamento estiver vinculado a um elemento específico, onde não existe mudança de página, demonstramos usando um [Spinner](https://nimbus.tiendanube.com/documentation/atomic-components/spinner).

### Processamento de tarefas ou upload de arquivos
Sempre que uma tarefa ou upload de arquivos for o resultado de uma ação primária, ou seja existe mudança de página, demonstramos essa ação utilizando um [Toast Progress](https://nimbus.tiendanube.com/documentation/atomic-components/toast).

## Organização de dados em tabelas

### Quando usar tabelas?

Utilizamos o padrão [Data Table](https://nimbus.tiendanube.com/documentation/patterns/data-table) quando for necessário organizar uma grande quantidade de dados tabulares, utilizando linhas para organizar as entradas e colunas para categorizar os tipos de dados.

### Como priorizar dados em uma tabela?
Organizamos as colunas de acordo com ordem de importância das informações, ou seja, colunas com informações mais essenciais (Data, Nome, Número da ordem) posicionamos nas colunas da esquerda, já informações complementares (Produtos, Status, Ações) posicionamos nas colunas da direita.

### Agrupamento de ações
Sempre que houver mais de duas ações por linha da tabela é recomendado agrupar as ações usando um icon button com ícone ellipsis.

### Uso de ações massivas
Sempre que possível tecnicamente disponibilizamos ações massivas para mudança de status, exclusão ou qualquer outro tipo de tarefa que possa ser feita em todos os itens da tabela.

## Responsividade e alinhamento dos elementos

Para que seja possível utilizar o produto de diferentes tipos de resolução, devemos nos certificar que as telas desenhadas tenham uma experiência adequada, em diferentes tamanhos de tela.

### Resoluções comuns
O [padrão page](https://nimbus.tiendanube.com/documentation/patterns/page) possui por padrão largura de 100%, porém podemos configurar essa largura de acordo com o tipo de conteúdo. Para formulários utilizamos 800px de largura para compactar melhor as informações e a leitura do usuário, já para tabelas ou conteúdos de múltiplas colunas utilizamos 1200px. Essa resolução pode ser ajustada por meio de um string.

### Responsabilidade de componentes

#### Padrão page
Esse padrão no contexto mobile tem alguns comportamentos diferentes para abrir mais espaço para elementos essenciais, colapsando ações e ocultando alguns links.

#### Componente Table e padrão Data Table
Nesses dois casos por possuírem dados tabulares a sua utilização em contextos mobile não é recomendada, eles podem ser substituídos utilizando o componente [data list](https://nimbus.tiendanube.com/documentation/patterns/data-list) mantendo a mesma priorização de informações e as separando em linhas.

#### Sidebar
Esse [componente](https://nimbus.tiendanube.com/documentation/composite-components/sidebar) tem comportamento diferenciado no contexto mobile, ocupando toda a extensão da tela.

#### Grids e alinhamentos
É possível alinhar os elementos em diferentes tipos de composição e proporção usando o padrão [grid](https://nimbus.tiendanube.com/documentation/patterns/layout), em contextos mobile por default independente da largura das colunas os elementos devem se empilhar.

Por padrão todos os títulos, textos devem estar alinhados à esquerda, da mesma forma que botões são alinhados à direita, dentro de cards sempre alinhamos a esquerda.

## Organização e sinalização em formulários

#### Alinhando campos
Os campos sempre devem ser alinhados à esquerda, preferencialmente devem ter uma largura total ou combinada igual em todas as outras linhas.

#### Agrupando campos
Quando um formulário é muito longo, agrupamos os campos em diferentes cards para facilitar a visualização dos grupos de informação.

Quando temos campos com informações relacionadas é permitido agrupá-los na mesma linha de um formulário, recomendamos que no máximo 2 campos sejam agrupados para não existir uma sobrecarga de informações.

#### Dimensionando campos
Formulários devem utilizar o padrão [Page](https://nimbus.tiendanube.com/documentation/patterns/page) com largura de 800px, dessa forma é possível compactar melhor os campos facilitando sua leitura.

Os campos devem ter tamanhos condizentes com o tamanho das informações que são solicitadas, por exemplo, se solicitamos o CEP de um residência devemos dimensioná-los com uma largura compatível com o número de caracteres de um CEP.

### Como sinalizar campos em um formulário

#### Campos opcionais 
Sempre que houver campos opcionais eles devem ser sinalizados através da inclusão de um texto junto ao label "(Opcional)", se houver um grupo de campos opcionais podemos agrupá-los dentro de um card colapsável também sinalizado em seu título com "(Opcional)" e mantendo o fechado para atrair a atenção aos campos obrigatórios.

#### Validação de campos
**Sucesso** - Sempre que houver uma validação de campo em tempo real devemos sinalizar usando o padrão [Form Field](https://nimbus.tiendanube.com/documentation/patterns/form-field) em sua variante success.

**Erro** - Sempre que houver uma indicação de erro em tempo real ou após o envio de informações devemos sinalizar usando o padrão [Form Field](https://nimbus.tiendanube.com/documentation/patterns/form-field) em sua variante Danger junto a um texto curto explicativo sobre o que causou essa condição.

---

## Próximos passos

- Conheça os [conceitos de UX Writing](./ux-writing-usage.md)