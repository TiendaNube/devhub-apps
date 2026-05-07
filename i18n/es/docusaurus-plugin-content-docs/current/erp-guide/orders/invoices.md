---
sidebar_position: 4
title: Gestión de Facturación (Invoices)
---

# Gestión de Facturación (Invoices) de Pedidos en Tiendanube

La API de Tiendanube permite crear y gestionar facturas (invoices) para pedidos de forma programática.

A continuación están las principales acciones relacionadas con la creación y gestión de facturas, según la documentación oficial.

**Crear una Factura**

Crea una factura para un pedido específico. Las facturas son documentos fiscales asociados a un pedido.

[POST /metafields](https://tiendanube.github.io/api-documentation/resources/order#create-an-invoice)

```bash
curl -X POST /metafields \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "namespace": "nfe",
  "key": "list",
  "value": "[{\"key\": \"55555555555555555555555555555\", \"link\": \"http://nfe.com.br/nsaasb\", \"fulfillment_order_id\": \"01FHZXHK8PTP9FVK99Z66GXASS\"}]",
  "description": "Lista de NFes",
  "owner_resource": "Order",
  "owner_id": 12345678
}'
```

**Notas sobre Facturas**

1. Requisitos Fiscales:
    - La implementación de facturas puede variar dependiendo de los requisitos fiscales del país de la tienda.
    - La access_key es importante en países que utilizan sistemas fiscales integrados.

2. URL de la Factura:
    - La URL proporciona un enlace directo para que el cliente visualice o descargue la factura.

3. Relación con el Pedido:
    - Cada factura está asociada a un pedido específico identificado por order_id.

4. Errores Comunes:
    - 401 Unauthorized:
        - Asegúrate de usar el token correcto en el encabezado Authentication.
    - 404 Not Found:
        - El order_id informado no fue encontrado. Verifica si el pedido existe.
    - 422 Unprocessable Entity:
        - Los datos enviados (por ejemplo, access_key o url) pueden estar en un formato inválido o incompleto.

**Ejemplo Completo de Proceso de Gestión de Factura**
1. Crear la Factura:
    - Genera una factura utilizando los datos del pedido.

2. Asociar al Pedido:
    - Usa el endpoint para asociar la factura al pedido correspondiente.
3. Enviar al Cliente:
    - Usa la URL de la factura para enviarla al cliente por correo electrónico o mostrarla en el panel de la tienda.

Con este enfoque, la gestión de facturas en Tiendanube se realiza de forma centralizada e integrada con el pedido, garantizando cumplimiento fiscal y una experiencia optimizada para el cliente.
