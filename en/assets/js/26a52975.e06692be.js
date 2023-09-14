"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[669],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?i.createElement(h,s(s({ref:t},c),{},{components:n})):i.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},609:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(7462),a=(n(7294),n(3905));const o={sidebar_position:4,title:"UX/UI Concepts"},s="Use of UX/UI Concepts",r={unversionedId:"design-guidelines/concept-usage",id:"design-guidelines/concept-usage",title:"UX/UI Concepts",description:"Nimbus components are elements for creating customized interfaces as needed when there is no standard available. These components maintain consistency with Nuvemshop products and their existing interfaces. It is important to use these components correctly to ensure an easier navigation experience for Nuvemshop users.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/design-guidelines/concept-usage.md",sourceDirName:"design-guidelines",slug:"/design-guidelines/concept-usage",permalink:"/devhub/en/docs/design-guidelines/concept-usage",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/design-guidelines/concept-usage.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"UX/UI Concepts"},sidebar:"sidebar",previous:{title:"Components and Patterns",permalink:"/devhub/en/docs/design-guidelines/component-usage"},next:{title:"UX Writing Concepts",permalink:"/devhub/en/docs/design-guidelines/ux-writing-usage"}},l={},d=[{value:"Prioritization and Organization of Actions and Content",id:"prioritization-and-organization-of-actions-and-content",level:2},{value:"Prioritization of Actions",id:"prioritization-of-actions",level:3},{value:"Primary Action",id:"primary-action",level:4},{value:"Secondary Actions",id:"secondary-actions",level:4},{value:"Positioning of Actions",id:"positioning-of-actions",level:3},{value:"General Context Actions",id:"general-context-actions",level:4},{value:"Local Context Actions",id:"local-context-actions",level:4},{value:"Content Organization",id:"content-organization",level:3},{value:"Ordering",id:"ordering",level:4},{value:"Grouping",id:"grouping",level:4},{value:"Status Signaling and Element Standardization",id:"status-signaling-and-element-standardization",level:2},{value:"How to Represent Status?",id:"how-to-represent-status",level:3},{value:"Representing Conditions",id:"representing-conditions",level:4},{value:"Representing Quantities",id:"representing-quantities",level:4},{value:"How to Position Status?",id:"how-to-position-status",level:3},{value:"Global Context",id:"global-context",level:4},{value:"Local Context",id:"local-context",level:4},{value:"Feedback Messages and Confirmations",id:"feedback-messages-and-confirmations",level:2},{value:"Types of Feedback",id:"types-of-feedback",level:3},{value:"Alert Feedback",id:"alert-feedback",level:4},{value:"Informative Feedback",id:"informative-feedback",level:4},{value:"Confirmation Messages",id:"confirmation-messages",level:3},{value:"Deletion of Information",id:"deletion-of-information",level:4},{value:"Unsaved Information",id:"unsaved-information",level:4},{value:"Information Processing and Loading",id:"information-processing-and-loading",level:2},{value:"Page Loading",id:"page-loading",level:3},{value:"Contextual Loading",id:"contextual-loading",level:3},{value:"Task Processing or File Upload",id:"task-processing-or-file-upload",level:3},{value:"Organizing Data in Tables",id:"organizing-data-in-tables",level:2},{value:"When to Use Tables?",id:"when-to-use-tables",level:3},{value:"How to Prioritize Data in a Table?",id:"how-to-prioritize-data-in-a-table",level:3},{value:"Grouping Actions",id:"grouping-actions",level:3},{value:"Use of Mass Actions",id:"use-of-mass-actions",level:3},{value:"Responsiveness and Element Alignment",id:"responsiveness-and-element-alignment",level:2},{value:"Common Resolutions",id:"common-resolutions",level:3},{value:"Component Responsiveness",id:"component-responsiveness",level:3},{value:"Page Standard",id:"page-standard",level:4},{value:"Table Component and Data Table Standard",id:"table-component-and-data-table-standard",level:4},{value:"Sidebar",id:"sidebar",level:4},{value:"Grids and Alignments",id:"grids-and-alignments",level:4},{value:"Form Organization and Signaling",id:"form-organization-and-signaling",level:2},{value:"Aligning Fields",id:"aligning-fields",level:4},{value:"Grouping Fields",id:"grouping-fields",level:4},{value:"Sizing Fields",id:"sizing-fields",level:4},{value:"How to Signal Fields in a Form",id:"how-to-signal-fields-in-a-form",level:3},{value:"Optional Fields",id:"optional-fields",level:4},{value:"Field Validation",id:"field-validation",level:4},{value:"Next Steps",id:"next-steps",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"use-of-uxui-concepts"},"Use of UX/UI Concepts"),(0,a.kt)("p",null,"Nimbus components are elements for creating customized interfaces as needed when there is no standard available. These components maintain consistency with Nuvemshop products and their existing interfaces. It is important to use these components correctly to ensure an easier navigation experience for Nuvemshop users."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/devhub/en/docs/homologation/checklist#use-of-uxui-concepts---medium-priority"},"Check the homologation checklist")),(0,a.kt)("h2",{id:"prioritization-and-organization-of-actions-and-content"},"Prioritization and Organization of Actions and Content"),(0,a.kt)("h3",{id:"prioritization-of-actions"},"Prioritization of Actions"),(0,a.kt)("h4",{id:"primary-action"},"Primary Action"),(0,a.kt)("p",null,"The primary action is the main task of the page. There should be only one per instance. To give it the necessary emphasis, it should be represented by a ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.nuvemshop.com.br/documentation/atomic-components/button"},"Button")," component in the ",(0,a.kt)("strong",{parentName:"p"},"primary")," variant."),(0,a.kt)("h4",{id:"secondary-actions"},"Secondary Actions"),(0,a.kt)("p",null,"Secondary actions complement the primary action. To distinguish them from the primary action, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.nuvemshop.com.br/documentation/atomic-components/button"},"Button")," component in the ",(0,a.kt)("strong",{parentName:"p"},"default")," variant, an ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/atomic-components/icon-button"},"Icon button"),", or a ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/atomic-components/link"},"Link"),"."),(0,a.kt)("h3",{id:"positioning-of-actions"},"Positioning of Actions"),(0,a.kt)("h4",{id:"general-context-actions"},"General Context Actions"),(0,a.kt)("p",null,"General context actions are placed in the header of the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/page"},"Page")," standard. These actions are related to the general context of the screen, referring to general actions. They are aligned to the right, with the most important ones on the right and the less important ones on the left."),(0,a.kt)("h4",{id:"local-context-actions"},"Local Context Actions"),(0,a.kt)("p",null,"Local context actions are placed within a specific element, such as a ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/composite-components/card"},"Card"),". They are related to a specific context within a particular group of information."),(0,a.kt)("h3",{id:"content-organization"},"Content Organization"),(0,a.kt)("h4",{id:"ordering"},"Ordering"),(0,a.kt)("p",null,"Contents should always be organized in order of importance to the user. Topics most relevant to the main function of the page should be presented first. It is important to promote a logical ordering of elements, gradually contextualizing the user and connecting related topics."),(0,a.kt)("h4",{id:"grouping"},"Grouping"),(0,a.kt)("p",null,"Whenever possible, related topics are grouped into ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/composite-components/card"},"cards"),". This helps users understand the divisions of topics and elements on the screen."),(0,a.kt)("h2",{id:"status-signaling-and-element-standardization"},"Status Signaling and Element Standardization"),(0,a.kt)("p",null,"Whenever an element can change status or quantity due to user action, we should clearly and simply display the current status using a few words and appropriate colors."),(0,a.kt)("h3",{id:"how-to-represent-status"},"How to Represent Status?"),(0,a.kt)("p",null,"We have two types of status representation: one represents mutable conditions, and the other is related to quantities of elements."),(0,a.kt)("h4",{id:"representing-conditions"},"Representing Conditions"),(0,a.kt)("p",null,"For different types of conditions of an object, we use the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/atomic-components/tag"},"Tag")," component and its respective variants, which are documented on the Nimbus website."),(0,a.kt)("h4",{id:"representing-quantities"},"Representing Quantities"),(0,a.kt)("p",null,"For the quantity of items, we use the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/atomic-components/badge"},"Badge")," component and its respective variants, documented on the Nimbus website."),(0,a.kt)("h3",{id:"how-to-position-status"},"How to Position Status?"),(0,a.kt)("h4",{id:"global-context"},"Global Context"),(0,a.kt)("p",null,"When the status refers to an entire screen, we should use the predefined position in the header of the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/page"},"page")," standard."),(0,a.kt)("h4",{id:"local-context"},"Local Context"),(0,a.kt)("p",null,"When the status refers to a specific element, we should consider the organization of the component in which the status is located. In the case of ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/composite-components/card"},"Cards"),", we can use the ",(0,a.kt)("strong",{parentName:"p"},"default")," variant."),(0,a.kt)("h2",{id:"feedback-messages-and-confirmations"},"Feedback Messages and Confirmations"),(0,a.kt)("p",null,"Whenever we process information, we should provide feedback on the task that has just been executed."),(0,a.kt)("h3",{id:"types-of-feedback"},"Types of Feedback"),(0,a.kt)("p",null,"We have two types of feedback: alert feedback and informative feedback."),(0,a.kt)("h4",{id:"alert-feedback"},"Alert Feedback"),(0,a.kt)("p",null,"When the notification's purpose is to alert the user about an important event or to request action to resolve a problem, complete data, or await asynchronous confirmation, we recommend using the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/composite-components/alert"},"Alert")," component and its appropriate variant for the context."),(0,a.kt)("h4",{id:"informative-feedback"},"Informative Feedback"),(0,a.kt)("p",null,"When the notification has an informative tone, meaning it merely describes that something has happened or is happening and does not require immediate user action, we recommend using the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/atomic-components/toast"},"Toast")," component and its appropriate variant for the context."),(0,a.kt)("h3",{id:"confirmation-messages"},"Confirmation Messages"),(0,a.kt)("p",null,"When performing destructive actions or abandoning forms, we should alert the user about the respective impacts using the ",(0,a.kt)("a",{parentName:"p",href:"https://tiendanube.github.io/nimbus-patterns/index.html?path=/story/templates-confirmationmodal--basic"},"confirmation modal")," template."),(0,a.kt)("h4",{id:"deletion-of-information"},"Deletion of Information"),(0,a.kt)("p",null,"When a user is deleting any type of information, we should alert them that this action cannot be undone."),(0,a.kt)("h4",{id:"unsaved-information"},"Unsaved Information"),(0,a.kt)("p",null,"When a user is exiting a form screen where information has not been saved, we should alert them that by taking this action, the form data will be lost."),(0,a.kt)("h2",{id:"information-processing-and-loading"},"Information Processing and Loading"),(0,a.kt)("p",null,"Whenever information is being loaded, it should be clearly represented to the user. Each type of loading is represented differently."),(0,a.kt)("h3",{id:"page-loading"},"Page Loading"),(0,a.kt)("p",null,"Whenever the information on a page is being loaded, we use the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/atomic-components/skeleton"},"Skeleton")," of components to represent it. This allows users to become familiar with the structure of elements we will show and reduces the perception of loading time."),(0,a.kt)("h3",{id:"contextual-loading"},"Contextual Loading"),(0,a.kt)("p",null,"Whenever processing is linked to a specific element, where there is no page change, we demonstrate it using a ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/atomic-components/spinner"},"Spinner"),"."),(0,a.kt)("h3",{id:"task-processing-or-file-upload"},"Task Processing or File Upload"),(0,a.kt)("p",null,"Whenever a task or file upload is the result of a primary action, meaning there is a page change, we demonstrate this action using a ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/atomic-components/toast"},"Toast Progress"),"."),(0,a.kt)("h2",{id:"organizing-data-in-tables"},"Organizing Data in Tables"),(0,a.kt)("h3",{id:"when-to-use-tables"},"When to Use Tables?"),(0,a.kt)("p",null,"We use the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/data-table"},"Data Table")," pattern when it is necessary to organize a large amount of tabular data, using rows to organize entries and columns to categorize data types."),(0,a.kt)("h3",{id:"how-to-prioritize-data-in-a-table"},"How to Prioritize Data in a Table?"),(0,a.kt)("p",null,"We organize columns according to the importance of the information, with columns containing essential information (Date, Name, Order Number) positioned on the left, while supplementary information (Products, Status, Actions) is placed on the right."),(0,a.kt)("h3",{id:"grouping-actions"},"Grouping Actions"),(0,a.kt)("p",null,"Whenever there are more than two actions per table row, it is recommended to group actions using an icon button with an ellipsis icon."),(0,a.kt)("h3",{id:"use-of-mass-actions"},"Use of Mass Actions"),(0,a.kt)("p",null,"Whenever technically feasible, we provide mass actions for changing status, deleting, or performing any other type of task that can be done on all items in the table."),(0,a.kt)("h2",{id:"responsiveness-and-element-alignment"},"Responsiveness and Element Alignment"),(0,a.kt)("p",null,"To make the product usable on different screen resolutions, we must ensure that designed screens provide an appropriate experience at different screen sizes."),(0,a.kt)("h3",{id:"common-resolutions"},"Common Resolutions"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/page"},"page standard")," has a default width of 100%, but we can configure this width according to the type of content. For forms, we use a width of 800px to better compact the information and improve user readability, while for tables or multi-column content, we use 1200px. This resolution can be adjusted using a string."),(0,a.kt)("h3",{id:"component-responsiveness"},"Component Responsiveness"),(0,a.kt)("h4",{id:"page-standard"},"Page Standard"),(0,a.kt)("p",null,"In a mobile context, this standard has some different behaviors to make room for essential elements, collapsing actions, and hiding some links."),(0,a.kt)("h4",{id:"table-component-and-data-table-standard"},"Table Component and Data Table Standard"),(0,a.kt)("p",null,"In these two cases, because they contain tabular data, their use in mobile contexts is not recommended. They can be replaced using the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/data-list"},"data list")," component while maintaining the same prioritization of information and separating it into rows."),(0,a.kt)("h4",{id:"sidebar"},"Sidebar"),(0,a.kt)("p",null,"This ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/composite-components/sidebar"},"component")," behaves differently in a mobile context, occupying the entire screen width."),(0,a.kt)("h4",{id:"grids-and-alignments"},"Grids and Alignments"),(0,a.kt)("p",null,"It is possible to align elements in different compositions and proportions using the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/layout"},"grid")," standard. In mobile contexts, by default, regardless of the column width, elements should stack."),(0,a.kt)("p",null,"By default, all titles and text should be left-aligned, just as buttons are right-aligned, and within cards, we always align to the left."),(0,a.kt)("h2",{id:"form-organization-and-signaling"},"Form Organization and Signaling"),(0,a.kt)("h4",{id:"aligning-fields"},"Aligning Fields"),(0,a.kt)("p",null,"Fields should always be left-aligned; preferably, they should have a total or combined width consistent with all other rows."),(0,a.kt)("h4",{id:"grouping-fields"},"Grouping Fields"),(0,a.kt)("p",null,"When a form is very long, we group fields into different cards to facilitate the visualization of information groups."),(0,a.kt)("p",null,"When we have fields with related information, we are allowed to group them on the same line of a form; we recommend that a maximum of 2 fields be grouped to avoid information overload."),(0,a.kt)("h4",{id:"sizing-fields"},"Sizing Fields"),(0,a.kt)("p",null,"Forms should use the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/page"},"Page")," standard with a width of 800px; this allows fields to be better compacted, facilitating their readability."),(0,a.kt)("p",null,"Fields should have sizes consistent with the size of the information being requested; for example, if we request the postal code of a residence, we should size them with a width compatible with the number of characters in a postal code."),(0,a.kt)("h3",{id:"how-to-signal-fields-in-a-form"},"How to Signal Fields in a Form"),(0,a.kt)("h4",{id:"optional-fields"},"Optional Fields"),(0,a.kt)("p",null,'Whenever there are optional fields, they should be signaled by including text alongside the label "(Optional)"; if there is a group of optional fields, we can group them within a collapsible card, also indicated in its title with "(Optional)," and keep it closed to draw attention to the mandatory fields.'),(0,a.kt)("h4",{id:"field-validation"},"Field Validation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Success")," - Whenever there is real-time field validation, we should signal it using the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/form-field"},"Form Field")," pattern in its success variant."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Error")," - Whenever there is an error indication in real-time or after submitting information, we should signal it using the ",(0,a.kt)("a",{parentName:"p",href:"https://nimbus.tiendanube.com/documentation/patterns/form-field"},"Form Field")," pattern in its danger variant, along with a brief explanatory text about what caused this condition."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Explore ",(0,a.kt)("a",{parentName:"li",href:"/devhub/en/docs/design-guidelines/ux-writing-usage"},"UX Writing Concepts"))))}u.isMDXComponent=!0}}]);