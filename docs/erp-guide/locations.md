---
sidebar_position: 4
title: Estoque
---

# Estoque
A API de Estoques da Nuvemshop permite o gerenciamento de localizações e níveis de estoque em diferentes pontos de venda.

Com ela, é possível criar, atualizar e consultar estoques em locais específicos, como lojas físicas ou armazéns. 

A API também oferece a priorização de locais para definir a ordem de atendimento de pedidos, permitindo uma gestão eficiente e integrada dos inventários.

#Criar um Novo Estoque

Para criar um novo estoque, utilize o endpoint [POST /locations](https://tiendanube.github.io/api-documentation/resources/location).

Requisição:

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

**Atualizar um Estoque Existente**

Para atualizar um estoque existente, utilize o endpoint [PUT /locations/{id}](https://tiendanube.github.io/api-documentation/resources/location#put-locationsid), substituindo {id} pelo ID do estoque.

Requisição:

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

**Listar Todos os Estoques**

Para listar todos os estoques cadastrados, utilize o endpoint [GET /locations](https://tiendanube.github.io/api-documentation/resources/location#get-locations).

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/locations \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Alterar Prioridades dos Estoques**

Para definir as prioridades dos estoques, utilize o endpoint [PATCH /locations/priorities](https://tiendanube.github.io/api-documentation/resources/location#patch-locationspriorities)

A priorização do estoque terá um impacto direto na cotação de frete da loja. 
Isso ocorre porque os estoques priorizados serão levados em consideração no momento de montar o pacote de envio. 
Dessa forma, os produtos selecionados com base nessa priorização definirão a origem do envio, influenciando diretamente os custos de transporte, prazos de entrega e a experiência final do cliente.

Requisição:

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

**Definir um Estoque como Padrão**

Para definir um estoque específico como padrão, utilize o endpoint [PATCH /locations/{id}/chosen-as-default](https://tiendanube.github.io/api-documentation/resources/location#patch-locationsidchosen-as-default), substituindo **{id}** pelo ID do estoque.


Requisição:

```bash
curl -X PATCH https://api.nuvemshop.com/v1/{{store_id}}/locations/{id}/chosen-as-default \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```
