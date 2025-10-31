---
sidebar_position: 6
title: Design Requirements
---

import { Tag, Card, Box, list } from '@nimbus-ds/components';

# Design Requirements

The purpose of this document is to make construction and design homologation requirements more transparent. These requirements have been categorized by urgency and mandatory status.

## Urgency Categorization

<Box display="flex" flexDirection="column" gap="4">
  <Card>
    <Card.Header><Tag appearance="danger">High Priority</Tag></Card.Header>
    <Card.Body>
        Items marked with this tag are primary importance themes that must receive attention from the very beginning. If these items do not comply, homologation may be rejected.
    </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="warning">Medium Priority</Tag></Card.Header>
    <Card.Body>
      Items marked with this tag are secondary priority themes that should receive attention throughout development. If these items do not comply, homologation may be paused until they are addressed.
  </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="success">Low Priority</Tag></Card.Header>
    <Card.Body>
      Items marked with this tag are secondary priority themes that should receive attention throughout development. If these items do not comply, homologation may be paused until adjustments are made.
    </Card.Body>
  </Card>
</Box>

## Mandatory Categorization

<Box display="flex" flexDirection="column" gap="4">
  <Card>
    <Card.Header><Tag appearance="primary">Mandatory</Tag></Card.Header>
    <Card.Body>
      All items marked with this tag must be verified and implemented, regardless of the presented solution.
    </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="neutral">Recommended</Tag></Card.Header>
    <Card.Body>
      All items marked with this tag must be verified and evaluated, according to the need and context in which the application is placed. In other words, they must be implemented if the application presents a use case or similar element.
    </Card.Body>
  </Card>
</Box>

## Usage of Nimbus Templates

<Tag appearance="danger">High Priority</Tag>
<br />

In this item, we must pay attention to the use of Nimbus templates in order to achieve greater visual consistency with Nuvemshop products.

| Description                   | Link                                                                                         | Mandatory                                   |
| ----------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Empty and initial state page  | [See guidelines](../design-guidelines/template-usage#página-de-estado-vazio-e-inicial)       | <Tag appearance="primary">Mandatory</Tag>   |
| Error page                    | [See guidelines](../design-guidelines/template-usage#página-de-error)                        | <Tag appearance="primary">Mandatory</Tag>   |
| Forms page                    | [See guidelines](../design-guidelines/template-usage#página-de-formulário)                   | <Tag appearance="neutral">Recommended</Tag> |
| Confirmation modal            | [See guidelines](../design-guidelines/template-usage#modal-de-confirmación)                  | <Tag appearance="neutral">Recommended</Tag> |
| Settings page                 | [See guidelines](../design-guidelines/template-usage#página-de-ajustes)                      | <Tag appearance="neutral">Recommended</Tag> |
| Simple table page             | [See guidelines](../design-guidelines/template-usage#página-de-tabla-de-simples)             | <Tag appearance="neutral">Recommended</Tag> |
| Product table page            | [See guidelines](../design-guidelines/template-usage#página-de-tabla-de-produtos)            | <Tag appearance="neutral">Recommended</Tag> |
| Template customization limits | [See guidelines](../design-guidelines/template-usage#limites-de-personalização-de-templates) | <Tag appearance="primary">Mandatory</Tag>   |

## Usage of Components and Patterns

<Tag appearance="danger">High Priority</Tag>
<br />

In this item, we must pay attention to the assignment of components and patterns according to their respective documentation.

| Description                          | Link                                                                                    | Mandatory                                   |
| ------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------- |
| Atomic and composite components      | [See guidelines](../design-guidelines/component-usage#componentes-atômicos-e-compostos) | <Tag appearance="primary">Mandatory</Tag>   |
| Composition patterns                 | [See guidelines](../design-guidelines/component-usage#patterns-de-composição)           | <Tag appearance="neutral">Recommended</Tag> |
| Form components                      | [See guidelines](../design-guidelines/component-usage#componentes-de-formulários)       | <Tag appearance="neutral">Recommended</Tag> |
| Customization and flexibility limits | [See guidelines](../design-guidelines/component-usage#personalização-e-flexibilidade)   | <Tag appearance="primary">Mandatory</Tag>   |

## Usage of UX/UI Concepts

<Tag appearance="warning">Medium Priority</Tag>
<br />

In this item, we must pay attention to behaviors and element arrangement to achieve greater consistency with Nuvemshop products.

| Description                                             | Link                                                                                                   | Mandatory                                   |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| Prioritization and organization of actions and contents | [See guidelines](../design-guidelines/concept-usage#priorização-e-organização-de-ações-e-conteúdos)    | <Tag appearance="primary">Mandatory</Tag>   |
| Status signaling and standardization of elements        | [See guidelines](../design-guidelines/concept-usage#sinalização-de-status-e-padronização-de-elementos) | <Tag appearance="neutral">Recommended</Tag> |
| Feedback messages and confirmations                     | [See guidelines](../design-guidelines/concept-usage#mensagens-de-feedback-e-confirmações)              | <Tag appearance="neutral">Recommended</Tag> |
| Information processing and loading                      | [See guidelines](../design-guidelines/concept-usage#processamento-e-carregamento-de-informação)        | <Tag appearance="neutral">Recommended</Tag> |
| Data organization in tables                             | [See guidelines](../design-guidelines/concept-usage#organização-de-dados-em-tabelas)                   | <Tag appearance="neutral">Recommended</Tag> |
| Responsiveness and element alignment                    | [See guidelines](../design-guidelines/concept-usage#responsividade-e-alinhamento-dos-elementos)        | <Tag appearance="primary">Mandatory</Tag>   |
| Organization and signaling in forms                     | [See guidelines](../design-guidelines/concept-usage#organização-e-sinalização-em-formulários)          | <Tag appearance="neutral">Recommended</Tag> |

## Usage of UX Writing Concepts

<Tag appearance="success">Low Priority</Tag>
<br />

In this item, we must pay attention to the text in interfaces and their respective elements in order to provide a better user experience and understanding.

| Description                        | Link                                                                                 | Mandatory                                 |
| ---------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------- |
| Naming of applications and screens | [See guidelines](../design-guidelines/ux-writing-usage#nomenclatura-de-apps-e-telas) | <Tag appearance="primary">Mandatory</Tag> |
| UX Writing Fundamentals            | [See guidelines](../design-guidelines/ux-writing-usage#fundamentos-de-ux-writing)    | <Tag appearance="primary">Mandatory</Tag> |
| Nuvemshop's Tone of Voice          | [See guidelines](../design-guidelines/ux-writing-usage#tom-de-voz-nuvemshop)         | <Tag appearance="primary">Mandatory</Tag> |
| Text Patterns                      | [See guidelines](../design-guidelines/ux-writing-usage#padrões-de-texto)             | <Tag appearance="primary">Mandatory</Tag> |