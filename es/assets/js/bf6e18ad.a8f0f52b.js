"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[916],{3905:(e,a,r)=>{r.d(a,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function t(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?t(Object(r),!0).forEach((function(a){i(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function o(e,a){if(null==e)return{};var r,n,i=function(e,a){if(null==e)return{};var r,n,i={},t=Object.keys(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||(i[r]=e[r]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)r=t[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,i=e.mdxType,t=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||t;return r?n.createElement(f,s(s({ref:a},d),{},{components:r})):n.createElement(f,s({ref:a},d))}));function f(e,a){var r=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=r.length,s=new Array(t);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<t;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7527:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const t={sidebar_position:1,title:"Primeros pasos"},s="Primeros pasos",o={unversionedId:"getting-started",id:"getting-started",title:"Primeros pasos",description:"\xa1Bienvenido! En esta documentaci\xf3n encontrar\xe1s todos los recursos y contenidos para crear aplicaciones y ofrecerlos a la base de comerciantes que forman parte de Nuvemshop. Ya seas un desarrollador, un socio o est\xe9s comenzando tu viaje en tecnolog\xeda, aqu\xed encontrar\xe1s informaci\xf3n b\xe1sica para desarrollar aplicaciones para Nuvemshop.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/es/docs/getting-started",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Primeros pasos"},sidebar:"sidebar",next:{title:"Visi\xf3n General",permalink:"/es/docs/developer-tools/overview"}},l={},c=[{value:"Tipos de aplicaciones",id:"tipos-de-aplicaciones",level:2},{value:"Aplicaciones integradas al administrador",id:"aplicaciones-integradas-al-administrador",level:3},{value:"Requisitos para desarrollar",id:"requisitos-para-desarrollar",level:4},{value:"Aplicaciones externas",id:"aplicaciones-externas",level:3},{value:"Herramientas de desarrollo",id:"herramientas-de-desarrollo",level:2},{value:"API de Nuvemshop",id:"api-de-nuvemshop",level:3},{value:"Plantillas de aplicaciones",id:"plantillas-de-aplicaciones",level:3},{value:"Nexo",id:"nexo",level:3},{value:"Nimbus (Requisito para aplicaciones integradas)",id:"nimbus-requisito-para-aplicaciones-integradas",level:3}],d={toc:c},p="wrapper";function u(e){let{components:a,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"primeros-pasos"},"Primeros pasos"),(0,i.kt)("p",null,"\xa1Bienvenido! En esta documentaci\xf3n encontrar\xe1s todos los recursos y contenidos para crear aplicaciones y ofrecerlos a la base de comerciantes que forman parte de Nuvemshop. Ya seas un desarrollador, un socio o est\xe9s comenzando tu viaje en tecnolog\xeda, aqu\xed encontrar\xe1s informaci\xf3n b\xe1sica para desarrollar aplicaciones para Nuvemshop."),(0,i.kt)("h2",{id:"tipos-de-aplicaciones"},"Tipos de aplicaciones"),(0,i.kt)("p",null,"Antes de comenzar a desarrollar aplicaciones, es fundamental conocer los tipos de aplicaciones disponibles y comprender cu\xe1l se adapta mejor a las necesidades y limitaciones de tu proyecto."),(0,i.kt)("h3",{id:"aplicaciones-integradas-al-administrador"},"Aplicaciones integradas al administrador"),(0,i.kt)("p",null,"Una ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/applications/native"},"aplicaci\xf3n integradas al administrador")," es aquella que opera en el contexto de los comerciantes, utilizando un iframe para garantizar la integraci\xf3n y la fluidez. Esta aproximaci\xf3n busca ofrecer experiencias m\xe1s naturales e integradas para la gesti\xf3n de las tiendas, mejorando la interacci\xf3n con funciones externas y brindando una experiencia m\xe1s integrada para el comerciante."),(0,i.kt)("h4",{id:"requisitos-para-desarrollar"},"Requisitos para desarrollar"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilizar el ",(0,i.kt)("a",{parentName:"li",href:"/es/docs/developer-tools/nimbus"},"sistema de dise\xf1o Nimbus")),(0,i.kt)("li",{parentName:"ul"},"Cumplir con los ",(0,i.kt)("a",{parentName:"li",href:"/es/docs/homologation/checklist"},"requisitos de dise\xf1o"))),(0,i.kt)("h3",{id:"aplicaciones-externas"},"Aplicaciones externas"),(0,i.kt)("p",null,"Las ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/applications/standalone"},"aplicaciones externas"),", a diferencia de las aplicaciones integradas que aparecen en el Panel de control de comerciantes, son soluciones independientes que se cargan fuera del panel. Operan de forma aut\xf3noma y pueden abarcar una amplia gama de funciones, desde marketing hasta gesti\xf3n de inventario."),(0,i.kt)("h2",{id:"herramientas-de-desarrollo"},"Herramientas de desarrollo"),(0,i.kt)("h3",{id:"api-de-nuvemshop"},"API de Nuvemshop"),(0,i.kt)("p",null,"La ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/developer-tools/nuvemshop-api"},"API de Nuvemshop")," es una herramienta para interactuar con nuestra plataforma y expandir las funcionalidades de tu aplicaci\xf3n. Antes de comenzar a utilizar nuestra API, es crucial autenticar tu aplicaci\xf3n. Despu\xe9s de eso, tendr\xe1s acceso a un access_token \xfanico de autenticaci\xf3n que te permitir\xe1 explorar y utilizar nuestros recursos de la API."),(0,i.kt)("h3",{id:"plantillas-de-aplicaciones"},"Plantillas de aplicaciones"),(0,i.kt)("p",null,"Ofrecemos ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/developer-tools/templates"},"plantillas de aplicaciones")," que sirven como base para iniciar y acelerar el proceso de desarrollo. Estas plantillas se dividen en dos categor\xedas principales: aplicaciones integradas y aplicaciones externas. Cada categor\xeda tiene sus propios modelos espec\xedficos, creados para satisfacer diferentes necesidades y escenarios."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Autenticaci\xf3n preconfigurada")," - Si est\xe1s utilizando una de nuestras plantillas, el proceso de autenticaci\xf3n estar\xe1 listo para usar, incluida la conexi\xf3n con la API de productos de Nuvemshop. Esto automatiza significativamente el proceso; sigue la gu\xeda de configuraci\xf3n en el repositorio de la plantilla elegida y estar\xe1s en camino al desarrollo."),(0,i.kt)("h3",{id:"nexo"},"Nexo"),(0,i.kt)("p",null,"El ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/developer-tools/nimbus"},"Nexo")," proporciona recursos para facilitar la comunicaci\xf3n entre una aplicaci\xf3n externa y el administrador de Nuvemshop. Esta interacci\xf3n entre el Administrador y la aplicaci\xf3n se establece a trav\xe9s de mensajes, siguiendo el patr\xf3n del observador, lo que permite la suscripci\xf3n y cancelaci\xf3n de eventos."),(0,i.kt)("h3",{id:"nimbus-requisito-para-aplicaciones-integradas"},"Nimbus (Requisito para aplicaciones integradas)"),(0,i.kt)("p",null,"El ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/developer-tools/nimbus"},"Nimbus es el sistema de dise\xf1o")," de c\xf3digo abierto de Nuvemshop. Con componentes validados en productos Nuvemshop, patrones y plantillas optimizadas, documentaci\xf3n con ejemplos y sincronizaci\xf3n entre el kit de interfaz de usuario en Figma y el c\xf3digo, Nimbus permite a los desarrolladores y dise\xf1adores crear interfaces coherentes, accesibles y de alto rendimiento. Puedes usarlo para crear tus aplicaciones dentro del ecosistema de Nuvemshop o tambi\xe9n para tu propio proyecto, considerando la licencia vigente."))}u.isMDXComponent=!0}}]);