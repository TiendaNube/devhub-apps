---
sidebar_position: 2
title: Templates de design
---

# Uso de templates de design

Os templates Nimbus são ferramentas valiosas para garantir consistência visual e uma experiência sólida nos produtos da Nuvemshop. Ao utilizar esses templates, nosso objetivo é assegurar uma experiência uniforme alinhada com a interface do painel administrativo das lojas da Nuvemshop.

A priorização na adoção desses modelos é fundamental para manter a identidade da marca e facilitar o processo de homologação.

[Consultar checklist de homologação](../publication-apps/checklist#uso-de-templates-nimbus---prioridade-alta)

## Página de estado vazio e inicial

Os estados vazios e iniciais representam um padrão projetado para orientar os usuários em telas onde não há informações disponíveis no momento. Existem duas variantes desse padrão, cada uma apropriada para diferentes situações em que a ausência de informações é motivada por diferentes razões.

| Tipo de empty         | Variante
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Empty state** - recomendado Utilizado quando uma pesquisa ou o carregamento de informações não retorna resultados, seja por uma falha ou por conta dos critérios selecionados em filtros. | [With Icon](https://nimbus.tiendanube.com/documentation/patterns/empty-message) |
| **Initial state** - recomendado Seu uso é recomendado quando uma tela ainda não tem informações a serem mostradas por conta da ausência de alguma configuração ou de interações de outros usuários. | [With Illustration](https://nimbus.tiendanube.com/documentation/patterns/empty-message) |

### Uso de ilustrações

Na variante [With Illustration](https://nimbus.tiendanube.com/documentation/patterns/empty-message), existe a possibilidade de incluir uma ilustração para proporcionar uma sensação mais amigável. Para isso, dispomos de um [repositório de ilustrações](https://www.figma.com/file/Ed1Gl8an2iBqL2GXHJEK6Y/%E2%98%81%EF%B8%8F-Tiendanube-Illustrations-Repo?type=design&node-id=60-2&mode=design) que podem ser reaproveitadas em contextos semelhantes.

### Ações do empty message

Em ambas as variantes, é importante oferecer ações plausíveis que auxiliem o usuário a resolver o estado vazio. Isso pode incluir configurações, recarregamento da página ou links de ajuda.

## Página de erro

Uma página de erro é a interface exibida quando ocorre um problema ou erro durante a interação do usuário com um aplicativo. Ela fornece informações sobre o erro se possível, instruções para lidar com a situação, botões de carregar e contato do suporte dos parceiros.

Essas páginas são essenciais para manter uma experiência consistente e minimizar a frustração do usuário diante de falhas técnicas, delimitando a responsabilidade do erro.

## Página de formulário

Um [template de página de formulário](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic) é uma estrutura pré definida que demonstra como os diferentes tipos de informações em um formulário devem ser organizadas e exibidas aos usuários. Esse template tem como objetivo proporcionar uma experiência consistente e intuitiva ao preencher informações.

O template de formulário inclui exemplos para receber os seguintes tipos de informações:

| Nome do card                   | Recomendação   
|--------------------------------|-------------------------------------------------------------------------
| Inputs de texto                | Usado para receber e validar texto curto ou longo    
| Inputs para carga de archivos  | Usado para receber e validar arquivos                
| Input de URL                   | Usado para receber e validar links                   
| Inputs de precio               | Usado para receber e validar informações de preço    
| Inputs de stock                | Usado para receber e validar informações de estoque  
| Inputs de peso y dimensiones   | Usado para receber e validar dimensões e peso dos produtos
| Opciones múltiples             | Usado para receber opções de listas pré-estabelecidas 
| Categorías                     | Usado para receber informações personalizadas         


## Modal de confirmação

Um [template de modal de confirmação](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic) é uma janela pop-up que solicita ao usuário uma confirmação antes de realizar uma ação crítica ou irreversível. Geralmente inclui uma mensagem clara sobre os impactos da ação e botões "Confirmar" e "Cancelar" para permitir que o usuário tome uma decisão informada.

### Recomendação de uso

**Abandono de formulário** - Sempre que houver um formulário com informações não salvas devemos mostrar um modal para confirmar o abandono de página e prevenir a perda acidental de informações.

**Ações destrutivas** - Sempre que houver uma ação destrutiva devemos prevenir o usuário por meio de um modal de confirmação, perguntando se o usuário deseja realmente prosseguir com sua ação.

## Página de ajustes

Um [template de página de ajustes](https://tiendanube.github.io/nimbus-patterns/index.html?path=/docs/templates-settingspage--docs) é uma estrutura projetada para permitir que os usuários personalizem e configurem diferentes aspectos de um aplicativo de acordo com suas preferências. Esse modelo oferece uma interface onde os usuários podem explorar e modificar configurações, opções e características do sistema de maneira consistente com produtos Nuvemshop.

A página de ajuste inclui exemplos para configurar os seguintes tipos de informações:

| Tipo de configuração  | Recomendação                                      
|-----------------------|---------------------------------------------------------------------------
| Checkbox              | Usado para selecionar várias opções
| Radio                 | Usado para selecionar uma única opção
| Card com toggle       | Usado para ativar ajustes instantâneos
| Card colapsável       | Usado para ocultar informação de preenchimento opcional
| Ajustes adicionais    | Usado para levar o usuário a outras configurações
| Card com ação         | Usado para levar o usuário a outras páginas


## Página de tabela de simples

Um template de tabela simples é uma estrutura que permite a exibição organizada de informações tabulares, com linhas e colunas categorizando dados de forma eficiente.

Esse modelo é usado para análise rápida, geralmente inclui cabeçalhos de coluna e recursos de classificação, mantendo um design minimalista para facilitar a legibilidade e focar nos dados essenciais.

### Ordenação das informações

A ordenação das informações das informações deve ser mantida como no template, priorizando as informações mais básicas à esquerda e as ações à direita.

## Página de tabela de produtos

Um template de tabela de produtos é uma ferramenta essencial para a exibição organizada de informações de características e estoque. Esse modelo é usado para edição rápida de dados, incluindo cabeçalhos de coluna, inputs e status, mantendo a legibilidade e foco nos dados essenciais.

### Ordenação das informações

A ordenação das informações das informações deve ser mantida como no template, priorizando as informações mais básicas à esquerda e as ações a direita.

## Limites de personalização de templates

É permitido modificar os conteúdos dos templates contanto que a lógica e ordenação dos elementos seja mantida, considerando os casos de uso já existentes em produtos Nuvemshop e preservando a priorização dos dados e composições já construídas.

### Construção de novas composições

Se caso não houver um caso similar no template a construção de novas composições é livre, contanto que sejam respeitadas as atribuições dos componentes e padrões utilizados.

---

## Próximos passos

- Conheça os [componentes e patterns](./component-usage.md)