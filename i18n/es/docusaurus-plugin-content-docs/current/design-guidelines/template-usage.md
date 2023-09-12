---
sidebar_position: 2
title: Uso de plantillas de diseño
---

# Uso de plantillas de diseño

Las plantillas de diseño de Nimbus son herramientas valiosas para garantizar la coherencia visual y una experiencia sólida en los productos de Tiendanube. Al utilizar estas plantillas, nuestro objetivo es asegurar una experiencia uniforme alineada con la interfaz del panel de administración de las tiendas de Tiendanube.

La priorización en la adopción de estos modelos es fundamental para mantener la identidad de la marca y facilitar el proceso de homologación.

[Consulte la checklist de homologación](../homologation/checklist#uso-de-templates-nimbus---prioridade-alta)

## Página de estado vacío e inicial

Los estados vacíos e iniciales representan un patrón diseñado para guiar a los usuarios en pantallas donde actualmente no hay información disponible. Hay dos variantes de este patrón, cada una adecuada para diferentes situaciones en las que la falta de información se debe a diferentes razones.

| Tipo de empty                                                                                                                                                                                    | Variante                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| **Estado vacío** - recomendado Se utiliza cuando una búsqueda o la carga de información no arroja resultados, ya sea por un fallo o debido a los criterios seleccionados en los filtros.         | [Con ícono](https://nimbus.tiendanube.com/documentation/patterns/empty-message)       |
| **Estado inicial** - recomendado Su uso se recomienda cuando una pantalla todavía no tiene información para mostrar debido a la falta de alguna configuración o interacciones de otros usuarios. | [Con ilustración](https://nimbus.tiendanube.com/documentation/patterns/empty-message) |

### Uso de ilustraciones

En la variante [Con ilustración](https://nimbus.tiendanube.com/documentation/patterns/empty-message), existe la posibilidad de incluir una ilustración para proporcionar una sensación más amigable. Para esto, disponemos de un [repositorio de ilustraciones](https://www.figma.com/file/Ed1Gl8an2iBqL2GXHJEK6Y/%E2%98%81%EF%B8%8F-Tiendanube-Illustrations-Repo?type=design&node-id=60-2&mode=design) que se pueden reutilizar en contextos similares.

### Acciones del mensaje vacío

En ambas variantes, es importante ofrecer acciones plausibles que ayuden al usuario a resolver el estado vacío. Esto puede incluir configuraciones, recarga de la página o enlaces de ayuda.

## Página de error

Una página de error es la interfaz que se muestra cuando ocurre un problema o error durante la interacción del usuario con una aplicación. Proporciona información sobre el error, si es posible, instrucciones para manejar la situación, botones para recargar y datos de contacto del soporte del partner.

Estas páginas son esenciales para mantener una experiencia consistente y minimizar la frustración del usuario ante fallas técnicas, delimitando la responsabilidad del error.

## Página de formulario

Un [template de página de formulario](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic) es una estructura predefinida que muestra cómo se deben organizar y mostrar diferentes tipos de información en un formulario a los usuarios. El objetivo de esta plantilla es proporcionar una experiencia consistente e intuitiva al completar información.

La plantilla del formulario incluye ejemplos para recibir los siguientes tipos de información:

| Nombre de la tarjeta         | Recomendación                                                        |
| ---------------------------- | -------------------------------------------------------------------- |
| Campos de texto              | Utilizado para recibir y validar texto corto o largo                 |
| Campos de carga de archivos  | Utilizado para recibir y validar archivos                            |
| Campo de URL                 | Utilizado para recibir y validar enlaces                             |
| Campos de precio             | Utilizado para recibir y validar información de precio               |
| Campos de stock              | Utilizado para recibir y validar información de stock                |
| Campos de peso y dimensiones | Utilizado para recibir y validar dimensiones y peso de los productos |
| Opciones múltiples           | Utilizado para recibir opciones de listas preestablecidas            |
| Categorías                   | Utilizado para recibir información personalizada                     |

## Modal de confirmación

Un [template de modal de confirmación](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic) es una ventana emergente que solicita al usuario una confirmación antes de realizar una acción crítica o irreversible. Por lo general, incluye un mensaje claro sobre los impactos de la acción y botones "Confirmar" y "Cancelar" para permitir que el usuario tome una decisión informada.

### Recomendación de uso

**Abandono de formulario**: Siempre que haya un formulario con información no guardada, debemos mostrar un modal para confirmar el abandono de la página y prevenir la pérdida accidental de información.

**Acciones destructivas**: Siempre que haya una acción destructiva, debemos advertir al usuario mediante un modal de confirmación, preguntando si realmente desea continuar con su acción.

## Página de configuración

Un [template de página de configuración](https://tiendanube.github.io/nimbus-patterns/index.html?path=/docs/templates-settingspage--docs) es una estructura diseñada para permitir que los usuarios personalicen y configuren diferentes aspectos de una aplicación según sus preferencias. Esta plantilla ofrece una interfaz donde los usuarios pueden explorar y modificar configuraciones, opciones y características del sistema de manera consistente con los productos Tiendanube.

La página de configuración incluye ejemplos para configurar los siguientes tipos de información:

| Tipo de configuración   | Recomendación                                            |
| ----------------------- | -------------------------------------------------------- |
| Casilla de verificación | Utilizado para seleccionar varias opciones               |
| Radio                   | Utilizado para seleccionar una única opción              |
| Tarjeta con interruptor | Utilizado para activar ajustes instantáneos              |
| Tarjeta plegable        | Utilizado para ocultar información de llenado opcional   |
| Ajustes adicionales     | Utilizado para llevar al usuario a otras configuraciones |
| Tarjeta con acción      | Utilizado para llevar al usuario a otras páginas         |

## Página de tabla simple

Un template de tabla simple es una estructura que permite la visualización organizada de información tabular, con filas y columnas que categorizan los datos de manera eficiente.

Este modelo se utiliza para análisis rápido e incluye típicamente encabezados de columna y funciones de ordenamiento, manteniendo un diseño minimalista para facilitar la legibilidad y centrarse en los datos esenciales.

### Orden de la información

El orden de la información debe mantenerse como se muestra en la plantilla, priorizando la información más básica a la izquierda y las acciones a la derecha.

## Página de tabla de productos

Un template de tabla de productos es una herramienta esencial para la visualización organizada de información de características y stock. Este modelo se utiliza para la edición rápida de datos e incluye encabezados de columna, entradas y estado, manteniendo la legibilidad y centrándose en los datos esenciales.

### Orden de la información

El orden de la información debe mantenerse como se muestra en la plantilla, priorizando la información más básica a la izquierda y las acciones a la derecha.

## Límites de personalización de plantillas

Se permite modificar el contenido de las plantillas siempre que se mantenga la lógica y orden de los elementos, considerando los casos de uso ya existentes en los productos Tiendanube y preservando la priorización de los datos y composiciones ya construidas.

### Construcción de nuevas composiciones

Si no existe un caso similar en la plantilla, la construcción de nuevas composiciones es libre, siempre y cuando se respeten las asignaciones de los componentes y patrones utilizados.

---

## Próximos pasos

- Explore [componentes y patrones](./component-usage.md)
