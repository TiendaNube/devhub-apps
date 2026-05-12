---
sidebar_position: 3
title: Gestão dos Pedidos
---

# Gestão dos Pedidos

A API de Pedidos da Nuvemshop permite gerenciar todas as transações realizadas na loja, oferecendo recursos para consulta, atualização e acompanhamento de pedidos.

Com ela, é possível acessar detalhes como status do pagamento, itens comprados, dados do cliente e rastreamento.

A API também facilita integrações com sistemas de ERP e logística, garantindo uma gestão eficiente e centralizada dos pedidos.

**Listar Pedidos**

Retorna uma lista de pedidos realizados na loja. Os resultados podem ser filtrados por vários parâmetros, como data de criação, status, entre outros.

[GET /orders](https://tiendanube.github.io/api-documentation/resources/order#get-orders-1)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/orders \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Parâmetros Opcionais:**

- **page:** Número da página.
- **per_page:** Quantidade de itens por página.
- **status:** Filtra pelo status do pedido (e.g., open, closed, cancelled).
- **created_at_min:** Data mínima de criação (formato ISO 8601).
- **created_at_max:** Data máxima de criação (formato ISO 8601).

**Consultar Detalhes de um Pedido**

Retorna informações detalhadas sobre um pedido específico, incluindo itens, métodos de envio, pagamentos, entre outros.

[GET /orders/{order_id}](https://tiendanube.github.io/api-documentation/resources/order#get-ordersid)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/orders/{{order_id}} \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Atualizar um Pedido**

Permite atualizar informações de um pedido existente, como o status ou dados do cliente.
**Os valores possíveis são "open", ”paid”, "closed" ou "cancelled"**

[PUT /orders/{order_id}](https://tiendanube.github.io/api-documentation/resources/order#put-ordersid)

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/orders/{{order_id}} \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
    "owner_note": "Need to gift wrap this order",
    "status": "paid"
}'
```

**Cancelar um Pedido**

Cancela um pedido específico.

[DELETE /orders/{order_id}](https://tiendanube.github.io/api-documentation/resources/order#post-ordersidcancel)


```bash
curl --location 'https://api.nuvemshop.com.br/v1/{{store_id}}/orders/{{order_id}}/cancel' \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Resumo da Gestão de Pedidos**

- **Listagem de Pedidos:** Utilize GET /orders para obter uma visão geral.
- **Consulta de Detalhes:** Use GET /orders/{order_id} para informações detalhadas.
- **Criação de Pedidos:** Realize com POST /orders.
- **Atualização de Pedidos:** Atualize dados com PUT /orders/{order_id}.
- **Cancelamento de Pedidos:** Exclua com DELETE /orders/{order_id}.

Essa API oferece flexibilidade para integrar e gerenciar pedidos de forma eficiente em sistemas externos.


**Fulfillment Order**

O Fulfillment Order na Nuvemshop é um recurso que permite gerenciar envios de pedidos quando há múltiplas origens (locations). 

Ele separa um pedido em diferentes "ordens de atendimento" (fulfillment orders), cada uma representando um envio específico com seus produtos, custos e métodos de entrega.

**O que podemos fazer com ele?**

- Consultar ordens de atendimento associadas a um pedido.
- Atualizar informações sobre o processamento do envio.
- Marcar um pedido como enviado quando ele for despachado.
- Gerenciar múltiplos depósitos (locations) para definir a origem dos produtos.


**Listar Fulfillment Orders**

**GET** /v1/{store_id}/orders/{order_id}/fulfillment-orders

Retorna todas as ordens de atendimento da loja.


**Buscar Fulfillment Order específica**

**GET** /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}


**Retorna os detalhes de uma ordem de atendimento específica.**

Criar um evento
**POST** /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events

```bash
{
   "status": "dispatched",
   "description": "The package was dispatched",
   "address": "St. Paul 123, São Paulo - Brazil 02910802",
   "geolocation": {
      "longitude": 73.856077,
      "latitude": 40.848447
   },
   "happened_at": "2022-11-24T10:20:19+00:00",                  
   "estimated_delivery_at": "2022-11-24T10:20:19+00:00"                  
}
```


**Atualizar um evento Fulfillment Order**

**PUT** /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}

```bash
{
   "status": "in_transit",
   "description": "The package was sent to cd address.",
   "address": "St. Paul 123, São Paulo - Brazil 02910802",
   "geolocation": {
      "longitude": 73.856077,
      "latitude": 40.848447
   },
   "happened_at": "2022-11-24T10:20:19+00:00",                  
   "estimated_delivery_at": "2022-11-24T10:20:19+00:00"                  
}
```

**Deletar um evento**

**DELETE** /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}
