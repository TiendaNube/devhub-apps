---
sidebar_position: 1
---

import { Alert } from '@nimbus-ds/components';
import ImageCreateApp from '@site/docs/assets/create-app.png';
import AppTypes from '@site/src/components/AppTypes';

# Overview

Nesta seção, forneceremos um guia passo a passo para que você, nosso valioso parceiro, possa criar um aplicativo na plataforma Nuvemshop. A criação de aplicativos é uma oportunidade emocionante para ampliar a experiência dos lojistas e oferecer soluções personalizadas.

Vamos explorar juntos o processo de desenvolvimento, desde a concepção até a integração com nossa plataforma, garantindo que você esteja preparado para oferecer valor aos lojistas da Nuvemshop.

Antes de iniciar o desenvolvimento do seu aplicativo, é necessário criar o mesmo dentro do Portal de Parceiros da Nuvemshop. Vamos agora explorar o
processo de criação desse aplicativo, garantindo que você esteja pronto para avançar no desenvolvimento e integração com a nossa plataforma.

Os aplicativos somente podem ser criados por Parceiros Nuvemshop. Saiba como criar o seu cadastro no 📝 Guia: [detalhes do programa de Parceiros Tecnológicos da Nuvemshop](https://atendimento.nuvemshop.com.br/pt_BR/parceiros-tecnologicos/como-fazer-um-aplicativo-para-a-loja-de-aplicativos-nuvemshop).

## Criando um aplicativo na Nuvemshop

Através da nossas ferramentas, você consegue criar um aplicativo para ser disponibilizado na 📱 [Loja de Aplicativos Nuvemshop](https://www.nuvemshop.com.br/loja-aplicativos-nuvem).

Dessa forma, os lojistas possuem visibilidade da ferramenta e podem instalá-la em suas lojas virtuais, trazendo mais reconhecimento ao seu serviço.

1. Acesse o 👉 [Portal de Parceiros](https://partners.nuvemshop.com.br) e faça o login em sua conta utilizando suas credenciais de acesso.

2. Após o login, você será redirecionado para o painel de parceiros.

3. Dentro do painel, clique em **"Criar aplicativo"** para continuar.

4. Uma nova tela será exibida, onde você deve inserir o nome do seu aplicativo e selecionar como deseja disponibilizá-lo.

   <img src={ImageCreateApp} width="287" alt="Create app"  />

   Temos duas opções de disponibilização para o seu aplicativo:

   - **Loja de Aplicativos**: Se você deseja que o aplicativo esteja disponível em nossa loja oficial, escolha esta opção. Após o processo de homologação ser concluído, o aplicativo estará disponível na loja, permitindo que qualquer lojista o instale, teste ou compre.

   - **Para Seus Clientes**: Com esta opção, não é necessário passar pelo processo de homologação. No entanto, o seu aplicativo ficará disponível apenas para os lojistas que você selecionar.

5. Ao clicar em **"Criar aplicativo"**, direcionaremos você para a página dedicada ao seu aplicativo.

   ![App uninstall](../assets/my-new-app.png "App uninstall")

   A página do seu aplicativo é dividida em 3 seções:

   - **Desenvolver e Testar**: Nesta seção, você encontra as informações necessárias para desenvolver e testar seu aplicativo antes de disponibilizar para os lojistas de sua preferência, ou antes, de solicitar homologação.

   - **Editar aplicativo**: Na seção de edição do aplicativo, você pode personalizar e ajustar as configurações do seu aplicativo. Ex.: Adicionar recursos, definir preferências e fazer as alterações necessárias para tornar o seu aplicativo ainda mais atrativo e funcional.

   - **Métricas de Acompanhamento**: Esta seção é dedicada ao acompanhamento do desempenho do seu aplicativo. Aqui você encontrará dados e estatísticas relevantes. Utilize essas métricas para otimizar e melhorar constantemente a experiência do seu aplicativo.

Agora que você criou o seu aplicativo, é hora de avançarmos para a etapa de desenvolvimento e testes. Chegou a hora de colocar a mão na massa de vez! Vamos explorar o processo de desenvolvimento e garantir que você esteja preparado para criar o seu aplicativo para a Nuvemshop.

## Desenvolvendo e Testando seu Aplicativo

Nesta seção, forneceremos todas as informações essenciais para autenticar o seu aplicativo com a API da Nuvemshop, aproveitar os nossos serviços, realizar ajustes e testar a funcionalidade do aplicativo em uma loja demo antes de torná-lo disponível. Prepare-se para mergulhar no desenvolvimento e assegurar um aplicativo de qualidade para nossos lojistas.

### Loja demo

Para prosseguir com a instalação do seu aplicativo e realizar o processo de autenticação, é necessário ter uma loja de teste. Caso você ainda não possua uma loja de teste, clicar em **"Criar loja demo"** para criar a sua primeira loja de teste.

Essa loja demo permitirá que você faça testes de funcionamento do aplicativo em um ambiente controlado antes de disponibilizá-lo para os clientes.

<Alert appearance="primary" title="📌 Observação">
   Lembrando que essa loja é apenas para teste e possui algumas limitações.
</Alert>

### Chaves de acesso do seu aplicativo

As chaves de acesso são essenciais para iniciar o processo de autenticação do seu aplicativo com nossa API.
Essas chaves proporcionam a autorização necessária para que seu aplicativo se comunique com nossos serviços e obtenha os dados e recursos essenciais para seu funcionamento adequado.

### Instalando seu aplicativo

Caso você tenha uma loja demo, clique no botão **Instalar aplicativo**. Você será redirecionado para o login da sua loja demo. Utilize as mesmas credenciais que você usou para entrar no Portal de Parceiros.

Se você não tiver uma loja demo, [clique aqui](https://partners.nuvemshop.com.br/stores/create?type=demo) para criar uma nova.

Para instalar o seu app em outra loja, adicione `/admin/apps/:app-id/authorize` no final da URL. Lembre-se de substituir o `:app-id` pelo ID do seu aplicativo.

Ao entrar no Administrador da sua loja demo, você vai precisar confirmar a instalação, clicando em **Aceitar e começar a usar**.

### Desinstalando um aplicativo

Neste tutorial, explicamos como **desinstalar um aplicativo** no seu painel administrador Nuvemshop.

<Alert appearance="primary" title="💡 Dica">
   Neste tutorial, usamos o Melhor Envio como exemplo. Porém, você pode fazer o mesmo procedimento em qualquer aplicativo que aparece nessa página, seja de frete, pagamentos, marketing, canais de venda, dropshipping, gestão etc.
</Alert>

1. Acessar o painel administrador Nuvemshop.

2. No menu lateral, localizar na seção Potencializar e clicar em **"Meus aplicativos"**.

   ![Access my apps](../assets/access-my-apps.jpeg "Access my apps")

3. Ao carregar a página, você deve procurar pela ferramenta que deseja desativar e, ao lado direito, clicar em **"Desinstalar"**.

   ![Uninstall app](../assets/uninstall-app.jpeg "Uninstall app")

4. Logo em seguida, abrirá **um pop-up perguntando se deseja prosseguir** com a desinstalação do aplicativo, basta clicar em **"OK"**.

   ![Confirm app uninstall](../assets/confirm-app-uninstall.jpeg "Confirm app uninstall")

5. Ao ser desinstalado, aparecerá uma mensagem de confirmação no topo da página.

   ![App uninstalled](../assets/app-uninstalled.jpg "App uninstalled")

   Confira um exemplo no GIF abaixo:

   ![App uninstall](../assets/uninstall-app.gif "App uninstall")

O aplicativo foi desinstalado com sucesso. Caso queira **reativá-lo em sua loja**, basta procurá-lo na mesma página e clicar em **"Instalar"**.

## Autenticando seu aplicativo

Um passo fundamental é autenticar seu aplicativo para acessar a [Nuvemshop API](../developer-tools/nuvemshop-api.md). Se você estiver utilizando um dos nossos [templates](../developer-tools/templates.md), o processo de autenticação estará pronto para uso, incluindo a conexão com a API de produtos da Nuvemshop. Isso automatiza significativamente o processo; siga o guia de configuração no repositório do template escolhido e você estará a caminho do desenvolvimento.

Por outro lado, se você optar por não usar nossos templates, você pode acessar este [guia](./authentication.md) para uma integração manual. Nossa meta é facilitar o desenvolvimento do seu aplicativo, independentemente do caminho que você escolher.

## Escolhendo o tipo do seu aplicativo

Após criar seu aplicativo e estar pronto para começar o desenvolvimento, é fundamental compreender os dois tipos de aplicativos que podem ser desenvolvidos em nossa plataforma: Nativo e Standalone. Essas opções oferecem flexibilidade e vantagens únicas para atender às necessidades específicas dos merchants. Vamos explorar esses tipos em detalhes para que você possa tomar a melhor decisão para seu aplicativo.

<AppTypes />

## Editando as permissões do seu aplicativo

Ao criar o seu aplicativo, a permissão **"Products"** será escolhida como padrão. Entretanto, ao longo do desenvolvimento, pode ser necessário obter acesso a outras permissões para o seu app. Todas as permissões que o parceiro adicionar ou editar exigirão que o aplicativo seja reinstalado. Para isso, ele deve selecionar as permissões em **"Dados Básicos"** no portal, salvar as mudanças, ir à loja onde o aplicativo está instalado, clicar em **"Desinstalar"** (veja como desistalar um [aplicativo](./overview.md#desinstalando-um-aplicativo)) e, em seguida, em **"Instalar"**. Dessa forma, um novo access token será gerado e o processo de integração a Nuvemhop Api pode ser iniciado novamente, incluindo as permissões atualizadas.

---

## Próximos passos

- Saiba mais sobre [Aplicativos Nativos](./native.md)
- Saiba mais sobre [Aplicativos Standalone](./standalone.md)
