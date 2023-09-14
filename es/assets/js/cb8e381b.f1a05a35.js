"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[201],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>b});var a=s(7294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=d(s),u=n,b=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return s?a.createElement(b,o(o({ref:t},c),{},{components:s})):a.createElement(b,o({ref:t},c))}));function b(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,o=new Array(i);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[m]="string"==typeof e?e:n,o[1]=r;for(var d=2;d<i;d++)o[d]=s[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}u.displayName="MDXCreateElement"},8218:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>E,frontMatter:()=>g,metadata:()=>y,toc:()=>k});var a=s(7462),n=s(7294),i=s(3905),o=s(4774),r=s(9531);const l=()=>{const{darkMode:e}=(0,r.vs)();return n.createElement(o.Box,{backgroundColor:e?"neutral-background":"neutral-surface",padding:"4",borderRadius:"2"},n.createElement(o.Title,{as:"h1"},"My simple app"),n.createElement(o.Box,{display:"flex",flexDirection:"column",gap:"4"},n.createElement(o.Alert,{appearance:"primary",title:"Hello world"},"This is a simple alert to show Nimbus components",n.createElement(o.Button,null,"Click me")),n.createElement(o.Card,null,n.createElement(o.Card.Body,null,n.createElement(o.Text,{fontSize:"base"},"This is a sample paragraph inside a Card component.")))))};var d=s(5718),c=s(5999);const m=[{title:"Nimbus Styles",name:"@nimbus-ds/styles",description:n.createElement(c.Z,{id:"docs.nimbusPackages.card.1.description"},"O pacote essencial que fornece vari\xe1veis e estilos necess\xe1rios para o funcionamento dos componentes."),link:"https://www.npmjs.com/package/@nimbus-ds/styles"},{title:"Nimbus Components",name:"@nimbus-ds/components",description:n.createElement(c.Z,{id:"docs.nimbusPackages.card.2.description"},"O pacote que re\xfane uma cole\xe7\xe3o de componentes at\xf4micos e compostos, essenciais para a constru\xe7\xe3o no Nimbus. De bot\xf5es a inputs e checkboxes, esses blocos de constru\xe7\xe3o formam a base do design de interface, permitindo a cria\xe7\xe3o de componentes mais complexos e reutiliz\xe1veis."),link:"https://www.npmjs.com/package/@nimbus-ds/components"},{title:"Nimbus Patterns",name:"@nimbus-ds/patterns",description:n.createElement(c.Z,{id:"docs.nimbusPackages.card.3.description"},"O conjunto central de padr\xf5es pr\xe9-constru\xeddos que oferece combina\xe7\xf5es inteligentes de componentes at\xf4micos e compostos no Nimbus. Essas solu\xe7\xf5es pr\xe9-definidas, testadas e validadas pela equipe, resolvem desafios de design e intera\xe7\xe3o com efic\xe1cia, promovendo uma abordagem coesa e consistente para implementar solu\xe7\xf5es de design."),link:"https://www.npmjs.com/package/@nimbus-ds/patterns"},{title:"Nimbus Tokens",name:"@nimbus-ds/tokens",description:n.createElement(c.Z,{id:"docs.nimbusPackages.card.4.description"},"Os design tokens representam as vari\xe1veis fundamentais usadas para manter a coer\xeancia em um sistema de design. No contexto do Nimbus, eles abrangem elementos como cores, tipografias e espa\xe7amentos essenciais. Esses tokens s\xe3o a base para garantir uma apar\xeancia e sensa\xe7\xe3o uniformes em todos os componentes e aplica\xe7\xf5es."),link:"https://www.npmjs.com/package/@nimbus-ds/tokens"},{title:"Nimbus Icons",name:"@nimbus-ds/icons",description:n.createElement(c.Z,{id:"docs.nimbusPackages.card.5.description"},"Um conjunto de \xedcones open-source exclusivamente criados para o Nimbus, moldados a partir da morfologia do nosso logotipo de marca. Projetados para agilizar o design e desenvolvimento, esses \xedcones oferecem flexibilidade, localiza\xe7\xe3o e gratuidade, enriquecendo as solu\xe7\xf5es de quem deseja impulsionar hist\xf3rias na Am\xe9rica Latina."),link:"https://www.npmjs.com/package/@nimbus-ds/icons"}],p=()=>n.createElement(o.Box,{display:"flex",flexDirection:"column",gap:"4",mb:"6"},m.map((e=>n.createElement(o.Card,{key:e.name},n.createElement(o.Card.Header,{title:e.title}),n.createElement(o.Card.Body,null,n.createElement(o.Text,{fontSize:"base"},e.description)),n.createElement(o.Card.Footer,null,n.createElement(o.Link,{appearance:"primary"},e.name,n.createElement(o.Icon,{color:"primary-interactive",source:n.createElement(d.ExternalLinkIcon,null)}))))))),u=[{title:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.1.title"},"Tela de Ajustes"),description:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.1.description"},"Possui controles interativos e componentes que manipulam estados agrupados."),link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-settingspage--basic"},{title:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.2.title"},"Modal de confirma\xe7\xe3o"),description:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.2.description"},"Inclui um modal de confirma\xe7\xe3o que est\xe1 aberto para confirmar uma a\xe7\xe3o destrutiva."),link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic"},{title:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.3.title"},"P\xe1gina de formul\xe1rio"),description:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.3.description"},"Ele inclui v\xe1rios componentes de entrada de dados que cobrem uma variedade de op\xe7\xf5es."),link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic"},{title:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.4.title"},"Modelo de p\xe1gina b\xe1sico"),description:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.4.description"},"Ele oferece um caso de exemplo onde todos os elementos poss\xedveis de uma p\xe1gina s\xe3o encontrados."),link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-page--basic"},{title:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.5.title"},"Tela de login"),description:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.5.description"},"Este modelo de login pode ser usado para fazer login em um aplicativo externo."),link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-login--basic"},{title:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.6.title"},"P\xe1gina de lista simples"),description:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.6.description"},"Possui uma lista de dados simples com strings de texto e a\xe7\xf5es."),link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-simplelist--basic"},{title:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.7.title"},"P\xe1gina de lista de produtos"),description:n.createElement(c.Z,{id:"docs.nimbusTemplates.card.7.title"},"Emula a lista de produtos do administrador Nuvemshop."),link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-productlist--basic"}],b=()=>n.createElement(o.Box,{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr",lg:"1fr 1fr 1fr"},gap:"4",mb:"6"},u.map((e=>n.createElement(o.Card,{key:e.title},n.createElement(o.Card.Header,{title:e.title}),n.createElement(o.Card.Body,null,n.createElement(o.Text,{lineClamp:4},e.description)),n.createElement(o.Card.Footer,null,n.createElement(o.Link,{appearance:"primary"},n.createElement(c.Z,{id:"docs.nimbusTemplates.card.linkText"},"Ver exemplo"),n.createElement(o.Icon,{color:"primary-interactive",source:n.createElement(d.ExternalLinkIcon,null)}))))))),g={sidebar_position:3,title:"Nimbus"},f="Sistema de Dise\xf1o Nimbus",y={unversionedId:"developer-tools/nimbus",id:"developer-tools/nimbus",title:"Nimbus",description:"Nimbus es el sistema de dise\xf1o de c\xf3digo abierto de Tiendanube. Con componentes validados en productos Tiendanube, patrones y plantillas optimizados, documentaci\xf3n con ejemplos y sincronizaci\xf3n entre el kit de interfaz de usuario en Figma y el c\xf3digo, Nimbus permite a los desarrolladores y dise\xf1adores crear interfaces consistentes, accesibles y de alto rendimiento. Puede usarlo para desarrollar sus aplicaciones dentro del ecosistema de Tiendanube o para su propio proyecto, teniendo en cuenta la licencia vigente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/developer-tools/nimbus.md",sourceDirName:"developer-tools",slug:"/developer-tools/nimbus",permalink:"/devhub-apps/es/docs/developer-tools/nimbus",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/developer-tools/nimbus.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Nimbus"},sidebar:"sidebar",previous:{title:"App Templates",permalink:"/devhub-apps/es/docs/developer-tools/templates"},next:{title:"Nexo",permalink:"/devhub-apps/es/docs/developer-tools/nexo"}},h={},k=[{value:"Principales paquetes de Nimbus",id:"principales-paquetes-de-nimbus",level:2},{value:"Plantillas",id:"plantillas",level:2},{value:"Configuraci\xf3n y uso de Nimbus",id:"configuraci\xf3n-y-uso-de-nimbus",level:2},{value:"Pr\xf3ximos pasos",id:"pr\xf3ximos-pasos",level:2}],v={toc:k},x="wrapper";function E(e){let{components:t,...s}=e;return(0,i.kt)(x,(0,a.Z)({},v,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sistema-de-dise\xf1o-nimbus"},"Sistema de Dise\xf1o Nimbus"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com"},"Nimbus")," es el sistema de dise\xf1o de c\xf3digo abierto de Tiendanube. Con componentes validados en productos Tiendanube, patrones y plantillas optimizados, documentaci\xf3n con ejemplos y sincronizaci\xf3n entre el kit de interfaz de usuario en Figma y el c\xf3digo, Nimbus permite a los desarrolladores y dise\xf1adores crear interfaces consistentes, accesibles y de alto rendimiento. Puede usarlo para desarrollar sus aplicaciones dentro del ecosistema de Tiendanube o para su propio proyecto, teniendo en cuenta la licencia vigente."),(0,i.kt)("p",null,"Dentro del contexto de la aplicaci\xf3n, fomentamos el uso de ",(0,i.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com"},"Nimbus")," para desarrollar experiencias de usuario cohesivas y reconocibles. Es importante que su aplicaci\xf3n incorpore y utilice las ",(0,i.kt)("a",{parentName:"p",href:"/devhub-apps/es/docs/developer-tools/nimbus#principales-pacotes-do-nimbus"},"bibliotecas de Nimbus"),", siguiendo las directrices de design de aplicaciones y las directrices m\xe1s amplias de ",(0,i.kt)("strong",{parentName:"p"},"Nimbus"),". Para las aplicaciones integradas, el uso de Nimbus es un requisito previo para mantener la consistencia y calidad de las interfaces integradas en el administrador de tiendas."),(0,i.kt)("h2",{id:"principales-paquetes-de-nimbus"},"Principales paquetes de Nimbus"),(0,i.kt)(p,{mdxType:"NimbusPackages"}),(0,i.kt)("h2",{id:"plantillas"},"Plantillas"),(0,i.kt)(b,{mdxType:"NimbusTemplates"}),(0,i.kt)("h2",{id:"configuraci\xf3n-y-uso-de-nimbus"},"Configuraci\xf3n y uso de Nimbus"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Para este ejemplo, solo instalaremos los paquetes esenciales de Nimbus.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nimbus-ds/styles @nimbus-ds/components\n")),(0,i.kt)("p",null,"ou"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm add @nimbus-ds/styles @nimbus-ds/components\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Importamos todos los componentes necesarios de Nimbus y el archivo de estilos CSS en nuestro proyecto, lo que nos permite utilizar cualquier componente de Nimbus en el proyecto.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport useThemeContext from "@theme/hooks/useThemeContext";\nimport "@nimbus-ds/styles/dist/index.css";\n\nimport { Title, Card, Text, Button, Alert, Box } from "@nimbus-ds/components";\n\nconst App: React.FC = () => (\n  <Box display="flex" flexDirection="column" gap="4">\n    <Title as="h1">My simple app</Title>\n    <Alert appearance="primary" title="Hello world">\n      This is a simple alert to show Nimbus components\n      <Button>Click me</Button>\n    </Alert>\n    <Card>\n      <Card.Body>\n        <Text fontSize="base">\n          This is a sample paragraph inside a Card component.\n        </Text>\n      </Card.Body>\n    </Card>\n  </Box>\n);\n\nexport default App;\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Despu\xe9s de implementar lo anterior en su proyecto, obtendr\xe1 la siguiente salida.")),(0,i.kt)(l,{mdxType:"NimbusExample"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"pr\xf3ximos-pasos"},"Pr\xf3ximos pasos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Obtenga m\xe1s informaci\xf3n sobre ",(0,i.kt)("a",{parentName:"li",href:"https://nimbus.tiendanube.com"},"Nimbus")),(0,i.kt)("li",{parentName:"ul"},"Obtenga m\xe1s informaci\xf3n sobre ",(0,i.kt)("a",{parentName:"li",href:"./nexo"},"Nexo")),(0,i.kt)("li",{parentName:"ul"},"Obtenga m\xe1s informaci\xf3n sobre nuestra ",(0,i.kt)("a",{parentName:"li",href:"./nuvemshop-api"},"API"))))}E.isMDXComponent=!0}}]);