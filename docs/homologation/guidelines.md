---
sidebar_position: 5
title: Boas Práticas
---

## Sessão: Boas práticas

Antes de iniciar o desenvolvimento de um aplicativo, é muito importante que você leia atentamente as documentações da API para garantir um bom desenvolvimento.
Abaixo preparamos um material com um guia de boas práticas para que você garanta que, no momento da homologação do seu aplicativo, estes itens estejam sendo seguidos a fim de garantir uma boa qualidade técnica e de usabilidade.

* **Utilização de paginação**
    De grande importância, principalmente visando merchants que possuem grande gama de informações a serem retornadas nas requisições.
    Recomendamos a leitura da documentação de 'Pagination'.

* **O User-Agent do cabeçalho deve conter o nome da app e o e-mail.** Isso garante segurança e clareza dos registros gerados pela sua aplicação. 
    Recomendamos a leitura da documentação de ‘Identify your app’.

* **Utilização de webhook para garantir quantidade de requisições de maneira adequada**
    Evitar múltiplas requisições da mesma operação, em por exemplo um curto espaço de tempo.
    Supondo que, seu aplicativo necessite requisitar o endpoint de produtos e/ou pedidos, é recomendado a utilização do webhook de produtos criados e notificados, para que assim ocorram requisições na API somente de fato quando houver um disparo de evento - evitando assim, requisições repetitivas sem que tenha ocorrido alguma alteração na base do merchant.

* **Garantir a utilização dos escopos e permissões necessárias**
    É importante que o diagrama enviado com os escopos que serão utilizados pelo seu aplicativo, sejam os mesmos dos quais os merchants necessitam “concordar” para utilização.
    Deve-se atentar também que esta utilização deve ser consciente e requer de fato, somente os escopos que cabem a necessidade de funcionamento do aplicativo.

* **O idioma do aplicativo deve estar alinhado com as geografias selecionadas para a publicação.**

* **Atente-se ao rate limit de requisições**
    A API possui implementado um rate limit para controlar o tráfego e garantir a estabilidade do serviço. Por padrão, este limite permite processar 2 requisições por segundo. Isso significa que se, enviar 20 requisições simultaneamente, elas serão processadas neste limite, tomando aproximadamente 10 segundos para completar-se todas.
    É importante destacar que este limite se aplica para cada merchant e aplicação que realiza as requisições. Porém, vale destacar que caso o merchant esteja no plano Next, o limite base se multiplica por 10, permitindo assim um número maior de solicitações.
    No response é retornado headers que passam a informado sobre o limite disponível e utilizado:
    * `x-rate-limit-limit`: indicamos o tamanho limite.
    * `x-rate-limit-remaining`: quantas requisições faltam para completar o limite.
    * `x-rate-limit-reset`: em quanto tempo (milisegundos) estará com o limite disponível novamente.