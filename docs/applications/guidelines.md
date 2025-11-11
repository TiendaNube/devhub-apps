---
title: Diretrizes de Publicação
---

# Diretrizes de Publicação para Parceiros da Nuvemshop/Tiendanube


Este documento tem como objetivo fornecer um guia completo e detalhado para parceiros que desejam desenvolver e publicar aplicativos na loja de aplicativos da **Nuvemshop/Tiendanube**. Ele estabelece as diretrizes e os requisitos essenciais que devem ser seguidos durante a fase de homologação, garantindo que os aplicativos sejam seguros, confiáveis e ofereçam uma experiência de alta qualidade para os *merchants* e os *consumers*.  

As informações aqui apresentadas foram compiladas a partir da documentação oficial da Nuvemshop e da Tiendanube, com o objetivo de oferecer clareza e concisão, seguindo um modelo de documentação de referência para o ecossistema de e-commerce. As fontes utilizadas são a [Nuvemshop API](https://dev.nuvemshop.com.br/docs/developer-tools/nuvemshop-api) e a [Tiendanube API](https://tiendanube.github.io/api-documentation/intro).


 
## 1. Requisitos Gerais para Todos os Apps

As diretrizes nesta seção aplicam-se a todos os apps publicados na loja de aplicativos da Nuvemshop. Dependendo da configuração do app, ele também poderá precisar atender aos requisitos específicos detalhados nas seções seguintes.

### 1.1. Configurações de Apps Proibidas e Restritas
Alguns tipos de apps não são permitidos na loja de aplicativos da Nuvemshop e outros devem ter sua visibilidade limitada.  

#### Tipos de Apps Proibidos:
- **Apps que não utilizam as APIs da Nuvemshop:** Apps que não utilizam as APIs públicas da Nuvemshop não são permitidos. Os lojistas não devem ser obrigados a configurar apps customizados como parte da funcionalidade do app.
- **Apps que falsificam dados:** Apps não devem violar o Termos e Condições Gerais do Programa de Parceiros da Nuvemshop. Seu app deve usar apenas informações verdadeiras em pop-ups e notificações.
- **Apps que processam pagamentos fora do checkout da Nuvemshop:** A Nuvemshop não pode garantir a segurança de um pedido processado por um checkout externo. Apps que ignoram o checkout ou processamento de pagamentos são proibidos.
- **Múltiplos apps com funcionalidades duplicadas:** Um app não pode ser idêntico a outro app que você já publicou.
- **Apps que principalmente compartilham dados de lojistas:** Apps que compartilham dados de lojistas com terceiros precisam de consentimento prévio por escrito da Nuvemshop e devem cumprir com os Termos da API. É importante que siga a diretriz de privacidade.

## 2. Instalação e Configuração

Estes requisitos garantem que os lojistas possam configurar e começar a usar seu app rapidamente.

### 2.1. Permissões (Escopos)
As permissões são os níveis de acesso que seu app tem aos dados de uma loja através da API. A lista de permissões solicitadas é exibida ao merchant na página de concessão de acesso do OAuth.

- Seu app só terá acesso aos escopos de permissões que são estritamente necessários para a sua funcionalidade.

### 2.2. Fluxos de Configuração e Merchant
- Os apps devem ser instalados e iniciados apenas nos serviços da Nuvemshop. Seu app não deve solicitar a entrada manual de um URL da loja durante a instalação.
- Para a segurança do lojista, seu app não deve usar janelas pop-up para funcionalidades essenciais, como a execução do OAuth.

## 3. Funcionalidade e Qualidade
Para que seu app tenha sucesso, ele deve oferecer uma experiência consistente e positiva para os merchant.

### 3.1. Interface do Usuário (UI)
- Seu app deve ser totalmente funcional através de uma UI, sem exibir erros como 404, 500 ou 300.
- Em caso de desenvolvimento de uma solução embedada seu app deve seguir os [guias de design da Nuvemshop](https://dev.nuvemshop.com.br/docs/design-guidelines/overview), como a biblioteca de componentes e o guia de estilo, para uma experiência coesa dentro do painel do lojista.
### 3.2. Cobrança
A Nuvemshop oferece um sistema de cobrança gerenciado baseado em API para diferentes tipos de cobrança de apps. Isso facilita para os lojistas acompanhar seus pagamentos, pois a cobrança é feita através do mesmo sistema de sua assinatura da Nuvemshop.
- Recomendamos que seu aplicativo use a **API de Cobrança da Nuvemshop** para cobrar os lojistas, caso o modelo de cobrança se adeque. 
- Seu app deve permitir que os lojistas façam upgrade e downgrade de seus planos de preços sem ter que contatar o suporte ou reinstalar o app.
### 3.3. Estado do App
- Seu app deve ser completo e testável. Não deve haver bugs na interface, problemas de exibição ou páginas de erro que impeçam a equipe de revisão de testar o app.
- Se seu app sincroniza dados entre a Nuvemshop e uma plataforma externa, ele deve garantir que todos os dados estejam consistentes.
- Apps que não refletem mais a funcionalidade principal original submetida serão reavaliados e precisarão ser reenviados para uma nova revisão.

## 4. Desempenho do App
Para que os merchant sejam bem-sucedidos, suas lojas online devem ter velocidade e experiência de usuário de primeira classe.
- Apps que afetam o frontend da loja (a vitrine) devem ter um impacto mínimo no desempenho.
- Apps que usam webhooks para sincronizar dados precisam garantir que a sincronização seja eficiente e não sobrecarregue os recursos da loja.


## 5. Anúncio do App na Loja
O anúncio do seu app é o cartão de visitas para os lojistas. Ele precisa ser **claro, conciso e responder diretamente às perguntas** que um usuário em potencial possa ter. Para garantir que todas as informações essenciais estejam lá, destaque as seguintes seções obrigatórias no perfil do app:  

* **O que é o aplicativo?**
  - Comece com uma descrição direta e objetiva. Explique o problema que o seu app resolve e para quem ele é destinado. Use uma linguagem simples para que o lojista entenda rapidamente o valor da sua solução.
* **Como o aplicativo funciona?**
  - Descreva o fluxo de uso de forma clara, passo a passo. Você pode usar listas ou pequenos parágrafos para mostrar como o lojista interage com o app, desde a instalação até o uso diário.
* **Quais são as funcionalidades do aplicativo?**
  - Liste as principais funcionalidades do app de forma organizada. Use bullet points ou tópicos para facilitar a leitura. Destaque os recursos que mais se conectam com o problema que o app resolve.
* **Vantagens de instalar o aplicativo**
  - Foque nos benefícios. Em vez de apenas listar recursos, explique o que o lojista ganha ao usar o seu app. Por exemplo: "economize tempo", "aumente suas vendas" ou "melhore a experiência do cliente".
* **Como integrar o aplicativo**
  - Forneça instruções simples para a integração. Se o processo for automático, diga isso. Se houver passos manuais, descreva-os de forma clara para que o lojista se sinta seguro e consiga fazer a integração sem dificuldades.
* **Preços e planos para lojistas**
  - Seja transparente sobre a sua estrutura de preços. Explique os diferentes planos, o que cada um inclui e se há um período de teste gratuito. A clareza aqui evita surpresas e ajuda na decisão do lojista.
* **Suporte ao lojista**
  - Deixe claro como o lojista pode entrar em contato para tirar dúvidas ou resolver problemas. Inclua canais de suporte como e-mail, chat ou uma central de ajuda (FAQ). Mostrar que há um suporte confiável aumenta a confiança no seu produto.  

Essas seções garantem que seu anúncio seja completo e responda a todas as dúvidas que um lojista pode ter antes de instalar o seu aplicativo.

### 5.1. Informações Básicas do App
* **Nome do App:** O nome do app não pode incluir marcas registradas da Nuvemshop/tiendanube e deve ter 30 caracteres ou menos. Ele deve começar com um termo ou marca únicos.
  - Ex: Nube, nuvem.
* **Ícone do App:** O ícone deve ser no formato JPEG ou PNG, com dimensões de 1200x1200px. Não deve conter texto, screenshots ou fotografias. O logo não deve tocar as bordas.  

* **Categorização do App:** Selecione a categoria principal que melhor descreve a funcionalidade do seu app.

## 6. Segurança e Dados
A segurança é uma parte crítica de qualquer negócio online, e o não cumprimento dos requisitos de segurança impactará diretamente na disponibilidade do seu app.
### 6.1. Segurança
- Seu app deve ter um certificado SSL/TLS válido e sem erros.
- Seu app deve proteger os iframes e impedir que domínios externos usem o app em um iframe.
- Seu app deve se proteger contra vulnerabilidades de segurança web comuns.
- Seu app deve usar o OAuth para autenticação.


### 6.2. Dados e Privacidade do Usuário
- Se seu app coleta, armazena, processa ou compartilha dados pessoais, é sua responsabilidade garantir a conformidade com as leis de privacidade.
- Todos os apps públicos devem assinar webhooks obrigatórios para receber solicitações de exclusão de dados dos lojistas.


## 7. Suporte
Após a submissão, você deve oferecer suporte aos merchant que usam seu app.  

- Você deve ter um endereço de e-mail que os lojistas possam usar para entrar em contato com você.
- As informações de contato de suporte devem ser fáceis de encontrar e incluir instruções claras e específicas sobre como seu app se integra à Nuvemshop.
- **Suporte Multilíngue:** É obrigatório (e, consequentemente, vai trazer qualidade do app para o merchant) é que o suporte comporte a linguagem do país onde o app será disponibilizado. Por exemplo: Um app desenvolvido no Brasil, mas que será disponibilizado na Argentina, é importante ter suporte em espanhol.


## 8. Requisitos Específicos para Certas Configurações de Apps
Se o seu app se encaixa em uma das seguintes categorias, ele deve atender a esses requisitos adicionais.
### 8.1. Apps para Loja Online
Se o seu app modifica a vitrine da loja ou o tema do lojista, você deve usar as extensões de app de tema.
- O app deve permitir que o lojista adicione, reposicione ou remova blocos de app no editor de tema.
- Os blocos de app devem ser responsivos ao tamanho da seção em que são adicionados.
### 8.2. Apps Incorporados (Embedded Apps)
Um app embarcado usa extensões de app e bibliotecas para que os lojistas possam acessar seus recursos diretamente no painel de administração da Nuvemshop.
- Seu app deve usar a biblioteca oficial da Nuvemshop (Nuvemshop App Bridge) para garantir uma experiência consistente.
- O app deve ter um ícone de navegação que atenda aos seguintes requisitos: 16x16px no formato SVG, um único caminho de cor e fundo transparente.


## 9. Instruções para Homologação do App
Nesta seção, você deve fornecer instruções detalhadas sobre como testar seu app durante a revisão.
- Forneça credenciais de login se o seu app se integrar com plataformas de terceiros.
- Inclua um screencast que demonstre o processo de configuração e todas as funcionalidades do app, com instruções passo a passo. O screencast deve ser em **português ou incluir legendas em português**.


## 10. Política de Homologação e Revisão de Apps
Esta seção estabelece as regras e os procedimentos que regem o processo de análise e aprovação de apps, garantindo a integridade e a eficiência da fila de homologação. Isso inclui a especificação dos pontos a serem revisados, detalhados em uma checklist para os casos dos apps de ERP, Shipping e Payments, garantindo a integridade e a eficiência da fila de homologação.
### 10.1. Submissão de Aplicativos em Desenvolvimento
O processo de homologação é destinado a aplicativos **completos e prontos para uso**. Aplicativos que forem submetidos e, durante a análise, forem identificados como estando em fase de desenvolvimento ou incompletos, serão **removidos da fila atual**. O parceiro será notificado e precisará reiniciar o processo de submissão somente após a conclusão do desenvolvimento do app.
### 10.2. Falta de Resposta às Solicitações da Equipe de Revisão
A comunicação é essencial durante a etapa de homologação. Caso a equipe de homologação da Nuvemshop tente entrar em contato para solicitar informações, esclarecimentos ou ajustes e não receba uma resposta em até 5 dias, o aplicativo será **removido da fila de homologação**. Será necessário que o parceiro retorne ao ticket quando ele tiver concluído o processo, pois isso reingressará o aplicativo na fila. Isso ajuda a evitar atrasos para outros parceiros.
### 10.3. Consequências por Falha na Implementação de Ajustes
No processo de homologação, é imprescindível que os ajustes solicitados pela equipe técnica sejam devidamente implementados antes da revalidação do aplicativo. 

Caso o desenvolvedor ou responsável pelo app informe que os ajustes foram realizados, mas, ao ser submetido à nova análise, seja constatado que nenhuma modificação foi efetuada ou que os pontos críticos permanecem inalterados, o aplicativo será considerado **inapto**. Nessa circunstância, o app será removido da fila atual de homologação e reposicionado no final da fila, sendo necessário reiniciar o processo de validação desde sua etapa inicial. 

Essa medida visa garantir a **integridade técnica**, a **transparência** no processo e o **respeito às diretrizes estabelecidas**.

