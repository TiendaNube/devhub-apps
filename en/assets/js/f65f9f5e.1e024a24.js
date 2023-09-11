"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,c=s["".concat(o,".").concat(u)]||s[u]||g[u]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[s]="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4345:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),i=a(4774);const l={sidebar_position:2,title:"Design Requirements"},d="Design Requirements",o={unversionedId:"homologation/checklist",id:"homologation/checklist",title:"Design Requirements",description:"The purpose of this document is to make construction and design homologation requirements more transparent. These requirements have been categorized by urgency and mandatory status.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/homologation/checklist.md",sourceDirName:"homologation",slug:"/homologation/checklist",permalink:"/devhub-apps/en/docs/homologation/checklist",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/homologation/checklist.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Design Requirements"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/devhub-apps/en/docs/homologation/overview"}},p={},m=[{value:"Urgency Categorization",id:"urgency-categorization",level:2},{value:"Mandatory Categorization",id:"mandatory-categorization",level:2},{value:"Usage of Nimbus Templates",id:"usage-of-nimbus-templates",level:2},{value:"Usage of Components and Patterns",id:"usage-of-components-and-patterns",level:2},{value:"Usage of UX/UI Concepts",id:"usage-of-uxui-concepts",level:2},{value:"Usage of UX Writing Concepts",id:"usage-of-ux-writing-concepts",level:2}],s={toc:m},g="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(g,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"design-requirements"},"Design Requirements"),(0,r.kt)("p",null,"The purpose of this document is to make construction and design homologation requirements more transparent. These requirements have been categorized by urgency and mandatory status."),(0,r.kt)("h2",{id:"urgency-categorization"},"Urgency Categorization"),(0,r.kt)(i.Box,{display:"flex",flexDirection:"column",gap:"4",mdxType:"Box"},(0,r.kt)(i.Card,{mdxType:"Card"},(0,r.kt)(i.Card.Header,null,(0,r.kt)(i.Tag,{appearance:"danger",mdxType:"Tag"},"High Priority")),(0,r.kt)(i.Card.Body,null,"Items marked with this tag are primary importance themes that must receive attention from the very beginning. If these items do not comply, homologation may be rejected.")),(0,r.kt)(i.Card,{mdxType:"Card"},(0,r.kt)(i.Card.Header,null,(0,r.kt)(i.Tag,{appearance:"warning",mdxType:"Tag"},"Medium Priority")),(0,r.kt)(i.Card.Body,null,"Items marked with this tag are secondary priority themes that should receive attention throughout development. If these items do not comply, homologation may be paused until they are addressed.")),(0,r.kt)(i.Card,{mdxType:"Card"},(0,r.kt)(i.Card.Header,null,(0,r.kt)(i.Tag,{appearance:"success",mdxType:"Tag"},"Low Priority")),(0,r.kt)(i.Card.Body,null,"Items marked with this tag are secondary priority themes that should receive attention throughout development. If these items do not comply, homologation may be paused until adjustments are made."))),(0,r.kt)("h2",{id:"mandatory-categorization"},"Mandatory Categorization"),(0,r.kt)(i.Box,{display:"flex",flexDirection:"column",gap:"4",mdxType:"Box"},(0,r.kt)(i.Card,{mdxType:"Card"},(0,r.kt)(i.Card.Header,null,(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory")),(0,r.kt)(i.Card.Body,null,"All items marked with this tag must be verified and implemented, regardless of the presented solution.")),(0,r.kt)(i.Card,{mdxType:"Card"},(0,r.kt)(i.Card.Header,null,(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended")),(0,r.kt)(i.Card.Body,null,"All items marked with this tag must be verified and evaluated, according to the need and context in which the application is placed. In other words, they must be implemented if the application presents a use case or similar element."))),(0,r.kt)("h2",{id:"usage-of-nimbus-templates"},"Usage of Nimbus Templates"),(0,r.kt)(i.Tag,{appearance:"danger",mdxType:"Tag"},"High Priority"),(0,r.kt)("br",null),(0,r.kt)("p",null,"In this item, we must pay attention to the use of Nimbus templates in order to achieve greater visual consistency with Nuvemshop products."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Empty and initial state page"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/template-usage#p%C3%A1gina-de-estado-vazio-e-inicial"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Error page"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/template-usage#p%C3%A1gina-de-error"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Forms page"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/template-usage#p%C3%A1gina-de-formul%C3%A1rio"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Confirmation modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/template-usage#modal-de-confirmaci%C3%B3n"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Settings page"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/template-usage#p%C3%A1gina-de-ajustes"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Simple table page"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/template-usage#p%C3%A1gina-de-tabla-de-simples"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Product table page"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/template-usage#p%C3%A1gina-de-tabla-de-produtos"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Template customization limits"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/template-usage#limites-de-personaliza%C3%A7%C3%A3o-de-templates"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))))),(0,r.kt)("h2",{id:"usage-of-components-and-patterns"},"Usage of Components and Patterns"),(0,r.kt)(i.Tag,{appearance:"danger",mdxType:"Tag"},"High Priority"),(0,r.kt)("br",null),(0,r.kt)("p",null,"In this item, we must pay attention to the assignment of components and patterns according to their respective documentation."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Atomic and composite components"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/component-usage#componentes-at%C3%B4micos-e-compostos"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Composition patterns"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/component-usage#patterns-de-composi%C3%A7%C3%A3o"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Form components"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/component-usage#componentes-de-formul%C3%A1rios"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Customization and flexibility limits"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/component-usage#personaliza%C3%A7%C3%A3o-e-flexibilidade"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))))),(0,r.kt)("h2",{id:"usage-of-uxui-concepts"},"Usage of UX/UI Concepts"),(0,r.kt)(i.Tag,{appearance:"warning",mdxType:"Tag"},"Medium Priority"),(0,r.kt)("br",null),(0,r.kt)("p",null,"In this item, we must pay attention to behaviors and element arrangement to achieve greater consistency with Nuvemshop products."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prioritization and organization of actions and contents"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/concept-usage#prioriza%C3%A7%C3%A3o-e-organiza%C3%A7%C3%A3o-de-a%C3%A7%C3%B5es-e-conte%C3%BAdos"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Status signaling and standardization of elements"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/concept-usage#sinaliza%C3%A7%C3%A3o-de-status-e-padroniza%C3%A7%C3%A3o-de-elementos"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Feedback messages and confirmations"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/concept-usage#mensagens-de-feedback-e-confirma%C3%A7%C3%B5es"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Information processing and loading"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/concept-usage#processamento-e-carregamento-de-informa%C3%A7%C3%A3o"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data organization in tables"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/concept-usage#organiza%C3%A7%C3%A3o-de-dados-em-tabelas"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Responsiveness and element alignment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/concept-usage#responsividade-e-alinhamento-dos-elementos"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Organization and signaling in forms"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/concept-usage#organiza%C3%A7%C3%A3o-e-sinaliza%C3%A7%C3%A3o-em-formul%C3%A1rios"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"neutral",mdxType:"Tag"},"Recommended"))))),(0,r.kt)("h2",{id:"usage-of-ux-writing-concepts"},"Usage of UX Writing Concepts"),(0,r.kt)(i.Tag,{appearance:"success",mdxType:"Tag"},"Low Priority"),(0,r.kt)("br",null),(0,r.kt)("p",null,"In this item, we must pay attention to the text in interfaces and their respective elements in order to provide a better user experience and understanding."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Link"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Naming of applications and screens"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/ux-writing-usage#nomenclatura-de-apps-e-telas"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UX Writing Fundamentals"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/ux-writing-usage#fundamentos-de-ux-writing"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nuvemshop's Tone of Voice"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/ux-writing-usage#tom-de-voz-nuvemshop"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Text Patterns"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"../design-guidelines/ux-writing-usage#padr%C3%B5es-de-texto"},"See guidelines")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)(i.Tag,{appearance:"primary",mdxType:"Tag"},"Mandatory"))))))}u.isMDXComponent=!0}}]);