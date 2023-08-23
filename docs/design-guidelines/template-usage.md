---
sidebar_position: 2
title: Templates de design
---

# Uso de templates de design

Os templates Nimbus são ferramentas valiosas para garantir consistência visual e uma experiência sólida nos produtos da Nuvemshop. Ao utilizar esses templates, nosso objetivo é assegurar uma experiência uniforme alinhada com a interface do painel administrativo das lojas da Nuvemshop.

A priorização na adoção desses modelos é fundamental para manter a identidade da marca e facilitar um processo de homologação mais eficiente, promovendo uma interface mais consistente e intuitiva.

[Consultar checklist de homologação](../homologation/checklist#10-uso-de-templates-nimbus---prioridade-alta)

---

## Escolha de Templates

Para escolher os templates adequados, é importante considerar a atribuição da tela em construção. Oferecemos sete modelos baseados no administrador de lojas, prontos para serem aplicados em aplicativos:

- [Página de estado vazio](../design-guidelines/template-usage#p%C3%A1gina-de-estado-vazio-e-inicial)
- [Página de erro](../design-guidelines/template-usage#página-de-erro)
- [Página de formulário](../design-guidelines/template-usage#página-de-formulário)
- [Modal de confirmação](../design-guidelines/template-usage#modal-de-confirmação)
- [Página de ajustes](../design-guidelines/template-usage#página-de-ajustes)
- [Página de tabela simples](../design-guidelines/template-usage#página-de-tabela-de-simples)
- [Página de tabela de produtos](../design-guidelines/template-usage#página-de-tabela-de-produtos)

---

## Página de Estado Vazio e Inicial

Os estados vazios e iniciais representam um padrão projetado para orientar os usuários em telas onde não há informações disponíveis no momento. Existem duas variantes desse padrão, cada uma apropriada para diferentes situações em que a ausência de informações é motivada por diferentes razões.

TABELA                                                                                   |

### Uso de ilustrações
Na variante [With Illustration](https://nimbus.tiendanube.com/documentation/patterns/empty-message), existe a possibilidade de incluir uma ilustração para proporcionar uma sensação mais amigável. Para isso, dispomos de um [repositório de ilustrações](https://www.figma.com/file/Ed1Gl8an2iBqL2GXHJEK6Y/%E2%98%81%EF%B8%8F-Tiendanube-Illustrations-Repo?type=design&node-id=60-2&mode=design) que podem ser reaproveitadas em contextos semelhantes.

### Ações do empty message 
Em ambas as variantes, é importante oferecer ações plausíveis que auxiliem o usuário a resolver o estado vazio. Isso pode incluir configurações, recarregamento da página ou links de ajuda.

---

## Página de erro

Uma página de erro é a interface exibida quando ocorre um problema ou erro durante a interação do usuário com um aplicativo. Ela fornece informações sobre o erro se possível, instruções para lidar com a situação, botões de carregar e contato do suporte dos parceiros.

Essas páginas são essenciais para manter uma experiência consistente e minimizar a frustração do usuário diante de falhas técnicas, delimitando a responsabilidade do erro.

TABELA

---

## Página de formulário

Um [template de página de formulário](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic) é uma estrutura pré definida que demonstra como os diferentes tipos de informações em um formulário devem ser organizadas e exibidas aos usuários. Esse template tem como objetivo proporcionar uma experiência consistente e intuitiva ao preencher informações. 

O template de formulário inclui exemplos para receber os seguintes tipos de informações:

TABELA

---

## Modal de confirmação

Um [template de modal de confirmação](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic) é uma janela pop-up que solicita ao usuário uma confirmação antes de realizar uma ação crítica ou irreversível. Geralmente inclui uma mensagem clara sobre os impactos da ação e botões "Confirmar" e "Cancelar" para permitir que o usuário tome uma decisão informada.

### Recomendação de uso
Abandono de formulário - Sempre que houver um formulário com informações não salvas devemos mostrar um modal para confirmar o abandono de página e prevenir a perda acidental de informações.

Ações destrutivas - Sempre que houver uma ação destrutiva devemos prevenir o usuário por meio de um modal de confirmação, perguntando se o usuário deseja realmente prosseguir com sua ação.

TABELA

---

## Página de ajustes

Um [template de página de ajustes](https://tiendanube.github.io/nimbus-patterns/index.html?path=/docs/templates-settingspage--docs) é uma estrutura projetada para permitir que os usuários personalizem e configurem diferentes aspectos de um aplicativo de acordo com suas preferências. Esse modelo oferece uma interface onde os usuários podem explorar e modificar configurações, opções e características do sistema de maneira consistente com produtos Nuvemshop.

A página de ajuste inclui exemplos para configurar os seguintes tipos de informações:

TABELA

--- 

## Página de tabela de simples 

Um template de tabela simples é uma estrutura que permite a exibição organizada de informações tabulares, com linhas e colunas categorizando dados de forma eficiente. 

Esse modelo é usado para análise rápida, geralmente inclui cabeçalhos de coluna e recursos de classificação, mantendo um design minimalista para facilitar a legibilidade e focar nos dados essenciais.

### Ordenação das informações

A ordenação das informações das informações deve ser mantida como no template, priorizando as informações mais básicas à esquerda e as ações à direita.

---

## Página de tabela de produtos

Um template de tabela de produtos é uma ferramenta essencial para a exibição organizada de informações de características e estoque. Esse modelo é usado para edição rápida de dados, incluindo cabeçalhos de coluna, inputs e status, mantendo a legibilidade e foco nos dados essenciais.

### Ordenação das informações

A ordenação das informações das informações deve ser mantida como no template, priorizando as informações mais básicas à esquerda e as ações a direita.

---

## Limites de personalização de templates

É permitido modificar os conteúdos dos templates contanto que a lógica e ordenação dos elementos seja mantida, considerando os casos de uso já existentes em produtos Nuvemshop e  preservando a priorização dos dados e composições já construídas. 

### Construção de novas composições

Se caso não houver um caso similar no template a construção de novas composições é livre, contanto que sejam respeitadas as atribuições dos componentes e padrões utilizados.
