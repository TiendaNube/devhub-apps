---
sidebar_position: 2
title: Categoría
---

## **Categoría**  

### **Creación de una Categoría**  

Para crear una nueva categoría, realiza una solicitud [POST al endpoint /categories](https://tiendanube.github.io/api-documentation/resources/category#post-categories).  

Asegúrate de incluir los siguientes encabezados:  
- **Authentication**: bearer {{app_token}}  
- **User-Agent**: Your App Name ({{app_id}})  

#### **Ejemplo en curl:**  

```bash
curl -X POST https://api.nuvemshop.com/v1/categories \
-H "Content-Type: application/json" \
-H "Authentication: bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})" \
-d '{
  "name": {
    "pt": "Eletrônicos",
    "en": "Electronics",
    "es": "Electrónica"
  },
  "description": {
    "pt": "Categoria de produtos eletrônicos",
    "en": "Category of electronic products",
    "es": "Categoría de productos electrónicos"
  },
  "handle": {
    "pt": "eletronicos",
    "en": "electronics",
    "es": "electronica"
  },
  "parent": null,
  "google_shopping_category": "Clothing & Accessories > Jewelry",
  "seo_title": "Categoría de productos electrónicos",
  "seo_description": "Categoría de productos electrónicos"
}'
```

---

### **Creación de una Subcategoría**  

El proceso para crear una subcategoría es similar al de la creación de una categoría.  

Debes especificar el [ID de la categoría padre en el campo parent](https://tiendanube.github.io/api-documentation/resources/category#post-categories-2).  

#### **Ejemplo en curl:**  

```bash
curl -X POST https://api.nuvemshop.com/v1/categories \
-H "Content-Type: application/json" \
-H "Authentication: bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})" \
-d '{
  "name": {
    "pt": "Smartphones",
    "en": "Smartphones",
    "es": "Smartphones"
  },
  "description": {
    "pt": "Subcategoria de smartphones",
    "en": "Smartphones subcategory",
    "es": "Subcategoría de smartphones"
  },
  "handle": {
    "pt": "smartphones",
    "en": "smartphones",
    "es": "smartphones"
  },
  "parent": 12345
}'
```

---

### **Actualización de una Categoría o Subcategoría**  

Para actualizar una categoría o subcategoría existente, realiza una solicitud [PUT al endpoint /categories/{id}](https://tiendanube.github.io/api-documentation/resources/category#put-categoriesid), donde **{id}** es el ID de la categoría que deseas actualizar.  

#### **Ejemplo en curl:**  

```bash
curl -X PUT https://api.nuvemshop.com/v1/categories/12345 \
-H "Content-Type: application/json" \
-H "Authentication: bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})" \
-d '{
  "name": {
    "pt": "Eletrônicos e Gadgets",
    "en": "Electronics and Gadgets",
    "es": "Electrónica y Gadgets"
  },
  "description": {
    "pt": "Categoria atualizada de produtos eletrônicos e gadgets",
    "en": "Updated category of electronic products and gadgets",
    "es": "Categoría actualizada de productos electrónicos y gadgets"
  }
}'
```
