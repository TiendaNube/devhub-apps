"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:1,title:"Overview"},r="Overview",l={unversionedId:"homologation/overview",id:"homologation/overview",title:"Overview",description:"To make an application available in the Nuvemshop app store, it's essential to submit it to a homologation process. This procedure considers both the type of application and the category to which it belongs, resulting in requirements that can vary. Before starting the submission process, it's crucial to pay attention to the necessary artifacts and requirements. Make sure you align with these guidelines before sending your request.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/homologation/overview.md",sourceDirName:"homologation",slug:"/homologation/overview",permalink:"/devhub-apps/en/docs/homologation/overview",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/homologation/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"sidebar",previous:{title:"UX Writing Concepts",permalink:"/devhub-apps/en/docs/design-guidelines/ux-writing-usage"},next:{title:"Design Requirements",permalink:"/devhub-apps/en/docs/homologation/checklist"}},s={},p=[{value:"Requirements for Approving External Apps",id:"requirements-for-approving-external-apps",level:2},{value:"Requirements for Approving Integrated applications",id:"requirements-for-approving-integrated-applications",level:2},{value:"How to Build a Sequence Diagram?",id:"how-to-build-a-sequence-diagram",level:3},{value:"How to Create a Demo Video?",id:"how-to-create-a-demo-video",level:3},{value:"Installation Flow:",id:"installation-flow",level:4},{value:"Usage Scenarios:",id:"usage-scenarios",level:4},{value:"Next Steps",id:"next-steps",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"To make an application available in the Nuvemshop app store, it's essential to submit it to a homologation process. This procedure considers both the type of application and the category to which it belongs, resulting in requirements that can vary. Before starting the submission process, it's crucial to pay attention to the necessary artifacts and requirements. Make sure you align with these guidelines before sending your request."),(0,i.kt)("h2",{id:"requirements-for-approving-external-apps"},"Requirements for Approving External Apps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Submit the sequence diagram."),(0,i.kt)("li",{parentName:"ul"},"Send a demo video of the application."),(0,i.kt)("li",{parentName:"ul"},"Integration meeting (Only for payment, shipping, and ERP apps).")),(0,i.kt)("h2",{id:"requirements-for-approving-integrated-applications"},"Requirements for Approving Integrated applications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Submit the sequence diagram."),(0,i.kt)("li",{parentName:"ul"},"Send a demo video of the application."),(0,i.kt)("li",{parentName:"ul"},"The application must be built using our ",(0,i.kt)("a",{parentName:"li",href:"https://nimbus.tiendanube.com/"},"Nimbus design system"),"."),(0,i.kt)("li",{parentName:"ul"},"The application must meet the ",(0,i.kt)("a",{parentName:"li",href:"/devhub-apps/en/docs/homologation/checklist"},"design requirements"),"."),(0,i.kt)("li",{parentName:"ul"},"Integration meeting (Only for payment, shipping, and ERP apps).")),(0,i.kt)("h3",{id:"how-to-build-a-sequence-diagram"},"How to Build a Sequence Diagram?"),(0,i.kt)("p",null,"The sequence diagram evaluates how the permissions selected during the application's creation are being used. To learn more about creating a sequence diagram, we have provided a support document at this ",(0,i.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1MFpRkSTDF2hPrvITL5H0Vw9NyT9c_Pm1cq7Gsf73LmM/edit"},"link"),"."),(0,i.kt)("h3",{id:"how-to-create-a-demo-video"},"How to Create a Demo Video?"),(0,i.kt)("p",null,"The demonstration video explains to our technical team how your solution works, and it also helps expedite the approval process. Below, we list all the elements that the video should include:"),(0,i.kt)("h4",{id:"installation-flow"},"Installation Flow:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Installation flow of the application from Nuvemshop and the application itself (if applicable)."),(0,i.kt)("li",{parentName:"ul"},"Scenario where the merchant DOES NOT have an account (e.g., How to create an account)."),(0,i.kt)("li",{parentName:"ul"},"Scenario where the merchant has an account (e.g., Log in/Password recovery)."),(0,i.kt)("li",{parentName:"ul"},"Reinstallation scenario (Uninstall and reinstall the application).")),(0,i.kt)("h4",{id:"usage-scenarios"},"Usage Scenarios:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Simulation of all scenarios described in the sequence diagrams."),(0,i.kt)("li",{parentName:"ul"},"Application usage flow."),(0,i.kt)("li",{parentName:"ul"},"Points that are relevant for our evaluation."),(0,i.kt)("li",{parentName:"ul"},"See how to create the Complete Installation Guide.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To submit the artifacts or clarify doubts, send an email to ",(0,i.kt)("a",{parentName:"li",href:"mailto:publicacao@nuvemshop.com.br"},"publicacao@nuvemshop.com.br"))))}m.isMDXComponent=!0}}]);