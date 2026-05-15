---
title: Patrones HTTP Status
---

# Patrones HTTP Status

Esta documentación tiene como objetivo definir los estándares de respuesta que utilizan nuestras APIs. Seguimos las especificaciones globales del protocolo HTTP, garantizando que la integración con nuestros servicios sea predecible, eficiente y fácil de depurar.

## 🔹 ¿Por qué es importante la estandarización?

El uso correcto de los códigos de estado HTTP no es solo una "buena práctica", sino un pilar fundamental de la arquitectura REST:

* **Interoperabilidad:** Los clientes HTTP, proxies y balanceadores de carga entienden estos códigos de forma nativa.
* **Facilidad de Debugging:** Identificar la causa de un error (ej: falta de permiso vs. recurso inexistente) acelera el análisis basándose solo en el código.
* **Caché y Rendimiento:** Muchos sistemas de caché deciden si deben almacenar una respuesta según el código de estado (ej: el 200 es cacheable, mientras que el 500 no lo es).
* **Reducción de Soporte:** Las APIs predecibles generan menos dudas y tickets técnicos.

## 🔹 Categorías de Códigos

Las respuestas se agrupan en cinco clases, identificadas por el primer dígito:

| Clase | Significado | Descripción |
| :---- | :---- | :---- |
| **2xx** | Éxito | La acción fue recibida, comprendida y aceptada con éxito. |
| **3xx** | Redirección | Se requieren acciones adicionales para completar la solicitud. |
| **4xx** | Error del Cliente | La solicitud contiene una sintaxis incorrecta o no puede procesarse debido a un error del integrador. |
| **5xx** | Error del Servidor | El servidor falló al procesar una solicitud aparentemente válida. |

## 🔹 Códigos más utilizados en nuestra API

### Éxito (2xx)

* **200 OK:** La solicitud fue exitosa. El cuerpo de la respuesta contiene los datos solicitados.
* **201 Created:** El recurso se creó con éxito. Generalmente se devuelve después de un `POST`.
* **204 No Content:** La solicitud se procesó con éxito, pero no hay contenido que devolver (común en `DELETE` o `PUT`).

### Errores del Cliente (4xx)

* **400 Bad Request:** La solicitud está mal formada o faltan campos obligatorios.
* **401 Unauthorized:** Fallo en la autenticación. La `API Key` o `Token` es inválido o ha expirado.
* **403 Forbidden:** El cliente está autenticado, pero no tiene permiso para acceder al recurso específico.
* **404 Not Found:** El recurso solicitado (ej: un SKU de producto) no existe en el servidor.
* **422 Unprocessable Entity:** La sintaxis es correcta, pero existen errores semánticos (ej: fallo en la validación de reglas de negocio).
* **429 Too Many Requests:** Se ha excedido el límite de tasa (*Rate Limit*).

### Errores del Servidor (5xx)

* **500 Internal Server Error:** Ocurrió un error inesperado en el lado del servidor.
* **503 Service Unavailable:** El servidor está temporalmente en mantenimiento o sobrecargado.

## 🔹 Buenas Prácticas de Implementación

* **No utilice solo 200 OK:** Evite devolver `200 OK` con un mensaje de error en el cuerpo (`{ "error": true }`). Esto confunde a las herramientas de monitoreo y a las librerías cliente.
* **Idempotencia:** Asegúrese de que las solicitudes `GET`, `PUT` y `DELETE` puedan repetirse sin causar efectos secundarios no deseados, manteniendo la consistencia de los códigos de retorno.
* **Logs de Diagnóstico:** En caso de errores `5xx`, proporcione siempre un `Request-ID` en el encabezado de la respuesta para facilitar el rastreo interno.
