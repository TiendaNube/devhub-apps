---
sidebar_position: 2
title: Category
---

# Category

**Creating a Category**

To create a new category, make a [POST request to the /categories](https://tiendanube.github.io/api-documentation/resources/category#post-categories) endpoint.

Be sure to include the following headers:
- Authentication: bearer {{app_token}}
- User-Agent: Your App Name ({{app_id}})
Example in curl:

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

**Creating a Subcategory**

The process for creating a subcategory is similar to creating a category.

You need to specify the [parent category ID in the parent field](https://tiendanube.github.io/api-documentation/resources/category#post-categories-2).

Example in curl:

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

**Updating a Category or Subcategory**

To update an existing category or subcategory, make a [PUT request to the /categories/{id}](https://tiendanube.github.io/api-documentation/resources/category#put-categoriesid) endpoint, where **{id}** is the ID of the category you want to update.

Example in curl:

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
