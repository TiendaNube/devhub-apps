---
sidebar_position: 2
title: Webhooks
---

**Crear un Webhook para Pedidos**

Registra un nuevo webhook para eventos relacionados con los pedidos.

[POST /webhooks](https://tiendanube.github.io/api-documentation/resources/webhook#post-webhooks)

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/webhooks \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "event": "order/created",
  "url": "https://seusistema.com.br/webhooks/orders",
  "headers": {
    "Custom-Header": "Valor"
  }
}'
```

**Listar Webhooks Configurados**

Devuelve una lista de todos los webhooks registrados en la tienda.

[GET /webhooks](https://tiendanube.github.io/api-documentation/resources/webhook#get-webhooks)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/webhooks \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Actualizar un Webhook**

Actualiza la URL o los encabezados de un webhook existente.

[PUT /webhooks/{webhook_id}](https://tiendanube.github.io/api-documentation/resources/webhook#put-webhooksid)

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/webhooks/{{webhook_id}} \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "url": "https://seusistema.com.br/novourl/orders"
}'
```

**Eliminar un Webhook**

Elimina un webhook previamente configurado.

[DELETE /webhooks/{webhook_id}](https://tiendanube.github.io/api-documentation/resources/webhook#delete-webhooksid)

```bash
curl -X DELETE https://api.nuvemshop.com/v1/{{store_id}}/webhooks/{{webhook_id}} \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Procesar Notificaciones Recibidas**

Cuando ocurre un evento configurado, tu aplicación recibirá un POST con los siguientes datos:

Ejemplo de Payload de Notificación:

```bash
{
  "store_id": 5665778,
  "event": "order/created",
  "id": 1639882221
}
```

**Asegúrate de:**

**Validar la Solicitud:** Verifica que el payload sea el esperado y haya sido enviado por Tiendanube.

Procesar el Evento: Realiza acciones, como crear o actualizar datos en tu sistema.

Responder con Estado 200: Devuelve un 200 OK para confirmar la recepción.

**Resumen de la Gestión de Pedidos con Webhooks**

- **Registrar Webhooks:** Usa POST /webhooks para crear notificaciones para eventos de pedidos.
- **Listar Configuraciones:** Utiliza GET /webhooks para ver los webhooks existentes.
- **Mantener Webhooks:** Actualiza (PUT) o elimina (DELETE) según sea necesario.
- **Procesar Eventos:** Recibe y procesa notificaciones para gestionar pedidos automáticamente.

Este enfoque garantiza una integración ágil y en tiempo real para la gestión de pedidos.
