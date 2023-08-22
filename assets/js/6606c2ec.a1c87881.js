"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[813],{3905:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>u});var i=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function n(e,a){if(null==e)return{};var o,i,t=function(e,a){if(null==e)return{};var o,i,t={},s=Object.keys(e);for(i=0;i<s.length;i++)o=s[i],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)o=s[i],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=i.createContext({}),l=function(e){var a=i.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},c=function(e){var a=l(e.components);return i.createElement(p.Provider,{value:a},e.children)},m="mdxType",A={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},d=i.forwardRef((function(e,a){var o=e.components,t=e.mdxType,s=e.originalType,p=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),m=l(o),d=t,u=m["".concat(p,".").concat(d)]||m[d]||A[d]||s;return o?i.createElement(u,r(r({ref:a},c),{},{components:o})):i.createElement(u,r({ref:a},c))}));function u(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var s=o.length,r=new Array(s);r[0]=d;var n={};for(var p in a)hasOwnProperty.call(a,p)&&(n[p]=a[p]);n.originalType=e,n[m]="string"==typeof e?e:t,r[1]=n;for(var l=2;l<s;l++)r[l]=o[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1450:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>N,frontMatter:()=>d,metadata:()=>v,toc:()=>k});var i=o(7462),t=o(7294),s=o(3905),r=o(4774);const n=o.p+"assets/images/create-app-1dcbc59959e6591957f8181caf7797c2.png";var p=o(5718),l=o(9960);const c=[{icon:p.AppsIcon,title:"Nativo",description:"Os aplicativos nativos, por outro lado, oferecem uma integra\xe7\xe3o mais profunda com a plataforma Nuvemshop. Eles s\xe3o desenvolvidos para se integrar diretamente ao painel de administra\xe7\xe3o dos merchants, proporcionando uma experi\xeancia cont\xednua e fluida. Ao utilizar ferramentas como o nosso design system Nimbus, garantimos que a experi\xeancia visual e de usabilidade permane\xe7a consistente, mesmo quando o merchant est\xe1 interagindo com um aplicativo de parceiro externo. Isso permite que o merchant desfrute de recursos adicionais sem deixar o ambiente familiar do painel de administra\xe7\xe3o da Nuvemshop.",link:"/docs/applications/native"},{icon:p.AppsListIcon,title:"Standalone",description:"Os aplicativos standalone s\xe3o solu\xe7\xf5es independentes, desenvolvidas externamente \xe0 Nuvemshop, que podem ser instaladas e utilizadas nas lojas dos nossos merchants. Esses aplicativos operam de forma aut\xf4noma e podem abranger uma ampla gama de funcionalidades, desde marketing at\xe9 gerenciamento de estoque. Eles proporcionam uma experi\xeancia \xfanica e podem ser uma \xf3tima maneira de adicionar recursos especializados \xe0s lojas dos merchants.",link:"/docs/applications/standalone"}],m=e=>{let{title:a,description:o,link:i,icon:s}=e;return t.createElement(r.Card,null,t.createElement(r.Card.Header,null,t.createElement(r.Box,{display:"flex",gap:"2",alignItems:"center"},t.createElement(r.Icon,{color:"neutral-textLow",source:t.createElement(s,{size:"medium"})}),t.createElement(r.Title,{as:"h3"},a))),t.createElement(r.Box,{height:"100%",gap:"4",display:"flex",flexDirection:"column",justifyContent:"space-between"},t.createElement(r.Text,{fontSize:"base"},o),t.createElement(r.Link,{as:l.Z,to:i,appearance:"primary"},"Ver mais",t.createElement(r.Icon,{color:"primary-interactive",source:t.createElement(p.ExternalLinkIcon,null)}))))},A=()=>t.createElement(r.Box,{display:"flex",gap:"4",flexDirection:"column",mb:"6"},c.map(((e,a)=>t.createElement(m,(0,i.Z)({key:a},e))))),d={sidebar_position:1},u="Overview",v={unversionedId:"applications/overview",id:"applications/overview",title:"Overview",description:"Nesta se\xe7\xe3o, forneceremos um guia passo a passo para que voc\xea, nosso valioso parceiro, possa criar um aplicativo na plataforma Nuvemshop. A cria\xe7\xe3o de aplicativos \xe9 uma oportunidade emocionante para ampliar a experi\xeancia dos lojistas e oferecer solu\xe7\xf5es personalizadas.",source:"@site/docs/applications/overview.md",sourceDirName:"applications",slug:"/applications/overview",permalink:"/devhub-apps/docs/applications/overview",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/applications/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Nuvemshop API",permalink:"/devhub-apps/docs/developer-tools/nuvemshop-api"},next:{title:"Autentica\xe7\xe3o",permalink:"/devhub-apps/docs/applications/authentication"}},g={},k=[{value:"Criando um aplicativo na Nuvemshop",id:"criando-um-aplicativo-na-nuvemshop",level:2},{value:"Desenvolvendo e Testando seu Aplicativo",id:"desenvolvendo-e-testando-seu-aplicativo",level:2},{value:"Loja demo",id:"loja-demo",level:3},{value:"Chaves de acesso do seu aplicativo",id:"chaves-de-acesso-do-seu-aplicativo",level:3},{value:"Instalando seu aplicativo",id:"instalando-seu-aplicativo",level:3},{value:"Desinstalando um aplicativo",id:"desinstalando-um-aplicativo",level:3},{value:"Autenticando seu aplicativo",id:"autenticando-seu-aplicativo",level:2},{value:"Escolhendo o tipo do seu aplicativo",id:"escolhendo-o-tipo-do-seu-aplicativo",level:2},{value:"Editando as permiss\xf5es do seu aplicativo",id:"editando-as-permiss\xf5es-do-seu-aplicativo",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],h={toc:k},E="wrapper";function N(e){let{components:a,...t}=e;return(0,s.kt)(E,(0,i.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"overview"},"Overview"),(0,s.kt)("p",null,"Nesta se\xe7\xe3o, forneceremos um guia passo a passo para que voc\xea, nosso valioso parceiro, possa criar um aplicativo na plataforma Nuvemshop. A cria\xe7\xe3o de aplicativos \xe9 uma oportunidade emocionante para ampliar a experi\xeancia dos lojistas e oferecer solu\xe7\xf5es personalizadas."),(0,s.kt)("p",null,"Vamos explorar juntos o processo de desenvolvimento, desde a concep\xe7\xe3o at\xe9 a integra\xe7\xe3o com nossa plataforma, garantindo que voc\xea esteja preparado para oferecer valor aos lojistas da Nuvemshop."),(0,s.kt)("p",null,"Antes de iniciar o desenvolvimento do seu aplicativo, \xe9 necess\xe1rio criar o mesmo dentro do Portal de Parceiros da Nuvemshop. Vamos agora explorar o\nprocesso de cria\xe7\xe3o desse aplicativo, garantindo que voc\xea esteja pronto para avan\xe7ar no desenvolvimento e integra\xe7\xe3o com a nossa plataforma."),(0,s.kt)("p",null,"Os aplicativos somente podem ser criados por Parceiros Nuvemshop. Saiba como criar o seu cadastro no \ud83d\udcdd Guia: ",(0,s.kt)("a",{parentName:"p",href:"https://atendimento.nuvemshop.com.br/pt_BR/parceiros-tecnologicos/como-fazer-um-aplicativo-para-a-loja-de-aplicativos-nuvemshop"},"detalhes do programa de Parceiros Tecnol\xf3gicos da Nuvemshop"),"."),(0,s.kt)("h2",{id:"criando-um-aplicativo-na-nuvemshop"},"Criando um aplicativo na Nuvemshop"),(0,s.kt)("p",null,"Atrav\xe9s da nossas ferramentas, voc\xea consegue criar um aplicativo para ser disponibilizado na \ud83d\udcf1 ",(0,s.kt)("a",{parentName:"p",href:"https://www.nuvemshop.com.br/loja-aplicativos-nuvem"},"Loja de Aplicativos Nuvemshop"),"."),(0,s.kt)("p",null,"Dessa forma, os lojistas possuem visibilidade da ferramenta e podem instal\xe1-la em suas lojas virtuais, trazendo mais reconhecimento ao seu servi\xe7o."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Acesse o \ud83d\udc49 ",(0,s.kt)("a",{parentName:"p",href:"https://partners.nuvemshop.com.br"},"Portal de Parceiros")," e fa\xe7a o login em sua conta utilizando suas credenciais de acesso.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Ap\xf3s o login, voc\xea ser\xe1 redirecionado para o painel de parceiros.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Dentro do painel, clique em ",(0,s.kt)("strong",{parentName:"p"},'"Criar aplicativo"')," para continuar.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Uma nova tela ser\xe1 exibida, onde voc\xea deve inserir o nome do seu aplicativo e selecionar como deseja disponibiliz\xe1-lo."),(0,s.kt)("img",{src:n,width:"287",alt:"Create app"}),(0,s.kt)("p",{parentName:"li"},"Temos duas op\xe7\xf5es de disponibiliza\xe7\xe3o para o seu aplicativo:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Loja de Aplicativos"),": Se voc\xea deseja que o aplicativo esteja dispon\xedvel em nossa loja oficial, escolha esta op\xe7\xe3o. Ap\xf3s o processo de homologa\xe7\xe3o ser conclu\xeddo, o aplicativo estar\xe1 dispon\xedvel na loja, permitindo que qualquer lojista o instale, teste ou compre.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Para Seus Clientes"),": Com esta op\xe7\xe3o, n\xe3o \xe9 necess\xe1rio passar pelo processo de homologa\xe7\xe3o. No entanto, o seu aplicativo ficar\xe1 dispon\xedvel apenas para os lojistas que voc\xea selecionar.")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Ao clicar em ",(0,s.kt)("strong",{parentName:"p"},'"Criar aplicativo"'),", direcionaremos voc\xea para a p\xe1gina dedicada ao seu aplicativo."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"App uninstall",src:o(4392).Z,title:"App uninstall",width:"1646",height:"1284"})),(0,s.kt)("p",{parentName:"li"},"A p\xe1gina do seu aplicativo \xe9 dividida em 3 se\xe7\xf5es:"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Desenvolver e Testar"),": Nesta se\xe7\xe3o, voc\xea encontra as informa\xe7\xf5es necess\xe1rias para desenvolver e testar seu aplicativo antes de disponibilizar para os lojistas de sua prefer\xeancia, ou antes, de solicitar homologa\xe7\xe3o.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"Editar aplicativo"),": Na se\xe7\xe3o de edi\xe7\xe3o do aplicativo, voc\xea pode personalizar e ajustar as configura\xe7\xf5es do seu aplicativo. Ex.: Adicionar recursos, definir prefer\xeancias e fazer as altera\xe7\xf5es necess\xe1rias para tornar o seu aplicativo ainda mais atrativo e funcional.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("strong",{parentName:"p"},"M\xe9tricas de Acompanhamento"),": Esta se\xe7\xe3o \xe9 dedicada ao acompanhamento do desempenho do seu aplicativo. Aqui voc\xea encontrar\xe1 dados e estat\xedsticas relevantes. Utilize essas m\xe9tricas para otimizar e melhorar constantemente a experi\xeancia do seu aplicativo."))))),(0,s.kt)("p",null,"Agora que voc\xea criou o seu aplicativo, \xe9 hora de avan\xe7armos para a etapa de desenvolvimento e testes. Chegou a hora de colocar a m\xe3o na massa de vez! Vamos explorar o processo de desenvolvimento e garantir que voc\xea esteja preparado para criar o seu aplicativo para a Nuvemshop."),(0,s.kt)("h2",{id:"desenvolvendo-e-testando-seu-aplicativo"},"Desenvolvendo e Testando seu Aplicativo"),(0,s.kt)("p",null,"Nesta se\xe7\xe3o, forneceremos todas as informa\xe7\xf5es essenciais para autenticar o seu aplicativo com a API da Nuvemshop, aproveitar os nossos servi\xe7os, realizar ajustes e testar a funcionalidade do aplicativo em uma loja demo antes de torn\xe1-lo dispon\xedvel. Prepare-se para mergulhar no desenvolvimento e assegurar um aplicativo de qualidade para nossos lojistas."),(0,s.kt)("h3",{id:"loja-demo"},"Loja demo"),(0,s.kt)("p",null,"Para prosseguir com a instala\xe7\xe3o do seu aplicativo e realizar o processo de autentica\xe7\xe3o, \xe9 necess\xe1rio ter uma loja de teste. Caso voc\xea ainda n\xe3o possua uma loja de teste, clicar em ",(0,s.kt)("strong",{parentName:"p"},'"Criar loja demo"')," para criar a sua primeira loja de teste."),(0,s.kt)("p",null,"Essa loja demo permitir\xe1 que voc\xea fa\xe7a testes de funcionamento do aplicativo em um ambiente controlado antes de disponibiliz\xe1-lo para os clientes."),(0,s.kt)(r.Alert,{appearance:"primary",title:"\ud83d\udccc Observa\xe7\xe3o",mdxType:"Alert"},"Lembrando que essa loja \xe9 apenas para teste e possui algumas limita\xe7\xf5es."),(0,s.kt)("br",null),(0,s.kt)("h3",{id:"chaves-de-acesso-do-seu-aplicativo"},"Chaves de acesso do seu aplicativo"),(0,s.kt)("p",null,"As chaves de acesso s\xe3o essenciais para iniciar o processo de autentica\xe7\xe3o do seu aplicativo com nossa API.\nEssas chaves proporcionam a autoriza\xe7\xe3o necess\xe1ria para que seu aplicativo se comunique com nossos servi\xe7os e obtenha os dados e recursos essenciais para seu funcionamento adequado."),(0,s.kt)("h3",{id:"instalando-seu-aplicativo"},"Instalando seu aplicativo"),(0,s.kt)("p",null,"Caso voc\xea tenha uma loja demo, clique no bot\xe3o ",(0,s.kt)("strong",{parentName:"p"},"Instalar aplicativo"),". Voc\xea ser\xe1 redirecionado para o login da sua loja demo. Utilize as mesmas credenciais que voc\xea usou para entrar no Portal de Parceiros."),(0,s.kt)("p",null,"Se voc\xea n\xe3o tiver uma loja demo, ",(0,s.kt)("a",{parentName:"p",href:"https://partners.nuvemshop.com.br/stores/create?type=demo"},"clique aqui")," para criar uma nova."),(0,s.kt)("p",null,"Para instalar o seu app em outra loja, adicione ",(0,s.kt)("inlineCode",{parentName:"p"},"/admin/apps/:app-id/authorize")," no final da URL. Lembre-se de substituir o ",(0,s.kt)("inlineCode",{parentName:"p"},":app-id")," pelo ID do seu aplicativo."),(0,s.kt)("p",null,"Ao entrar no Administrador da sua loja demo, voc\xea vai precisar confirmar a instala\xe7\xe3o, clicando em ",(0,s.kt)("strong",{parentName:"p"},"Aceitar e come\xe7ar a usar"),"."),(0,s.kt)("h3",{id:"desinstalando-um-aplicativo"},"Desinstalando um aplicativo"),(0,s.kt)("p",null,"Neste tutorial, explicamos como ",(0,s.kt)("strong",{parentName:"p"},"desinstalar um aplicativo")," no seu painel administrador Nuvemshop."),(0,s.kt)(r.Alert,{appearance:"primary",title:"\ud83d\udca1 Dica",mdxType:"Alert"},"Neste tutorial, usamos o Melhor Envio como exemplo. Por\xe9m, voc\xea pode fazer o mesmo procedimento em qualquer aplicativo que aparece nessa p\xe1gina, seja de frete, pagamentos, marketing, canais de venda, dropshipping, gest\xe3o etc."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Acessar o painel administrador Nuvemshop.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"No menu lateral, localizar na se\xe7\xe3o Potencializar e clicar em ",(0,s.kt)("strong",{parentName:"p"},'"Meus aplicativos"'),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Access my apps",src:o(8694).Z,title:"Access my apps",width:"298",height:"143"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Ao carregar a p\xe1gina, voc\xea deve procurar pela ferramenta que deseja desativar e, ao lado direito, clicar em ",(0,s.kt)("strong",{parentName:"p"},'"Desinstalar"'),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Uninstall app",src:o(3410).Z,title:"Uninstall app",width:"860",height:"196"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Logo em seguida, abrir\xe1 ",(0,s.kt)("strong",{parentName:"p"},"um pop-up perguntando se deseja prosseguir")," com a desinstala\xe7\xe3o do aplicativo, basta clicar em ",(0,s.kt)("strong",{parentName:"p"},'"OK"'),"."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"Confirm app uninstall",src:o(5263).Z,title:"Confirm app uninstall",width:"446",height:"127"}))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Ao ser desinstalado, aparecer\xe1 uma mensagem de confirma\xe7\xe3o no topo da p\xe1gina."),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"App uninstalled",src:o(9950).Z,title:"App uninstalled",width:"813",height:"117"})),(0,s.kt)("p",{parentName:"li"},"Confira um exemplo no GIF abaixo:"),(0,s.kt)("p",{parentName:"li"},(0,s.kt)("img",{alt:"App uninstall",src:o(4910).Z,title:"App uninstall",width:"1084",height:"719"})))),(0,s.kt)("p",null,"O aplicativo foi desinstalado com sucesso. Caso queira ",(0,s.kt)("strong",{parentName:"p"},"reativ\xe1-lo em sua loja"),", basta procur\xe1-lo na mesma p\xe1gina e clicar em ",(0,s.kt)("strong",{parentName:"p"},'"Instalar"'),"."),(0,s.kt)("h2",{id:"autenticando-seu-aplicativo"},"Autenticando seu aplicativo"),(0,s.kt)("p",null,"Um passo fundamental \xe9 autenticar seu aplicativo para acessar a ",(0,s.kt)("a",{parentName:"p",href:"/devhub-apps/docs/developer-tools/nuvemshop-api"},"Nuvemshop API"),". Se voc\xea estiver utilizando um dos nossos ",(0,s.kt)("a",{parentName:"p",href:"/devhub-apps/docs/developer-tools/templates"},"templates"),", o processo de autentica\xe7\xe3o estar\xe1 pronto para uso, incluindo a conex\xe3o com a API de produtos da Nuvemshop. Isso automatiza significativamente o processo; siga o guia de configura\xe7\xe3o no reposit\xf3rio do template escolhido e voc\xea estar\xe1 a caminho do desenvolvimento."),(0,s.kt)("p",null,"Por outro lado, se voc\xea optar por n\xe3o usar nossos templates, voc\xea pode acessar este ",(0,s.kt)("a",{parentName:"p",href:"/devhub-apps/docs/applications/authentication"},"guia")," para uma integra\xe7\xe3o manual. Nossa meta \xe9 facilitar o desenvolvimento do seu aplicativo, independentemente do caminho que voc\xea escolher."),(0,s.kt)("h2",{id:"escolhendo-o-tipo-do-seu-aplicativo"},"Escolhendo o tipo do seu aplicativo"),(0,s.kt)("p",null,"Ap\xf3s criar seu aplicativo e estar pronto para come\xe7ar o desenvolvimento, \xe9 fundamental compreender os dois tipos de aplicativos que podem ser desenvolvidos em nossa plataforma: Nativo e Standalone. Essas op\xe7\xf5es oferecem flexibilidade e vantagens \xfanicas para atender \xe0s necessidades espec\xedficas dos merchants. Vamos explorar esses tipos em detalhes para que voc\xea possa tomar a melhor decis\xe3o para seu aplicativo."),(0,s.kt)(A,{mdxType:"AppTypes"}),(0,s.kt)("h2",{id:"editando-as-permiss\xf5es-do-seu-aplicativo"},"Editando as permiss\xf5es do seu aplicativo"),(0,s.kt)("p",null,"Ao criar o seu aplicativo, a permiss\xe3o ",(0,s.kt)("strong",{parentName:"p"},'"Products"')," ser\xe1 escolhida como padr\xe3o. Entretanto, ao longo do desenvolvimento, pode ser necess\xe1rio obter acesso a outras permiss\xf5es para o seu app. Todas as permiss\xf5es que o parceiro adicionar ou editar exigir\xe3o que o aplicativo seja reinstalado. Para isso, ele deve selecionar as permiss\xf5es em ",(0,s.kt)("strong",{parentName:"p"},'"Dados B\xe1sicos"')," no portal, salvar as mudan\xe7as, ir \xe0 loja onde o aplicativo est\xe1 instalado, clicar em ",(0,s.kt)("strong",{parentName:"p"},'"Desinstalar"')," (veja como desistalar um ",(0,s.kt)("a",{parentName:"p",href:"/devhub-apps/docs/applications/overview#desinstalando-um-aplicativo"},"aplicativo"),") e, em seguida, em ",(0,s.kt)("strong",{parentName:"p"},'"Instalar"'),". Dessa forma, um novo access token ser\xe1 gerado e o processo de integra\xe7\xe3o a Nuvemhop Api pode ser iniciado novamente, incluindo as permiss\xf5es atualizadas."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Saiba mais sobre ",(0,s.kt)("a",{parentName:"li",href:"/devhub-apps/docs/applications/native"},"Aplicativos Nativos")),(0,s.kt)("li",{parentName:"ul"},"Saiba mais sobre ",(0,s.kt)("a",{parentName:"li",href:"/devhub-apps/docs/applications/standalone"},"Aplicativos Standalone"))))}N.isMDXComponent=!0},8694:(e,a,o)=>{o.d(a,{Z:()=>i});const i="data:image/jpeg;base64,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"},9950:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/app-uninstalled-8511c602370401df377dfae1ec705caf.jpg"},5263:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/confirm-app-uninstall-9fa08ec4a78550ad459f41280286d735.jpeg"},4392:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/my-new-app-2228258d9d6a05f5b65e3ba8d067ecb4.png"},4910:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/uninstall-app-26841e77e591a4e00a5675d0767b3fb5.gif"},3410:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/uninstall-app-62f3c5975604f337f7853312e543298d.jpeg"}}]);