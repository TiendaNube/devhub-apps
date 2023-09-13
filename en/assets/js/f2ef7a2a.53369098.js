"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[422],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return r?o.createElement(v,i(i({ref:t},c),{},{components:r})):o.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8811:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>m,default:()=>y,frontMatter:()=>d,metadata:()=>u,toc:()=>b});var o=r(7462),n=r(7294),a=r(3905),i=r(5999),s=r(4774),l=r(5718);const p=[{title:n.createElement(i.Z,{id:"docs.developerTools.card.1.title"},"Nimbus Design System"),description:n.createElement(i.Z,{id:"docs.developerTools.card.1.description"},"Utilize o Nimbus Design System para criar aplicativos incorporados ao administrador de lojistas. Com biblioteca de componentes, padr\xf5es e tokens, garanta uma experi\xeancia coesa e eficiente de desenvolvimento."),link:"https://nimbus.nuvemshop.com.br"},{title:n.createElement(i.Z,{id:"docs.developerTools.card.2.title"},"Nimbus for VSCode extension"),description:n.createElement(i.Z,{id:"docs.developerTools.card.2.description"},"Aumente sua produtividade com o Nimbus Helper! Uma extens\xe3o m\xe1gica para o VS Code que fornece documenta\xe7\xe3o completa de todos os componentes dispon\xedveis e suas propriedades em seu sistema de design favorito. Escreva c\xf3digo elegante, acelere o desenvolvimento e mergulhe nas nuvens da programa\xe7\xe3o com o Nimbus Design System."),link:"https://marketplace.visualstudio.com/items?itemName=Nuvemshop.nimbus-helper"},{title:n.createElement(i.Z,{id:"docs.developerTools.card.3.title"},"Nexo"),description:n.createElement(i.Z,{id:"docs.developerTools.card.3.description"},"Nosso pacote npm essencial para a comunica\xe7\xe3o perfeita entre aplicativos incorporados e o Administrador Nuvemshop. Com mensagens baseadas no padr\xe3o observador, o Nexo possibilita uma troca eficiente de informa\xe7\xf5es, proporcionando uma experi\xeancia de desenvolvimento integrada e \xe1gil."),link:"https://github.com/TiendaNube/admin-nexo"},{title:n.createElement(i.Z,{id:"docs.developerTools.card.4.title"},"API P\xfablica Nuvemshop"),description:n.createElement(i.Z,{id:"docs.developerTools.card.4.description"},"Oferecemos uma API p\xfablica que nossos parceiros podem aproveitar para criar aplicativos. Com ela, \xe9 poss\xedvel acessar e editar dados de lojas, proporcionando flexibilidade e funcionalidades adicionais aos aplicativos desenvolvidos."),link:"https://tiendanube.github.io/api-documentation/intro"}],c=()=>n.createElement(s.Box,{display:"grid",gridGap:"5",gridTemplateColumns:{xs:"repeat(1,minmax(0,1fr))",lg:"repeat(2,minmax(0,1fr))"}},p.map(((e,t)=>n.createElement(s.Card,{key:t},n.createElement(s.Box,{height:"100%",gap:"4",display:"flex",flexDirection:"column",justifyContent:"space-between"},n.createElement(s.Title,{as:"h3"},e.title),n.createElement(s.Text,{fontSize:"base"},e.description),n.createElement(s.Link,{as:"a",href:e.link,appearance:"primary"},n.createElement(i.Z,{id:"docs.developerTools.card.linkText"},"Ver mais"),n.createElement(s.Icon,{color:"primary-interactive",source:n.createElement(l.ExternalLinkIcon,null)}))))))),d={sidebar_position:1,title:"Overview"},m="Overview",u={unversionedId:"developer-tools/overview",id:"developer-tools/overview",title:"Overview",description:"---",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developer-tools/overview.md",sourceDirName:"developer-tools",slug:"/developer-tools/overview",permalink:"/devhub-apps/en/docs/developer-tools/overview",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/developer-tools/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/devhub-apps/en/docs/getting-started"},next:{title:"App Templates",permalink:"/devhub-apps/en/docs/developer-tools/templates"}},v={},b=[{value:"Next Steps",id:"next-steps",level:2}],f={toc:b},g="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(g,(0,o.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)(c,{mdxType:"DeveloperTools"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn more about ",(0,a.kt)("a",{parentName:"li",href:"./templates"},"Templates")),(0,a.kt)("li",{parentName:"ul"},"Learn more about ",(0,a.kt)("a",{parentName:"li",href:"./nimbus"},"Nimbus")),(0,a.kt)("li",{parentName:"ul"},"Learn more about ",(0,a.kt)("a",{parentName:"li",href:"./nexo"},"Nexo")),(0,a.kt)("li",{parentName:"ul"},"Learn more about our ",(0,a.kt)("a",{parentName:"li",href:"./nuvemshop-api"},"API"))))}y.isMDXComponent=!0}}]);