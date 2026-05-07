---
sidebar_position: 1
title: Visão Geral
---

# Guia de Integração 

Neste guia, iremos abordar a forma prática para integrar seu sistema ERP ou PIM com a plataforma Nuvemshop. Aqui, você encontrará instruções para sincronizar informações críticas como pedidos, produtos e estoques, garantindo eficiência e automação nas operações de back office.

Este guia abrange:

- **Gerenciamento de produtos e variações**: Cadastro, atualização e controle de estoque.
- **Sincronização de pedidos**: Processamento automatizado com uso de webhooks.
- **Gestão de estoques e faturas**: Controle eficiente de níveis de estoque e emissão de invoices.

Incluímos exemplos em cURL com cabeçalhos e detalhes dos endpoints para facilitar sua implementação. 
Ideal para empresas que buscam integração rápida e confiável, este guia ajuda a otimizar processos e melhorar a operação do seu e-commerce.

# Resumo do guia

**1. Criação de Aplicação**
- Processo para criar o perfil de um parceiro na Nuvemshop e conectar a aplicação com a plataforma.

Links úteis:

- [Como criar uma aplicação na Nuvemshop](https://ayuda.tiendanube.com/es_AR/socios-tecnologicos/como-creo-una-aplicacion-para-tiendanube)
- [Documentação para desenvolvedores](https://dev.nuvemshop.com.br/en/docs/applications/overview)


**2. Instalação e Onboarding**
- Guia para criar uma experiência de instalação eficiente para apps públicas no appstore.
- Foco na concessão de permissões e vinculação entre lojas e ERPs.

Links úteis:

[Guia de Instalação](https://tiendanube.github.io/api-documentation/guides/installation)

[Autenticação](https://tiendanube.github.io/api-documentation/authentication)


**3. Estoques e Depósitos (Locations)**

- Gerenciamento de estoques distribuídos em diferentes depósitos.

- Recursos por plano:
    - Freemium/Plano A: 1 depósito
    - Plano B: 2 depósitos
    - Plano C: 3 depósitos
    - Enterprise: ilimitado

Links úteis:

 [Multi-Inventory](https://tiendanube.github.io/api-documentation/multi-inventory-guides)
 [API Locations](https://tiendanube.github.io/api-documentation/authentication)

 **4. Produtos e Variações**
- Gerenciamento de produtos, categorias e variações, permitindo sincronização completa entre Nuvemshop e o ERP.

- Fluxo básico:
    - Sincronizar produtos/categorias criados.
    - Atualizar estoque, preço e atributos.
    - Criar variações com SKU, nome e estoque inicial.

Links úteis:
 [Produtos](https://tiendanube.github.io/api-documentation/resources/product)
 [Variações](https://tiendanube.github.io/api-documentation/resources/product-variant)
 [Imagens de Produtos](https://tiendanube.github.io/api-documentation/resources/product-image)
 [Categorias](https://tiendanube.github.io/api-documentation/resources/category)

**5. Pedidos**
- Captura e tratamento de pedidos para controle de estoque, faturamento e logística.
- Funcionalidades principais:
    - Sincronizar pedidos existentes e novos.
    - Atualizar status de pagamento e envio.
    - Gerar notas fiscais e reintegrar estoque em cancelamentos.

Links úteis:
 [Pedidos](https://tiendanube.github.io/api-documentation/resources/order)
 [Webhooks de Pedidos](https://tiendanube.github.io/api-documentation/resources/webhook)

**6. Clientes**
- Sincronização de informações de clientes entre Nuvemshop e o sistema de gestão.
- Funcionalidades:
    - Capturar lista de clientes já existentes.
    - Criar e atualizar registros de clientes no ERP e na Nuvemshop.

Links úteis:
 [Clientes](https://tiendanube.github.io/api-documentation/resources/client)

**7. Recursos Adicionais**
- Práticas recomendadas:
    - [JSON e Limites de Taxa](https://tiendanube.github.io/api-documentation/intro#just-json)
    - [Paginação](https://tiendanube.github.io/api-documentation/intro#pagination)
    - [Postman Collection](https://tiendanube.github.io/api-documentation/utils/postman-collections)

**8. Checklist de Homologação**
- Checklist detalhado para homologação de aplicativos no appstore:
    - [Checklist de Homologação](https://docs.google.com/spreadsheets/d/1Pf-6Bbr8ebQGNoqkMuyK5DylP66n8FLInYbbJVRyb5Y/edit?gid=1428335670#gid=1428335670)
