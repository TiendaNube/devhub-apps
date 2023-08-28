---
sidebar_position: 1
title: Primeiros passos
---

# Primeiros passos
Bem-vindo! Nesta documentação você irá encontrar todos os recursos e conteúdos para criar aplicativos e oferecer para toda a base de lojistas quem fazem parte da Nuvemshop. Se você é um desenvolvedor, parceiro ou está iniciando a sua jornada na tecnologia, você encontrará aqui as informações básicas para desenvolver aplicativos para a Nuvemshop.

## Tipos de aplicativos
Antes de começar a desenvolver aplicativos, é fundamental conhecer que tipo de aplicativo disponíveis e entender o que mais se encaixa dentro das necessidades e limitações do seu projeto.

### Aplicativos nativos
Um [aplicativo nativo](/docs/applications/native.md) na Nuvemshop é aquele que opera no contexto do Administrador de lojistas, utilizando um iframe para garantir integração e fluidez. Essa abordagem busca oferecer experiências mais naturais e integradas para a gestão das lojas, aprimorando a interação com funcionalidades externas e oferecendo uma experiiencia mais integraga para o lojista.

#### Requisitos para desenvolver aplicativos nativos:
* Usar o [design system Nimbus](/docs/developer-tools/nimbus.md)
* Atender aos [requisitos de design](/docs/homologation/checklist.md)

### Aplicativos externos
Os [aplicativos externos](/docs/applications/standalone.md), diferente dos aplicativos nativos que aparecem no Administrador de lojistas, são soluções independentes e carregam fora do administrador de lojistas. Eles operam de forma autônoma e podem abranger uma ampla gama de funcionalidades, desde marketing até gerenciamento de estoque.

## Ferramentas para desenvolvimento

### API Nuvemshop
A [API Nuvemshop](/docs/developer-tools/nuvemshop-api.md), é uma ferramenta para interagir com nossa plataforma e expandir as funcionalidades do seu aplicativo. Antes de começar a utilizar nossa API, é crucial autenticar seu aplicativo. Após isso, você terá acesso a um access_token único de autenticação, permitindo que explore e utilize nossos recursos da API.

### Templates de aplicativos
Disponibilizamos [templates de aplicativos](/docs/developer-tools/templates.md) que servem como base para iniciar e acelerar o processo de desenvolvimento. Esses templates são divididos em duas categorias principais: aplicativos nativos e externos. Cada categoria possui seus próprios modelos específicos, criados para atender a diferentes necessidades e cenários.

**Autenticação pré-configurada** - Se você estiver utilizando um dos nossos templates, o processo de autenticação estará pronto para uso, incluindo a conexão com a API de produtos da Nuvemshop. Isso automatiza significativamente o processo; siga o guia de configuração no repositório do template escolhido e você estará a caminho do desenvolvimento.

### Nexo
O [Nexo](/docs/developer-tools/nimbus.md) disponibiliza recursos para facilitar a comunicação entre um aplicativo externo e o administrador da Nuvemshop. Essa interação entre o Admin e o App é estabelecida através de mensagens, seguindo o padrão do observador, permitindo inscrição e desinscrição de eventos.

### Nimbus (Requisito para aplicativo nativo)
O [Nimbus é o design system](/docs/developer-tools/nimbus.md) open-source da Nuvemshop. Com componentes validados em produtos Nuvemshop, padrões e templates otimizados, documentação com exemplos e sincronização entre o UI kit no Figma e o código, o Nimbus viabiliza desenvolvedores e designers a criarem interfaces consistentes, acessíveis e de alto desempenho. Você poderá usar ele para criar seus aplicativos dentro do ecossistema da Nuvemshop ou também para seu projeto próprio considerando a licença vigente.

