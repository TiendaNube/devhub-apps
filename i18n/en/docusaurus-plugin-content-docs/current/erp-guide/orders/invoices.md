---
sidebar_position: 4
title: Invoice Management
---

### Invoice Management for Orders in Nuvemshop

The Nuvemshop API allows you to create and manage invoices for orders programmatically. Below are the key actions related to invoice creation and management.

**Create an Invoice**

Creates an invoice for a specific order. Invoices are fiscal documents associated with an order.

POST /metafields

Example Request:
```bash
curl -X POST /metafields \
-H 'Authorization: Bearer {{app_token}}' \
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

**Invoice Notes**

1. **Fiscal Requirements:**
   - The implementation of invoices may vary depending on the fiscal requirements of the store's country.
   - The `access_key` is important in countries that use integrated fiscal systems.

2. **Invoice URL:**
   - The URL provides a direct link for the customer to view or download the invoice.

3. **Relationship with the Order:**
   - Each invoice is associated with a specific order identified by the `order_id`.

4. **Common Errors:**
   - **401 Unauthorized**: Ensure you are using the correct token in the `Authorization` header.
   - **404 Not Found**: The provided `order_id` was not found. Check if the order exists.
   - **422 Unprocessable Entity**: The sent data (e.g., `access_key` or `url`) may be in an invalid or incomplete format.

**Complete Invoice Management Process Example:**

1. **Create the Invoice**:  
   Generate an invoice using the order details.

2. **Associate with the Order**:  
   Use the endpoint to link the invoice to the corresponding order.

3. **Send to the Customer**:  
   Use the invoice URL to send it to the customer via email or display it on the store dashboard.

With this approach, invoice management in Nuvemshop is carried out in a centralized way, integrated with the order, ensuring fiscal compliance and an optimized customer experience.
