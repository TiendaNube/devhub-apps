"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[105],{7182:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>b});var o=s(6687);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,o)}return s}function i(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,o,a=function(e,t){if(null==e)return{};var s,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)s=n[o],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)s=n[o],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var m=o.createContext({}),l=function(e){var t=o.useContext(m),s=t;return e&&(s="function"==typeof e?e(t):i(i({},t),e)),s},p=function(e){var t=l(e.components);return o.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var s=e.components,a=e.mdxType,n=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(s),u=a,b=d["".concat(m,".").concat(u)]||d[u]||c[u]||n;return s?o.createElement(b,i(i({ref:t},p),{},{components:s})):o.createElement(b,i({ref:t},p))}));function b(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=s.length,i=new Array(n);i[0]=u;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r[d]="string"==typeof e?e:a,i[1]=r;for(var l=2;l<n;l++)i[l]=s[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,s)}u.displayName="MDXCreateElement"},140:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>x,frontMatter:()=>b,metadata:()=>v,toc:()=>h});var o=s(6245),a=s(6687),n=s(7182),i=s(5192),r=s(2955);const m=()=>{const{darkMode:e}=(0,r.vs)();return a.createElement(i.Box,{backgroundColor:e?"neutral-background":"neutral-surface",padding:"4",borderRadius:"2"},a.createElement(i.Title,{as:"h1"},"My simple app"),a.createElement(i.Box,{display:"flex",flexDirection:"column",gap:"4"},a.createElement(i.Alert,{appearance:"primary",title:"Hello world"},"This is a simple alert to show Nimbus components",a.createElement(i.Button,null,"Click me")),a.createElement(i.Card,null,a.createElement(i.Card.Body,null,a.createElement(i.Text,{fontSize:"base"},"This is a sample paragraph inside a Card component.")))))};var l=s(882);const p=[{title:"Nimbus Styles",name:"@nimbus-ds/styles",description:"O pacote essencial que fornece vari\xe1veis e estilos necess\xe1rios para o funcionamento dos componentes.",link:"https://www.npmjs.com/package/@nimbus-ds/styles"},{title:"Nimbus Components",name:"@nimbus-ds/components",description:"O pacote que re\xfane uma cole\xe7\xe3o de componentes at\xf4micos e compostos, essenciais para a constru\xe7\xe3o no Nimbus. De bot\xf5es a inputs e checkboxes, esses blocos de constru\xe7\xe3o formam a base do design de interface, permitindo a cria\xe7\xe3o de componentes mais complexos e reutiliz\xe1veis.",link:"https://www.npmjs.com/package/@nimbus-ds/components"},{title:"Nimbus Patterns",name:"@nimbus-ds/patterns",description:"O conjunto central de padr\xf5es pr\xe9-constru\xeddos que oferece combina\xe7\xf5es inteligentes de componentes at\xf4micos e compostos no Nimbus. Essas solu\xe7\xf5es pr\xe9-definidas, testadas e validadas pela equipe, resolvem desafios de design e intera\xe7\xe3o com efic\xe1cia, promovendo uma abordagem coesa e consistente para implementar solu\xe7\xf5es de design.",link:"https://www.npmjs.com/package/@nimbus-ds/patterns"},{title:"Nimbus Tokens",name:"@nimbus-ds/tokens",description:"Os design tokens representam as vari\xe1veis fundamentais usadas para manter a coer\xeancia em um sistema de design. No contexto do Nimbus, eles abrangem elementos como cores, tipografias e espa\xe7amentos essenciais. Esses tokens s\xe3o a base para garantir uma apar\xeancia e sensa\xe7\xe3o uniformes em todos os componentes e aplica\xe7\xf5es.",link:"https://www.npmjs.com/package/@nimbus-ds/tokens"},{title:"Nimbus Icons",name:"@nimbus-ds/icons",description:"Um conjunto de \xedcones open-source exclusivamente criados para o Nimbus, moldados a partir da morfologia do nosso logotipo de marca. Projetados para agilizar o design e desenvolvimento, esses \xedcones oferecem flexibilidade, localiza\xe7\xe3o e gratuidade, enriquecendo as solu\xe7\xf5es de quem deseja impulsionar hist\xf3rias na Am\xe9rica Latina.",link:"https://www.npmjs.com/package/@nimbus-ds/icons"}],d=()=>a.createElement(i.Box,{display:"flex",flexDirection:"column",gap:"4",mb:"6"},p.map((e=>a.createElement(i.Card,{key:e.name},a.createElement(i.Card.Header,{title:e.title}),a.createElement(i.Card.Body,null,a.createElement(i.Text,{fontSize:"base"},e.description)),a.createElement(i.Card.Footer,null,a.createElement(i.Link,{appearance:"primary"},e.name,a.createElement(i.Icon,{color:"primary-interactive",source:a.createElement(l.ExternalLinkIcon,null)}))))))),c=[{title:"Tela de Ajustes",description:"Possui controles interativos e componentes que manipulam estados agrupados.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-settingspage--basic"},{title:"Modal de confirma\xe7\xe3o",description:"Inclui um modal de confirma\xe7\xe3o que est\xe1 aberto para confirmar uma a\xe7\xe3o destrutiva.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic"},{title:"P\xe1gina de formul\xe1rio",description:"Ele inclui v\xe1rios componentes de entrada de dados que cobrem uma variedade de op\xe7\xf5es.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic"},{title:"Modelo de p\xe1gina b\xe1sico",description:"Ele oferece um caso de exemplo onde todos os elementos poss\xedveis de uma p\xe1gina s\xe3o encontrados.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-page--basic"},{title:"Tela de login",description:"Este modelo de login pode ser usado para fazer login em um aplicativo externo.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-login--basic"},{title:"P\xe1gina de lista simples",description:"Possui uma lista de dados simples com strings de texto e a\xe7\xf5es.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-simplelist--basic"},{title:"P\xe1gina de lista de produtos",description:"Emula a lista de produtos do administrador Nuvemshop.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-productlist--basic"}],u=()=>a.createElement(i.Box,{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr",lg:"1fr 1fr 1fr"},gap:"4",mb:"6"},c.map((e=>a.createElement(i.Card,{key:e.title},a.createElement(i.Card.Header,{title:e.title}),a.createElement(i.Card.Body,null,a.createElement(i.Text,{lineClamp:4},e.description)),a.createElement(i.Card.Footer,null,a.createElement(i.Link,{appearance:"primary"},"Ver exemplo",a.createElement(i.Icon,{color:"primary-interactive",source:a.createElement(l.ExternalLinkIcon,null)}))))))),b={sidebar_position:3,title:"Nimbus"},g="Nimbus Design System",v={unversionedId:"developer-tools/nimbus",id:"developer-tools/nimbus",title:"Nimbus",description:"O Nimbus \xe9 o design system open-source da Nuvemshop. Com componentes validados em produtos Nuvemshop, padr\xf5es e templates otimizados, documenta\xe7\xe3o com exemplos e sincroniza\xe7\xe3o entre o UI kit no Figma e o c\xf3digo, o Nimbus viabiliza desenvolvedores e designers a criarem interfaces consistentes, acess\xedveis e de alto desempenho. Voc\xea poder\xe1 usar ele para criar seus aplicativos dentro do ecossistema da Nuvemshop ou tamb\xe9m para seu projeto pr\xf3prio considerando a licen\xe7a vigente.",source:"@site/docs/developer-tools/nimbus.md",sourceDirName:"developer-tools",slug:"/developer-tools/nimbus",permalink:"/devhub-apps/docs/developer-tools/nimbus",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/developer-tools/nimbus.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Nimbus"},sidebar:"sidebar",previous:{title:"App templates",permalink:"/devhub-apps/docs/developer-tools/templates"},next:{title:"Nexo",permalink:"/devhub-apps/docs/developer-tools/nexo"}},f={},h=[{value:"Principais pacotes do Nimbus",id:"principais-pacotes-do-nimbus",level:2},{value:"Templates",id:"templates",level:2},{value:"Configurando e utilizando o Nimbus",id:"configurando-e-utilizando-o-nimbus",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],k={toc:h},y="wrapper";function x(e){let{components:t,...s}=e;return(0,n.kt)(y,(0,o.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"nimbus-design-system"},"Nimbus Design System"),(0,n.kt)("p",null,"O ",(0,n.kt)("a",{parentName:"p",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")," \xe9 o design system open-source da Nuvemshop. Com componentes validados em produtos Nuvemshop, padr\xf5es e templates otimizados, documenta\xe7\xe3o com exemplos e sincroniza\xe7\xe3o entre o UI kit no Figma e o c\xf3digo, o Nimbus viabiliza desenvolvedores e designers a criarem interfaces consistentes, acess\xedveis e de alto desempenho. Voc\xea poder\xe1 usar ele para criar seus aplicativos dentro do ecossistema da Nuvemshop ou tamb\xe9m para seu projeto pr\xf3prio considerando a licen\xe7a vigente."),(0,n.kt)("p",null,"Dentro do contexto do aplicativo, incentivamos o uso do ",(0,n.kt)("a",{parentName:"p",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")," para desenvolver experi\xeancias de usu\xe1rio coesas e reconhec\xedveis. \xc9 importante que seu aplicativo incorpore e fa\xe7a uso das ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/developer-tools/nimbus#principais-pacotes-do-nimbus"},"bibliotecas do Nimbus"),", seguindo tanto as diretrizes de design de aplicativos quanto as diretrizes mais abrangentes do ",(0,n.kt)("strong",{parentName:"p"},"Nimbus"),". Para aplicativos nativos, o uso do Nimbus \xe9 pr\xe9-requisito para mantermos a consist\xeancia e qualidade das interfaces integradas ao administrador dos lojistas."),(0,n.kt)("h2",{id:"principais-pacotes-do-nimbus"},"Principais pacotes do Nimbus"),(0,n.kt)(d,{mdxType:"NimbusPackages"}),(0,n.kt)("h2",{id:"templates"},"Templates"),(0,n.kt)(u,{mdxType:"NimbusTemplates"}),(0,n.kt)("h2",{id:"configurando-e-utilizando-o-nimbus"},"Configurando e utilizando o Nimbus"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Para esse exemplo vamos instalar apenas os pacotes essenciais do nimbus.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nimbus-ds/styles @nimbus-ds/components\n")),(0,n.kt)("p",null,"ou"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm add @nimbus-ds/styles @nimbus-ds/components\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Importamos todos os componentes necess\xe1rios do Nimbus e o arquivo de estilos css para o nosso projeto, permitindo assim a utiliza\xe7\xe3o de qualquer componente Nimbus no projeto.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport useThemeContext from "@theme/hooks/useThemeContext";\nimport "@nimbus-ds/styles/dist/index.css";\n\nimport { Title, Card, Text, Button, Alert, Box } from "@nimbus-ds/components";\n\nconst App: React.FC = () => (\n  <Box display="flex" flexDirection="column" gap="4">\n    <Title as="h1">My simple app</Title>\n    <Alert appearance="primary" title="Hello world">\n      This is a simple alert to show Nimbus components\n      <Button>Click me</Button>\n    </Alert>\n    <Card>\n      <Card.Body>\n        <Text fontSize="base">\n          This is a sample paragraph inside a Card component.\n        </Text>\n      </Card.Body>\n    </Card>\n  </Box>\n);\n\nexport default App;\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Ap\xf3s a implementa\xe7\xe3o acima dentro do seu projeto teremos a seguinte saida.")),(0,n.kt)(m,{mdxType:"NimbusExample"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre a ",(0,n.kt)("a",{parentName:"li",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")),(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre o ",(0,n.kt)("a",{parentName:"li",href:"./nexo"},"Nexo")),(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre nossa ",(0,n.kt)("a",{parentName:"li",href:"./nuvemshop-api"},"API"))))}x.isMDXComponent=!0}}]);