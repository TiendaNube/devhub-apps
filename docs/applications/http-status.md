---
title: Padrões HTTP Status
---

# Padrões HTTP Status

Esta documentação visa definir os padrões de resposta que as nossas APIs utilizam. Seguimos as especificações globais do protocolo HTTP, garantindo que a integração com os nossos serviços seja previsível, eficiente e fácil de depurar.

## 🔹 Por que a padronização é importante?

A utilização correta dos códigos de status HTTP não é apenas uma "boa prática", mas um pilar fundamental da arquitetura REST:

* **Interoperabilidade:** Clientes HTTP, proxies e balanceadores de carga entendem estes códigos nativamente.
* **Facilidade de Debugging:** Identificar a causa de um erro (ex: falta de permissão *vs*. recurso inexistente) acelerando a análise por base apenas pelo código.
* **Cache e Performance:** Muitos sistemas de cache decidem se devem armazenar uma resposta com base no código de status (ex: 200 é cacheável, já o 500 não é).
* **Redução de Suporte:** APIs previsíveis geram menos dúvidas e chamados técnicos.

## 🔹 Categorias de Códigos

As respostas são agrupadas em cinco classes, identificadas pelo primeiro dígito:

| Classe | Significado | Descrição |
| :---- | :---- | :---- |
| **2xx** | **Sucesso** | A ação foi recebida, compreendida e aceita com sucesso. |
| **3xx** | **Redirecionamento** | São necessárias ações adicionais para completar o pedido. |
| **4xx** | **Erro do Cliente** | O pedido contém sintaxe incorreta ou não pode ser processado devido a um erro do integrador. |
| **5xx** | **Erro do Servidor** | O servidor falhou ao processar um pedido aparentemente válido. |

## 🔹 Códigos mais utilizados na nossa API

### Sucesso (2xx)

* **200 OK:** O pedido foi bem-sucedido. O corpo da resposta contém os dados solicitados.
* **201 Created:** O recurso foi criado com sucesso. Geralmente retornado após um `POST`.
* **204 No Content:** O pedido foi processado com sucesso, mas não há conteúdo para retornar (comum em `DELETE` ou `PUT`).

### Erros do Cliente (4xx)

* **400 Bad Request:** A requisição está malformada ou faltam campos obrigatórios.
* **401 Unauthorized:** Falha na autenticação. A `API Key`, ou `Token`, é inválido ou expirou.
* **403 Forbidden:** O cliente está autenticado, mas não tem permissão para acessar ao recurso específico.
* **404 Not Found:** O recurso solicitado (ex: um sku de produto) não existe no servidor.
* **422 Unprocessable Entity:** A sintaxe está correta, mas existem erros semânticos (ex: falha na validação de regras de negócio).
* **429 Too Many Requests:** O limite de taxa (Rate Limit) foi excedido.

### Erros do Servidor (5xx)

* **500 Internal Server Error:** Ocorreu um erro inesperado do lado do servidor.
* **503 Service Unavailable:** O servidor está temporariamente em manutenção ou sobrecarregado.

## 🔹 Boas Práticas de Implementação

1. **Não utilize apenas 200 OK:** Evite retornar `200 OK` com uma mensagem de erro no corpo (`{ "error": true }`). Isso confunde as ferramentas de monitorização e bibliotecas cliente.
2. **Idempotência:** Garanta que pedidos `GET`, `PUT` e `DELETE` possam ser repetidos sem causar efeitos colaterais indesejados, mantendo a consistência dos códigos de retorno.
3. **Logs de Diagnóstico:** Em caso de erros `5xx`, forneça sempre um `Request-ID` no cabeçalho da resposta para facilitar o rastreio interno.
