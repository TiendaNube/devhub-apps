---
sidebar_position: 2
title: Componentes e patterns
---

# Uso de componentes e patterns

Os componentes Nimbus são elementos que possibilitam criar interfaces personalizadas de acordo com a necessidade, devendo ser usados quando não houver um padrão ou modelo que atenda ao caso de uso. Ao aplicar esses modelos, o objetivo é garantir a coesão com os produtos da Nuvemshop e manter consistência de uso com as interfaces já existentes.

A atenção às atribuições dos componentes é crucial para preservar a consistência da experiência, tornando a navegação mais fácil para usuários já familiarizados com a Nuvemshop.

[Consultar checklist de homologação](../homologation/checklist.md#uso-de-componentes-e-patterns---prioridade-alta)

## Componentes atômicos e compostos

### Categorização de componentes

Componentes atômicos: são elementos essenciais do design system e indivisíveis.
Componentes compostos: são composições de componentes atômicos.

### Atribuição dos componentes

Cada componente se enquadra em uma categoria de atribuição, para que se mantenha uma consistência de experiência entre diferentes aplicativos e produtos é necessário seguir os usos descritos abaixo.

| Atribuição               | Componentes                                                                                                                                                                                                                                                                                                                            |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navegação/Ação           | [Button](https://nimbus.tiendanube.com/documentation/atomic-components/button), [Icon Button](https://nimbus.tiendanube.com/documentation/atomic-components/icon-button), [Link](https://nimbus.tiendanube.com/documentation/atomic-components/link) e [Toggle](https://nimbus.tiendanube.com/documentation/atomic-components/toggle). |
| Formulários              | [Input](https://nimbus.tiendanube.com/documentation/atomic-components/input), Textarea, Checkbox, Radio, Select e File Uploader.                                                                                                                                                                                                       |
| Organização              | Box, Chip, List, Popover, Table, Accordion, Sidebar, Card, Modal, Pagination e Tabs.                                                                                                                                                                                                                                                   |
| Informativos/Decorativos | Title, Text, Label, Badge, Tag, Toast, Alert, Icon, Thumbnail, Tooltip, Spinner e Skeleton.                                                                                                                                                                                                                                            |

## patterns de composição

### O que são os patterns do Nimbus?

O Nimbus possui uma variedade de patterns, que basicamente reúnem componentes atômicos e compostos combinados com as regras de negócio da Nuvemshop, esses recursos promovem uma maior consistência e otimizam a construção de produtos nativos e de parceiros.

### Como escolher os patterns adequados?

Para entender quais patterns devemos utilizar é necessário analisar a experiência que estamos projetando e buscar aplicações similares dentro da gama de casos de uso já existentes.

Abaixo categorizamos os patterns por funcionalidades, para conhecer mais sobre suas atribuições recomendamos a leitura da sua documentação.

| Funcionalidades          | Componentes                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| Organização de elementos | Data List, Data Table, Product Updates, Interactive List, Side Modal, Layout, App Shell e Page. |
| Interativos              | Callout Card, Menu, Menu Button, Nav Tabs, Thumbnail with action e Form Field.                  |
| Orientativos             | Empty Message e Help Link.                                                                      |

Limites de personalização de patterns
Com objetivo de manter a consistência que é o foco principal desse recurso, devemos nos ater às limitações de personalização de propriedades, não incluindo ou re-ordenando elementos de forma arbitrária por meio de overrides, ou seja devemos sempre prezar pela consistência com o restante dos produtos e aplicativos.

## Componentes de formulários

Para receber ou enviar dados devemos, respeitando as recomendações de uso de acordo com o tipo de informação. Abaixo separamos os componentes de formulário e os respectivos tipos de informação que eles podem enviar/receber.

| Componente     | Tipo de informação          |
| -------------- | --------------------------- |
| Input          | Texto curto                 |
| Textarea       | Texto longo                 |
| Checkbox       | Seleção de múltipla escolha |
| Radio e Select | Seleção de opção única      |
| File Uploader  | Imagem e/ou arquivos        |

### Padrão form field

O Nimbus disponibiliza um padrão Form Field que une o Label e um Helper Text com os principais campos de formulário e suas respectivas aparências, facilitando assim sua implementação por parte dos nossos times e parceiros.

### Especificação de campos

**Rótulos** - Os campos de um formulário devem ser sinalizados de forma clara, deixando evidente o tipo de informação que esperamos receber, podemos fazer isso usando o componente Label.

**Texto de ajuda** - Os campos também podem ser sinalizados com textos de ajuda, guiando os usuários a inserirem informações válidas ou também para indicarem campos que foram preenchidos de forma incorreta ou incompleta.

**Aparência** - Os componentes possuem status padrão, de erro, sucesso e de perigo para suportarem as validações, devendo ser sinalizados sempre que uma validação ocorrer.

## Personalização e flexibilidade

### Overrides proibidos

A personalização dos componentes deve estar restrita às propriedades disponíveis no storybook e Ui kit, sendo vedada a prática de overrides. Se caso houver necessidade de modificação ou inclusão de propriedades, é necessário abrir uma discussão no repositório do Github.

### Construção de patterns

É permitido construir novas composições de componentes contanto que não exista nenhuma outro padrão que possa solucionar o desafio imposto. Para se certificar recomendamos a abertura de uma discussão no repositório do Github.

### Construção de componentes locais

Se caso os componentes não solucionarem as necessidades do produto, é possível desenhar um componente local, porém esse recurso deve ser usado com parcimônia. Para se certificar recomendamos a abertura de uma discussão no repositório do Github.
