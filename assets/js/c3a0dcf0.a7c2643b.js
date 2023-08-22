"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[742],{3905:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>v});var t=o(7294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=t.createContext({}),u=function(e){var a=t.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},c=function(e){var a=u(e.components);return t.createElement(p.Provider,{value:a},e.children)},d="mdxType",l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,v=d["".concat(p,".").concat(m)]||d[m]||l[m]||n;return o?t.createElement(v,s(s({ref:a},c),{},{components:o})):t.createElement(v,s({ref:a},c))}));function v(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,s=new Array(n);s[0]=m;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<n;u++)s[u]=o[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4076:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var t=o(7462),r=(o(7294),o(3905));const n={sidebar_position:5},s="Nuvemshop API",i={unversionedId:"developer-tools/nuvemshop-api",id:"developer-tools/nuvemshop-api",title:"Nuvemshop API",description:"A Nuvemshop API, \xe9 uma ferramenta poderosa para interagir com nossa plataforma e expandir as funcionalidades do seu aplicativo. Antes de come\xe7ar a utilizar nossa API, \xe9 crucial autenticar seu aplicativo. Ap\xf3s isso, voc\xea ter\xe1 acesso a um access_token \xfanico de autentica\xe7\xe3o, permitindo que explore e utilize nossos recursos da API.",source:"@site/docs/developer-tools/nuvemshop-api.md",sourceDirName:"developer-tools",slug:"/developer-tools/nuvemshop-api",permalink:"/tiendanube-devhub-apps/docs/developer-tools/nuvemshop-api",draft:!1,editUrl:"https://github.com/TiendaNube/app-templates-hub/tree/master/website/docs/developer-tools/nuvemshop-api.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Nexo",permalink:"/tiendanube-devhub-apps/docs/developer-tools/nexo"},next:{title:"Overview",permalink:"/tiendanube-devhub-apps/docs/applications/overview"}},p={},u=[{value:"Permiss\xf5es e escopos",id:"permiss\xf5es-e-escopos",level:2},{value:"Acessando a API de Produtos",id:"acessando-a-api-de-produtos",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],c={toc:u},d="wrapper";function l(e){let{components:a,...o}=e;return(0,r.kt)(d,(0,t.Z)({},c,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"nuvemshop-api"},"Nuvemshop API"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://tiendanube.github.io/api-documentation/intro"},"Nuvemshop API"),", \xe9 uma ferramenta poderosa para interagir com nossa plataforma e expandir as funcionalidades do seu aplicativo. Antes de come\xe7ar a utilizar nossa API, \xe9 crucial ",(0,r.kt)("a",{parentName:"p",href:"/tiendanube-devhub-apps/docs/applications/overview#autenticando-seu-aplicativo"},"autenticar seu aplicativo"),". Ap\xf3s isso, voc\xea ter\xe1 acesso a um ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," \xfanico de autentica\xe7\xe3o, permitindo que explore e utilize nossos recursos da API."),(0,r.kt)("h2",{id:"permiss\xf5es-e-escopos"},"Permiss\xf5es e escopos"),(0,r.kt)("p",null,"Nossa API \xe9 organizada em escopos, o que significa que cada aplicativo criado precisa selecionar quais escopos deseja acessar. Por exemplo, se um aplicativo obtiver a permiss\xe3o do escopo ",(0,r.kt)("inlineCode",{parentName:"p"},"products")," para ",(0,r.kt)("inlineCode",{parentName:"p"},"Write products"),", ele poder\xe1 criar, modificar e excluir produtos e categorias da loja. Ou, no caso de ",(0,r.kt)("inlineCode",{parentName:"p"},"Read products"),", o aplicativo s\xf3 poder\xe1 visualizar produtos e categorias sem a capacidade de fazer altera\xe7\xf5es."),(0,r.kt)("p",null,"Lembre-se de que, se for necess\xe1rio ",(0,r.kt)("a",{parentName:"p",href:"../applications/overview#editando-as-permiss%C3%B5es-do-seu-aplicativo"},"alterar o escopo de um aplicativo")," j\xe1 criado, ser\xe1 necess\xe1rio reinstalar o app e repetir o processo de autentica\xe7\xe3o para obter um novo ",(0,r.kt)("inlineCode",{parentName:"p"},"access_token")," com as permiss\xf5es atualizadas."),(0,r.kt)("p",null,"Agora, vamos dar uma olhada em um exemplo de uso da nossa API para ilustrar como voc\xea pode aproveitar ao m\xe1ximo essa ferramenta poderosa."),(0,r.kt)("h2",{id:"acessando-a-api-de-produtos"},"Acessando a API de Produtos"),(0,r.kt)("p",null,"Para interagir com a nossa API de produtos, todos os URLs come\xe7am com ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.tiendanube.com/v1/{store_id}")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.nuvemshop.com.br/v1/{store_id}"),", garantindo a seguran\xe7a por meio do ",(0,r.kt)("strong",{parentName:"p"},"SSL"),". O caminho \xe9 prefixado com o ID da loja e a vers\xe3o da API. Caso haja mudan\xe7as incompat\xedveis com vers\xf5es anteriores, faremos o incremento da vers\xe3o para garantir suporte est\xe1vel aos URLs antigos."),(0,r.kt)("p",null,"Suponhamos que voc\xea queira acessar a loja com o ID ",(0,r.kt)("inlineCode",{parentName:"p"},"123456")," por meio da API. A URL ser\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.tiendanube.com/v1/123456")," ou ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.nuvemshop.com.br/v1/123456"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Para realizar uma solicita\xe7\xe3o de todos os produtos da loja, voc\xea utilizaria o seguinte comando no curl:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authentication: bearer ACCESS_TOKEN' \\\n-H 'User-Agent: MyApp (name@email.com)' \\\nhttps://api.tiendanube.com/v1/123456/products\n")),(0,r.kt)("p",{parentName:"li"},"Certifique-se de substituir ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN")," pelo token de acesso da loja para o seu aplicativo (",(0,r.kt)("a",{parentName:"p",href:"/tiendanube-devhub-apps/docs/applications/authentication"},"consulte Autentica\xe7\xe3o"),"). Isso permitir\xe1 que voc\xea obtenha os detalhes de todos os produtos da loja identificada pelo ID ",(0,r.kt)("inlineCode",{parentName:"p"},"123456"),"."),(0,r.kt)("p",{parentName:"li"},"Essa solicita\xe7\xe3o, em caso de sucesso, deve retornar a listagem de todos os produtos da sua loja no seguinte ",(0,r.kt)("a",{parentName:"p",href:"https://tiendanube.github.io/api-documentation/resources/product#get-products-1"},"formato"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Para criar um novo produto, voc\xea deve incluir o cabe\xe7alho ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," e os dados do produto em formato JSON:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -H 'Authentication: bearer ACCESS_TOKEN' \\\n-H 'Content-Type: application/json' \\\n-H 'User-Agent: MyApp (name@email.com)' \\\n-d '{ \"name\": \"Meu novo produto\" }' \\\nhttps://api.tiendanube.com/v1/123456/products\n")),(0,r.kt)("p",{parentName:"li"},"Lembre-se de substituir ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN")," pelo token de acesso da loja para o seu aplicativo (",(0,r.kt)("a",{parentName:"p",href:"/tiendanube-devhub-apps/docs/applications/authentication"},"consulte Autentica\xe7\xe3o"),") e ajustar o nome do produto conforme necess\xe1rio. Isso permitir\xe1 que voc\xea crie um novo produto na loja identificada pelo ID ",(0,r.kt)("inlineCode",{parentName:"p"},"123456"),"."),(0,r.kt)("p",{parentName:"li"},"Essa solicita\xe7\xe3o, em caso de sucesso, deve retornar o produto criado no seguinte ",(0,r.kt)("a",{parentName:"p",href:"https://tiendanube.github.io/api-documentation/resources/product#post-products"},"formato"),"."))),(0,r.kt)("p",null,"Lembre-se de que este \xe9 apenas um guia r\xe1pido de uso da nossa API. Para obter mais detalhes e explorar todos os recursos dispon\xedveis, acesse a ",(0,r.kt)("a",{parentName:"p",href:"https://tiendanube.github.io/api-documentation/intro"},"documenta\xe7\xe3o completa")," da nossa API."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Saiba mais sobre a ",(0,r.kt)("a",{parentName:"li",href:"https://tiendanube.github.io/api-documentation/intro"},"Nuvemshop API")),(0,r.kt)("li",{parentName:"ul"},"Saiba mais sobre os ",(0,r.kt)("a",{parentName:"li",href:"../applications/overview"},"Aplicativos")),(0,r.kt)("li",{parentName:"ul"},"Saiba mais sobre a ",(0,r.kt)("a",{parentName:"li",href:"../applications/authentication"},"Autentica\xe7\xe3o dos aplicativos"))))}l.isMDXComponent=!0}}]);