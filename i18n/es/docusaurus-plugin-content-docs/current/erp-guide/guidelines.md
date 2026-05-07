---
sidebar_position: 2
title: Buenas Prácticas
---


- ### Pautas posteriores a la instalación

La experiencia posterior a la instalación es determinante para la retención del merchant. En soluciones complejas como los ERPs, la claridad en los primeros pasos es indispensable.

La redirección debe ser fluida, eliminando fricciones para los usuarios que exploran la herramienta por primera vez.

Para las aplicaciones que requieren una configuración guiada o contacto comercial, asegúrese de que la página de destino contenga:

- ❖ **Onboarding Inmediato:** Tras la instalación, dirija al usuario a una Landing Page intuitiva.
- ❖ **Soporte Asistido:** Si el modelo exige contacto directo, la pantalla de destino debe ser objetiva, presentando el paso a paso para el registro o la generación de credenciales.
- ❖ **Guía de Integración:** Instrucciones visuales y claras hasta la conclusión de la configuración final.

Recomendamos la lectura de nuestra [guía sobre Landing Page](https://dev.nuvemshop.com.br/docs/applications/landing-page) y comprender su importancia.

- ### Adaptación MultiCD

Es de suma importancia que la aplicación esté adaptada a [MultiCD](https://tiendanube.github.io/api-documentation/multi-inventory-guides) y consumiendo las APIs, esto garantizará el uso de múltiples centros de distribución.

Dar soporte a inventarios en varios locales significa:

- Rastreo de inventario en múltiples locales.
- Poder elegir la prioridad de los locales desde donde se retirará el inventario para un pedido.
- Permitir el envío desde múltiples locales.
- Devolver el inventario a los locales apropiados en caso de que un pedido sea cancelado.
- Monitorear el movimiento de inventario en cada local.

Durante el proceso de compra, si existe un local capaz de entregar todo el pedido, el inventario será enviado desde ese local. Si un único local no puede atender todo el pedido, se divide la entrega entre diferentes locales, creando múltiples centros de distribución.

Cuando se implementa la posibilidad de gestionar múltiples inventarios, la forma correcta de enviar el código de seguimiento será enviarlo mediante `POST /orders/\{id\}/fulfillment-orders/\{id\}/fulfill` en el payload.

Como un pedido puede tener múltiples envíos, es necesario saber a cuál envío asociar el código de seguimiento. Imagine un pedido con tres envíos de tres locales diferentes, y se envió a `POST /orders/\{id\}/fulfill` un código de seguimiento. ¿A cuál envío debe atribuirse? Para que la aplicación no deje de funcionar, debe atribuirse a un único Pedido de Entrega, y por eso se decidió atribuirlo al primero.

Si la tienda no tiene múltiples locales, no hay problema, ya que solo puede haber un envío por venta. Pero si el pedido tiene más de un local, el código de seguimiento enviado mediante `POST /orders/\{id\}/fulfill` puede haber sido destinado a una entrega diferente a la primera, causando confusión tanto para los comerciantes como para los consumidores.

Por eso, decidimos introducir el concepto de aplicaciones "listas para múltiples inventarios".

- ### Uso de webhooks

Para garantizar una operación saludable y en conformidad con las buenas prácticas de Nuvemshop, es fundamental que su aplicación esté preparada para reaccionar a los cambios de estado. El uso de [webhooks](https://tiendanube.github.io/api-documentation/resources/webhook) no es solo una recomendación, sino una obligación para mantener la integridad de la integración.

#### 1. Webhooks Obligatorios

El monitoreo de los eventos a continuación es esencial para el flujo de uso de las aplicaciones:

- ``app/suspended``  **(Aplicación Suspendida):** Indica que la aplicación ha sido desactivada temporalmente.
- ``app/uninstalled`` **(Aplicación Desinstalada):** Indica que el comerciante removió la integración, desinstalándola.

#### 2. ¿Por qué implementar `app/suspended`?

Escuchar este evento permite que su plataforma conozca el estado exacto de la tienda en tiempo real. Al recibir esta alerta, su aplicación debe:

- **Cesar Solicitudes:** Interrumpir inmediatamente cualquier llamada a la API para esa tienda específica.
- **Evitar Errores:** Impedir que su infraestructura ejecute solicitudes inválidas que resultarían en errores de autenticación.
- **Acciones Internas:** Realizar los procedimientos de limpieza o pausa de servicios programados en su base de datos.

#### 3. Buenas Prácticas de uso del webhook

- **Resiliencia:** Asegúrese de que su endpoint de webhook responda con un estado `200 OK` rápidamente para evitar reintentos innecesarios por parte del servidor de origen.
- **Registro de Eventos:** Mantenga un registro de cuándo se recibieron estos eventos para facilitar las auditorías técnicas.