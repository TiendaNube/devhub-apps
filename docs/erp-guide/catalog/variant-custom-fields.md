---
sidebar_position: 4
title: Campos Personalizados em Variantes
---

# Gestão de Produtos com Campos Personalizados em Variantes

A API da Nuvemshop/Nuvemshop fornece endpoints para gerenciar campos personalizados associados às variantes de produtos.

Esses campos permitem adicionar informações adicionais a cada variante, enriquecendo os dados do produto com propriedades específicas, podendo também ser usados como filtros.

Abaixo, detalhamos as operações disponíveis para trabalhar com os Custom Fields.


**Listar Campos Personalizados de uma Variante**

Retorna todos os campos personalizados associados a uma variante específica de produto.

[GET /products/variants/custom-fields](https://tiendanube.github.io/api-documentation/resources/products/variants/custom-fields#get-productsvariantsidcustom-fields)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Criar um Campo Personalizado**

Permite adicionar um novo campo personalizado a uma variante de produto.

POST /products/variants/custom-fields

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields \
-H 'Authorization: Bearer {{app_token}}' \
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

**Atualizar um Campo Personalizado**

Atualiza o valor de um campo personalizado existente.

PUT /products/variants/custom-fields/{{custom-field_id}}

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields/{{custom-field_id}} \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "value": "poliéster"
}'
```

**Excluir um Campo Personalizado**

Remove um campo personalizado de uma variante.

DELETE /products/{product_id}/variants/{variant_id}/custom_fields/{custom_field_id}

```bash
curl -X DELETE https://api.nuvemshop.com/v1/{{store_id}}/products/{{product_id}}/variants/{{variant_id}}/custom_fields/{{custom_field_id}} \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Resumo das Operações**

- **Listar Campos Personalizados:** Utilize GET /products/variants/custom-fields para visualizar todos os campos de uma variante.
- **Criar Campos Personalizados:** Adicione novos campos com POST /products/variants/custom-fields.
- **Atualizar Campos Personalizados:** Modifique valores existentes com PUT /products/variants/custom-fields/{custom_field_id}.
- **Excluir Campos Personalizados:** Remova campos que não são mais necessários com DELETE /products/variants/custom-fields/{custom_field_id}.
