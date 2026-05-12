---
sidebar_position: 3
title: Controle de uso da API
---

## Rate Limit - Controle de Uso da API

Atualmente, utilizamos o algoritmo Leaky Bucket para limitar o uso da API. 

Por padrão, o bucket tem capacidade para **40 requisições**, com uma taxa de vazão (leaky rate) de 2 requisições por segundo.

Isso significa que você pode fazer até **2 requisições por segundo** em pacotes de até **40 requisições**, sem receber o erro **429 (Too Many Requests)**.

Para monitorar o consumo da API, disponibilizamos os seguintes cabeçalhos:

- **x-rate-limit-limit**: Total de requisições permitidas em um dado período (equivalente ao tamanho do bucket).
- **x-rate-limit-remaining**: Número de requisições restantes para preencher o bucket.
- **x-rate-limit-reset**: Tempo restante, em milissegundos, para o bucket ser completamente esvaziado.

**Observação importante**: O limite de uso da API é aplicado individualmente para cada loja e aplicativo.

**Para lojas nos planos Next ou Evolution (planos superiores), o limite de taxa é multiplicado por 10, permitindo maior capacidade de requisições.**

## Filtros Gerais e Paginação

Requisições que retornam múltiplos itens **não possuem paginação habilitada por padrão**. 

Para navegar pelos resultados, é necessário usar o parâmetro **page** para especificar páginas adicionais.

Além disso, você pode personalizar o tamanho de cada página utilizando o parâmetro **per_page**, que aceita valores de até **200 itens por página**.

A numeração das páginas começa em 1. Se o parâmetro page for omitido, a requisição retornará a primeira página por padrão.

**Informações úteis:**

- **Contagem total de resultados**: O cabeçalho **x-total-count** indica a quantidade total de itens disponíveis.

```bash
x-total-count: 156
```

**Links para navegação**: O cabeçalho Link fornece os URLs para as páginas seguinte e anterior, facilitando a implementação de paginação.

Esse mecanismo permite obter os resultados de forma organizada e eficiente, mesmo em grandes conjuntos de dados.
