---
sidebar_position: 4
title: Custom Fields in Product Variants
---

### Managing Custom Fields in Product Variants

Nuvemshop provides endpoints to manage custom fields associated with product variants. These fields allow you to add additional information to each variant, enriching the product data with specific properties that can also be used as filters.

**List Custom Fields for a Variant**

Retrieve all custom fields associated with a specific product variant.

URL: `/products/variants/custom-fields`

Example Request:
```bash
curl -X GET "https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

**Create a Custom Field**

Add a new custom field to a product variant.

URL: `/products/variants/custom-fields`

Example Request:
```bash
curl -X POST "https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields" \
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

**Update a Custom Field**

Update an existing custom field's value.

URL: `/products/variants/custom-fields/{{custom-field_id}}`

Example Request:
```bash
curl -X PUT "https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields/{{custom-field_id}}" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json' \
-d '{
  "value": "polyester"
}'
```

**Delete a Custom Field**

Remove a custom field from a variant.

URL: `/products/{product_id}/variants/{variant_id}/custom_fields/{custom_field_id}`

Example Request:
```bash
curl -X DELETE "https://api.nuvemshop.com/v1/{{store_id}}/products/variants/custom-fields/{custom_field_id}./variants/{{variant_id}}/custom_fields/{{custom_field_id}}" \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

### Summary of Operations

- **List Custom Fields**: Use `GET /products/variants/custom-fields` to view all custom fields for a variant.
- **Create Custom Fields**: Add new fields with `POST /products/variants/custom-fields`.
- **Update Custom Fields**: Modify existing fields with `PUT /products/variants/custom-fields/{custom_field_id}`.
- **Delete Custom Fields**: Remove fields with `DELETE /products/variants/custom-fields/{custom_field_id}`.
