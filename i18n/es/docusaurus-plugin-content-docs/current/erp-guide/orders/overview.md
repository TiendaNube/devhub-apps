---
sidebar_position: 1
title: Gestión de Pedidos
---

# Gestión de Pedidos

La API de Tiendanube ofrece varios puntos finales para gestionar pedidos. Estos recursos permiten crear, consultar, actualizar y procesar pedidos, proporcionando control total sobre el ciclo de vida de un pedido en tu tienda virtual.

**La gestión de los pedidos debe realizarse mayormente mediante webhooks.**

Los webhooks se utilizan para notificar a tu aplicación en tiempo real sobre eventos relacionados con la gestión de pedidos, como la creación, actualización o cancelación de pedidos. A través de ellos, es posible automatizar procesos al recibir notificaciones cuando ocurren eventos en la tienda.

En el escenario detallado a continuación, el Middleware es una solución cuya responsabilidad de desarrollo es del equipo de desarrollo contratado. Esto significa que es responsabilidad del equipo del cliente diseñar, implementar y gestionar el Middleware, garantizando que cumpla con las necesidades específicas del sistema y esté debidamente integrado con los demás componentes de la solución.
Identificación de los pedidos

**En Tiendanube, existen dos identificadores de pedido:**

**NUMBER** – Se muestra a los clientes en un formato amigable, pero no se acepta como identificador para integraciones.
**ID del pedido** – Un identificador interno compuesto por 10 dígitos, utilizado oficialmente por la plataforma.

Para fines de integración, lo más adecuado es utilizar el **ID del pedido interno**, ya que garantiza mayor precisión en la comunicación entre sistemas y evita posibles conflictos o errores que podrían ocurrir al intentar usar el NUMBER, que, aunque es fijo, no es soportado para este fin.

![img](../image6.png)
