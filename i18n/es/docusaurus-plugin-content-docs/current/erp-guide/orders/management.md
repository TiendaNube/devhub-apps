---
sidebar_position: 3
title: Gestión de Pedidos
---

# Gestión de Pedidos

La API de Pedidos de Tiendanube permite gestionar todas las transacciones realizadas en la tienda, ofreciendo recursos para consulta, actualización y seguimiento de pedidos.

Con ella, es posible acceder a detalles como el estado de pago, artículos comprados, datos del cliente y seguimiento.

La API también facilita integraciones con sistemas ERP y logísticos, garantizando una gestión eficiente y centralizada de los pedidos.

**Listar Pedidos**

Devuelve una lista de pedidos realizados en la tienda. Los resultados pueden filtrarse por varios parámetros, como fecha de creación, estado, entre otros.

[GET /orders](https://tiendanube.github.io/api-documentation/resources/order#get-orders-1)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/orders \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Parámetros Opcionales:**

- **page:** Número de página.
- **per_page:** Cantidad de artículos por página.
- **status:** Filtra por el estado del pedido (e.g., abierto, cerrado, cancelado).
- **created_at_min:** Fecha mínima de creación (formato ISO 8601).
- **created_at_max:** Fecha máxima de creación (formato ISO 8601).

**Consultar Detalles de un Pedido**

Devuelve información detallada sobre un pedido específico, incluyendo artículos, métodos de envío, pagos, entre otros.

[GET /orders/{order_id}](https://tiendanube.github.io/api-documentation/resources/order#get-ordersid)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/orders/{{order_id}} \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Actualizar un Pedido**

Permite actualizar información de un pedido existente, como el estado o datos del cliente.
**Los valores posibles son "open", "paid", "closed" o "cancelled"**

[PUT /orders/{order_id}](https://tiendanube.github.io/api-documentation/resources/order#put-ordersid)

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/orders/{{order_id}} \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
    "owner_note": "Need to gift wrap this order",
    "status": "paid"
}'
```

**Cancelar un Pedido**

Cancela un pedido específico.

[POST /orders/{order_id}/cancel](https://tiendanube.github.io/api-documentation/resources/order#post-ordersidcancel)


**Resumen de la Gestión de Pedidos**

- **Listar Pedidos:** Usa GET /orders para obtener una visión general.
- **Consultar Detalles:** Usa GET /orders/{order_id} para información detallada.
- **Crear Pedidos:** Realízalo con POST /orders.
- **Actualizar Pedidos:** Actualiza datos con PUT /orders/{order_id}.
- **Cancelar Pedidos:** Elimina con DELETE /orders/{order_id}.

Esta API ofrece flexibilidad para integrar y gestionar pedidos de forma eficiente en sistemas externos.

**Fulfillment Order**

El Fulfillment Order en Tiendanube es un recurso que permite gestionar envíos de pedidos cuando hay múltiples orígenes (locations).

Separa un pedido en diferentes "órdenes de cumplimiento" (fulfillment orders), cada una representando un envío específico con sus productos, costos y métodos de entrega.

**¿Qué podemos hacer con él?**

- Consultar órdenes de cumplimiento asociadas a un pedido.
- Actualizar información sobre el procesamiento del envío.
- Marcar un pedido como enviado cuando se despacha.
- Gestionar múltiples depósitos (locations) para definir el origen de los productos.

**Listar Fulfillment Orders**

**GET** /v1/{store_id}/orders/{order_id}/fulfillment-orders

Devuelve todas las órdenes de cumplimiento de la tienda.

**Buscar Fulfillment Order específica**

**GET** /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}

Devuelve los detalles de una orden de cumplimiento específica.

Crear un evento  
**POST** /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events

```bash
{
   "status": "dispatched",
   "description": "The package was dispatched",
   "address": "St. Paul 123, São Paulo - Brazil 02910802",
   "geolocation": {
      "longitude": 73.856077,
      "latitude": 40.848447
   },
   "happened_at": "2022-11-24T10:20:19+00:00",                  
   "estimated_delivery_at": "2022-11-24T10:20:19+00:00"                  
}
```

**Actualizar un evento Fulfillment Order**

**PUT** /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}

```bash
{
   "status": "in_transit",
   "description": "The package was sent to cd address.",
   "address": "St. Paul 123, São Paulo - Brazil 02910802",
   "geolocation": {
      "longitude": 73.856077,
      "latitude": 40.848447
   },
   "happened_at": "2022-11-24T10:20:19+00:00",                  
   "estimated_delivery_at": "2022-11-24T10:20:19+00:00"                  
}
```

**Eliminar un evento**

**DELETE** /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}
