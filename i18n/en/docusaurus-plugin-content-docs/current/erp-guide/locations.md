---
sidebar_position: 4
title: Inventory
---

# Inventory
The Nuvemshop Inventory API allows managing locations and stock levels across different sales points.

With it, you can create, update, and query stock at specific locations, such as physical stores or warehouses. 

The API also offers location prioritization to define the order in which orders are fulfilled, enabling efficient and integrated inventory management.

#Create a New Stock

To create a new stock, use the [POST /locations](https://tiendanube.github.io/api-documentation/resources/location) endpoint.

Request:

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/locations \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "name": {
    "es_AR": "Nombre del stock",
    "pt_BR": "Nome do estoque",
    "en_US": "Stock name"
  },
  "address": {
    "zipcode": "12910802",
    "street": "Rua Exemplo",
    "number": "123",
    "floor": "1º Andar",
    "locality": "Bairro Exemplo",
    "city": "São Paulo",
    "province": {
      "code": "SP",
      "name": "São Paulo"
    },
    "region": {
      "code": "SE",
      "name": "Sudeste"
    },
    "country": {
      "code": "BR",
      "name": "Brasil"
    },
    "reference": "Ponto de referência",
    "between_streets": "Entre a Rua A e Rua B"
  },
  "is_default": false,
  "allows_pickup": true,
  "priority": 1
}'
```

**Update an Existing Stock**

To update an existing stock, use the [PUT /locations/{id}](https://tiendanube.github.io/api-documentation/resources/location#put-locationsid) endpoint, replacing {id} with the stock ID.

Request:

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/locations/{id} \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "name": {
    "es_AR": "Nombre actualizado del stock",
    "pt_BR": "Nome atualizado do estoque",
    "en_US": "Updated stock name"
  },
  "address": {
    "zipcode": "12910802",
    "street": "Rua Atualizada",
    "number": "456",
    "floor": "2º Andar",
    "locality": "Bairro Atualizado",
    "city": "Rio de Janeiro",
    "province": {
      "code": "RJ",
      "name": "Rio de Janeiro"
    },
    "region": {
      "code": "SE",
      "name": "Sudeste"
    },
    "country": {
      "code": "BR",
      "name": "Brasil"
    },
    "reference": "Novo ponto de referência",
    "between_streets": "Entre a Rua X e Rua Y"
  },
  "is_default": false,
  "allows_pickup": false,
  "priority": 2
}'
```

**List All Stocks**

To list all registered stocks, use the [GET /locations](https://tiendanube.github.io/api-documentation/resources/location#get-locations) endpoint.

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/locations \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Change Stock Priorities**

To set stock priorities, use the [PATCH /locations/priorities](https://tiendanube.github.io/api-documentation/resources/location#patch-locationspriorities) endpoint.

Stock prioritization will directly impact the store's shipping rate. 
Prioritized stocks will be considered when assembling the shipping package. 
Therefore, selected products based on this prioritization will define the shipping origin, directly influencing transportation costs, delivery times, and the final customer experience.

Request:

```bash
curl -X PATCH https://api.nuvemshop.com/v1/{{store_id}}/locations/priorities \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '[
  {
    "id": "01HTMFDH09VC6E2Q8KGTGP44D3",
    "priority": 0
  },
  {
    "id": "01HTMFFHWXRC8TRS40M43XGQFB",
    "priority": 1
  },
  {
    "id": "01HTMFG5VYQ8X5QW8FQ9Z7W3E1",
    "priority": 2
  }
]'
```

---

**Define a Stock as Default**

To define a specific stock as default, use the [PATCH /locations/{id}/chosen-as-default](https://tiendanube.github.io/api-documentation/resources/location#patch-locationsidchosen-as-default) endpoint, replacing **{id}** with the stock's ID.

Request:

```bash
curl -X PATCH https://api.nuvemshop.com/v1/{{store_id}}/locations/{id}/chosen-as-default \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```
