---
sidebar_position: 2
title: Requisitos de design
---

import { Tag, Card, Box, list } from '@nimbus-ds/components';

# Requisitos de design

O objetivo desse documento é tornar os requisitos de construção e homologação de design mais transparentes. Esses requisitos foram categorizados por urgência e obrigatoriedade.

## Categorização de Urgência

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

## Categorização de Obrigatoriedade

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


## Uso de Templates Nimbus <Tag appearance="danger">Prioridade alta</Tag>

Nesse item devemos nos atentar ao uso de templates Nimbus, visando atingir uma maior consistência visual com os produtos Nuvemshop.

| Descrição                              | Link                                              | Obrigatoriedade                             |
| -------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Página de estado vazio e inicial       | [Ver Guideline](../design-guidelines/template-usage#página-de-estado-vazio-e-inicial) | <Tag appearance="primary">Obrigatório</Tag> |
| Página de erro                         | [Ver Guideline](../design-guidelines/template-usage#página-de-erro) | <Tag appearance="primary">Obrigatório</Tag> |
| Página de formulários                  | [Ver Guideline](../design-guidelines/template-usage#página-de-formulário) | <Tag appearance="neutral">Recomendado</Tag> |
| Modal de confirmação                   | [Ver Guideline](../design-guidelines/template-usage#modal-de-confirmação) | <Tag appearance="neutral">Recomendado</Tag> |
| Página de ajustes                      | [Ver Guideline](../design-guidelines/template-usage#página-de-ajustes) | <Tag appearance="neutral">Recomendado</Tag> |
| Página de tabela simples               | [Ver Guideline](../design-guidelines/template-usage#página-de-tabela-de-simples) | <Tag appearance="neutral">Recomendado</Tag> |
| Página de tabela de produtos           | [Ver Guideline](../design-guidelines/template-usage#página-de-tabela-de-produtos) | <Tag appearance="neutral">Recomendado</Tag> |
| Limites de personalização de templates | [Ver Guideline](../design-guidelines/template-usage#limites-de-personalização-de-templates) | <Tag appearance="primary">Obrigatório</Tag> |

## Uso de Componentes e Patterns <Tag appearance="danger">Prioridade alta</Tag>

Nesse item devemos nos atentar à atribuição dos componentes e padrões segundo suas respectivas documentações.

| Descrição                                 | Link                                              | Obrigatoriedade                             |
| ----------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Componentes atômicos e compostos          | [Ver Guideline](../design-guidelines/component-usage#componentes-atômicos-e-compostos) | <Tag appearance="primary">Obrigatório</Tag> |
| Patterns de composição                     | [Ver Guideline](../design-guidelines/component-usage#patterns-de-composição) | <Tag appearance="neutral">Recomendado</Tag> |
| Componentes de formulários                | [Ver Guideline](../design-guidelines/component-usage#componentes-de-formulários) | <Tag appearance="neutral">Recomendado</Tag> |
| Limites de personalização e flexibilidade | [Ver Guideline](../design-guidelines/component-usage#personalização-e-flexibilidade) | <Tag appearance="primary">Obrigatório</Tag> |

## Uso de Conceitos de UX/UI <Tag appearance="warning">Prioridade média</Tag>

Nesse item devemos nos atentar aos comportamentos e disposição de elementos, visando atingir uma maior consistência com os produtos Nuvemshop.

| Descrição                                         | Link                                              | Obrigatoriedade                             |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Priorização e organização de ações e conteúdos    | [Ver Guideline](../design-guidelines/concept-usage#priorização-e-organização-de-ações-e-conteúdos) | <Tag appearance="primary">Obrigatório</Tag> |
| Sinalização de status e padronização de elementos | [Ver Guideline](../design-guidelines/concept-usage#sinalização-de-status-e-padronização-de-elementos) | <Tag appearance="neutral">Recomendado</Tag> |
| Mensagens de feedback e confirmações              | [Ver Guideline](../design-guidelines/concept-usage#mensagens-de-feedback-e-confirmações) | <Tag appearance="neutral">Recomendado</Tag> |
| Processamento e carregamento de informação        | [Ver Guideline](../design-guidelines/concept-usage#overview) | <Tag appearance="neutral">Recomendado</Tag> |
| Organização de dados em tabelas                   | [Ver Guideline](../design-guidelines/concept-usage#overview) | <Tag appearance="neutral">Recomendado</Tag> |
| Responsividade e alinhamento dos elementos        | [Ver Guideline](../design-guidelines/concept-usage#overview) | <Tag appearance="primary">Obrigatório</Tag> |
| Organização e sinalização em formulários          | [Ver Guideline](../design-guidelines/concept-usage#personalização-e-flexibilidade) | <Tag appearance="neutral">Recomendado</Tag> |

## Uso de Conceitos de UX Writing <Tag appearance="success">Prioridade baixa</Tag>

Nesse item devemos nos atentar aos textos das interfaces e seus respectivos elementos, visando atingir uma melhor experiência e compreensão do usuário.

| Descrição                    | Link                                              | Obrigatoriedade                             |
| ---------------------------- | ------------------------------------------------- | ------------------------------------------- |
| Nomenclatura de apps e telas | [Ver Guideline](../design-guidelines/ux-writing-usage#nomenclatura-de-apps-e-telas) | <Tag appearance="primary">Obrigatório</Tag> |
| Fundamentos de UX Writing    | [Ver Guideline](../design-guidelines/ux-writing-usage#fundamentos-de-ux-writing) | <Tag appearance="primary">Obrigatório</Tag> |
| Tom de voz nuvemshop         | [Ver Guideline](../design-guidelines/ux-writing-usage#tom-de-voz-nuvemshop) | <Tag appearance="primary">Obrigatório</Tag> |
| Padrões de texto             | [Ver Guideline](../design-guidelines/ux-writing-usage#padrões-de-texto) | <Tag appearance="primary">Obrigatório</Tag> |
