---
sidebar_position: 1
title: Getting Started
---

# Getting Started

Welcome! In this documentation, you will find all the resources and content to create applications and offer them to the base of merchants who are part of Nuvemshop. Whether you are a developer, partner, or just starting your journey in technology, you will find here the basic information to develop applications for Nuvemshop.

## Types of Applications

Before you start developing applications, it's essential to know what types of applications are available and understand which one fits best within the needs and limitations of your project.

### Integrated Applications

A [Integrated app](./applications/native.md) in Nuvemshop is one that operates within the context of the Merchant Dashboard, using an iframe to ensure integration and smoothness. This approach aims to offer more natural and integrated experiences for store management, improving interaction with external features and providing a more integrated experience for the merchant.

#### Requirements for Developing Integrated Applications
- Use the [Nimbus design system](./developer-tools/nimbus.md)
- Meet the [design requirements](./homologation/checklist.md)

### External Apps

[External apps](./applications/standalone.md), unlike Integrated applications that appear in the Merchant Dashboard, are standalone solutions that load outside the dashboard. They operate autonomously and can encompass a wide range of functionalities, from marketing to inventory management.

## Development Tools

### Nuvemshop API

The [Nuvemshop API](./developer-tools/nuvemshop-api.md) is a tool for interacting with our platform and expanding your application's functionalities. Before you start using our API, authenticating your application is crucial. After that, you will have access to a unique authentication access_token, allowing you to explore and use our API resources.

### App Templates

We provide [app templates](./developer-tools/templates.md) that serve as a foundation for starting and accelerating the development process. These templates are divided into two main categories: integrated and external apps. Each category has its specific templates, created to meet different needs and scenarios.

**Pre-configured Authentication** - If you are using one of our templates, the authentication process is ready to use, including the connection to Nuvemshop's product API. This significantly automates the process; follow the setup guide in the chosen template's repository, and you'll be on your way to development.

### Nexo

[Nexo](./developer-tools/nimbus.md) provides resources to facilitate communication between an external application and the Nuvemshop administrator. This interaction between the Admin and the App is established through messages, following the observer pattern, allowing event subscription and unsubscription.

### Nimbus (Requirement for Integrated applications)

[Nimbus is Nuvemshop's open-source design system](./developer-tools/nimbus.md). With components validated in Nuvemshop products, optimized patterns and templates, documentation with examples, and synchronization between the UI kit in Figma and the code, Nimbus enables developers and designers to create consistent, accessible, and high-performance interfaces. You can use it to build your applications within Nuvemshop's ecosystem or for your own project, considering the current license.
