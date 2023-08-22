"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[278],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>v});var t=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=t.createContext({}),d=function(e){var a=t.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},p=function(e){var a=d(e.components);return t.createElement(c.Provider,{value:a},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(o),m=n,v=l["".concat(c,".").concat(m)]||l[m]||u[m]||i;return o?t.createElement(v,r(r({ref:a},p),{},{components:o})):t.createElement(v,r({ref:a},p))}));function v(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[l]="string"==typeof e?e:n,r[1]=s;for(var d=2;d<i;d++)r[d]=o[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},8885:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var t=o(7462),n=(o(7294),o(3905)),i=o(4774);const r={sidebar_position:1},s="Autentica\xe7\xe3o",c={unversionedId:"applications/authentication",id:"applications/authentication",title:"Autentica\xe7\xe3o",description:"Este guia apresenta m\xe9todos de autentica\xe7\xe3o de aplicativos com a plataforma Nuvemshop. Descubra como garantir seguran\xe7a e acesso autorizado para integra\xe7\xf5es perfeitas entre seus apps e nossa plataforma.",source:"@site/docs/applications/authentication.md",sourceDirName:"applications",slug:"/applications/authentication",permalink:"/devhub-apps/docs/applications/authentication",draft:!1,editUrl:"https://github.com/TiendaNube/app-templates-hub/tree/master/website/docs/applications/authentication.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/devhub-apps/docs/applications/overview"},next:{title:"Nativo",permalink:"/devhub-apps/docs/applications/native"}},d={},p=[{value:"Autentica\xe7\xe3o da API",id:"autentica\xe7\xe3o-da-api",level:2},{value:"Tokens de Acesso e Identifica\xe7\xe3o",id:"tokens-de-acesso-e-identifica\xe7\xe3o",level:2},{value:"Tipos de M\xe9todos de Autentica\xe7\xe3o",id:"tipos-de-m\xe9todos-de-autentica\xe7\xe3o",level:2},{value:"Obtendo o token de acesso",id:"obtendo-o-token-de-acesso",level:2},{value:"Alterando a URL de redirecionamento",id:"alterando-a-url-de-redirecionamento",level:3},{value:"Fazendo a Requisi\xe7\xe3o com o C\xf3digo cURL",id:"fazendo-a-requisi\xe7\xe3o-com-o-c\xf3digo-curl",level:3},{value:"Como obeter um novo c\xf3digo cURL",id:"como-obeter-um-novo-c\xf3digo-curl",level:3},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],l={toc:p},u="wrapper";function m(e){let{components:a,...o}=e;return(0,n.kt)(u,(0,t.Z)({},l,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),(0,n.kt)("p",null,"Este guia apresenta m\xe9todos de autentica\xe7\xe3o de aplicativos com a plataforma Nuvemshop. Descubra como garantir seguran\xe7a e acesso autorizado para integra\xe7\xf5es perfeitas entre seus apps e nossa plataforma."),(0,n.kt)("h2",{id:"autentica\xe7\xe3o-da-api"},"Autentica\xe7\xe3o da API"),(0,n.kt)("p",null,"A autentica\xe7\xe3o e autoriza\xe7\xe3o de usu\xe1rio s\xe3o fornecidas por meio de uma implementa\xe7\xe3o restrita do OAuth 2. Atualmente, oferecemos suporte apenas ao fluxo ",(0,n.kt)("a",{parentName:"p",href:"https://oauth.net/2/grant-types/authorization-code/"},'"C\xf3digo de Autoriza\xe7\xe3o"')," para a concess\xe3o de acesso. Ao seguir este fluxo, voc\xea obt\xe9m ",(0,n.kt)("a",{parentName:"p",href:"https://oauth.net/2/access-tokens/"},"tokens de acesso")," que n\xe3o expiram, permanecendo v\xe1lidos at\xe9 que sejam renovados."),(0,n.kt)("h2",{id:"tokens-de-acesso-e-identifica\xe7\xe3o"},"Tokens de Acesso e Identifica\xe7\xe3o"),(0,n.kt)("p",null,"Os tokens de acesso que fornecemos n\xe3o possuem data de expira\xe7\xe3o. Eles se tornam inv\xe1lidos somente quando um novo token \xe9 obtido ou quando o usu\xe1rio desinstala o aplicativo. Junto com o token de acesso, tamb\xe9m \xe9 fornecido um ",(0,n.kt)("inlineCode",{parentName:"p"},"user_id"),", que corresponde ao ID da loja. Este ",(0,n.kt)("inlineCode",{parentName:"p"},"user_id")," \xe9 essencial para realizar solicita\xe7\xf5es \xe0 nossa API e tamb\xe9m pode ser usado para autenticar usu\xe1rios do aplicativo em seu site."),(0,n.kt)("p",null,"A autentica\xe7\xe3o \xe9 um passo fundamental para acessar nossos servi\xe7os via API. Certifique-se de incluir o ",(0,n.kt)("inlineCode",{parentName:"p"},"user_id")," nas suas solicita\xe7\xf5es para garantir autentica\xe7\xe3o e autoriza\xe7\xe3o adequadas."),(0,n.kt)("h2",{id:"tipos-de-m\xe9todos-de-autentica\xe7\xe3o"},"Tipos de M\xe9todos de Autentica\xe7\xe3o"),(0,n.kt)("p",null,"A escolha do m\xe9todo de autentica\xe7\xe3o depende do tipo de aplicativo que voc\xea est\xe1 desenvolvendo:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Se voc\xea est\xe1 criando aplicativos standalone, com ou sem nosso template, \xe9 necess\xe1rio utilizar OAuth 2."),(0,n.kt)("li",{parentName:"ul"},"Para aplicativos nativos que se integram ao admin da Nuvemshop usando o Nexo, s\xe3o utilizados tokens de acesso gerados no admin da Nuvemshop.")),(0,n.kt)("p",null,"Nossos modelos de cria\xe7\xe3o de apps j\xe1 incluem um sistema de autentica\xe7\xe3o integrado \xe0 nossa API. Isso reduz significativamente o tempo de desenvolvimento para nossos parceiros que optam por utilizar esses templates. No entanto, caso o parceiro escolha n\xe3o usar um dos nossos modelos, \xe9 poss\xedvel realizar a autentica\xe7\xe3o manualmente. A seguir, apresentaremos como isso pode ser feito de maneira eficaz."),(0,n.kt)("h2",{id:"obtendo-o-token-de-acesso"},"Obtendo o token de acesso"),(0,n.kt)(i.Alert,{appearance:"warning",title:"Aten\xe7\xe3o",mdxType:"Alert"},"Ao concluir o processo de obten\xe7\xe3o, voc\xea receber\xe1 um c\xf3digo cURL, essencial para gerar o access_token. \xc9 importante ressaltar que esse c\xf3digo possui uma validade de apenas 5 minutos. Certifique-se de utiliz\xe1-lo dentro desse per\xedodo para garantir um acesso bem-sucedido."),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"alterando-a-url-de-redirecionamento"},"Alterando a URL de redirecionamento"),(0,n.kt)("p",null,"Se voc\xea tiver modificado a URL de redirecionamento, por favor, substitua-a e salve a nova URL em ",(0,n.kt)("inlineCode",{parentName:"p"},"https://partners.nuvemshop.com.br/applications/authentication/:app-id")," para acessar a p\xe1gina com o c\xf3digo cURL. O campo de URL de redirecionamento pode ser encontrado no formul\xe1rio de ",(0,n.kt)("strong",{parentName:"p"},"Dados B\xe1sicos"),"."),(0,n.kt)("p",null,"Esta etapa \xe9 crucial para garantir que o redirecionamento funcione corretamente e que voc\xea possa acessar a p\xe1gina de c\xf3digo cURL sem problemas. Certifique-se de atualizar a URL de redirecionamento conforme necess\xe1rio."),(0,n.kt)("h3",{id:"fazendo-a-requisi\xe7\xe3o-com-o-c\xf3digo-curl"},"Fazendo a Requisi\xe7\xe3o com o C\xf3digo cURL"),(0,n.kt)("p",null,"Ap\xf3s concluir a instala\xe7\xe3o, voc\xea ser\xe1 redirecionado para uma nova p\xe1gina contendo o c\xf3digo cURL necess\xe1rio para gerar o seu access_token. Basta copiar esse c\xf3digo e realizar a requisi\xe7\xe3o utilizando a ferramenta de sua prefer\xeancia."),(0,n.kt)("p",null,"A estrutura do cURL gerado consiste em:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"client_id"),": O App ID de seu aplicativo;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"client_secret"),": Seu client secret;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"code"),": O c\xf3digo obtido na URL ap\xf3s a instala\xe7\xe3o do aplicativo na loja de demo.")),(0,n.kt)("p",null,"Essa etapa \xe9 fundamental para obter com sucesso o access_token e garantir o acesso autorizado \xe0 nossa plataforma."),(0,n.kt)("p",null,"Se a requisi\xe7\xe3o for bem-sucedida, voc\xea receber\xe1 uma resposta no formato semelhante a este exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "access_token": "88a2fdd17e10327ed96f4f2dc96b00bca60dfe60",\n    "token_type": "bearer",\n    "scope": "write_products",\n    "user_id": 2093261\n}\n')),(0,n.kt)("p",null,"Voc\xea pode montar o comando cURL manualmente com base no exemplo fornecido. Aqui est\xe1 o comando cURL para realizar a requisi\xe7\xe3o POST utilizando as informa\xe7\xf5es mencionadas:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://www.tiendanube.com/apps/authorize/token" \\\n-d "client_id=client_id" \\\n-d "client_secret=client_secret" \\\n-d "code=code"\n')),(0,n.kt)("p",null,"Certifique-se de substituir ",(0,n.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"client_secret")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"code")," pelos valores corretos do seu aplicativo.\nLembrando que voc\xea pode executar esse comando em um terminal ou em uma ferramenta que suporte cURL para testar a requisi\xe7\xe3o e obter o access_token."),(0,n.kt)("h3",{id:"como-obeter-um-novo-c\xf3digo-curl"},"Como obeter um novo c\xf3digo cURL"),(0,n.kt)("p",null,"Caso a requisi\xe7\xe3o tenha falhado devido \xe0 expira\xe7\xe3o do c\xf3digo cURL ou algum erro, voc\xea pode obter um novo c\xf3digo ",(0,n.kt)("a",{parentName:"p",href:"./overview#desinstalando-um-aplicativo"},"desinstalando")," e ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/applications/overview#instalando-seu-aplicativo"},"reinstalando")," o seu aplicativo na loja novamente."),(0,n.kt)("p",null,"Para isso siga estes passos:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Ao receber o alerta informando que a requisi\xe7\xe3o n\xe3o foi confirmada, clique no bot\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Tente outra vez"),"."),(0,n.kt)("li",{parentName:"ol"},"Voc\xea ser\xe1 redirecionado para a sess\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Meus aplicativos")," no administrador da sua Loja de demo."),(0,n.kt)("li",{parentName:"ol"},"No administrador da sua loja demo, na sess\xe3o ",(0,n.kt)("strong",{parentName:"li"},"Meus aplicativos"),", verifique se o aplicativo est\xe1 instalado e clique em ",(0,n.kt)("strong",{parentName:"li"},"Desinstalar"),".")),(0,n.kt)("p",null,"Seguindo essas etapas, voc\xea poder\xe1 obter um novo c\xf3digo cURL v\xe1lido e retomar o processo de ",(0,n.kt)("a",{parentName:"p",href:"./authentication#obtendo-o-token-de-acesso"},"autentica\xe7\xe3o")," com sucesso. Certifique-se de acompanhar as instru\xe7\xf5es com aten\xe7\xe3o para evitar problemas futuros."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre ",(0,n.kt)("a",{parentName:"li",href:"/devhub-apps/docs/applications/overview"},"Aplicativos"))))}m.isMDXComponent=!0}}]);