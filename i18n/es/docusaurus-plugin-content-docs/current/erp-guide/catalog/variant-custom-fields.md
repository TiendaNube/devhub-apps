---
sidebar_position: 4
title: Campos Personalizados en Variantes
---

# Gestión de Productos con Campos Personalizados en Variantes

La API de Tiendanube proporciona puntos finales para gestionar campos personalizados asociados a las variaciones de productos.

Estos campos permiten agregar información adicional a cada variación, enriqueciendo los datos del producto con propiedades específicas, y también pueden ser utilizados como filtros.

A continuación, detallamos las operaciones disponibles para trabajar con los Campos Personalizados.


**Listar Campos Personalizados de una Variación**

Devuelve todos los campos personalizados asociados a una variación específica de producto.

[GET /products/variants/custom-fields](https://tiendanube.github.io/api-documentation/resources/products/variants/custom-fields#get-productsvariantsidcustom-fields)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Crear un Campo Personalizado**

Permite agregar un nuevo campo personalizado a una variación de producto.

POST /products/variants/custom-fields

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
    "name": "Production status",
    "description": "Possible product production status",
    "value_type": "text_list",
    "read_only": false,
    "values": [
        "Started",
        "In Production",
        "Finished"
    ]
}'
```

**Actualizar un Campo Personalizado**

Actualiza el valor de un campo personalizado existente.

PUT /products/variants/custom-fields/{{custom-field_id}}

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields/{{custom-field_id}} \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "value": "poliéster"
}'
```

**Eliminar un Campo Personalizado**

Elimina un campo personalizado de una variación.

DELETE /products/{product_id}/variants/{variant_id}/custom_fields/{custom_field_id}

```bash
curl -X DELETE https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields/{custom_field_id}./variants/{{variant_id}}/custom_fields/{{custom_field_id}} \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Resumen de Operaciones**

- **Listar Campos Personalizados:** Utiliza GET /products/variants/custom-fields para ver todos los campos de una variación.
- **Crear Campos Personalizados:** Agrega nuevos campos con POST /products/variants/custom-fields.
- **Actualizar Campos Personalizados:** Modifica valores existentes con PUT /products/variants/custom-fields/{custom_field_id}.
- **Eliminar Campos Personalizados:** Elimina campos que ya no sean necesarios con DELETE /products/variants/custom-fields/{custom_field_id}.
