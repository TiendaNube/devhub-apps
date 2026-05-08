---
sidebar_position: 2
title: Categoria
---

# Categoria

**Criação de uma Categoria**

Para criar uma nova categoria, faça uma requisição [POST para o endpoint /categories](https://tiendanube.github.io/api-documentation/resources/category#post-categories).

Certifique-se de incluir os seguintes cabeçalhos:
- Authentication: bearer {{app_token}}
- User-Agent: Your App Name ({{app_id}})
Exemplo em curl:


```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/categories \
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

**Criação de uma Subcategoria**

O processo para criar uma subcategoria é semelhante ao da criação de uma categoria.

Você deve especificar o [ID da categoria pai no campo parent](https://tiendanube.github.io/api-documentation/resources/category#post-categories-2).

Exemplo em curl:

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/categories \
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

**Atualização de uma Categoria ou Subcategoria**

Para atualizar uma categoria ou subcategoria existente, faça uma requisição [PUT para o endpoint /categories/{id}](https://tiendanube.github.io/api-documentation/resources/category#put-categoriesid), onde **{id}** é o ID da categoria que deseja atualizar.

Exemplo em curl:


```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/categories/12345 \
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
