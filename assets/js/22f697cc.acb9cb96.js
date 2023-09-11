"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[444],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>b});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var m=a.createContext({}),d=function(e){var t=a.useContext(m),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},l=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,s=e.originalType,m=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(o),l=n,b=c["".concat(m,".").concat(l)]||c[l]||u[l]||s;return o?a.createElement(b,i(i({ref:t},p),{},{components:o})):a.createElement(b,i({ref:t},p))}));function b(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=o.length,i=new Array(s);i[0]=l;var r={};for(var m in t)hasOwnProperty.call(t,m)&&(r[m]=t[m]);r.originalType=e,r[c]="string"==typeof e?e:n,i[1]=r;for(var d=2;d<s;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}l.displayName="MDXCreateElement"},2266:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=o(7462),n=(o(7294),o(3905));const s={sidebar_position:3,title:"Componentes e patterns"},i="Uso de componentes e patterns",r={unversionedId:"design-guidelines/component-usage",id:"design-guidelines/component-usage",title:"Componentes e patterns",description:"Os componentes Nimbus s\xe3o elementos que possibilitam criar interfaces personalizadas de acordo com a necessidade, devendo ser usados quando n\xe3o houver um padr\xe3o ou modelo que atenda ao caso de uso. Ao aplicar esses modelos, o objetivo \xe9 garantir a coes\xe3o com os produtos da Nuvemshop e manter consist\xeancia de uso com as interfaces j\xe1 existentes.",source:"@site/docs/design-guidelines/component-usage.md",sourceDirName:"design-guidelines",slug:"/design-guidelines/component-usage",permalink:"/docs/design-guidelines/component-usage",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/design-guidelines/component-usage.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Componentes e patterns"},sidebar:"sidebar",previous:{title:"Templates de design",permalink:"/docs/design-guidelines/template-usage"},next:{title:"Conceitos de UX/UI",permalink:"/docs/design-guidelines/concept-usage"}},m={},d=[{value:"Componentes at\xf4micos e compostos",id:"componentes-at\xf4micos-e-compostos",level:2},{value:"Categoriza\xe7\xe3o de componentes",id:"categoriza\xe7\xe3o-de-componentes",level:3},{value:"Atribui\xe7\xe3o dos componentes",id:"atribui\xe7\xe3o-dos-componentes",level:3},{value:"Patterns de composi\xe7\xe3o",id:"patterns-de-composi\xe7\xe3o",level:2},{value:"O que s\xe3o os patterns do Nimbus?",id:"o-que-s\xe3o-os-patterns-do-nimbus",level:3},{value:"Como escolher os patterns adequados?",id:"como-escolher-os-patterns-adequados",level:3},{value:"Componentes de formul\xe1rios",id:"componentes-de-formul\xe1rios",level:2},{value:"Padr\xe3o form field",id:"padr\xe3o-form-field",level:3},{value:"Especifica\xe7\xe3o de campos",id:"especifica\xe7\xe3o-de-campos",level:3},{value:"Personaliza\xe7\xe3o e flexibilidade",id:"personaliza\xe7\xe3o-e-flexibilidade",level:2},{value:"Overrides proibidos",id:"overrides-proibidos",level:3},{value:"Constru\xe7\xe3o de patterns",id:"constru\xe7\xe3o-de-patterns",level:3},{value:"Constru\xe7\xe3o de componentes locais",id:"constru\xe7\xe3o-de-componentes-locais",level:3},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"uso-de-componentes-e-patterns"},"Uso de componentes e patterns"),(0,n.kt)("p",null,"Os componentes Nimbus s\xe3o elementos que possibilitam criar interfaces personalizadas de acordo com a necessidade, devendo ser usados quando n\xe3o houver um padr\xe3o ou modelo que atenda ao caso de uso. Ao aplicar esses modelos, o objetivo \xe9 garantir a coes\xe3o com os produtos da Nuvemshop e manter consist\xeancia de uso com as interfaces j\xe1 existentes."),(0,n.kt)("p",null,"A aten\xe7\xe3o \xe0s atribui\xe7\xf5es dos componentes \xe9 crucial para preservar a consist\xeancia da experi\xeancia, tornando a navega\xe7\xe3o mais f\xe1cil para usu\xe1rios j\xe1 familiarizados com a Nuvemshop."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/homologation/checklist#uso-de-componentes-e-patterns---prioridade-alta"},"Consultar checklist de homologa\xe7\xe3o")),(0,n.kt)("h2",{id:"componentes-at\xf4micos-e-compostos"},"Componentes at\xf4micos e compostos"),(0,n.kt)("h3",{id:"categoriza\xe7\xe3o-de-componentes"},"Categoriza\xe7\xe3o de componentes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Componentes at\xf4micos:")," s\xe3o elementos essenciais do design system e indivis\xedveis."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Componentes compostos:")," s\xe3o composi\xe7\xf5es de componentes at\xf4micos.")),(0,n.kt)("h3",{id:"atribui\xe7\xe3o-dos-componentes"},"Atribui\xe7\xe3o dos componentes"),(0,n.kt)("p",null,"Cada componente se enquadra em uma categoria de atribui\xe7\xe3o, para que se mantenha uma consist\xeancia de experi\xeancia entre diferentes aplicativos e produtos \xe9 necess\xe1rio seguir os usos descritos abaixo."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Atribui\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Componentes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Navega\xe7\xe3o/A\xe7\xe3o"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/button"},"Button"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/icon-button"},"Icon button"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/link"},"Link")," e ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/toggle"},"Toggle"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Formul\xe1rios"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/input"},"Input"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/textarea"},"Textarea"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/checkbox"},"Checkbox"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/radio"},"Radio"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/select"},"Select")," e ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader"},"File Uploader"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Organiza\xe7\xe3o"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/box"},"Box"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/chip"},"Chip"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/list"},"List"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/popover"},"Popover"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/table"},"Table"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/accordion"},"Accordion"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/sidebar"},"Sidebar"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/card"},"Card"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/modal"},"Modal"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/pagination"},"Pagination")," e ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/tabs"},"Tabs"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Informativos/Decorativos"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/title"},"Title"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/text"},"Text"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/label"},"Label"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/badge"},"Badge"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/tag"},"Tag"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/toast"},"Toast"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/composite-components/alert"},"Alert"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/icon"},"Icon"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/thumbnail"},"Thumbnail"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/tooltip"},"Tooltip"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/spinner"},"Spinner")," e ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/skeleton"},"Skeleton"),".")))),(0,n.kt)("h2",{id:"patterns-de-composi\xe7\xe3o"},"Patterns de composi\xe7\xe3o"),(0,n.kt)("h3",{id:"o-que-s\xe3o-os-patterns-do-nimbus"},"O que s\xe3o os patterns do Nimbus?"),(0,n.kt)("p",null,"O Nimbus possui uma variedade de patterns, que basicamente re\xfanem componentes at\xf4micos e compostos combinados com as regras de neg\xf3cio da Nuvemshop, esses recursos promovem uma maior consist\xeancia e otimizam a constru\xe7\xe3o de aplica\xe7\xf5es nativas e de parceiros."),(0,n.kt)("h3",{id:"como-escolher-os-patterns-adequados"},"Como escolher os patterns adequados?"),(0,n.kt)("p",null,"Para entender quais patterns devemos utilizar \xe9 necess\xe1rio analisar a experi\xeancia que estamos projetando e buscar aplica\xe7\xf5es similares dentro da gama de casos de uso j\xe1 existentes."),(0,n.kt)("p",null,"Abaixo categorizamos os patterns por funcionalidades, para conhecer mais sobre suas atribui\xe7\xf5es recomendamos a leitura da sua documenta\xe7\xe3o."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Funcionalidades"),(0,n.kt)("th",{parentName:"tr",align:null},"Componentes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Organiza\xe7\xe3o de elementos"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/data-list"},"Data List"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/data-table"},"Data Table"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/product-updates"},"Product Updates"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/interactive-list"},"Interactive List"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/side-modal"},"Side Modal"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/layout"},"Layout"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/app-shell"},"App Shell")," e ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/page"},"Page"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interativos"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/callout-card"},"Callout Card"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/menu"},"Menu"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/menu-button"},"Menu Button"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/nav-tabs"},"Nav Tabs"),", ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/thumbnail-with-action"},"Thumbnail with action")," e ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/formfield"},"Form Field"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Orientativos"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/empty-message"},"Empty Message")," e ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/patterns/help-link"},"Help Link"),".")))),(0,n.kt)("p",null,"Limites de personaliza\xe7\xe3o de patterns\nCom objetivo de manter a consist\xeancia que \xe9 o foco principal desse recurso, devemos nos ater \xe0s limita\xe7\xf5es de personaliza\xe7\xe3o de propriedades, n\xe3o incluindo ou re-ordenando elementos de forma arbitr\xe1ria por meio de overrides, ou seja devemos sempre prezar pela consist\xeancia com o restante dos produtos e aplicativos."),(0,n.kt)("h2",{id:"componentes-de-formul\xe1rios"},"Componentes de formul\xe1rios"),(0,n.kt)("p",null,"Para receber ou enviar dados devemos, respeitando as recomenda\xe7\xf5es de uso de acordo com o tipo de informa\xe7\xe3o. Abaixo separamos os componentes de formul\xe1rio e os respectivos tipos de informa\xe7\xe3o que eles podem enviar/receber."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Tipo de informa\xe7\xe3o"),(0,n.kt)("th",{parentName:"tr",align:null},"Componente"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Texto curto"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/input"},"Input"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Texto longo"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/textarea"},"Textarea"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sele\xe7\xe3o de m\xfaltipla escolha"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/checkbox"},"Checkbox"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sele\xe7\xe3o de op\xe7\xe3o \xfanica"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/radio"},"Radio")," e ",(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/select"},"Select"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Imagem e/ou arquivos"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://nimbus.tiendanube.com/documentation/atomic-components/file-uploader"},"File Uploader"))))),(0,n.kt)("h3",{id:"padr\xe3o-form-field"},"Padr\xe3o form field"),(0,n.kt)("p",null,"O Nimbus disponibiliza um padr\xe3o Form Field que une o Label e um Helper Text com os principais campos de formul\xe1rio e suas respectivas apar\xeancias, facilitando assim sua implementa\xe7\xe3o por parte dos nossos times e parceiros."),(0,n.kt)("h3",{id:"especifica\xe7\xe3o-de-campos"},"Especifica\xe7\xe3o de campos"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"R\xf3tulos")," - Os campos de um formul\xe1rio devem ser sinalizados de forma clara, deixando evidente o tipo de informa\xe7\xe3o que esperamos receber, podemos fazer isso usando o componente Label."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Texto de ajuda")," - Os campos tamb\xe9m podem ser sinalizados com textos de ajuda, guiando os usu\xe1rios a inserirem informa\xe7\xf5es v\xe1lidas ou tamb\xe9m para indicarem campos que foram preenchidos de forma incorreta ou incompleta."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Apar\xeancia")," - Os componentes possuem status padr\xe3o, de erro, sucesso e de perigo para suportarem as valida\xe7\xf5es, devendo ser sinalizados sempre que uma valida\xe7\xe3o ocorrer."),(0,n.kt)("h2",{id:"personaliza\xe7\xe3o-e-flexibilidade"},"Personaliza\xe7\xe3o e flexibilidade"),(0,n.kt)("h3",{id:"overrides-proibidos"},"Overrides proibidos"),(0,n.kt)("p",null,"A personaliza\xe7\xe3o dos componentes deve estar restrita \xe0s propriedades dispon\xedveis no storybook e Ui kit, sendo vedada a pr\xe1tica de overrides. Se caso houver necessidade de modifica\xe7\xe3o ou inclus\xe3o de propriedades, \xe9 necess\xe1rio abrir uma discuss\xe3o no reposit\xf3rio do Github."),(0,n.kt)("h3",{id:"constru\xe7\xe3o-de-patterns"},"Constru\xe7\xe3o de patterns"),(0,n.kt)("p",null,"\xc9 permitido construir novas composi\xe7\xf5es de componentes contanto que n\xe3o exista nenhuma outro padr\xe3o que possa solucionar o desafio imposto. Para se certificar recomendamos a abertura de uma discuss\xe3o no reposit\xf3rio do Github."),(0,n.kt)("h3",{id:"constru\xe7\xe3o-de-componentes-locais"},"Constru\xe7\xe3o de componentes locais"),(0,n.kt)("p",null,"Se caso os componentes n\xe3o solucionarem as necessidades do produto, \xe9 poss\xedvel desenhar um componente local, por\xe9m esse recurso deve ser usado com parcim\xf4nia. Para se certificar recomendamos a abertura de uma discuss\xe3o no reposit\xf3rio do Github."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Conhe\xe7a os ",(0,n.kt)("a",{parentName:"li",href:"/docs/design-guidelines/concept-usage"},"conceitos de uso"))))}u.isMDXComponent=!0}}]);