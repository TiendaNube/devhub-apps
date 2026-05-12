---
sidebar_position: 4
title: Gestão de Faturamento (Invoices)
---

# Gestão de Faturamento (Invoices) de Pedidos na Nuvemshop

A API da Nuvemshop permite criar e gerenciar faturas (invoices) para pedidos de forma programática.

Abaixo estão as principais ações relacionadas à criação e gestão de faturas, conforme a documentação oficial.

**Criar uma Fatura**

Cria uma fatura para um pedido específico. As faturas são documentos fiscais associados a um pedido.

[POST /metafields](https://tiendanube.github.io/api-documentation/resources/order#create-an-invoice)

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/orders/{{order_id}}/metafields \
-H 'Authentication: bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "namespace": "nfe",
  "key": "list",
  "value": "[{\"key\": \"55555555555555555555555555555\", \"link\": \"http://nfe.com.br/nsaasb\", \"fulfillment_order_id\": \"01FHZXHK8PTP9FVK99Z66GXASS\"}]",
  "description": "Lista de NFes",
  "owner_resource": "Order",
  "owner_id": 12345678
}'
```

**Notas sobre Faturas**

1. Requisitos Fiscais:
    - A implementação de faturas pode variar dependendo das exigências fiscais do país da loja.
    - A access_key é importante em países que utilizam sistemas fiscais integrados.

2. URL da Fatura:
    - A URL fornece um link direto para o cliente visualizar ou baixar a fatura.
   
3. Relação com o Pedido:
    - Cada fatura está associada a um pedido específico identificado pelo order_id.

4. Erros Comuns
    - 401 Unauthorized:
        - Certifique-se de usar o token correto no cabeçalho Authentication.
    - 404 Not Found:
        - O order_id informado não foi encontrado. Verifique se o pedido existe.
    - 422 Unprocessable Entity:
        - Os dados enviados (por exemplo, access_key ou url) podem estar em um formato inválido ou incompleto.

**Exemplo Completo de Processo de Gestão de Fatura**
1. Criar a Fatura:
    - Gere uma fatura usando os dados do pedido.

2. Associar ao Pedido:
    - Use o endpoint para associar a fatura ao pedido correspondente.
3. Enviar para o Cliente:
    - Use a URL da fatura para enviar ao cliente por e-mail ou exibir no painel da loja.

Com essa abordagem, a gestão de faturas na Nuvemshop é realizada de forma centralizada e integrada com o pedido, garantindo conformidade fiscal e experiência otimizada para o cliente.
