"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[416],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(l,".").concat(d)]||c[d]||u[d]||o;return n?s.createElement(b,i(i({ref:t},m),{},{components:n})):s.createElement(b,i({ref:t},m))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>N,frontMatter:()=>b,metadata:()=>g,toc:()=>y});var s=n(7462),a=n(7294),o=n(3905),i=n(4774),r=n(9531);const l=()=>{const{darkMode:e}=(0,r.vs)();return a.createElement(i.Box,{backgroundColor:e?"neutral-background":"neutral-surface",padding:"4",borderRadius:"2"},a.createElement(i.Title,{as:"h1"},"My simple app"),a.createElement(i.Box,{display:"flex",flexDirection:"column",gap:"4"},a.createElement(i.Alert,{appearance:"primary",title:"Hello world"},"This is a simple alert to show Nimbus components",a.createElement(i.Button,null,"Click me")),a.createElement(i.Card,null,a.createElement(i.Card.Body,null,a.createElement(i.Text,{fontSize:"base"},"This is a sample paragraph inside a Card component.")))))};var p=n(5718);const m=[{title:"Nimbus Styles",name:"@nimbus-ds/styles",description:"O pacote essencial que fornece vari\xe1veis e estilos necess\xe1rios para o funcionamento dos componentes.",link:"https://www.npmjs.com/package/@nimbus-ds/styles"},{title:"Nimbus Components",name:"@nimbus-ds/components",description:"O pacote que re\xfane uma cole\xe7\xe3o de componentes at\xf4micos e compostos, essenciais para a constru\xe7\xe3o no Nimbus. De bot\xf5es a inputs e checkboxes, esses blocos de constru\xe7\xe3o formam a base do design de interface, permitindo a cria\xe7\xe3o de componentes mais complexos e reutiliz\xe1veis.",link:"https://www.npmjs.com/package/@nimbus-ds/components"},{title:"Nimbus Patterns",name:"@nimbus-ds/patterns",description:"O conjunto central de padr\xf5es pr\xe9-constru\xeddos que oferece combina\xe7\xf5es inteligentes de componentes at\xf4micos e compostos no Nimbus. Essas solu\xe7\xf5es pr\xe9-definidas, testadas e validadas pela equipe, resolvem desafios de design e intera\xe7\xe3o com efic\xe1cia, promovendo uma abordagem coesa e consistente para implementar solu\xe7\xf5es de design.",link:"https://www.npmjs.com/package/@nimbus-ds/patterns"},{title:"Nimbus Tokens",name:"@nimbus-ds/tokens",description:"Os design tokens representam as vari\xe1veis fundamentais usadas para manter a coer\xeancia em um sistema de design. No contexto do Nimbus, eles abrangem elementos como cores, tipografias e espa\xe7amentos essenciais. Esses tokens s\xe3o a base para garantir uma apar\xeancia e sensa\xe7\xe3o uniformes em todos os componentes e aplica\xe7\xf5es.",link:"https://www.npmjs.com/package/@nimbus-ds/tokens"},{title:"Nimbus Icons",name:"@nimbus-ds/icons",description:"Um conjunto de \xedcones open-source exclusivamente criados para o Nimbus, moldados a partir da morfologia do nosso logotipo de marca. Projetados para agilizar o design e desenvolvimento, esses \xedcones oferecem flexibilidade, localiza\xe7\xe3o e gratuidade, enriquecendo as solu\xe7\xf5es de quem deseja impulsionar hist\xf3rias na Am\xe9rica Latina.",link:"https://www.npmjs.com/package/@nimbus-ds/icons"}],c=()=>a.createElement(i.Box,{display:"flex",flexDirection:"column",gap:"4",mb:"6"},m.map((e=>a.createElement(i.Card,{key:e.name},a.createElement(i.Card.Header,{title:e.title}),a.createElement(i.Card.Body,null,a.createElement(i.Text,{fontSize:"base"},e.description)),a.createElement(i.Card.Footer,null,a.createElement(i.Link,{appearance:"primary"},e.name,a.createElement(i.Icon,{color:"primary-interactive",source:a.createElement(p.ExternalLinkIcon,null)}))))))),u=[{title:"Tela de Ajustes",description:"Possui controles interativos e componentes que manipulam estados agrupados.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-settingspage--basic"},{title:"Modal de confirma\xe7\xe3o",description:"Inclui um modal de confirma\xe7\xe3o que est\xe1 aberto para confirmar uma a\xe7\xe3o destrutiva.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic"},{title:"P\xe1gina de formul\xe1rio",description:"Ele inclui v\xe1rios componentes de entrada de dados que cobrem uma variedade de op\xe7\xf5es.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic"},{title:"Modelo de p\xe1gina b\xe1sico",description:"Ele oferece um caso de exemplo onde todos os elementos poss\xedveis de uma p\xe1gina s\xe3o encontrados.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-page--basic"},{title:"Tela de login",description:"Este modelo de login pode ser usado para fazer login em um aplicativo externo.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-login--basic"},{title:"P\xe1gina de lista simples",description:"Possui uma lista de dados simples com strings de texto e a\xe7\xf5es.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-simplelist--basic"},{title:"P\xe1gina de lista de produtos",description:"Emula a lista de produtos do administrador Nuvemshop.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-productlist--basic"}],d=()=>a.createElement(i.Box,{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr",lg:"1fr 1fr 1fr"},gap:"4",mb:"6"},u.map((e=>a.createElement(i.Card,{key:e.title},a.createElement(i.Card.Header,{title:e.title}),a.createElement(i.Card.Body,null,a.createElement(i.Text,{lineClamp:4},e.description)),a.createElement(i.Card.Footer,null,a.createElement(i.Link,{appearance:"primary"},"Ver exemplo",a.createElement(i.Icon,{color:"primary-interactive",source:a.createElement(p.ExternalLinkIcon,null)}))))))),b={sidebar_position:3,title:"Nimbus"},h="Nimbus Design System",g={unversionedId:"developer-tools/nimbus",id:"developer-tools/nimbus",title:"Nimbus",description:"Nimbus is Nuvemshop's open-source design system. With components validated in Nuvemshop products, optimized patterns and templates, documentation with examples, and synchronization between the UI kit in Figma and the code, Nimbus enables developers and designers to create consistent, accessible, and high-performance interfaces. You can use it to build your apps within the Nuvemshop ecosystem or for your own project, considering the current license.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developer-tools/nimbus.md",sourceDirName:"developer-tools",slug:"/developer-tools/nimbus",permalink:"/devhub-apps/en/docs/developer-tools/nimbus",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/developer-tools/nimbus.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Nimbus"},sidebar:"sidebar",previous:{title:"App Templates",permalink:"/devhub-apps/en/docs/developer-tools/templates"},next:{title:"Nexo",permalink:"/devhub-apps/en/docs/developer-tools/nexo"}},f={},y=[{value:"Key Nimbus Packages",id:"key-nimbus-packages",level:2},{value:"Templates",id:"templates",level:2},{value:"Configuring and Using Nimbus",id:"configuring-and-using-nimbus",level:2},{value:"Next Steps",id:"next-steps",level:2}],k={toc:y},v="wrapper";function N(e){let{components:t,...n}=e;return(0,o.kt)(v,(0,s.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nimbus-design-system"},"Nimbus Design System"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")," is Nuvemshop's open-source design system. With components validated in Nuvemshop products, optimized patterns and templates, documentation with examples, and synchronization between the UI kit in Figma and the code, Nimbus enables developers and designers to create consistent, accessible, and high-performance interfaces. You can use it to build your apps within the Nuvemshop ecosystem or for your own project, considering the current license."),(0,o.kt)("p",null,"Within the context of the application, we encourage the use of ",(0,o.kt)("a",{parentName:"p",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")," to develop cohesive and recognizable user experiences. It's important that your application incorporates and makes use of ",(0,o.kt)("a",{parentName:"p",href:"/devhub-apps/en/docs/developer-tools/nimbus#principais-pacotes-do-nimbus"},"Nimbus libraries"),", following both app design guidelines and broader ",(0,o.kt)("strong",{parentName:"p"},"Nimbus")," guidelines. For native apps, using Nimbus is a prerequisite to maintain consistency and quality in interfaces integrated into the store admin."),(0,o.kt)("h2",{id:"key-nimbus-packages"},"Key Nimbus Packages"),(0,o.kt)(c,{mdxType:"NimbusPackages"}),(0,o.kt)("h2",{id:"templates"},"Templates"),(0,o.kt)(d,{mdxType:"NimbusTemplates"}),(0,o.kt)("h2",{id:"configuring-and-using-nimbus"},"Configuring and Using Nimbus"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For this example, we will install only the essential Nimbus packages.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nimbus-ds/styles @nimbus-ds/components\n")),(0,o.kt)("p",null,"or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm add @nimbus-ds/styles @nimbus-ds/components\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"We import all the necessary Nimbus components and the CSS styles file into our project, enabling the use of any Nimbus component in the project.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport useThemeContext from "@theme/hooks/useThemeContext";\nimport "@nimbus-ds/styles/dist/index.css";\n\nimport { Title, Card, Text, Button, Alert, Box } from "@nimbus-ds/components";\n\nconst App: React.FC = () => (\n  <Box display="flex" flexDirection="column" gap="4">\n    <Title as="h1">My simple app</Title>\n    <Alert appearance="primary" title="Hello world">\n      This is a simple alert to show Nimbus components\n      <Button>Click me</Button>\n    </Alert>\n    <Card>\n      <Card.Body>\n        <Text fontSize="base">\n          This is a sample paragraph inside a Card component.\n        </Text>\n      </Card.Body>\n    </Card>\n  </Box>\n);\n\nexport default App;\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After implementing the above within your project, you will have the following output.")),(0,o.kt)(l,{mdxType:"NimbusExample"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn more about ",(0,o.kt)("a",{parentName:"li",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")),(0,o.kt)("li",{parentName:"ul"},"Learn more about ",(0,o.kt)("a",{parentName:"li",href:"./nexo"},"Nexo")),(0,o.kt)("li",{parentName:"ul"},"Learn more about our ",(0,o.kt)("a",{parentName:"li",href:"./nuvemshop-api"},"API"))))}N.isMDXComponent=!0}}]);