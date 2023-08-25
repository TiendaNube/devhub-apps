"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[539],{7182:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>v});var t=o(6687);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=t.createContext({}),l=function(e){var a=t.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},d=function(e){var a=l(e.components);return t.createElement(p.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(o),u=n,v=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return o?t.createElement(v,r(r({ref:a},d),{},{components:o})):t.createElement(v,r({ref:a},d))}));function v(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[c]="string"==typeof e?e:n,r[1]=s;for(var l=2;l<i;l++)r[l]=o[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7621:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var t=o(6245),n=(o(6687),o(7182));const i={title:"Nativos"},r="Aplicativos Nativos",s={unversionedId:"applications/native",id:"applications/native",title:"Nativos",description:"Um aplicativo nativo na Nuvemshop \xe9 aquele que opera no contexto do Administrador de lojistas, utilizando um iframe para garantir integra\xe7\xe3o e fluidez. Essa abordagem busca oferecer experi\xeancias mais naturais e integradas para a gest\xe3o das lojas, aprimorando a intera\xe7\xe3o com funcionalidades externas.",source:"@site/docs/applications/native.md",sourceDirName:"applications",slug:"/applications/native",permalink:"/devhub-apps/docs/applications/native",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/applications/native.md",tags:[],version:"current",frontMatter:{title:"Nativos"},sidebar:"sidebar",previous:{title:"Autentica\xe7\xe3o",permalink:"/devhub-apps/docs/applications/authentication"},next:{title:"Externos",permalink:"/devhub-apps/docs/applications/standalone"}},p={},l=[{value:"Requisitos para aplicativos nativos",id:"requisitos-para-aplicativos-nativos",level:2},{value:"In\xedcio do Desenvolvimento",id:"in\xedcio-do-desenvolvimento",level:2},{value:"Native app",id:"native-app",level:3},{value:"Nexo",id:"nexo",level:3},{value:"Admin",id:"admin",level:3},{value:"Fluxo de inicializa\xe7\xe3o do aplicativo",id:"fluxo-de-inicializa\xe7\xe3o-do-aplicativo",level:2},{value:"Escolhendo meu template",id:"escolhendo-meu-template",level:2},{value:"Modo de desenvolvedor",id:"modo-de-desenvolvedor",level:2},{value:"Perguntas frequentes",id:"perguntas-frequentes",level:2},{value:"Recomenda\xe7\xf5es",id:"recomenda\xe7\xf5es",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],d={toc:l},c="wrapper";function m(e){let{components:a,...i}=e;return(0,n.kt)(c,(0,t.Z)({},d,i,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"aplicativos-nativos"},"Aplicativos Nativos"),(0,n.kt)("p",null,"Um aplicativo nativo na Nuvemshop \xe9 aquele que opera no contexto do Administrador de lojistas, utilizando um iframe para garantir integra\xe7\xe3o e fluidez. Essa abordagem busca oferecer experi\xeancias mais naturais e integradas para a gest\xe3o das lojas, aprimorando a intera\xe7\xe3o com funcionalidades externas."),(0,n.kt)("h2",{id:"requisitos-para-aplicativos-nativos"},"Requisitos para aplicativos nativos"),(0,n.kt)("p",null,"Para desenvolver um aplicativo nativo, \xe9 crucial compreender os requisitos t\xe9cnicos e funcionais. A integra\xe7\xe3o ocorre por meio do ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/developer-tools/nexo"},"Nexo"),", nossa ferramenta de comunica\xe7\xe3o entre aplicativos nativos e o Administrador de lojistas. O design \xe9 garantido pelo nosso design system ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/developer-tools/nimbus"},"Nimbus"),", que assegura a padroniza\xe7\xe3o de interface e experi\xeancia, agilizando o desenvolvimento. \xc9 essencial utilizar a stack ",(0,n.kt)("a",{parentName:"p",href:"https://react.dev"},"React")," no frontend, j\xe1 que o ",(0,n.kt)("strong",{parentName:"p"},"Nimbus")," \xe9 otimizado para essa plataforma."),(0,n.kt)("h2",{id:"in\xedcio-do-desenvolvimento"},"In\xedcio do Desenvolvimento"),(0,n.kt)("p",null,"Antes de iniciarmos, faremos uma vis\xe3o geral para compreender os principais atores e seus pap\xe9is no fluxo de inicia\xe7\xe3o."),(0,n.kt)("p",null,"Identificamos tr\xeas atores que interagem entre si: o aplicativo desenvolvido pelo parceiro (doravante ",(0,n.kt)("strong",{parentName:"p"},'"Native app"'),"), o Administrador de lojistas (doravante ",(0,n.kt)("strong",{parentName:"p"},'"Admin"'),") e o SDK que possibilita a conex\xe3o entre o Administrador de lojistas\ne o aplicativo nativo (doravante ",(0,n.kt)("strong",{parentName:"p"},'"Nexo"'),"). Vamos explorar as responsabilidades de cada um desses atores."),(0,n.kt)("h3",{id:"native-app"},"Native app"),(0,n.kt)("p",null,"Este \xe9 o aplicativo que voc\xea ir\xe1 desenvolver. O aplicativo final estar\xe1 publicamente acess\xedvel por meio de uma URL. Ele ser\xe1 carregado no Admin atrav\xe9s de um iframe, o que exige uma URL p\xfablica para o aplicativo. A URL p\xfablica \xe9 fornecida durante a cria\xe7\xe3o do app dentro do ",(0,n.kt)("a",{parentName:"p",href:"https://partners.nuvemshop.com.br"},"Portal de Parceiros"),"."),(0,n.kt)("p",null,"Para garantir a compatibilidade do ",(0,n.kt)("strong",{parentName:"p"},"Native app")," com o ",(0,n.kt)("strong",{parentName:"p"},"Admin"),", \xe9 essencial ter o ",(0,n.kt)("strong",{parentName:"p"},"Nexo")," instalado e configurado. ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/developer-tools/nexo"},"Nesta documenta\xe7\xe3o"),", voc\xea encontrar\xe1 informa\xe7\xf5es detalhadas sobre o funcionamento do Nexo."),(0,n.kt)("p",null,"Neste momento, abordaremos apenas os passos fundamentais:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Para iniciar a comunica\xe7\xe3o entre o ",(0,n.kt)("strong",{parentName:"p"},'"Native app"')," e o ",(0,n.kt)("strong",{parentName:"p"},"Admin"),", voc\xea dever\xe1 utilizar o ",(0,n.kt)("strong",{parentName:"p"},"Nexo"),". Veja abaixo um trecho de c\xf3digo que demonstra como isso \xe9 feito:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'// nexoClient.ts\nimport nexo from "@tiendanube/nexo";\n\nconst instance = nexo.create({\n  clientId: "123",\n  log: true,\n});\n\nexport default instance;\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ap\xf3s estabelecer a comunica\xe7\xe3o, o ",(0,n.kt)("strong",{parentName:"p"},'"Native app"')," deve notificar explicitamente o ",(0,n.kt)("strong",{parentName:"p"},"Admin")," de que est\xe1 pronto para ser exibido. Isso \xe9 feito no ponto inicial da aplica\xe7\xe3o React, conforme demonstrado no trecho de c\xf3digo abaixo:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'import { useEffect, useState } from "react";\nimport { connect, iAmReady } from "@tiendanube/nexo/helpers";\nimport nexo from "./nexoClient";\n\nconst App: React.FC = () => {\n  const [isConnect, setIsConnect] = useState(false);\n\n  useEffect(() => {\n    connect(nexo).then(async () => {\n      setIsConnect(true);\n      iAmReady(nexo);\n    });\n  }, []);\n\n  if (!isConnect) return <div>connecting..</div>;\n\n  return <div>My app</div>;\n};\n\nexport default App;\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Por \xfaltimo, voc\xea implementar\xe1 a l\xf3gica do modelo de neg\xf3cios do ",(0,n.kt)("strong",{parentName:"p"},'"Native app"')," usando as diversas a\xe7\xf5es que disponibilizamos no Nexo. Confira a lista de a\xe7\xf5es dispon\xedveis ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/developer-tools/nexo#actions"},"aqui"),"."))),(0,n.kt)("h3",{id:"nexo"},"Nexo"),(0,n.kt)("p",null,"O ",(0,n.kt)("strong",{parentName:"p"},"Nexo")," \xe9 o SDK que possibilita a comunica\xe7\xe3o entre o ",(0,n.kt)("strong",{parentName:"p"},"Admin")," e o ",(0,n.kt)("strong",{parentName:"p"},"Native app"),". Desenvolvido pela Nuvemshop, \xe9 compat\xedvel com TypeScript e pode ser acessado atrav\xe9s do NPM."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Funciona como a ponte de comunica\xe7\xe3o entre o ",(0,n.kt)("strong",{parentName:"li"},"Admin")," e o ",(0,n.kt)("strong",{parentName:"li"},"Native app"),"."),(0,n.kt)("li",{parentName:"ul"},"Define e gerencia as a\xe7\xf5es dispon\xedveis, que s\xe3o trocadas por meio de mensagens. Veja a lista de a\xe7\xf5es dispon\xedveis ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/developer-tools/nexo#actions"},"aqui"),"."),(0,n.kt)("li",{parentName:"ul"},"Oferece ferramentas para facilitar a implementa\xe7\xe3o de a\xe7\xf5es no aplicativo. Saiba mais sobre os Helpers ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/developer-tools/nexo#helpers"},"aqui"),".")),(0,n.kt)("h3",{id:"admin"},"Admin"),(0,n.kt)("p",null,"O ator ",(0,n.kt)("strong",{parentName:"p"},"Admin")," desempenha um papel fundamental no gerenciamento do lojista Nuvemshop atualmente logado, incluindo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"O Admin oferece um espa\xe7o de desenvolvimento espec\xedfico que possibilita a cria\xe7\xe3o e teste do seu aplicativo sem a necessidade de aprova\xe7\xe3o na Loja de aplicativos. Abordaremos a seguir como isso pode ser realizado."),(0,n.kt)("li",{parentName:"ul"},"Definir o acesso do aplicativo (rotas): A Nuvemshop fornecer\xe1 uma rota (URL) na qual seu aplicativo ser\xe1 convocado."),(0,n.kt)("li",{parentName:"ul"},"Estabelecer onde a aplica\xe7\xe3o deve ser carregada atrav\xe9s de um iframe."),(0,n.kt)("li",{parentName:"ul"},"Inicializar o ",(0,n.kt)("strong",{parentName:"li"},"Nexo")," para receber e enviar mensagens conforme necess\xe1rio para o aplicativo."),(0,n.kt)("li",{parentName:"ul"},"Verificar se o aplicativo est\xe1 pronto para ser exibido."),(0,n.kt)("li",{parentName:"ul"},"Gerenciar tokens de sess\xe3o e compartilhar com o aplicativo via ",(0,n.kt)("strong",{parentName:"li"},"Nexo")," para identificar a Loja logada.")),(0,n.kt)("h2",{id:"fluxo-de-inicializa\xe7\xe3o-do-aplicativo"},"Fluxo de inicializa\xe7\xe3o do aplicativo"),(0,n.kt)("p",null,"Aqui est\xe1 o fluxo de inicia\xe7\xe3o de um ",(0,n.kt)("strong",{parentName:"p"},"Native app")," a partir do momento em que o usu\xe1rio decide visualizar o aplicativo:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"O usu\xe1rio escolhe abrir o aplicativo, que pode ser acionado por meio de uma URL salva como favorito ou uma op\xe7\xe3o no menu."),(0,n.kt)("li",{parentName:"ol"},"O ",(0,n.kt)("strong",{parentName:"li"},"Admin")," obt\xe9m as informa\xe7\xf5es do aplicativo e carrega o aplicativo dentro do painel em um iframe, enquanto exibe uma mensagem de carregamento."),(0,n.kt)("li",{parentName:"ol"},"Ap\xf3s o carregamento do ",(0,n.kt)("strong",{parentName:"li"},"Native app"),", ele notifica o ",(0,n.kt)("strong",{parentName:"li"},"Admin")," por meio do ",(0,n.kt)("strong",{parentName:"li"},"Nexo")," sobre a conex\xe3o e aguarda a confirma\xe7\xe3o de que o ",(0,n.kt)("strong",{parentName:"li"},"Admin")," tamb\xe9m est\xe1 conectado."),(0,n.kt)("li",{parentName:"ol"},"Finalmente, quando o ",(0,n.kt)("strong",{parentName:"li"},"Native app")," estiver pronto para exibir o conte\xfado, ele notifica por meio do ",(0,n.kt)("strong",{parentName:"li"},"Nexo")," que est\xe1 pronto. Isso permite que o ",(0,n.kt)("strong",{parentName:"li"},"Admin")," substitua a mensagem de carregamento pelo pr\xf3prio ",(0,n.kt)("strong",{parentName:"li"},"Native app"),".")),(0,n.kt)("h2",{id:"escolhendo-meu-template"},"Escolhendo meu template"),(0,n.kt)("p",null,"Nossas ferramentas de desenvolvimento na Nuvemshop incluem ",(0,n.kt)("a",{parentName:"p",href:"../developer-tools/templates#tipos-de-template"},"templates prontos para a cria\xe7\xe3o de aplicativos"),", que abrangem toda a l\xf3gica de ",(0,n.kt)("a",{parentName:"p",href:"../applications/overview#autenticando-seu-aplicativo"},"autentica\xe7\xe3o")," e constru\xe7\xe3o. No caso de aplicativos nativos, a parte relacionada ao ",(0,n.kt)("strong",{parentName:"p"},"Nexo")," j\xe1 vem pr\xe9-configurada. Recomendamos enfaticamente a utiliza\xe7\xe3o desses templates."),(0,n.kt)("p",null,"Ap\xf3s selecionar o template desejado, sugerimos revisar o arquivo ",(0,n.kt)("strong",{parentName:"p"},'"README.md"')," no reposit\xf3rio correspondente. L\xe1, voc\xea encontrar\xe1 orienta\xe7\xf5es detalhadas e passos pr\xe1ticos para aproveitar ao m\xe1ximo as capacidades oferecidas pelos nossos modelos de desenvolvimento."),(0,n.kt)("h2",{id:"modo-de-desenvolvedor"},"Modo de desenvolvedor"),(0,n.kt)("p",null,"Para testar e desenvolver seu aplicativo nativo, \xe9 essencial faz\xea-lo dentro do contexto do Administrador de lojistas. No entanto, \xe9 necess\xe1rio ter a op\xe7\xe3o de Modo Desenvolvedor ativada. Essa funcionalidade est\xe1 atualmente dispon\xedvel somente para lojas que foram habilitadas anteriormente. Para obter acesso a essa funcionalidade, entre em contato com a equipe da Nuvemshop."),(0,n.kt)("p",null,'Ao ativar o Modo Desenvolvedor, uma nova op\xe7\xe3o ser\xe1 adicionada ao menu com o nome "Aplicativo de Teste" ou "Aplicaci\xf3n de Prueba", dependendo do idioma. Ao selecionar essa op\xe7\xe3o, voc\xea pode inserir a URL do aplicativo, que ser\xe1 carregado dentro do painel do Admin para testes e desenvolvimento.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Dev mode",src:o(8203).Z,title:"Dev mode",width:"1078",height:"634"})),(0,n.kt)("h2",{id:"perguntas-frequentes"},"Perguntas frequentes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../developer-tools/nexo#create-a-nexo-instance"},"Como criar uma inst\xe2ncia do Nexo?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../developer-tools/nexo#check-if-the-app-is-connected"},"Como iniciar o aplicativo?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../developer-tools/nexo#enable-route-synchronization"},"Como sincronizar URLs?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../developer-tools/nexo#get-session-token"},"Como configurar o interceptador axios para obter token de sess\xe3o para cada solicita\xe7\xe3o?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../developer-tools/nexo#actions"},"Quais a\xe7\xf5es est\xe3o dispon\xedveis?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../developer-tools/nexo#helpers"},"Quais s\xe3o as ferramentas dispon\xedveis para a gest\xe3o das a\xe7\xf5es?"))),(0,n.kt)("h2",{id:"recomenda\xe7\xf5es"},"Recomenda\xe7\xf5es"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Recomendamos seguir os conceitos UX/UI definidos pelo nosso time de design. ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/design-guidelines/overview"},"Acesse aqui o guia completo"),"."),(0,n.kt)("li",{parentName:"ul"},"Para aplicativos publicados em nossa loja de aplicatvos recomendamos revisar o nosso ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/homologation/overview"},"checklist de homologa\xe7\xe3o"),".")),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/homologation/overview"},"Homologa\xe7\xe3o"))))}m.isMDXComponent=!0},8203:(e,a,o)=>{o.d(a,{Z:()=>t});const t=o.p+"assets/images/dev-mode-8a4bb8a33d29c01e2af50dfdb618be0b.png"}}]);