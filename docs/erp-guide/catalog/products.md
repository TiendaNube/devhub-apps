---
sidebar_position: 3
title: Gestão de Produtos
---

# Gestão de Produtos

A API da Nuvemshop oferece endpoints completos para gerenciar produtos, incluindo criação, atualização, e enriquecimento de dados, além de gerenciamento de variantes. 

Os produtos podem ser classificados em dois tipos principais: **produtos sem variação** e **produtos com variação**.
A distinção entre esses dois tipos afeta a forma como os dados do produto são gerenciados e apresentados na plataforma.

**Produtos Sem Variação**

Esses são produtos simples, que não possuem opções adicionais para o cliente escolher. 

**Exemplos incluem:**
- Um livro com um único título e idioma.
- Um pôster com tamanho e design fixos.

**Características:**

- **SKU:** Cada produto é identificado por um código SKU, gerado do lado do ERP/PIM.
- **Gerenciamento direto de estoque:** O controle de estoque, preço e outros atributos é feito diretamente no nível do produto.

**Produtos com Variação**
Esses produtos oferecem opções para os clientes, como tamanho, cor ou material.

Cada combinação de opções é chamada de variante, e essas variantes compartilham o mesmo produto base.

**Como funcionam os atributos e valores?**

Os produtos com variação utilizam os conceitos de **attributes** (atributos) e **values** (valores):

- **Atributos (attributes):** Representam as opções disponíveis para o produto. Exemplos:
    - Tamanho
    - Cor
    - Material

- **Valores (values):** São as escolhas dentro de cada atributo. Exemplos:
    - Para o atributo "Tamanho": P, M, G.
    - Para o atributo "Cor": Azul, Vermelho, Preto.
    - Cada variante é formada por uma combinação específica de valores para os atributos do produto.

![img](../image2.png)

**Criação de Produtos**

Use este endpoint para criar um novo produto na loja.

[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product)

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/products \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "name": "Camiseta básica",
  "description": "Camiseta 100% algodão",
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

**Listagem de Produtos**

Liste todos os produtos cadastrados na loja.

[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product#get-products-1)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/products \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Atualização de Produtos**

Use este endpoint para atualizar as informações de um produto existente.

[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product#put-productsid)

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/products/98765 \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "price": 54.99,
  "stock": 150
}'
```

**Atualização de Variações**

Permite alterar informações específicas de uma **variante de produto (SKU)**.

[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#get-productsproduct_idvariantsid)


```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/products/98765/variants/12345 \
-H 'Authorization: Bearer {{app_token}}' \
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

**Enriquecimento de Produto**

Para enriquecer as informações de um produto, inclua campos como imagens, descrições mais detalhadas ou informações adicionais.

[Requisição de exemplo para adicionar uma imagem:](https://tiendanube.github.io/api-documentation/resources/product-image)

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/products/98765/images \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "src": "https://example.com/image2.jpg"
}'
```

**Exclusão de Produtos**

Permite excluir um produto da loja.

[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product#delete-productsid)


```bash
curl -X DELETE https://api.nuvemshop.com/v1/{{store_id}}/products/98765 \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Cadastrar uma Variação de Produto**

As variações de produto na Nuvemshop representam diferentes versões de um mesmo item, diferenciadas por atributos como tamanho, cor ou material. 


[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#post-productsproduct_idvariants)

```bash
curl -X POST "https://api.nuvemshop.com/v1/{store_id}/products/{product_id}/variants" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})" \
-d '{
  "price": 120.50,
  "stock": 20,
  "sku": "SKU-123",
  "attributes": [
    {
      "name": "Tamanho",
      "value": "M"
    },
    {
      "name": "Cor",
      "value": "Azul"
    }
  ]
}'
```

**Atualizar uma Variação de Produto**

URL: /products/{product_id}/variants/{variant_id}

[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#put-productsproduct_idvariantsid)

```bash
curl -X PUT "https://api.nuvemshop.com/v1/{store_id}/products/{product_id}/variants/{variant_id}" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer {{app_token}}" \
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

**Listar Variações de Produto**

URL: products/{product_id}/variants

[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#put-productsproduct_idvariantsid)

```bash
curl -X GET "https://api.nuvemshop.com/v1/{store_id}/products/{product_id}/variants" \
-H "Authorization: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})"
```

**Buscar Detalhes de uma Variação Específica**
URL: products/{product_id}/variants/{variant_id}

[Requisição de exemplo:](https://tiendanube.github.io/api-documentation/resources/product-variant#get-productsproduct_idvariantsid)

```bash
curl -X GET "https://api.nuvemshop.com/v1/{store_id}/products/{product_id}/variants/{variant_id}" \
-H "Authorization: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})"
```

**Deletar uma Variação de Produto**

URL: /products/variants/custom-fields/{{custom-field_id}}

Requisição de exemplo:

```bash
curl -X DELETE "https://api.nuvemshop.com/v1/{store_id}/products/variants/custom-fields/{{custom-field_id}}" \
-H "Authorization: Bearer {{app_token}}" \
-H "User-Agent: Your App Name ({{app_id}})"
```
