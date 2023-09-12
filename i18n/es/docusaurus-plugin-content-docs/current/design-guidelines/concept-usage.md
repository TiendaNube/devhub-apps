---
sidebar_position: 4
title: Conceptos de UX/UI
---

# Uso de conceptos de UX/UI

Los componentes Nimbus son elementos para crear interfaces personalizadas según sea necesario, cuando no hay un estándar disponible. Estos componentes mantienen la consistencia con los productos de Tiendanube y sus interfaces existentes. Es importante usar los componentes correctamente para garantizar una experiencia de navegación más fácil para los usuarios de Tiendanube.

[Consultar checklist de homologación](../homologation/checklist.md#uso-de-conceptos-de-uxui---prioridad-media)

## Priorización y organización de acciones y contenido

### Priorización de acciones

#### Acción principal

La acción principal es la tarea principal de la página. Debe haber solo una por instancia. Para darle el debido énfasis, debe representarse con un componente [Button](https://nimbus.tiendanube.com/documentation/atomic-components/button) en la variante **primary**.

#### Acciones secundarias

Las acciones secundarias son complementarias a la acción principal. Para resaltarlas de manera diferente a la acción principal, podemos utilizar el componente [Button](https://nimbus.tiendanube.com/documentation/atomic-components/button) en la variante **default**, un [Icon button](https://nimbus.tiendanube.com/documentation/atomic-components/icon-button) o un [Link](https://nimbus.tiendanube.com/documentation/atomic-components/link).

### Posicionamiento de acciones

#### Acciones de contexto general

Las acciones de contexto general se colocan en el encabezado del patrón [Page](https://nimbus.tiendanube.com/documentation/patterns/page). Estas acciones están relacionadas con un contexto general de la pantalla, haciendo referencia a acciones generales. Se alinean a la derecha, distribuyendo las más importantes de derecha a izquierda.

#### Acciones de contexto local

Las acciones de contexto local se colocan en un elemento específico, como un [Card](https://nimbus.tiendanube.com/documentation/composite-components/card). Están relacionadas con un contexto específico de un grupo de información determinado.

### Organización de contenidos

#### Ordenación

Los contenidos siempre deben organizarse por orden de importancia para el usuario. Los temas más relacionados con la función principal de la página deben presentarse primero. Es importante promover una ordenación lógica de los elementos, contextualizando gradualmente al usuario y conectando temas relacionados.

#### Agrupación

Siempre que sea posible, agrupamos temas relacionados en [tarjetas](https://nimbus.tiendanube.com/documentation/composite-components/card). De esta manera, ayudamos al usuario a comprender las divisiones de temas y elementos en la pantalla.

## Señalización de estado y estandarización de elementos

Siempre que un elemento pueda cambiar de estado o cantidad por acción del usuario, debemos mostrar el estado actual de manera clara y sencilla, utilizando pocas palabras y colores apropiados.

### ¿Cómo representar el estado?

Tenemos dos tipos de representación de estado: uno representa condiciones cambiantes y el otro está relacionado con la cantidad de elementos.

#### Representación de condiciones

En el caso de diferentes tipos de condiciones de un objeto, utilizamos el componente [Tag](https://nimbus.tiendanube.com/documentation/atomic-components/tag) y sus respectivas variantes que están documentadas en el sitio web de Nimbus.

#### Representación de cantidades

En el caso de la cantidad de elementos, utilizamos el componente [Badge](https://nimbus.tiendanube.com/documentation/atomic-components/badge) y sus respectivas variantes que están documentadas en el sitio web de Nimbus.

### ¿Cómo posicionar el estado?

#### Contexto global

Cuando el estado se refiere a una pantalla en su conjunto, debemos utilizar la posición predeterminada en el encabezado del patrón [page](https://nimbus.tiendanube.com/documentation/patterns/page).

#### Contexto local

Cuando el estado se refiere a un elemento específico, debemos tener en cuenta la organización del componente en el que se encuentra el estado. En el caso de [Cards](https://nimbus.tiendanube.com/documentation/composite-components/card), podemos utilizar la variante **default**.

## Mensajes de retroalimentación y confirmaciones

Siempre que procesamos información, debemos mostrar una retroalimentación sobre la tarea que acaba de ejecutarse.

### Tipos de retroalimentación

Tenemos dos tipos de retroalimentación: retroalimentación de alerta y retroalimentación informativa.

#### Retroalimentación de alerta

Cuando la notificación tiene la función de alertar al usuario sobre un evento importante o que requiere una acción para resolver un problema, para completar algún dato o esperar una confirmación asíncrona, recomendamos el uso del componente [Alert](https://nimbus.tiendanube.com/documentation/composite-components/alert) y su respectiva variante adecuada al contexto.

#### Retroalimentación informativa

Cuando la notificación tiene un tono informativo, es decir, solo describe que algo ha sucedido o está sucediendo, no requiere una acción inmediata del usuario, recomendamos el uso del componente [Toast](https://nimbus.tiendanube.com/documentation/atomic-components/toast) y su respectiva variante adecuada al contexto.

### Mensajes de confirmación

Durante la realización de acciones destructivas o abandono de formularios, debemos alertar al usuario sobre los respectivos impactos utilizando la plantilla [modal de confirmación](https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic).

#### Eliminación de información

Cuando un usuario está eliminando cualquier tipo de información, debemos advertirle que esta acción no se puede deshacer.

#### Información no guardada

Cuando un usuario está saliendo de una pantalla de formulario donde no se han guardado la información, debemos advertirle que al realizar esta acción, los datos del formulario se perderán.

## Procesamiento y carga de información

Siempre que se cargue información, debe representarse de manera clara para el usuario, cada tipo de carga se representa de manera diferente.

### Carga de páginas

Siempre que se cargue la información de una página, utilizamos el [Skeleton](https://nimbus.tiendanube.com/documentation/atomic-components/skeleton) de los componentes para representarla. De esta manera, el usuario puede familiarizarse con la estructura de elementos que mostraremos y reducir la sensación de tiempo de carga.

### Carga contextual

Siempre que un procesamiento esté vinculado a un elemento específico, donde no haya cambio de página, lo mostramos utilizando un [Spinner](https://nimbus.tiendanube.com/documentation/atomic-components/spinner).

### Procesamiento de tareas o carga de archivos

Siempre que una tarea o carga de archivos sea el resultado de una acción principal, es decir, haya un cambio de página, mostramos esta acción utilizando un [Toast Progress](https://nimbus.tiendanube.com/documentation/atomic-components/toast).

## Organización de datos en tablas

### ¿Cuándo usar tablas?

Utilizamos el patrón [Data Table](https://nimbus.tiendanube.com/documentation/patterns/data-table) cuando sea necesario organizar una gran cantidad de datos tabulares, utilizando filas para organizar las entradas y columnas para categorizar los tipos de datos.

### ¿Cómo priorizar datos en una tabla?

Organizamos las columnas según el orden de importancia de la información, es decir, colocamos las columnas con información más esencial (Fecha, Nombre, Número de pedido) en las columnas de la izquierda, mientras que la información complementaria (Productos, Estado, Acciones) la colocamos en las columnas de la derecha.

### Agrupación de acciones

Siempre que haya más de dos acciones por fila de la tabla, se recomienda agrupar las acciones utilizando un botón de icono con un icono de puntos suspensivos.

### Uso de acciones masivas

Siempre que sea técnicamente posible, proporcionamos acciones masivas para cambiar el estado, eliminar o realizar cualquier otro tipo de tarea que se pueda realizar en todos los elementos de la tabla.

## Responsividad y alineación de elementos

Para poder utilizar el producto en diferentes tipos de resoluciones, debemos asegurarnos de que las pantallas diseñadas tengan una experiencia adecuada en diferentes tamaños de pantalla.

### Resoluciones comunes

El [patrón de página](https://nimbus.tiendanube.com/documentation/patterns/page) tiene un ancho predeterminado del 100%, pero podemos configurar este ancho según el tipo de contenido. Para formularios, utilizamos un ancho de 800 px para compactar mejor la información y facilitar la lectura del usuario, mientras que para tablas o contenido de múltiples columnas, utilizamos 1200 px. Esta resolución se puede ajustar mediante una cadena.

### Responsabilidad de componentes

#### Patrón de página

Este patrón en el contexto móvil tiene algunos comportamientos diferentes para abrir más espacio para elementos esenciales, colapsando acciones y ocultando algunos enlaces.

#### Componente Tabla y patrón Data Table

En estos dos casos, debido a que contienen datos tabulares, su uso en contextos móviles no se recomienda. Pueden ser reemplazados utilizando el componente [data list](https://nimbus.tiendanube.com/documentation/patterns/data-list) manteniendo la misma priorización de información y separándola en filas.

#### Barra lateral

Este [componente](https://nimbus.tiendanube.com/documentation/composite-components/sidebar) tiene un comportamiento diferente en el contexto móvil, ocupando toda la extensión de la pantalla.

#### Rejillas y alineaciones

Es posible alinear los elementos en diferentes tipos de composición y proporción utilizando el patrón [grid](https://nimbus.tiendanube.com/documentation/patterns/layout); en contextos móviles, por defecto, independientemente del ancho de las columnas, los elementos deben apilarse.

Por defecto, todos los títulos y textos deben estar alineados a la izquierda, de la misma manera que los botones se alinean a la derecha; dentro de las tarjetas, siempre alineamos a la izquierda.

## Organización y señalización en formularios

#### Alineación de campos

Los campos siempre deben estar alineados a la izquierda; preferiblemente, deben tener un ancho total o combinado igual en todas las demás filas.

#### Agrupación de campos

Cuando un formulario es muy largo, agrupamos los campos en diferentes tarjetas para facilitar la visualización de los grupos de información.

Cuando tenemos campos con información relacionada, se permite agruparlos en la misma línea de un formulario; recomendamos que se agrupen como máximo 2 campos para evitar una sobrecarga de información.

#### Dimensionamiento de campos

Los formularios deben utilizar el patrón [Page](https://nimbus.tiendanube.com/documentation/patterns/page) con un ancho de 800 px; de esta manera, los campos se pueden compactar mejor, facilitando su lectura.

Los campos deben tener tamaños acordes al tamaño de la información que se solicita; por ejemplo, si solicitamos el código postal de una residencia, debemos dimensionarlos con un ancho compatible con el número de caracteres de un código postal.

### Cómo señalar campos en un formulario

#### Campos opcionales

Siempre que haya campos opcionales, deben señalizarse mediante la inclusión de un texto junto a la etiqueta "(Opcional)"; si hay un grupo de campos opcionales, podemos agruparlos dentro de una tarjeta plegable, también señalizada en su título con "(Opcional)" y mantenerla cerrada para llamar la atención sobre los campos obligatorios.

#### Validación de campos

**Éxito** - Siempre que haya una validación de campo en tiempo real, debemos señalizarla utilizando el patrón [Form Field](https://nimbus.tiendanube.com/documentation/patterns/form-field) en su variante de éxito.

**Error** - Siempre que haya una indicación de error en tiempo real o después del envío de información, debemos señalizarla utilizando el patrón [Form Field](https://nimbus.tiendanube.com/documentation/patterns/form-field) en su variante de peligro, junto con un texto breve explicativo sobre lo que causó esta condición.

---

## Próximos pasos

- Conozca los [conceptos de UX Writing](./ux-writing-usage.md)
