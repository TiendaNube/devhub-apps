---
sidebar_position: 4
title: Stock
---

## **Stock**  

La API de Stocks de Tiendanube permite la gestión de ubicaciones y niveles de stock en diferentes puntos de venta.  

Con ella, es posible crear, actualizar y consultar stocks en ubicaciones específicas, como tiendas físicas o almacenes.  

La API también ofrece la priorización de ubicaciones para definir el orden de procesamiento de pedidos, permitiendo una gestión eficiente e integrada de los inventarios.  

---

## **Crear un Nuevo Stock**  

Para crear un nuevo stock, utiliza el endpoint [POST /locations](https://tiendanube.github.io/api-documentation/resources/location).  

### **Solicitud:**

```bash
curl -X POST https://api.nuvemshop.com/v1/{{store_id}}/locations \
-H 'Authorization: Bearer {{app_token}}' \
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

### **Actualizar un Stock Existente**  

Para actualizar un stock existente, utiliza el endpoint [PUT /locations/{id}](https://tiendanube.github.io/api-documentation/resources/location#put-locationsid), reemplazando **{id}** por el ID del stock.  

#### **Solicitud:**  

```bash
curl -X PUT https://api.nuvemshop.com/v1/{{store_id}}/locations/{id} \
-H 'Authorization: Bearer {{app_token}}' \
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
    "reference": "Nuevo punto de referencia",
    "between_streets": "Entre la Calle X y la Calle Y"
  },
  "is_default": false,
  "allows_pickup": false,
  "priority": 2
}'
```

---

### **Listar Todos los Stocks**  

Para listar todos los stocks registrados, utiliza el endpoint [GET /locations](https://tiendanube.github.io/api-documentation/resources/location#get-locations).  

```bash
curl -X GET https://api.nuvemshop.com/v1/{{store_id}}/locations \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```

---

### **Modificar Prioridades de los Stocks**  

Para definir las prioridades de los stocks, utiliza el endpoint [PATCH /locations/priorities](https://tiendanube.github.io/api-documentation/resources/location#patch-locationspriorities).  

La priorización del stock tendrá un impacto directo en la cotización del envío de la tienda.  
Esto se debe a que los stocks priorizados serán considerados al momento de armar el paquete de envío.  
Los productos seleccionados según esta priorización definirán el origen del envío, afectando directamente los costos de transporte, tiempos de entrega y la experiencia final del cliente.  

#### **Solicitud:**  

```bash
curl -X PATCH https://api.nuvemshop.com/v1/{{store_id}}/locations/priorities \
-H 'Authorization: Bearer {{app_token}}' \
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

### **Definir un Stock como Predeterminado**  

Para definir un stock específico como predeterminado, utiliza el endpoint [PATCH /locations/{id}/chosen-as-default](https://tiendanube.github.io/api-documentation/resources/location#patch-locationsidchosen-as-default), reemplazando **{id}** por el ID del stock.  

#### **Solicitud:**  

```bash
curl -X PATCH https://api.nuvemshop.com/v1/{{store_id}}/locations/{id}/chosen-as-default \
-H 'Authorization: Bearer {{app_token}}' \
-H 'User-Agent: Your App Name ({{app_id}})' \
-H 'Content-Type: application/json'
```
