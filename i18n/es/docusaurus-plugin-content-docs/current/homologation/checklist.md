---
sidebar_position: 6
title: Requisitos de Homologación
---

import { Tag, Card, Box, list } from '@nimbus-ds/components';

# Requisitos de Homologación

El propósito de este documento es hacer que los requisitos de construcción y homologación de diseño sean más transparentes. Estos requisitos se han categorizado según la urgencia y la obligatoriedad.

## Categorización de Urgencia

<Box display="flex" flexDirection="column" gap="4">
  <Card>
    <Card.Header><Tag appearance="danger">Alta Prioridad</Tag></Card.Header>
    <Card.Body>
        Los elementos marcados con esta etiqueta son temas de importancia primordial que deben recibir atención desde el principio. Si los elementos no cumplen con estos requisitos, la homologación puede ser rechazada.
    </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="warning">Prioridad Media</Tag></Card.Header>
    <Card.Body>
      Los elementos marcados con esta etiqueta son temas de prioridad secundaria que deben recibir atención durante el desarrollo. Si los elementos no cumplen con estos requisitos, la homologación puede ser detenida hasta que se aborden.
  </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="success">Baja Prioridad</Tag></Card.Header>
    <Card.Body>
      Los elementos marcados con esta etiqueta son temas de prioridad secundaria que deben recibir atención durante el desarrollo. Si los elementos no cumplen con estos requisitos, la homologación puede ser detenida hasta que se realicen ajustes.
    </Card.Body>
  </Card>
</Box>

## Categorización de Obligatoriedad

<Box display="flex" flexDirection="column" gap="4">
  <Card>
    <Card.Header><Tag appearance="primary">Obligatorio</Tag></Card.Header>
    <Card.Body>
      Todos los elementos marcados con esta etiqueta deben ser verificados e implementados, independientemente de la solución presentada.
    </Card.Body>
  </Card>
  <Card>
    <Card.Header><Tag appearance="neutral">Recomendado</Tag></Card.Header>
    <Card.Body>
      Todos los elementos marcados con esta etiqueta deben ser verificados y evaluados según la necesidad y el contexto en el que se encuentra la aplicación. Es decir, deben ser implementados si la aplicación presenta un caso de uso o un elemento similar.
    </Card.Body>
  </Card>
</Box>

## Uso de Plantillas Nimbus

<Tag appearance="danger">Alta Prioridad</Tag>
<br />

En este punto, debemos prestar atención al uso de las plantillas Nimbus con el fin de lograr una mayor coherencia visual con los productos de Tiendanube.

| Descripción                              | Enlace                                                                                        | Obligatoriedad                              |
| ---------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Página de estado vacío e inicial         | [Ver directrices](../design-guidelines/template-usage#página-de-estado-vacio-e-inicial)       | <Tag appearance="primary">Obligatorio</Tag> |
| Página de error                          | [Ver directrices](../design-guidelines/template-usage#página-de-error)                        | <Tag appearance="primary">Obligatorio</Tag> |
| Página de formularios                    | [Ver directrices](../design-guidelines/template-usage#página-de-formulario)                   | <Tag appearance="neutral">Recomendado</Tag> |
| Modal de confirmación                    | [Ver directrices](../design-guidelines/template-usage#modal-de-confirmación)                  | <Tag appearance="neutral">Recomendado</Tag> |
| Página de ajustes                        | [Ver directrices](../design-guidelines/template-usage#página-de-ajustes)                      | <Tag appearance="neutral">Recomendado</Tag> |
| Página de tabla simple                   | [Ver directrices](../design-guidelines/template-usage#página-de-tabla-de-simples)             | <Tag appearance="neutral">Recomendado</Tag> |
| Página de tabla de productos             | [Ver directrices](../design-guidelines/template-usage#página-de-tabla-de-produtos)            | <Tag appearance="neutral">Recomendado</Tag> |
| Límites de personalización de plantillas | [Ver directrices](../design-guidelines/template-usage#limites-de-personalização-de-templates) | <Tag appearance="primary">Obligatorio</Tag> |

## Uso de Componentes y Patrones

<Tag appearance="danger">Alta Prioridad</Tag>
<br />

En este punto, debemos prestar atención a la asignación de componentes y patrones según sus respectivas documentaciones.

| Descripción                               | Enlace                                                                                   | Obligatoriedad                              |
| ----------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------- |
| Componentes atómicos y compuestos         | [Ver directrices](../design-guidelines/component-usage#componentes-atômicos-e-compostos) | <Tag appearance="primary">Obligatorio</Tag> |
| Patrones de composición                   | [Ver directrices](../design-guidelines/component-usage#patterns-de-composição)           | <Tag appearance="neutral">Recomendado</Tag> |
| Componentes de formularios                | [Ver directrices](../design-guidelines/component-usage#componentes-de-formulários)       | <Tag appearance="neutral">Recomendado</Tag> |
| Límites de personalización y flexibilidad | [Ver directrices](../design-guidelines/component-usage#personalização-e-flexibilidade)   | <Tag appearance="primary">Obligatorio</Tag> |

## Uso de Conceptos de UX/UI

<Tag appearance="warning">Prioridad Media</Tag>
<br />

En este punto, debemos prestar atención a los comportamientos y la disposición de los elementos con el fin de lograr una mayor coherencia con los productos de Tiendanube.

| Descripción                                           | Enlace                                                                                                  | Obligatoriedad                              |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| Priorización y organización de acciones y contenidos  | [Ver directrices](../design-guidelines/concept-usage#priorização-e-organização-de-ações-e-conteúdos)    | <Tag appearance="primary">Obligatorio</Tag> |
| Señalización de estado y estandarización de elementos | [Ver directrices](../design-guidelines/concept-usage#sinalização-de-status-e-padronização-de-elementos) | <Tag appearance="neutral">Recomendado</Tag> |
| Mensajes de retroalimentación y confirmaciones        | [Ver directrices](../design-guidelines/concept-usage#mensagens-de-feedback-e-confirmações)              | <Tag appearance="neutral">Recomendado</Tag> |
| Procesamiento y carga de información                  | [Ver directrices](../design-guidelines/concept-usage#processamento-e-carregamento-de-informação)        | <Tag appearance="neutral">Recomendado</Tag> |
| Organización de datos en tablas                       | [Ver directrices](../design-guidelines/concept-usage#organização-de-dados-em-tabelas)                   | <Tag appearance="neutral">Recomendado</Tag> |
| Responsividad y alineamiento de elementos             | [Ver directrices](../design-guidelines/concept-usage#responsividade-e-alinhamento-dos-elementos)        | <Tag appearance="primary">Obligatorio</Tag> |
| Organización y señalización en formularios            | [Ver directrices](../design-guidelines/concept-usage#organização-e-sinalização-em-formulários)          | <Tag appearance="neutral">Recomendado</Tag> |

## Uso de Conceptos de UX Writing

<Tag appearance="success">Baja Prioridad</Tag>
<br />

En este punto, debemos prestar atención a los textos de las interfaces y sus respectivos elementos con el fin de lograr una mejor experiencia y comprensión del usuario.

| Descripción                              | Enlace                                                                                | Obligatoriedad                              |
| ---------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| Nomenclatura de aplicaciones y pantallas | [Ver directrices](../design-guidelines/ux-writing-usage#nomenclatura-de-apps-e-telas) | <Tag appearance="primary">Obligatorio</Tag> |
| Fundamentos de UX Writing                | [Ver directrices](../design-guidelines/ux-writing-usage#fundamentos-de-ux-writing)    | <Tag appearance="primary">Obligatorio</Tag> |
| Tono de voz de Tiendanube                 | [Ver directrices](../design-guidelines/ux-writing-usage#tom-de-voz-nuvemshop)         | <Tag appearance="primary">Obligatorio</Tag> |
| Patrones de texto                        | [Ver directrices](../design-guidelines/ux-writing-usage#padrões-de-texto)             | <Tag appearance="primary">Obligatorio</Tag> |
