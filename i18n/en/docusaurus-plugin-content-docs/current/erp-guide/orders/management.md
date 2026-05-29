---
sidebar_position: 3
title: Order Management
---

### Order Management

Nuvemshop's Order API allows you to manage all transactions made in the store, offering features for querying, updating, and tracking orders. It also facilitates integration with ERP and logistics systems for efficient and centralized order management.

**List Orders**

Returns a list of orders placed in the store. The results can be filtered by several parameters such as creation date, status, etc.

URL: `/orders`

Example Request:
```bash
curl -X GET "https://api.nuvemshop.com/v1/{{store_id}}/orders" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Optional Parameters:**

- **page:** Page number.
- **per_page:** Number of items per page.
- **status:** Filter by order status (e.g., open, closed, cancelled).
- **created_at_min:** Minimum creation date (ISO 8601 format).
- **created_at_max:** Maximum creation date (ISO 8601 format).

**Get Order Details**

Returns detailed information about a specific order, including items, shipping methods, payments, etc.

URL: `/orders/{order_id}`

Example Request:
```bash
curl -X GET "https://api.nuvemshop.com/v1/{{store_id}}/orders/{{order_id}}" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Update an Order**

Allows updating information on an existing order, such as status or customer details.  
Possible values for the status are "open", "paid", "closed", or "cancelled".

URL: `/orders/{order_id}`

Example Request:
```bash
curl -X PUT "https://api.nuvemshop.com/v1/{{store_id}}/orders/{{order_id}}" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
    "owner_note": "Need to gift wrap this order",
    "status": "paid"
}'
```

**Cancel an Order**

Cancel a specific order.

URL: `/orders/{order_id}/cancel`

Example Request:
```bash
curl --location "https://api.nuvemshop.com.br/v1/{{store_id}}/orders/{{order_id}}/cancel" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

### Summary of Order Management

- **List Orders:** Use `GET /orders` to get an overview.
- **Query Details:** Use `GET /orders/{order_id}` for detailed information.
- **Create Orders:** Use `POST /orders` to create new orders.
- **Update Orders:** Use `PUT /orders/{order_id}` to update order data.
- **Cancel Orders:** Use `DELETE /orders/{order_id}` to cancel orders.

This API provides flexibility to integrate and efficiently manage orders within external systems.

---

### Fulfillment Orders

Nuvemshop's Fulfillment Order feature allows managing order shipments when there are multiple sources (locations). It splits an order into different fulfillment orders, each representing a specific shipment with its own products, costs, and delivery methods.

**What can we do with it?**

- Query fulfillment orders associated with an order.
- Update information about shipment processing.
- Mark an order as shipped when dispatched.
- Manage multiple locations to define the origin of products.

**List Fulfillment Orders**

URL: `/v1/{store_id}/orders/{order_id}/fulfillment-orders`

Returns all fulfillment orders for the store.


**Get a Specific Fulfillment Order**

URL: `/v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}`


### Fulfillment Order Tracking Events

**Return the details of a specific Fulfillment Order.**

**Create an Event**

POST /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events

Example Request:
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

**Update a Fulfillment Order Event**

PUT /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}

Example Request:
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

**Delete an Event**

DELETE /v1/{store_id}/orders/{order_id}/fulfillment-orders/{fulfillment_order_id}/tracking-events/{fulfillment_order_tracking_event_id}
