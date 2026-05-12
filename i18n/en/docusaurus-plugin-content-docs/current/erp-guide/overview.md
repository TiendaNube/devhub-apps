---
sidebar_position: 1
title: Overview
---

# Integration Guide

In this guide, we will cover the practical way to integrate your ERP or PIM system with the Nuvemshop platform. Here, you will find instructions to synchronize critical information such as orders, products, and inventories, ensuring efficiency and automation in back-office operations.

This guide covers:

- **Product and variation management**: Registration, updates, and stock control.
- **Order synchronization**: Automated processing using webhooks.
- **Inventory and invoice management**: Efficient control of stock levels and issuing invoices.

We include examples in cURL with headers and endpoint details to make your implementation easier. Ideal for businesses seeking fast and reliable integration, this guide helps optimize processes and improve your e-commerce operation.

# Guide Summary

**1. Application Creation**
- Process to create a partner profile on Nuvemshop and connect the application with the platform.

Useful links:

- [How to create an application on Nuvemshop](https://ayuda.tiendanube.com/es_AR/socios-tecnologicos/como-creo-una-aplicacion-para-tiendanube)
- [Developer documentation](https://dev.nuvemshop.com.br/en/docs/applications/overview)


**2. Installation and Onboarding**
- Guide to create an efficient installation experience for public apps on the app store.
- Focus on granting permissions and linking between stores and ERPs.

Useful links:

[Installation Guide](https://tiendanube.github.io/api-documentation/guides/installation)

[Authentication](https://tiendanube.github.io/api-documentation/authentication)


**3. Inventory and Locations**

- Management of inventories distributed across different locations.

- Features by plan:
    - Freemium/Plan A: 1 location
    - Plan B: 2 locations
    - Plan C: 3 locations
    - Enterprise: unlimited

Useful links:

 [Multi-Inventory](https://tiendanube.github.io/api-documentation/multi-inventory-guides)
 [API Locations](https://tiendanube.github.io/api-documentation/authentication)

 **4. Products and Variations**
- Management of products, categories, and variations, allowing full synchronization between Nuvemshop and the ERP.

- Basic flow:
    - Synchronize created products/categories.
    - Update stock, price, and attributes.
    - Create variations with SKU, name, and initial stock.

Useful links:
 [Products](https://tiendanube.github.io/api-documentation/resources/product)
 [Variations](https://tiendanube.github.io/api-documentation/resources/product-variant)
 [Product Images](https://tiendanube.github.io/api-documentation/resources/product-image)
 [Categories](https://tiendanube.github.io/api-documentation/resources/category)

**5. Orders**
- Capture and process orders for inventory control, billing, and logistics.
- Key features:
    - Synchronize existing and new orders.
    - Update payment and shipping status.
    - Generate invoices and reintegrate stock on cancellations.

Useful links:
 [Orders](https://tiendanube.github.io/api-documentation/resources/order)
 [Order Webhooks](https://tiendanube.github.io/api-documentation/resources/webhook)

**6. Customers**
- Synchronization of customer information between Nuvemshop and the management system.
- Features:
    - Capture existing customer list.
    - Create and update customer records in the ERP and Nuvemshop.

Useful links:
 [Customers](https://tiendanube.github.io/api-documentation/resources/client)

**7. Additional Resources**
- Best practices:
    - [JSON and Rate Limits](https://tiendanube.github.io/api-documentation/intro#just-json)
    - [Pagination](https://tiendanube.github.io/api-documentation/intro#pagination)
    - [Postman Collection](https://tiendanube.github.io/api-documentation/utils/postman-collections)

**8. Certification Checklist**
- Detailed checklist for app certification in the app store:
    - [Certification Checklist](https://docs.google.com/spreadsheets/d/1Pf-6Bbr8ebQGNoqkMuyK5DylP66n8FLInYbbJVRyb5Y/edit?usp=sharing)
