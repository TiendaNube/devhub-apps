"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[801],{7182:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var o=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?o.createElement(v,n(n({ref:t},c),{},{components:r})):o.createElement(v,n({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,n[1]=s;for(var p=2;p<i;p++)n[p]=r[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>v});var o=r(6245),a=r(6687),i=r(7182),n=r(5192),s=r(882);const l=[{title:"Nimbus Design System",description:"Utilize o Nimbus Design System para criar apps nativos no admin Nuvemshop. Com biblioteca de componentes, padr\xf5es e tokens, garanta uma experi\xeancia coesa e eficiente de desenvolvimento.",link:"https://nimbus.nuvemshop.com.br"},{title:"Nimbus for VSCode extension",description:"Boost your productivity with Nimbus Helper! A magical extension to VS Code that brings complete documentation of all available components and their properties all into your favorite design system. Write stylish code, accelerate development, and break into the programming clouds with the Nimbus Design System.",link:"https://marketplace.visualstudio.com/items?itemName=Nuvemshop.nimbus-helper"},{title:"Nexo",description:"Nosso pacote npm essencial para a comunica\xe7\xe3o perfeita entre apps nativos e o Admin Nuvemshop. Com mensagens baseadas no padr\xe3o observador, o Nexo possibilita uma troca eficiente de informa\xe7\xf5es, proporcionando uma experi\xeancia de desenvolvimento integrada e \xe1gil.",link:"https://github.com/TiendaNube/admin-nexo"},{title:"API P\xfablica Nuvemshop",description:"Oferecemos uma API p\xfablica que nossos parceiros podem aproveitar para criar aplicativos. Com ela, \xe9 poss\xedvel acessar e editar dados de lojas, proporcionando flexibilidade e funcionalidades adicionais aos aplicativos desenvolvidos.",link:"https://tiendanube.github.io/api-documentation/intro"}],p=()=>a.createElement(n.Box,{display:"grid",gridGap:"5",gridTemplateColumns:{xs:"repeat(1,minmax(0,1fr))",lg:"repeat(2,minmax(0,1fr))"}},l.map(((e,t)=>a.createElement(n.Card,{key:t},a.createElement(n.Box,{height:"100%",gap:"4",display:"flex",flexDirection:"column",justifyContent:"space-between"},a.createElement(n.Title,{as:"h3"},e.title),a.createElement(n.Text,{fontSize:"base"},e.description),a.createElement(n.Link,{as:"a",href:e.link,appearance:"primary"},"Ver mais",a.createElement(n.Icon,{color:"primary-interactive",source:a.createElement(s.ExternalLinkIcon,null)}))))))),c={sidebar_position:1},m="Vis\xe3o geral",d={unversionedId:"developer-tools/overview",id:"developer-tools/overview",title:"Vis\xe3o geral",description:"---",source:"@site/docs/developer-tools/overview.md",sourceDirName:"developer-tools",slug:"/developer-tools/overview",permalink:"/devhub-apps/docs/developer-tools/overview",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/developer-tools/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Primeiros passos",permalink:"/devhub-apps/docs/getting-started"},next:{title:"App templates",permalink:"/devhub-apps/docs/developer-tools/templates"}},u={},v=[{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],b={toc:v},f="wrapper";function y(e){let{components:t,...r}=e;return(0,i.kt)(f,(0,o.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vis\xe3o-geral"},"Vis\xe3o geral"),(0,i.kt)(p,{mdxType:"DeveloperTools"}),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Saiba mais sobre os ",(0,i.kt)("a",{parentName:"li",href:"./templates"},"Templates")),(0,i.kt)("li",{parentName:"ul"},"Saiba mais sobre o ",(0,i.kt)("a",{parentName:"li",href:"./nimbus"},"Nimbus")),(0,i.kt)("li",{parentName:"ul"},"Saiba mais sobre o ",(0,i.kt)("a",{parentName:"li",href:"./nexo"},"Nexo")),(0,i.kt)("li",{parentName:"ul"},"Saiba mais sobre nossa ",(0,i.kt)("a",{parentName:"li",href:"./nuvemshop-api"},"API"))))}y.isMDXComponent=!0}}]);