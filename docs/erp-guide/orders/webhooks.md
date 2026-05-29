---
sidebar_position: 2
title: Webhooks
---

**Criar um Webhook para Pedidos**

Registra um novo webhook para eventos relacionados aos pedidos.

[POST /webhooks](https://tiendanube.github.io/api-documentation/resources/webhook#post-webhooks)

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/webhooks \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "event": "order/created",
  "url": "https://seusistema.com.br/webhooks/orders",
  "headers": {
    "Custom-Header": "Valor"
  }
}'
```

**Listar Webhooks Configurados**

Retorna uma lista de todos os webhooks registrados na loja.

[GET /webhooks](https://tiendanube.github.io/api-documentation/resources/webhook#get-webhooks)

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/webhooks \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Atualizar um Webhook**

Atualiza a URL ou cabeçalhos de um webhook existente.

[PUT /webhooks/{webhook_id}](https://tiendanube.github.io/api-documentation/resources/webhook#put-webhooksid)

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/webhooks/{{webhook_id}} \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "url": "https://seusistema.com.br/novourl/orders"
}'

```

**Deletar um Webhook**

Remove um webhook previamente configurado.

[DELETE /webhooks/{webhook_id}](https://tiendanube.github.io/api-documentation/resources/webhook#delete-webhooksid)

```bash
curl -X DELETE https://api.nuvemshop.com/v1/{{store_id}}/webhooks/{{webhook_id}} \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Processar Notificações Recebidas**

Quando um evento configurado ocorre, sua aplicação receberá um POST com os seguintes dados:

Exemplo de Payload de Notificação:

```bash
{
  "store_id": 5665778,
  "event": "order/created",
  "id": 1639882221
}
```

**Certifique-se de:**

**Validar a Requisição:** Verifique se o payload corresponde ao esperado e foi enviado pela Nuvemshop.

Processar o Evento: Execute ações, como criar ou atualizar dados em seu sistema.

Responder com Status 200: Retorne um 200 OK para confirmar o recebimento.

**Resumo da Gestão de Pedidos com Webhooks**

- **Registrar Webhooks:** Use POST /webhooks para criar notificações para eventos de pedidos.
- **Listar Configurações:** Utilize GET /webhooks para visualizar os webhooks existentes.
- **Manter Webhooks:** Atualize (PUT) ou delete (DELETE) conforme necessário.
- **Processar Eventos:** Receba e processe notificações para gerenciar pedidos automaticamente.

Essa abordagem garante uma integração ágil e em tempo real para a gestão de pedidos
