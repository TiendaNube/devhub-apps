---
sidebar_position: 1
title: Visión General
---

## Guía de Integración  

En esta guía, abordaremos la forma práctica de integrar tu sistema ERP o PIM con la plataforma Tiendanube. Aquí encontrarás instrucciones para sincronizar información crítica como pedidos, productos y stocks, garantizando eficiencia y automatización en las operaciones de back office.  

Esta guía abarca:  

- **Gestión de productos y variaciones**: Registro, actualización y control de stock.  
- **Sincronización de pedidos**: Procesamiento automatizado mediante webhooks.  
- **Gestión de stock y facturas**: Control eficiente de niveles de stock y emisión de facturas.  

Incluimos ejemplos en cURL con encabezados y detalles de los endpoints para facilitar tu implementación.  
Ideal para empresas que buscan una integración rápida y confiable, esta guía ayuda a optimizar procesos y mejorar la operación de tu e-commerce.  

### Resumen de la guía  

**1. Creación de Aplicación**  
- Proceso para crear el perfil de un socio en Tiendanube y conectar la aplicación con la plataforma.

**Enlaces útiles:**  

- [Cómo crear una aplicación en Tiendanube](https://ayuda.tiendanube.com/es_AR/socios-tecnologicos/como-creo-una-aplicacion-para-tiendanube)  
- [Documentación para desarrolladores](https://dev.nuvemshop.com.br/en/docs/applications/overview)  

---

### **2. Instalación y Onboarding**  
- Guía para crear una experiencia de instalación eficiente para apps públicas en la tienda de aplicaciones.  
- Enfoque en la concesión de permisos y la vinculación entre tiendas y ERPs.  

**Enlaces útiles:**  
- [Guía de Instalación](https://tiendanube.github.io/api-documentation/guides/installation)  
- [Autenticación](https://tiendanube.github.io/api-documentation/authentication)  

---

### **3. Stocks y Depósitos (Locations)**  
- Gestión de stocks distribuidos en diferentes depósitos.  

**Recursos por plan:**  
- Freemium/Plan A: 1 depósito  
- Plan B: 2 depósitos  
- Plan C: 3 depósitos  
- Enterprise: ilimitado  

**Enlaces útiles:**  
- [Multi-Inventory](https://tiendanube.github.io/api-documentation/multi-inventory-guides)  
- [API Locations](https://tiendanube.github.io/api-documentation/authentication)  

---

### **4. Productos y Variaciones**  
- Gestión de productos, categorías y variaciones, permitiendo sincronización completa entre Tiendanube y el ERP.  

**Flujo básico:**  
1. Sincronizar productos/categorías creados.  
2. Actualizar stock, precio y atributos.  
3. Crear variaciones con SKU, nombre y stock inicial.  

**Enlaces útiles:**  
- [Productos](https://tiendanube.github.io/api-documentation/resources/product)  
- [Variaciones](https://tiendanube.github.io/api-documentation/resources/product-variant)  
- [Imágenes de Productos](https://tiendanube.github.io/api-documentation/resources/product-image)  
- [Categorías](https://tiendanube.github.io/api-documentation/resources/category)  

---

### **5. Pedidos**  
- Captura y gestión de pedidos para control de stock, facturación y logística.  

**Funciones principales:**  
1. Sincronizar pedidos existentes y nuevos.  
2. Actualizar estado de pago y envío.  
3. Generar facturas y reintegrar stock en cancelaciones.  

**Enlaces útiles:**  
- [Pedidos](https://tiendanube.github.io/api-documentation/resources/order)  
- [Webhooks de Pedidos](https://tiendanube.github.io/api-documentation/resources/webhook)  

---

### **6. Clientes**  
- Sincronización de información de clientes entre Tiendanube y el sistema de gestión.  

**Funciones:**  
1. Capturar lista de clientes ya existentes.  
2. Crear y actualizar registros de clientes en el ERP y en Tiendanube.  

**Enlaces útiles:**  
- [Clientes](https://tiendanube.github.io/api-documentation/resources/client)  

---

### **7. Recursos Adicionales**  
- **Buenas prácticas:**  
  - [JSON y Límites de Tasa](https://tiendanube.github.io/api-documentation/intro#just-json)  
  - [Paginación](https://tiendanube.github.io/api-documentation/intro#pagination)  
  - [Postman Collection](https://tiendanube.github.io/api-documentation/utils/postman-collections)  

---

### **8. Checklist de Homologación**  
- Checklist detallado para la homologación de aplicaciones en la App Store:
  - [Checklist de Homologación](https://docs.google.com/spreadsheets/d/1Pf-6Bbr8ebQGNoqkMuyK5DylP66n8FLInYbbJVRyb5Y/edit?gid=1428335670#gid=1428335670)
