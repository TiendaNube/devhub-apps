---
sidebar_position: 2
---

import { Tag, Card, Box, list } from '@nimbus-ds/components';

# Design Checklist

## Checklist de Homologação de Design

O objetivo desse documento é tornar os requisitos de construção e homologação de design mais transparentes. Esses requisitos foram categorizados por urgência e obrigatoriedade.

### Categorização de Urgência

<Box display="flex" flexDirection="column" gap="4">
  <Card>
    <Card.Header><Tag appearance="danger">Prioridade Alta</Tag></Card.Header>
    <Card.Body>
        Itens marcados com essa tag são temas de importância primária, que devem ter a atenção desde o primeiro momento. Se os itens não estiverem de acordo, a homologação pode ser recusada.
    </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="warning">Prioridade Média</Tag></Card.Header>
    <Card.Body>
      Itens marcados com essa tag são temas de prioridade secundária, que devem ter a atenção ao longo do desenvolvimento. Se os itens não estiverem de acordo, a homologação pode ser pausada até que os itens sejam contemplados.
  </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="success">Prioridade Baixa</Tag></Card.Header>
    <Card.Body>
      Itens marcados com essa tag são temas de prioridade secundária, que devem ter a atenção ao longo do desenvolvimento. Se os itens não estiverem de acordo, a homologação pode ser pausada até que ajustes sejam feitos.
    </Card.Body>
  </Card>
</Box>

### Categorização de Obrigatoriedade

<Box display="flex" flexDirection="column" gap="4">
  <Card>
    <Card.Header><Tag appearance="primary">Obrigatório</Tag></Card.Header>
    <Card.Body>
      Todos os itens marcados com essa tag devem ser verificados e contemplados, não importa qual seja a solução apresentada.
    </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="neutral">Recomendado</Tag></Card.Header>
    <Card.Body>
      Todos os itens marcados com essa tag devem ser verificados e avaliados, segundo a necessidade e contexto em que o aplicativo está inserido. Ou seja, deve ser contemplado se o aplicativo apresentar caso de uso ou elemento similar.
    </Card.Body>
  </Card>
</Box>


### Uso de Templates Nimbus - Prioridade Alta

Nesse item devemos nos atentar ao uso de templates Nimbus, visando atingir uma maior consistência visual com os produtos Nuvemshop.

| Descrição                              | Link                                              | Prioridade                                  |
| -------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Página de Estado Vazio                 | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
| Página de Erro                         | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
| Página de Formulários                  | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Página de Ajustes                      | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Modal de Confirmação                   | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Página de Tabela Simples               | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Página de Tabela de Produtos           | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Limites de Personalização de Templates | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |

### Uso de Componentes e Patterns - Prioridade Alta

Nesse item devemos nos atentar à atribuição dos componentes e padrões segundo suas respectivas documentações.

| Descrição                                 | Link                                              | Prioridade                                  |
| ----------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Componentes Atômicos e Compostos          | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
| Padrões de Composição                     | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Componentes de Formulários                | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Limites de Personalização e Flexibilidade | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |

### Uso de Conceitos de UX/UI - Prioridade Média

Nesse item devemos nos atentar aos comportamentos e disposição de elementos, visando atingir uma maior consistência com os produtos Nuvemshop.

| Descrição                                         | Link                                              | Prioridade                                  |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Priorização e Organização de Ações e Conteúdos    | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
| Sinalização de Status e Padronização de Elementos | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Mensagens de Feedback e Confirmações              | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Processamento e Carregamento de Informação        | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Organização de Dados em Tabelas                   | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |
| Responsividade e Alinhamento dos Elementos        | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
| Organização e Sinalização em Formulários          | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="neutral">Recomendado</Tag> |

### Uso de Conceitos de UX Writing - Prioridade Baixa

| Descrição                    | Link                                              | Prioridade                                  |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Nomenclatura de Apps e Telas | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
| Fundamentos de UX Writing    | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
| Tom de Voz Nuvemshop         | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
| Padrões de Texto             | [Ver Guideline](../design-guidelines/overview.md) | <Tag appearance="primary">Obrigatório</Tag> |
