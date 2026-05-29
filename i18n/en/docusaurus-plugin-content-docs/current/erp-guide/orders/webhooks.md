---
sidebar_position: 2
title: Webhooks
---

**Create a Webhook for Orders**

Register a new webhook for order-related events.

URL: `/webhooks`

Example Request:
```bash
curl -X POST "https://api.nuvemshop.com/v1/{{store_id}}/webhooks" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "event": "order/created",
  "url": "https://yoursystem.com.br/webhooks/orders",
  "headers": {
    "Custom-Header": "Value"
  }
}'
```

### Webhooks Management

**List Configured Webhooks**

Returns a list of all registered webhooks in the store.

URL: `/webhooks`

Example Request:
```bash
curl -X GET "https://api.nuvemshop.com/v1/{{store_id}}/webhooks" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Update a Webhook**

Update the URL or headers of an existing webhook.

URL: `/webhooks/{webhook_id}`

Example Request:
```bash
curl -X PUT "https://api.nuvemshop.com/v1/{{store_id}}/webhooks/{{webhook_id}}" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "url": "https://yoursystem.com.br/newurl/orders"
}'
```

**Delete a Webhook**

Remove a previously configured webhook.

URL: `/webhooks/{webhook_id}`

Example Request:
```bash
curl -X DELETE "https://api.nuvemshop.com/v1/{{store_id}}/webhooks/{{webhook_id}}" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Process Received Notifications**

When a configured event occurs, your application will receive a POST with the following data:

Example Notification Payload:
```bash
{
  "store_id": 5665778,
  "event": "order/created",
  "id": 1639882221
}
```

**Ensure to:**

- **Validate the Request**: Check if the payload matches the expected format and was sent by Nuvemshop.
- **Process the Event**: Perform actions such as creating or updating data in your system.
- **Respond with Status 200**: Return a 200 OK to confirm receipt.

### Summary of Webhook Management

- **Register Webhooks:** Use `POST /webhooks` to create notifications for order events.
- **List Configurations:** Use `GET /webhooks` to view existing webhooks.
- **Maintain Webhooks:** Update (PUT) or delete (DELETE) webhooks as needed.
- **Process Events:** Receive and process notifications to manage orders automatically.
