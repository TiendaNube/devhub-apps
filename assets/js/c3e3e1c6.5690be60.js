"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[105],{7182:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>b});var s=a(6687);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,s,o=function(e,t){if(null==e)return{};var a,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var m=s.createContext({}),p=function(e){var t=s.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return s.createElement(m.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,m=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),d=p(a),u=o,b=d["".concat(m,".").concat(u)]||d[u]||c[u]||n;return a?s.createElement(b,i(i({ref:t},l),{},{components:a})):s.createElement(b,i({ref:t},l))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=u;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<n;p++)i[p]=a[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,a)}u.displayName="MDXCreateElement"},140:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>y,frontMatter:()=>b,metadata:()=>v,toc:()=>h});var s=a(6245),o=a(6687),n=a(7182),i=a(5192),r=a(2955);const m=()=>{const{darkMode:e}=(0,r.vs)();return o.createElement(i.Box,{backgroundColor:e?"neutral-background":"neutral-surface",padding:"4",borderRadius:"2"},o.createElement(i.Title,{as:"h1"},"My simple app"),o.createElement(i.Box,{display:"flex",flexDirection:"column",gap:"4"},o.createElement(i.Alert,{appearance:"primary",title:"Hello world"},"This is a simple alert to show Nimbus components",o.createElement(i.Button,null,"Click me")),o.createElement(i.Card,null,o.createElement(i.Card.Body,null,o.createElement(i.Text,{fontSize:"base"},"This is a sample paragraph inside a Card component.")))))};var p=a(882);const l=[{title:"Nimbus Styles",name:"@nimbus-ds/styles",description:"O pacote essencial que fornece vari\xe1veis e estilos necess\xe1rios para o funcionamento dos componentes.",link:"https://www.npmjs.com/package/@nimbus-ds/styles"},{title:"Nimbus Components",name:"@nimbus-ds/components",description:"O pacote que re\xfane uma cole\xe7\xe3o de componentes at\xf4micos e compostos, essenciais para a constru\xe7\xe3o no Nimbus. De bot\xf5es a inputs e checkboxes, esses blocos de constru\xe7\xe3o formam a base do design de interface, permitindo a cria\xe7\xe3o de componentes mais complexos e reutiliz\xe1veis.",link:"https://www.npmjs.com/package/@nimbus-ds/components"},{title:"Nimbus Patterns",name:"@nimbus-ds/patterns",description:"O conjunto central de padr\xf5es pr\xe9-constru\xeddos que oferece combina\xe7\xf5es inteligentes de componentes at\xf4micos e compostos no Nimbus. Essas solu\xe7\xf5es pr\xe9-definidas, testadas e validadas pela equipe, resolvem desafios de design e intera\xe7\xe3o com efic\xe1cia, promovendo uma abordagem coesa e consistente para implementar solu\xe7\xf5es de design.",link:"https://www.npmjs.com/package/@nimbus-ds/patterns"},{title:"Nimbus Tokens",name:"@nimbus-ds/tokens",description:"Os design tokens representam as vari\xe1veis fundamentais usadas para manter a coer\xeancia em um sistema de design. No contexto do Nimbus, eles abrangem elementos como cores, tipografias e espa\xe7amentos essenciais. Esses tokens s\xe3o a base para garantir uma apar\xeancia e sensa\xe7\xe3o uniformes em todos os componentes e aplica\xe7\xf5es.",link:"https://www.npmjs.com/package/@nimbus-ds/tokens"},{title:"Nimbus Icons",name:"@nimbus-ds/icons",description:"Um conjunto de \xedcones open-source exclusivamente criados para o Nimbus, moldados a partir da morfologia do nosso logotipo de marca. Projetados para agilizar o design e desenvolvimento, esses \xedcones oferecem flexibilidade, localiza\xe7\xe3o e gratuidade, enriquecendo as solu\xe7\xf5es de quem deseja impulsionar hist\xf3rias na Am\xe9rica Latina.",link:"https://www.npmjs.com/package/@nimbus-ds/icons"}],d=()=>o.createElement(i.Box,{display:"flex",flexDirection:"column",gap:"4",mb:"6"},l.map((e=>o.createElement(i.Card,{key:e.name},o.createElement(i.Card.Header,{title:e.title}),o.createElement(i.Card.Body,null,o.createElement(i.Text,{fontSize:"base"},e.description)),o.createElement(i.Card.Footer,null,o.createElement(i.Link,{appearance:"primary"},e.name,o.createElement(i.Icon,{color:"primary-interactive",source:o.createElement(p.ExternalLinkIcon,null)}))))))),c=[{title:"Tela de Ajustes",description:"Possui controles interativos e componentes que manipulam estados agrupados.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-settingspage--basic"},{title:"Modal de confirma\xe7\xe3o",description:"Inclui um modal de confirma\xe7\xe3o que est\xe1 aberto para confirmar uma a\xe7\xe3o destrutiva.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic"},{title:"P\xe1gina de formul\xe1rio",description:"Ele inclui v\xe1rios componentes de entrada de dados que cobrem uma variedade de op\xe7\xf5es.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-form--basic"},{title:"Modelo de p\xe1gina b\xe1sico",description:"Ele oferece um caso de exemplo onde todos os elementos poss\xedveis de uma p\xe1gina s\xe3o encontrados.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-page--basic"},{title:"Tela de login",description:"Este modelo de login pode ser usado para fazer login em um aplicativo externo.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-login--basic"},{title:"P\xe1gina de lista simples",description:"Possui uma lista de dados simples com strings de texto e a\xe7\xf5es.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-simplelist--basic"},{title:"P\xe1gina de lista de produtos",description:"Emula a lista de produtos do administrador Nuvemshop.",link:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-productlist--basic"}],u=()=>o.createElement(i.Box,{display:"grid",gridTemplateColumns:{xs:"1fr",md:"1fr 1fr",lg:"1fr 1fr 1fr"},gap:"4",mb:"6"},c.map((e=>o.createElement(i.Card,{key:e.title},o.createElement(i.Card.Header,{title:e.title}),o.createElement(i.Card.Body,null,o.createElement(i.Text,{lineClamp:4},e.description)),o.createElement(i.Card.Footer,null,o.createElement(i.Link,{appearance:"primary"},"Ver exemplo",o.createElement(i.Icon,{color:"primary-interactive",source:o.createElement(p.ExternalLinkIcon,null)}))))))),b={sidebar_position:3,title:"Nimbus"},f="Nimbus Design System",v={unversionedId:"developer-tools/nimbus",id:"developer-tools/nimbus",title:"Nimbus",description:"O Nimbus \xe9 o design system da Nuvemshop, projetado para elevar o com\xe9rcio eletr\xf4nico na Am\xe9rica Latina. Com componentes validados em produtos Nuvemshop, padr\xf5es e templates otimizados, documenta\xe7\xe3o rica em exemplos e sincroniza\xe7\xe3o perfeita entre o UI kit e o c\xf3digo, o Nimbus capacita desenvolvedores e designers a criar solu\xe7\xf5es consistentes, acess\xedveis e de alto desempenho. Simplifique o desenvolvimento, mantenha a coes\xe3o visual e junte-se a n\xf3s no movimento para potencializar hist\xf3rias de sucesso com o poder do Nimbus.",source:"@site/docs/developer-tools/nimbus.md",sourceDirName:"developer-tools",slug:"/developer-tools/nimbus",permalink:"/devhub-apps/docs/developer-tools/nimbus",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/developer-tools/nimbus.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Nimbus"},sidebar:"sidebar",previous:{title:"App templates",permalink:"/devhub-apps/docs/developer-tools/templates"},next:{title:"Nexo",permalink:"/devhub-apps/docs/developer-tools/nexo"}},g={},h=[{value:"Principais pacotes do Nimbus",id:"principais-pacotes-do-nimbus",level:2},{value:"Templates",id:"templates",level:2},{value:"Configurando o Nimbus",id:"configurando-o-nimbus",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],k={toc:h},N="wrapper";function y(e){let{components:t,...a}=e;return(0,n.kt)(N,(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"nimbus-design-system"},"Nimbus Design System"),(0,n.kt)("p",null,"O ",(0,n.kt)("a",{parentName:"p",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")," \xe9 o design system da Nuvemshop, projetado para elevar o com\xe9rcio eletr\xf4nico na Am\xe9rica Latina. Com componentes validados em produtos Nuvemshop, padr\xf5es e templates otimizados, documenta\xe7\xe3o rica em exemplos e sincroniza\xe7\xe3o perfeita entre o UI kit e o c\xf3digo, o Nimbus capacita desenvolvedores e designers a criar solu\xe7\xf5es consistentes, acess\xedveis e de alto desempenho. Simplifique o desenvolvimento, mantenha a coes\xe3o visual e junte-se a n\xf3s no movimento para potencializar hist\xf3rias de sucesso com o poder do ",(0,n.kt)("strong",{parentName:"p"},"Nimbus"),"."),(0,n.kt)("p",null,"O painel de administra\xe7\xe3o da Nuvemshop \xe9 o centro de opera\xe7\xf5es onde os usu\xe1rios gerenciam seus neg\xf3cios. Os aplicativos nativos da Nuvemshop est\xe3o integrados a este admin, proporcionando uma sinergia perfeita com os fluxos de trabalho dos usu\xe1rios. O admin da Nuvemshop oferece uma plataforma para que os aplicativos incorporados possam renderizar sua interface de usu\xe1rio. No ambiente web, isso \xe9 alcan\xe7ado por meio de um iframe. O ",(0,n.kt)("strong",{parentName:"p"},"Nimbus")," desempenha um papel fundamental na manuten\xe7\xe3o da coer\xeancia visual entre o painel de administra\xe7\xe3o e os aplicativos nativos, garantindo uma experi\xeancia integrada e harmoniosa."),(0,n.kt)("p",null,"Dentro do contexto do aplicativo, incentivamos o uso do ",(0,n.kt)("a",{parentName:"p",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")," para desenvolver experi\xeancias de usu\xe1rio coesas e reconhec\xedveis. \xc9 importante que seu aplicativo incorpore e fa\xe7a uso das ",(0,n.kt)("a",{parentName:"p",href:"/devhub-apps/docs/developer-tools/nimbus#principais-pacotes-do-nimbus"},"bibliotecas do Nimbus"),", seguindo tanto as diretrizes de design de aplicativos quanto as diretrizes mais abrangentes do ",(0,n.kt)("strong",{parentName:"p"},"Nimbus"),". Isso garantir\xe1 a cria\xe7\xe3o de experi\xeancias de usu\xe1rio que sejam ao mesmo tempo familiares e consistentes."),(0,n.kt)("h2",{id:"principais-pacotes-do-nimbus"},"Principais pacotes do Nimbus"),(0,n.kt)("p",null,"A seguir, apresentamos uma lista dos principais pacotes do Nimbus que podem ajudar a acelerar a sua cria\xe7\xe3o de aplicativos:"),(0,n.kt)(d,{mdxType:"NimbusPackages"}),(0,n.kt)("h2",{id:"templates"},"Templates"),(0,n.kt)("p",null,"No Nimbus, oferecemos uma gama diversificada de templates pr\xe9-constru\xeddos que utilizam nossos componentes, como telas de login, tabelas e formul\xe1rios. Esses modelos prontos para uso permitem criar com facilidade, aproveitando a efici\xeancia e a consist\xeancia do design do Nimbus."),(0,n.kt)(u,{mdxType:"NimbusTemplates"}),(0,n.kt)("h2",{id:"configurando-o-nimbus"},"Configurando o Nimbus"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Para esse exemplo vamos instalar apenas os pacotes essenciais do nimbus.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @nimbus-ds/styles @nimbus-ds/components\n")),(0,n.kt)("p",null,"or"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm add @nimbus-ds/styles @nimbus-ds/components\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Importamos todos os componentes necess\xe1rios do Nimbus e o arquivo de estilos css para o nosso projeto, permitindo assim a utiliza\xe7\xe3o de qualquer componente Nimbus no projeto.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\nimport useThemeContext from "@theme/hooks/useThemeContext";\nimport "@nimbus-ds/styles/dist/index.css";\n\nimport { Title, Card, Text, Button, Alert, Box } from "@nimbus-ds/components";\n\nconst App: React.FC = () => (\n  <Box display="flex" flexDirection="column" gap="4">\n    <Title as="h1">My simple app</Title>\n    <Alert appearance="primary" title="Hello world">\n      This is a simple alert to show Nimbus components\n      <Button>Click me</Button>\n    </Alert>\n    <Card>\n      <Card.Body>\n        <Text fontSize="base">\n          This is a sample paragraph inside a Card component.\n        </Text>\n      </Card.Body>\n    </Card>\n  </Box>\n);\n\nexport default App;\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Ap\xf3s a implementa\xe7\xe3o acima dentro do seu projeto teremos a seguinte saida.")),(0,n.kt)(m,{mdxType:"NimbusExample"}),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre a ",(0,n.kt)("a",{parentName:"li",href:"https://nimbus.nuvemshop.com.br"},"Nimbus")),(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre o ",(0,n.kt)("a",{parentName:"li",href:"./nexo"},"Nexo")),(0,n.kt)("li",{parentName:"ul"},"Saiba mais sobre nossa ",(0,n.kt)("a",{parentName:"li",href:"./nuvemshop-api"},"API"))))}y.isMDXComponent=!0}}]);