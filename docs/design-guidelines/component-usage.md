---
sidebar_position: 3
title: Componentes e patterns
---

# Uso de componentes e patterns

Os componentes Nimbus são elementos que possibilitam criar interfaces personalizadas de acordo com a necessidade, devendo ser usados quando não houver um padrão ou modelo que atenda ao caso de uso. Ao aplicar esses modelos, o objetivo é garantir a coesão com os produtos da Nuvemshop e manter consistência de uso com as interfaces já existentes.

A atenção às atribuições dos componentes é crucial para preservar a consistência da experiência, tornando a navegação mais fácil para usuários já familiarizados com a Nuvemshop.

[Consultar checklist de homologação](../homologation/checklist.md#uso-de-componentes-e-patterns---prioridade-alta)

## Componentes atômicos e compostos

### Categorização de componentes

- **Componentes atômicos:** são elementos essenciais do design system e indivisíveis.
- **Componentes compostos:** são composições de componentes atômicos.

### Atribuição dos componentes

Cada componente se enquadra em uma categoria de atribuição, para que se mantenha uma consistência de experiência entre diferentes aplicativos e produtos é necessário seguir os usos descritos abaixo.

| Atribuição                  | Componentes                                                         |
|-----------------------------|---------------------------------------------------------------------|
| Navegação/Ação              | [Button](https://nimbus.tiendanube.com/documentation/atomic-components/button), [Icon button](https://nimbus.tiendanube.com/documentation/atomic-components/icon-button), [Link](https://nimbus.tiendanube.com/documentation/atomic-components/link) e [Toggle](https://nimbus.tiendanube.com/documentation/atomic-components/toggle).|
| Formulários                 | [Input](https://nimbus.tiendanube.com/documentation/atomic-components/input), [Textarea](https://nimbus.tiendanube.com/documentation/atomic-components/textarea), [Checkbox](https://nimbus.tiendanube.com/documentation/atomic-components/checkbox), [Radio](https://nimbus.tiendanube.com/documentation/atomic-components/radio), [Select](https://nimbus.tiendanube.com/documentation/atomic-components/select) e [File Uploader](https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader).           |
| Organização                 | [Box](https://nimbus.tiendanube.com/documentation/atomic-components/box), [Chip](https://nimbus.tiendanube.com/documentation/atomic-components/chip), [List](https://nimbus.tiendanube.com/documentation/atomic-components/list), [Popover](https://nimbus.tiendanube.com/documentation/atomic-components/popover), [Table](https://nimbus.tiendanube.com/documentation/composite-components/table), [Accordion](https://nimbus.tiendanube.com/documentation/composite-components/accordion), [Sidebar](https://nimbus.tiendanube.com/documentation/composite-components/sidebar), [Card](https://nimbus.tiendanube.com/documentation/composite-components/card), [Modal](https://nimbus.tiendanube.com/documentation/composite-components/modal), [Pagination](https://nimbus.tiendanube.com/documentation/composite-components/pagination) e [Tabs](https://nimbus.tiendanube.com/documentation/composite-components/tabs). |
| Informativos/Decorativos    | [Title](https://nimbus.tiendanube.com/documentation/atomic-components/title), [Text](https://nimbus.tiendanube.com/documentation/atomic-components/text), [Label](https://nimbus.tiendanube.com/documentation/atomic-components/label), [Badge](https://nimbus.tiendanube.com/documentation/atomic-components/badge), [Tag](https://nimbus.tiendanube.com/documentation/atomic-components/tag), [Toast](https://nimbus.tiendanube.com/documentation/atomic-components/toast), [Alert](https://nimbus.tiendanube.com/documentation/composite-components/alert), [Icon](https://nimbus.tiendanube.com/documentation/atomic-components/icon), [Thumbnail](https://nimbus.tiendanube.com/documentation/atomic-components/thumbnail), [Tooltip](https://nimbus.tiendanube.com/documentation/atomic-components/tooltip), [Spinner](https://nimbus.tiendanube.com/documentation/atomic-components/spinner) e [Skeleton](https://nimbus.tiendanube.com/documentation/atomic-components/skeleton). |


## Patterns de composição

### O que são os patterns do Nimbus?

O Nimbus possui uma variedade de patterns, que basicamente reúnem componentes atômicos e compostos combinados com as regras de negócio da Nuvemshop, esses recursos promovem uma maior consistência e otimizam a construção de produtos nativos e de parceiros.

### Como escolher os patterns adequados?

Para entender quais patterns devemos utilizar é necessário analisar a experiência que estamos projetando e buscar aplicações similares dentro da gama de casos de uso já existentes.

Abaixo categorizamos os patterns por funcionalidades, para conhecer mais sobre suas atribuições recomendamos a leitura da sua documentação.

| Funcionalidades          | Componentes                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| Organização de elementos | [Data List](https://nimbus.tiendanube.com/documentation/patterns/data-list), [Data Table](https://nimbus.tiendanube.com/documentation/patterns/data-table), [Product Updates](https://nimbus.tiendanube.com/documentation/patterns/product-updates), [Interactive List](https://nimbus.tiendanube.com/documentation/patterns/interactive-list), [Side Modal](https://nimbus.tiendanube.com/documentation/patterns/side-modal), [Layout](https://nimbus.tiendanube.com/documentation/patterns/layout), [App Shell](https://nimbus.tiendanube.com/documentation/patterns/app-shell) e [Page](https://nimbus.tiendanube.com/documentation/patterns/page). |
| Interativos              | [Callout Card](https://nimbus.tiendanube.com/documentation/patterns/callout-card), [Menu](https://nimbus.tiendanube.com/documentation/patterns/menu), [Menu Button](https://nimbus.tiendanube.com/documentation/patterns/menu-button), [Nav Tabs](https://nimbus.tiendanube.com/documentation/patterns/nav-tabs), [Thumbnail with action](https://nimbus.tiendanube.com/documentation/patterns/thumbnail-with-action) e [Form Field](https://nimbus.tiendanube.com/documentation/patterns/formfield).                  |
| Orientativos             | [Empty Message](https://nimbus.tiendanube.com/documentation/patterns/empty-message) e [Help Link](https://nimbus.tiendanube.com/documentation/patterns/help-link).                                                                      |

Limites de personalização de patterns
Com objetivo de manter a consistência que é o foco principal desse recurso, devemos nos ater às limitações de personalização de propriedades, não incluindo ou re-ordenando elementos de forma arbitrária por meio de overrides, ou seja devemos sempre prezar pela consistência com o restante dos produtos e aplicativos.

## Componentes de formulários

Para receber ou enviar dados devemos, respeitando as recomendações de uso de acordo com o tipo de informação. Abaixo separamos os componentes de formulário e os respectivos tipos de informação que eles podem enviar/receber.

| Tipo de informação          | Componente     |
| --------------------------- | -------------- |
| Texto curto                 | [Input](https://nimbus.tiendanube.com/documentation/atomic-components/input)                                                                                  |
| Texto longo                 | [Textarea](https://nimbus.tiendanube.com/documentation/atomic-components/textarea)                                                                            |
| Seleção de múltipla escolha | [Checkbox](https://nimbus.tiendanube.com/documentation/atomic-components/checkbox)                                                                            |
| Seleção de opção única      | [Radio](https://nimbus.tiendanube.com/documentation/atomic-components/radio) e [Select](https://nimbus.tiendanube.com/documentation/atomic-components/select) |
| Imagem e/ou arquivos        | [File Uploader](https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader)  |


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

---

## Próximos passos

- Conheça os [conceitos de uso](./concept-usage.md)
