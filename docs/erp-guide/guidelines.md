---
sidebar_position: 2
title: Boas Práticas
---


- ### Direcionamentos pós instalação

A experiência pós-instalação é determinante para a retenção do merchant. Em soluções complexas como ERPs, a clareza nos primeiros passos é indispensável.

O redirecionamento deve ser fluido, eliminando fricções para usuários que exploram a ferramenta pela primeira vez.

Para aplicativos que requerem uma configuração guiada ou contato comercial, certifique-se de que a página de destino contenha:

- ❖ **Onboarding Imediato:** Após a instalação, direcione o usuário a uma Landing Page intuitiva.
- ❖ **Suporte Assistido:** Caso o modelo exija contato direto, a tela de destino deve ser objetiva, apresentando o passo a passo para o cadastro ou geração de credenciais.
- ❖ **Guia de Integração:** Instruções visuais e claras até a conclusão da configuração final.

Recomendamos a leitura do nosso [guia sobre Landing Page](https://dev.nuvemshop.com.br/docs/applications/landing-page) e sua importância.

- ### Adaptação MultiCD

É de extrema importância que o aplicativo esteja adaptado ao [MultiCD](https://tiendanube.github.io/api-documentation/multi-inventory-guides) e consumindo as APIs, isso garantirá o uso de múltiplos centros de distribuição.

Dar suporte a estoques em vários locais significa:

- Rastreamento de estoque em vários locais.
- Poder escolher a prioridade dos locais de onde o estoque será retirado para um pedido.
- Permitir envio a partir de vários locais.
- Devolva o estoque aos locais apropriados caso um pedido seja cancelado.
- Acompanhe a movimentação de estoque em cada local.

Durante o processo de compra, se houver um local capaz de entregar todo o pedido, o estoque será enviado a partir deste local. Caso um único local não consiga atender a todo o pedido, é divido a entrega entre diferentes locais, criando múltiplos centros de distribuição.

Quando implementado a possibilidade de gerenciar múltiplos estoques, a forma correta de enviar o código de rastreamento será enviá-lo `POST /orders/\{id\}/fulfillment-orders/\{id\}/fulfill` no payload.

Como um pedido pode ter múltiplas remessas, precisa-se saber a qual remessa associar o código de rastreamento. Imagine um pedido com três remessas de três locais diferentes, e foi enviado a `POST /orders/\{id\}/fulfill` um código de rastreamento. A qual remessa deve-se atribuí-lo? Para que o aplicativo não pare de funcionar, precisa-se atribuí-lo a um único Pedido de Entrega, e assim é decidido atribuí-lo ao primeiro.

Se a loja não tiver múltiplos locais, não há problema, pois só pode haver uma remessa por venda. Mas se o pedido tiver mais de um local, o código de rastreamento enviado `POST /orders/\{id\}/fulfill` pode ter sido destinado a uma entrega diferente da primeira, causando confusão tanto para os lojistas quanto para os consumidores.

Por isso, decidimos introduzir o conceito de aplicativos "prontos para múltiplos estoques".

- ### Uso de webhook

Para garantir uma operação saudável e em conformidade com as boas práticas da Nuvemshop, é fundamental que sua aplicação esteja preparada para reagir a mudanças de status. O uso de [webhooks](https://tiendanube.github.io/api-documentation/resources/webhook) não é apenas uma recomendação, mas uma obrigatoriedade para manter a integridade da integração.

#### 1. Webhooks Obrigatórios

O monitoramento dos eventos abaixo é essencial para o fluxo de uso dos aplicativos:

- ``app/suspended``  **(Aplicativo Suspenso):** Indica que o aplicativo foi desativado temporariamente.
- ``app/uninstalled`` **(Aplicativo Desinstalado):** Indica que o lojista removeu a integração, desinstalando-o.

#### 2. Por que implementar o `app/suspended`?

Ouvir este evento permite que sua plataforma conheça o estado exato da loja em tempo real. Ao receber este alerta, sua aplicação deve:

- **Cessar Requisições:** Interromper imediatamente qualquer chamada à API para aquela loja específica.
- **Evitar Erros:** Impedir que sua infraestrutura execute requisições inválidas que resultariam em erros de autenticação.
- **Ações Internas:** Realizar os procedimentos de limpeza ou pausa de serviços agendados no seu banco de dados.

#### 3. Boas Práticas de uso do webhook

- **Resiliência:** Certifique-se de que seu endpoint de webhook responda com um status `200 OK` rapidamente para evitar retentativas desnecessárias por parte do servidor de origem.
- **Log de Eventos:** Mantenha um registro de quando esses eventos foram recebidos para facilitar auditorias técnicas.