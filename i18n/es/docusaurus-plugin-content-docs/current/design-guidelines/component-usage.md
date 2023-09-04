---
sidebar_position: 3
title: Componentes y Patrones
---

# Uso de Componentes y Patrones

Los componentes de Nimbus son elementos que permiten crear interfaces personalizadas según sea necesario, y deben utilizarse cuando no exista un patrón o modelo que satisfaga el caso de uso. Al aplicar estos modelos, el objetivo es garantizar la cohesión con los productos de Nuvemshop y mantener la consistencia de uso con las interfaces existentes.

Prestar atención a las asignaciones de los componentes es crucial para preservar la consistencia de la experiencia, lo que facilita la navegación para los usuarios que ya están familiarizados con Nuvemshop.

[Consultar la lista de verificación de homologación](../homologation/checklist.md#uso-de-componentes-y-patrones---prioridad-alta)

## Componentes Atómicos y Compuestos

### Categorización de Componentes

- **Componentes Atómicos:** son elementos esenciales del sistema de diseño y no se pueden dividir.
- **Componentes Compuestos:** son composiciones de componentes atómicos.

### Asignación de Componentes

Cada componente se clasifica en una categoría de asignación, para mantener la coherencia de la experiencia entre diferentes aplicaciones y productos, es necesario seguir los usos descritos a continuación.

| Asignación                  | Componentes                                                         |
|-----------------------------|---------------------------------------------------------------------|
| Navegación/Acción           | [Botón](https://nimbus.tiendanube.com/documentation/atomic-components/button), [Botón de Icono](https://nimbus.tiendanube.com/documentation/atomic-components/icon-button), [Enlace](https://nimbus.tiendanube.com/documentation/atomic-components/link) y [Interruptor](https://nimbus.tiendanube.com/documentation/atomic-components/toggle).|
| Formularios                 | [Entrada](https://nimbus.tiendanube.com/documentation/atomic-components/input), [Área de Texto](https://nimbus.tiendanube.com/documentation/atomic-components/textarea), [Casilla de Verificación](https://nimbus.tiendanube.com/documentation/atomic-components/checkbox), [Radio](https://nimbus.tiendanube.com/documentation/atomic-components/radio), [Selección](https://nimbus.tiendanube.com/documentation/atomic-components/select) y [Cargador de Archivos](https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader).           |
| Organización                | [Caja](https://nimbus.tiendanube.com/documentation/atomic-components/box), [Chip](https://nimbus.tiendanube.com/documentation/atomic-components/chip), [Lista](https://nimbus.tiendanube.com/documentation/atomic-components/list), [Popover](https://nimbus.tiendanube.com/documentation/atomic-components/popover), [Tabla](https://nimbus.tiendanube.com/documentation/composite-components/table), [Acordeón](https://nimbus.tiendanube.com/documentation/composite-components/accordion), [Barra Lateral](https://nimbus.tiendanube.com/documentation/composite-components/sidebar), [Tarjeta](https://nimbus.tiendanube.com/documentation/composite-components/card), [Modal](https://nimbus.tiendanube.com/documentation/composite-components/modal), [Paginación](https://nimbus.tiendanube.com/documentation/composite-components/pagination) y [Pestañas](https://nimbus.tiendanube.com/documentation/composite-components/tabs). |
| Informativos/Decorativos    | [Título](https://nimbus.tiendanube.com/documentation/atomic-components/title), [Texto](https://nimbus.tiendanube.com/documentation/atomic-components/text), [Etiqueta](https://nimbus.tiendanube.com/documentation/atomic-components/label), [Distintivo](https://nimbus.tiendanube.com/documentation/atomic-components/badge), [Etiqueta](https://nimbus.tiendanube.com/documentation/atomic-components/tag), [Toast](https://nimbus.tiendanube.com/documentation/atomic-components/toast), [Alerta](https://nimbus.tiendanube.com/documentation/composite-components/alert), [Icono](https://nimbus.tiendanube.com/documentation/atomic-components/icon), [Miniatura](https://nimbus.tiendanube.com/documentation/atomic-components/thumbnail), [Información sobre herramientas](https://nimbus.tiendanube.com/documentation/atomic-components/tooltip), [Spinner](https://nimbus.tiendanube.com/documentation/atomic-components/spinner) y [Esqueleto](https://nimbus.tiendanube.com/documentation/atomic-components/skeleton). |

## Patrones de Composición

### ¿Qué son los patrones de Nimbus?

Nimbus tiene una variedad de patrones que básicamente reúnen componentes atómicos y compuestos combinados con las reglas de negocio de Nuvemshop. Estos recursos promueven una mayor consistencia y optimizan la construcción de productos nativos y de socios.

### ¿Cómo elegir los patrones adecuados?

Para comprender qué patrones debemos utilizar, es necesario analizar la experiencia que estamos diseñando y buscar aplicaciones similares dentro de la gama de casos de uso ya existentes.

A continuación, categorizamos los patrones por funcionalidades. Para obtener más información sobre sus asignaciones, recomendamos la lectura de su documentación.

| Funcionalidades          | Componentes                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| Organización de elementos | [Lista de Datos](https://nimbus.tiendanube.com/documentation/patterns/data-list), [Tabla de Datos](https://nimbus.tiendanube.com/documentation/patterns/data-table), [Actualizaciones de Productos](https://nimbus.tiendanube.com/documentation/patterns/product-updates), [Lista Interactiva](https://nimbus.tiendanube.com/documentation/patterns/interactive-list), [Modal Lateral](https://nimbus.tiendanube.com/documentation/patterns/side-modal), [Diseño](https://nimbus.tiendanube.com/documentation/patterns/layout), [Shell de Aplicación](https://nimbus.tiendanube.com/documentation/patterns/app-shell) y [Página](https://nimbus.tiendanube.com/documentation/patterns/page). |
| Interactivos              | [Tarjeta de Información](https://nimbus.tiendanube.com/documentation/patterns/callout-card), [Menú](https://nimbus.tiendanube.com/documentation/patterns/menu), [Botón de Menú](https://nimbus.tiendanube.com/documentation/patterns/menu-button), [Pestañas de Navegación](https://nimbus.tiendanube.com/documentation/patterns/nav-tabs), [Miniatura con Acción](https://nimbus.tiendanube.com/documentation/patterns/thumbnail-with-action) y [Campo de Formulario](https://nimbus.tiendanube.com/documentation/patterns/formfield).                  |
| Orientativos             | [Mensaje Vacío](https://nimbus.tiendanube.com/documentation/patterns/empty-message) y [Enlace de Ayuda](https://nimbus.tiendanube.com/documentation/patterns/help-link).                                                                      |

Límites de Personalización de Patrones
Con el objetivo de mantener la coherencia, que es el enfoque principal de este recurso, debemos cumplir con las limitaciones de personalización de propiedades, no incluyendo ni reorganizando elementos de manera arbitraria a través de anulaciones. En otras palabras, siempre debemos priorizar la consistencia con el resto de los productos y aplicaciones.

## Componentes de Formulario

Para recibir o enviar datos, debemos respetar las recomendaciones de uso según el tipo de información. A continuación, separamos los componentes de formulario y los tipos de información correspondientes que pueden enviar/recibir.

| Tipo de Información          | Componente     |
| --------------------------- | -------------- |
| Texto Corto                 | [Entrada](https://nimbus.tiendanube.com/documentation/atomic-components/input)                                                                                  |
| Texto Largo                 | [Área de Texto](https://nimbus.tiendanube.com/documentation/atomic-components/textarea)                                                                            |
| Selección Múltiple          | [Casilla de Verificación](https://nimbus.tiendanube.com/documentation/atomic-components/checkbox)                                                                            |
| Selección de Opción Única   | [Radio](https://nimbus.tiendanube.com/documentation/atomic-components/radio) y [Selección](https://nimbus.tiendanube.com/documentation/atomic-components/select) |
| Imagen y/o Archivos         | [Cargador de Archivos](https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader)  |

### Patrón de Campo de Formulario

Nimbus proporciona un patrón de Campo de Formulario que combina la Etiqueta y un Texto de Ayuda con los principales campos de formulario y sus respectivas apariencias, facilitando su implementación por parte de nuestros equipos y socios.

Especificación de Campos

**Etiquetas** - Los campos de un formulario deben estar claramente etiquetados, dejando en claro el tipo de información que esperamos recibir. Podemos hacerlo utilizando el componente Etiqueta.

**Texto de Ayuda** - Los campos también pueden estar acompañados de textos de ayuda, que guían a los usuarios para que ingresen información válida o para indicar campos que se han completado de manera incorrecta o incompleta.

**Apariencia** - Los componentes tienen estados estándar, de error, éxito y peligro para admitir validaciones, y deben señalarse siempre que ocurra una validación.

## Personalización y Flexibilidad

### Anulaciones Prohibidas

La personalización de los componentes debe estar limitada a las propiedades disponibles en Storybook y UI Kit, y está prohibida la práctica de anulaciones. Si es necesario realizar modificaciones o agregar propiedades, se debe abrir una discusión en el repositorio de Github.

### Creación de Patrones

Se permite la creación de nuevas composiciones de componentes, siempre que no exista otro patrón que pueda resolver el desafío. Para asegurarse, se recomienda abrir una discusión en el repositorio de Github.

### Creación de Componentes Locales

Si los componentes no satisfacen las necesidades del producto, es posible diseñar un componente local, pero este recurso debe usarse con moderación. Para asegurarse, se recomienda abrir una discusión en el repositorio de Github.

---

## Próximos Pasos

- Conoce los [Conceptos de Uso](./concept-usage.md)
