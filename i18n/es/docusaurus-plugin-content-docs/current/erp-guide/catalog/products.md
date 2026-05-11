---
sidebar_position: 3
title: Gestión de Productos
---

# Gestión de Productos

La API de Tiendanube ofrece endpoints completos para gestionar productos, incluyendo la creación, actualización y enriquecimiento de datos, además de la gestión de variantes.

Los productos se pueden clasificar en dos tipos principales: **productos sin variación** y **productos con variación**.  
La distinción entre estos dos tipos afecta la forma en que se gestionan y presentan los datos del producto en la plataforma.

**Productos Sin Variación**

Estos son productos simples, que no tienen opciones adicionales para que el cliente elija.

**Ejemplos incluyen:**
- Un libro con un solo título e idioma.
- Un póster con tamaño y diseño fijos.

**Características:**

- **SKU:** Cada producto está identificado por un código SKU, generado desde el ERP/PIM.
- **Gestión directa de inventarios:** El control de inventario, precio y otros atributos se realiza directamente en el nivel del producto.

**Productos con Variación**
Estos productos ofrecen opciones para los clientes, como tamaño, color o material.

Cada combinación de opciones se llama variante, y estas variantes comparten el mismo producto base.

**¿Cómo funcionan los atributos y valores?**

Los productos con variación utilizan los conceptos de **atributos** (attributes) y **valores** (values):

- **Atributos (attributes):** Representan las opciones disponibles para el producto. Ejemplos:
    - Talla
    - Color
    - Material

- **Valores (values):** Son las opciones dentro de cada atributo. Ejemplos:
    - Para el atributo "Tamaño": S, M, L.
    - Para el atributo "Color": Azul, Rojo, Negro.
    - Cada variante se forma por una combinación específica de valores para los atributos del producto.

![img](../image2.png)

**Creación de Productos**

Utiliza este endpoint para crear un nuevo producto en la tienda.

[Solicitud de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product)

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/products \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "name": "Camiseta básica",
  "description": "Camiseta 100% algodón",
  "price": 49.99,
  "sku": "CAM-001",
  "stock": 0,
  "inventory_levels": [
 	{
		"location_id": "01GQ2ZHK064BQRHGDB7CCV0Y6N",
		"stock": 5
}
  ],
  "categories": [12345],
  "images": []
}'
```

**Listado de Productos**

Lista todos los productos registrados en la tienda.

[Solicitud de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product#get-products-1)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/products \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Actualización de Productos**

Utiliza este endpoint para actualizar la información de un producto existente.

[Solicitud de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product#put-productsid)

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/products/98765 \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "price": 54.99,
  "stock": 150
}'
```

**Actualización de Variaciones**

Permite alterar información específica de una **variante de producto (SKU)**.

[Solicitud de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#get-productsproduct_idvariantsid)

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/products/98765/variants/12345 \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "id": 144,
  "image_id": null,
  "promotional_price": "19.00",
  "created_at": "2013-01-03T09:11:51-03:00",
  "depth": null,
  "height": null,
  "values": [
    {
      "en": "X-Large"
    }
  ],
  "price": "25.00",
  "product_id": 1234,
  "stock_management": true,
  "stock": 5,
  "sku": "BSG1234D",
  "mpn": null,
  "age_group": null,
  "gender": null,
  "updated_at": "2013-06-01T09:15:11-03:00",
  "weight": "2.75",
  "width": null,
  "cost": "10.99"
}
'
```

**Enriquecimiento de Producto**

Para enriquecer la información de un producto, incluye campos como imágenes, descripciones más detalladas o información adicional.

[Solicitud de ejemplo para añadir una imagen:](https://tiendanube.github.io/api-documentation/resources/product-image)

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/products/98765/images \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "src": "https://example.com/image2.jpg"
}'
```

**Eliminación de Productos**

Permite eliminar un producto de la tienda.

[Solicitud de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product#delete-productsid)

```bash
curl -X DELETE https://api.nuvemshop.com/v1/{{store_id}}/products/98765 \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

---

**Registrar una Variación de Producto**

Las variaciones de producto en Tiendanube representan diferentes versiones de un mismo artículo, diferenciadas por atributos como tamaño, color o material.


[Requisición de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#post-productsproduct_idvariants)

```bash
curl -X POST "https://api.nuvemshop.com/v1/{store_id}/products/{product_id}/variants" \
-H "Content-Type: application/json" \
-H "Authentication: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})" \
-d '{
  "price": 120.50,
  "stock": 20,
  "sku": "SKU-123",
  "attributes": [
    {
      "name": "Tamaño",
      "value": "M"
    },
    {
      "name": "Color",
      "value": "Azul"
    }
  ]
}'
```

**Actualizar una Variación de Producto**

URL: /products/{product_id}/variants/{variant_id}

[Requisición de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#put-productsproduct_idvariantsid)

```bash
curl -X PUT "https://api.nuvemshop.com/v1/{store_id}/products/{product_id}/variants/{variant_id}" \
-H "Content-Type: application/json" \
-H "Authentication: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})" \
-d '{
  "id": 144,
  "image_id": null,
  "promotional_price": "19.00",
  "created_at": "2013-01-03T09:11:51-03:00",
  "depth": null,
  "height": null,
  "values": [
    {
      "en": "X-Large"
    }
  ],
  "price": "25.00",
  "product_id": 1234,
  "stock_management": true,
  "stock": 5,
  "sku": "BSG1234D",
  "mpn": null,
  "age_group": null,
  "gender": null,
  "updated_at": "2013-06-01T09:15:11-03:00",
  "weight": "2.75",
  "width": null,
  "cost": "10.99"
}'
```

**Listar Variaciones de Producto**

URL: products/{product_id}/variants

[Requisición de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#put-productsproduct_idvariantsid)

```bash
curl -X GET "https://api.nuvemshop.com/v1/{store_id}/products/{product_id}/variants" \
-H "Authentication: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})"
```

**Buscar Detalles de una Variación Específica**
URL: products/{product_id}/variants/{variant_id}

[Requisición de ejemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#get-productsproduct_idvariantsid)

```bash
curl -X GET "https://api.nuvemshop.com/v1/{store_id}/products/{product_id}/variants/{variant_id}" \
-H "Authentication: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})"
```

**Eliminar una Variación de Producto**

URL: /products/variants/custom-fields/{{custom-field_id}}

Requisición de ejemplo:

```bash
curl -X DELETE "https://api.nuvemshop.com/v1/{store_id}/products/variants/custom-fields/{{custom-field_id}}" \
-H "Authentication: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})"
```
