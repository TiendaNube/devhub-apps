---
sidebar_position: 1
title: Gestão de Pedidos
---

# Gestão de Pedidos

A API da Nuvemshop oferece diversos endpoints para gerenciar pedidos. Esses recursos permitem criar, consultar, atualizar e processar pedidos, proporcionando controle total sobre o ciclo de vida de um pedido em sua loja virtual.

**A gestão dos pedidos devem ser feitas majoritariamente por webhooks.**

Os webhooks são usados para notificar sua aplicação em tempo real sobre eventos relacionados à gestão de pedidos, como a criação, atualização ou cancelamento de pedidos. Através deles, é possível automatizar processos ao receber notificações quando eventos ocorrem na loja.

No cenário detalhado a seguir, o Middleware é uma solução cuja responsabilidade de desenvolvimento é da equipe de desenvolvimento contratada. Isso significa que cabe à equipe do cliente projetar, implementar e gerenciar o Middleware, garantindo que ele atenda às necessidades específicas do sistema e esteja devidamente integrado aos demais componentes da solução.
Identificação dos pedidos

**Na Nuvemshop, existem dois identificadores de pedido:**

**NUMBER** – Exibido para os clientes em um formato amigável, porém não é aceito como identificador para integrações.
**ID do pedido** – Um identificador interno composto por 10 dígitos, utilizado oficialmente pela plataforma.

Para fins de integração, o mais adequado é utilizar o **ID do pedido interno**, pois ele garante maior precisão na comunicação entre sistemas e evita possíveis conflitos ou erros que poderiam ocorrer ao tentar usar o NUMBER, que, apesar de ser fixo, não é suportado para esse fim.

![img](../image6.png)
