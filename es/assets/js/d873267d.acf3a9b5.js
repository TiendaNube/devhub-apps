"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[320],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var i=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=i.createContext({}),o=function(e){var a=i.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):s(s({},a),e)),n},p=function(e){var a=o(e.components);return i.createElement(c.Provider,{value:a},e.children)},d="mdxType",A={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=o(n),u=t,m=d["".concat(c,".").concat(u)]||d[u]||A[u]||r;return n?i.createElement(m,s(s({ref:a},p),{},{components:n})):i.createElement(m,s({ref:a},p))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,s=new Array(r);s[0]=u;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l[d]="string"==typeof e?e:t,s[1]=l;for(var o=2;o<r;o++)s[o]=n[o];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1007:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>k,contentTitle:()=>m,default:()=>h,frontMatter:()=>u,metadata:()=>g,toc:()=>E});var i=n(7462),t=n(7294),r=n(3905),s=n(4774);const l=n.p+"assets/images/create-app-1dcbc59959e6591957f8181caf7797c2.png";var c=n(5718),o=n(9960);const p=[{icon:c.AppsIcon,title:"Aplicativos incorporados ao administrador",description:"Os aplicativos incorporados ao adminstrador, por outro lado, oferecem uma integra\xe7\xe3o mais profunda com a plataforma Nuvemshop. Eles s\xe3o desenvolvidos para se integrar diretamente ao painel de administra\xe7\xe3o dos lojistas, proporcionando uma experi\xeancia cont\xednua e fluida. Ao utilizar ferramentas como o nosso design system Nimbus, garantimos que a experi\xeancia visual e de usabilidade permane\xe7a consistente, mesmo quando o lojista est\xe1 interagindo com um aplicativo de parceiro externo. Isso permite que o lojista desfrute de recursos adicionais sem deixar o ambiente familiar do painel de administra\xe7\xe3o da Nuvemshop.",link:"/docs/applications/native"},{icon:c.AppsListIcon,title:"Aplicativos Externos",description:"Os aplicativos externos s\xe3o solu\xe7\xf5es independentes, desenvolvidas externamente \xe0 Nuvemshop. Esses aplicativos operam de forma aut\xf4noma e podem abranger uma ampla gama de funcionalidades, desde marketing at\xe9 gerenciamento de estoque. Eles proporcionam uma experi\xeancia \xfanica e podem ser uma \xf3tima maneira de adicionar recursos especializados \xe0s lojas dos lojista.",link:"/docs/applications/standalone"}],d=e=>{let{title:a,description:n,link:i,icon:r}=e;return t.createElement(s.Card,null,t.createElement(s.Card.Header,null,t.createElement(s.Box,{display:"flex",gap:"2",alignItems:"center"},t.createElement(s.Icon,{color:"neutral-textLow",source:t.createElement(r,{size:"medium"})}),t.createElement(s.Title,{as:"h3"},a))),t.createElement(s.Box,{height:"100%",gap:"4",display:"flex",flexDirection:"column",justifyContent:"space-between"},t.createElement(s.Text,{fontSize:"base"},n),t.createElement(s.Link,{as:o.Z,to:i,appearance:"primary"},"Ver mais",t.createElement(s.Icon,{color:"primary-interactive",source:t.createElement(c.ExternalLinkIcon,null)}))))},A=()=>t.createElement(s.Box,{display:"flex",gap:"4",flexDirection:"column",mb:"6"},p.map(((e,a)=>t.createElement(d,(0,i.Z)({key:a},e))))),u={sidebar_position:1,title:"Visi\xf3n general"},m="Visi\xf3n general",g={unversionedId:"applications/overview",id:"applications/overview",title:"Visi\xf3n general",description:"En esta secci\xf3n, proporcionaremos una gu\xeda paso a paso para que pueda crear una aplicaci\xf3n e integrarla en la plataforma Tiendanube. Antes de comenzar el desarrollo de su aplicaci\xf3n, es necesario crear una cuenta en el Portal de Socios de Tiendanube. Aprenda c\xf3mo crear su cuenta en el \ud83d\udcdd Gu\xeda: detalles del programa de Socios Tecnol\xf3gicos de Tiendanube.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/applications/overview.md",sourceDirName:"applications",slug:"/applications/overview",permalink:"/devhub-apps/es/docs/applications/overview",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/applications/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Visi\xf3n general"},sidebar:"sidebar",previous:{title:"API Tiendanube",permalink:"/devhub-apps/es/docs/developer-tools/nuvemshop-api"},next:{title:"Autenticaci\xf3n",permalink:"/devhub-apps/es/docs/applications/authentication"}},k={},E=[{value:"Creaci\xf3n de una aplicaci\xf3n en Tiendanube",id:"creaci\xf3n-de-una-aplicaci\xf3n-en-tiendanube",level:2},{value:"Desarrollo y Pruebas de su Aplicaci\xf3n",id:"desarrollo-y-pruebas-de-su-aplicaci\xf3n",level:2},{value:"Tienda de demostraci\xf3n",id:"tienda-de-demostraci\xf3n",level:3},{value:"Claves de acceso de su aplicaci\xf3n",id:"claves-de-acceso-de-su-aplicaci\xf3n",level:3},{value:"Instalaci\xf3n de su aplicaci\xf3n",id:"instalaci\xf3n-de-su-aplicaci\xf3n",level:3},{value:"Desinstalar una aplicaci\xf3n",id:"desinstalar-una-aplicaci\xf3n",level:3},{value:"Autenticaci\xf3n de su aplicaci\xf3n",id:"autenticaci\xf3n-de-su-aplicaci\xf3n",level:2},{value:"Elecci\xf3n del tipo de su aplicaci\xf3n",id:"elecci\xf3n-del-tipo-de-su-aplicaci\xf3n",level:2},{value:"Edici\xf3n de los permisos de su aplicaci\xf3n",id:"edici\xf3n-de-los-permisos-de-su-aplicaci\xf3n",level:2},{value:"Pr\xf3ximos pasos",id:"pr\xf3ximos-pasos",level:2}],w={toc:E},b="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(b,(0,i.Z)({},w,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"visi\xf3n-general"},"Visi\xf3n general"),(0,r.kt)("p",null,"En esta secci\xf3n, proporcionaremos una gu\xeda paso a paso para que pueda crear una aplicaci\xf3n e integrarla en la plataforma Tiendanube. Antes de comenzar el desarrollo de su aplicaci\xf3n, es necesario crear una cuenta en el Portal de Socios de Tiendanube. Aprenda c\xf3mo crear su cuenta en el \ud83d\udcdd Gu\xeda: ",(0,r.kt)("a",{parentName:"p",href:"https://ayuda.tiendanube.com/es_ES/socios-tecnologicos/como-creo-una-aplicacion-para-tiendanube"},"detalles del programa de Socios Tecnol\xf3gicos de Tiendanube"),"."),(0,r.kt)("h2",{id:"creaci\xf3n-de-una-aplicaci\xf3n-en-tiendanube"},"Creaci\xf3n de una aplicaci\xf3n en Tiendanube"),(0,r.kt)("p",null,"A trav\xe9s de nuestras herramientas, puede crear una aplicaci\xf3n para ser incluida en la \ud83d\udcf1 ",(0,r.kt)("a",{parentName:"p",href:"https://www.tiendanube.com/tienda-aplicaciones-nube"},"Tienda de Aplicaciones de Tiendanube"),"."),(0,r.kt)("p",null,"De esta manera, los comerciantes tienen visibilidad de la herramienta y pueden instalarla en sus tiendas en l\xednea, lo que aumenta el reconocimiento de su servicio."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Acceda al \ud83d\udc49 ",(0,r.kt)("a",{parentName:"p",href:"https://partners.tiendanube.com"},"Portal de Socios")," e inicie sesi\xf3n en su cuenta utilizando sus credenciales de acceso.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Despu\xe9s de iniciar sesi\xf3n, ser\xe1 redirigido al panel de socios.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dentro del panel, haga clic en ",(0,r.kt)("strong",{parentName:"p"},'"Crear aplicaci\xf3n"')," para continuar.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Se mostrar\xe1 una nueva pantalla donde deber\xe1 ingresar el nombre de su aplicaci\xf3n y seleccionar c\xf3mo desea ponerla a disposici\xf3n."),(0,r.kt)("img",{src:l,width:"287",alt:"Create app"}),(0,r.kt)("p",{parentName:"li"},"Tenemos dos opciones para la disponibilidad de su aplicaci\xf3n:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tienda de Aplicaciones"),": Si desea que la aplicaci\xf3n est\xe9 disponible en nuestra tienda oficial, elija esta opci\xf3n. Despu\xe9s de que se complete el proceso de homologaci\xf3n, la aplicaci\xf3n estar\xe1 disponible en la tienda, lo que permitir\xe1 que cualquier comerciante la instale, pruebe o compre.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Para Sus Clientes"),": Con esta opci\xf3n, no es necesario pasar por el proceso de homologaci\xf3n. Sin embargo, su aplicaci\xf3n solo estar\xe1 disponible para los comerciantes que seleccione.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Al hacer clic en ",(0,r.kt)("strong",{parentName:"p"},'"Crear aplicaci\xf3n"'),", lo llevaremos a la p\xe1gina dedicada a su aplicaci\xf3n."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App uninstall",src:n(4084).Z,title:"App uninstall",width:"1646",height:"1284"})),(0,r.kt)("p",{parentName:"li"},"La p\xe1gina de su aplicaci\xf3n se divide en 3 secciones:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Desarrollo y Pruebas"),": En esta secci\xf3n, encontrar\xe1 la informaci\xf3n necesaria para desarrollar y probar su aplicaci\xf3n antes de ponerla a disposici\xf3n de los comerciantes de su elecci\xf3n o antes de solicitar la homologaci\xf3n.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Editar aplicaci\xf3n"),": En la secci\xf3n de edici\xf3n de la aplicaci\xf3n, puede personalizar y ajustar la configuraci\xf3n de su aplicaci\xf3n. Por ejemplo: agregar caracter\xedsticas, establecer preferencias y realizar los cambios necesarios para hacer que su aplicaci\xf3n sea a\xfan m\xe1s atractiva y funcional.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"M\xe9tricas de Seguimiento"),": Esta secci\xf3n est\xe1 dedicada al seguimiento del rendimiento de su aplicaci\xf3n. Aqu\xed encontrar\xe1 datos y estad\xedsticas relevantes. Utilice estas m\xe9tricas para optimizar y mejorar constantemente la experiencia de su aplicaci\xf3n."))))),(0,r.kt)("p",null,"Ahora que ha creado su aplicaci\xf3n, es hora de avanzar a la etapa de desarrollo y pruebas. \xa1Es hora de poner manos a la obra de verdad! Vamos a explorar el proceso de desarrollo y asegurarnos de que est\xe9 listo para crear su aplicaci\xf3n para Tiendanube."),(0,r.kt)("h2",{id:"desarrollo-y-pruebas-de-su-aplicaci\xf3n"},"Desarrollo y Pruebas de su Aplicaci\xf3n"),(0,r.kt)("p",null,"En esta secci\xf3n, proporcionaremos toda la informaci\xf3n esencial para autenticar su aplicaci\xf3n con la API de Tiendanube, aprovechar nuestros servicios, realizar ajustes y probar la funcionalidad de la aplicaci\xf3n en una tienda de demostraci\xf3n antes de ponerla a disposici\xf3n. Prep\xe1rese para sumergirse en el desarrollo y garantizar una aplicaci\xf3n de calidad para nuestros comerciantes."),(0,r.kt)("h3",{id:"tienda-de-demostraci\xf3n"},"Tienda de demostraci\xf3n"),(0,r.kt)("p",null,"Para continuar con la instalaci\xf3n de su aplicaci\xf3n y llevar a cabo el proceso de autenticaci\xf3n, es necesario tener una tienda de prueba. Si a\xfan no tiene una tienda de prueba, haga clic en ",(0,r.kt)("strong",{parentName:"p"},'"Crear tienda de demostraci\xf3n"')," para crear su primera tienda de prueba."),(0,r.kt)("p",null,"Esta tienda de demostraci\xf3n le permitir\xe1 realizar pruebas de funcionamiento de la aplicaci\xf3n en un entorno controlado antes de ponerla a disposici\xf3n de los clientes."),(0,r.kt)(s.Alert,{appearance:"primary",title:"\ud83d\udccc Observaci\xf3n",mdxType:"Alert"},"Recuerde que esta tienda es solo para pruebas y tiene algunas limitaciones."),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"claves-de-acceso-de-su-aplicaci\xf3n"},"Claves de acceso de su aplicaci\xf3n"),(0,r.kt)("p",null,"Las claves de acceso son esenciales para iniciar el proceso de autenticaci\xf3n de su aplicaci\xf3n con nuestra API.\nEstas claves proporcionan la autorizaci\xf3n necesaria para que su aplicaci\xf3n se comunique con nuestros servicios y obtenga los datos y recursos esenciales para su funcionamiento adecuado."),(0,r.kt)("h3",{id:"instalaci\xf3n-de-su-aplicaci\xf3n"},"Instalaci\xf3n de su aplicaci\xf3n"),(0,r.kt)("p",null,"Si tiene una tienda de demostraci\xf3n, haga clic en el bot\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Instalar aplicaci\xf3n"),". Ser\xe1 redirigido al inicio de sesi\xf3n de su tienda de demostraci\xf3n. Utilice las mismas credenciales que utiliz\xf3 para iniciar sesi\xf3n en el Portal de Socios."),(0,r.kt)("p",null,"Si no tiene una tienda de demostraci\xf3n, ",(0,r.kt)("a",{parentName:"p",href:"https://partners.tiendanube.com/stores/create?type=demo"},"haga clic aqu\xed")," para crear una nueva."),(0,r.kt)(s.Alert,{title:"\ud83d\udca1 Consejo",mdxType:"Alert"},(0,r.kt)(s.Text,{mdxType:"Text"},"Si desea instalar su aplicaci\xf3n en otra tienda, agregue ",(0,r.kt)(s.Text,{as:"span",fontWeight:"bold",mdxType:"Text"},"/admin/apps/:app-id/authorize")," al final de la URL. Aseg\xfarese de reemplazar ",(0,r.kt)(s.Text,{as:"span",fontWeight:"bold",mdxType:"Text"},":app-id")," por el ID de su aplicaci\xf3n.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Al acceder al Administrador de su tienda de demostraci\xf3n, deber\xe1 confirmar la instalaci\xf3n haciendo clic en ",(0,r.kt)("strong",{parentName:"p"},"Aceptar y comenzar a usar"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Basic data",src:n(4378).Z,title:"Basic data",width:"677",height:"827"})),(0,r.kt)("h3",{id:"desinstalar-una-aplicaci\xf3n"},"Desinstalar una aplicaci\xf3n"),(0,r.kt)("p",null,"En este tutorial, explicamos c\xf3mo ",(0,r.kt)("strong",{parentName:"p"},"desinstalar una aplicaci\xf3n")," en su panel administrativo de Tiendanube."),(0,r.kt)(s.Alert,{title:"\ud83d\udca1 Consejo",mdxType:"Alert"},"En este tutorial, usamos Melhor Envio como ejemplo. Sin embargo, puede realizar el mismo procedimiento en cualquier aplicaci\xf3n que aparezca en esta p\xe1gina, ya sea de env\xedo, pagos, marketing, canales de venta, dropshipping, gesti\xf3n, etc."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Acceda al panel administrativo de Tiendanube.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"En el men\xfa lateral, ubique la secci\xf3n Potenciar y haga clic en ",(0,r.kt)("strong",{parentName:"p"},'"Mis aplicaciones"'),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Access my apps",src:n(4909).Z,title:"Access my apps",width:"298",height:"143"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Cuando la p\xe1gina se cargue, busque la herramienta que desea desactivar y, a la derecha, haga clic en ",(0,r.kt)("strong",{parentName:"p"},'"Desinstalar"'),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Uninstall app",src:n(2255).Z,title:"Uninstall app",width:"860",height:"196"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A continuaci\xf3n, se abrir\xe1 ",(0,r.kt)("strong",{parentName:"p"},"una ventana emergente preguntando si desea continuar")," con la desinstalaci\xf3n de la aplicaci\xf3n. Simplemente haga clic en ",(0,r.kt)("strong",{parentName:"p"},'"Aceptar"'),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Confirm app uninstall",src:n(1487).Z,title:"Confirm app uninstall",width:"446",height:"127"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Una vez desinstalada, aparecer\xe1 un mensaje de confirmaci\xf3n en la parte superior de la p\xe1gina."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App uninstalled",src:n(1512).Z,title:"App uninstalled",width:"813",height:"117"})),(0,r.kt)("p",{parentName:"li"},"Vea un ejemplo en el siguiente GIF:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"App uninstall",src:n(2891).Z,title:"App uninstall",width:"1084",height:"719"})))),(0,r.kt)("p",null,"La aplicaci\xf3n se ha desinstalado correctamente. Si desea ",(0,r.kt)("strong",{parentName:"p"},"reactivarla en su tienda"),", simplemente busque la aplicaci\xf3n en la misma p\xe1gina y haga clic en ",(0,r.kt)("strong",{parentName:"p"},'"Instalar"'),"."),(0,r.kt)("h2",{id:"autenticaci\xf3n-de-su-aplicaci\xf3n"},"Autenticaci\xf3n de su aplicaci\xf3n"),(0,r.kt)("p",null,"Un paso fundamental es autenticar su aplicaci\xf3n para acceder a la ",(0,r.kt)("a",{parentName:"p",href:"/devhub-apps/es/docs/developer-tools/nuvemshop-api"},"API de Tiendanube"),". Si est\xe1 utilizando uno de nuestros ",(0,r.kt)("a",{parentName:"p",href:"/devhub-apps/es/docs/developer-tools/templates"},"templates"),", el proceso de autenticaci\xf3n estar\xe1 listo para su uso, incluida la conexi\xf3n con la API de productos de Tiendanube. Esto automatiza en gran medida el proceso; siga la gu\xeda de configuraci\xf3n en el repositorio del template elegido y estar\xe1 en camino al desarrollo."),(0,r.kt)("p",null,"Por otro lado, si opta por no utilizar nuestros templates, puede acceder a esta ",(0,r.kt)("a",{parentName:"p",href:"/devhub-apps/es/docs/applications/authentication"},"gu\xeda")," para una integraci\xf3n manual. Nuestro objetivo es facilitar el desarrollo de su aplicaci\xf3n, independientemente del camino que elija."),(0,r.kt)("h2",{id:"elecci\xf3n-del-tipo-de-su-aplicaci\xf3n"},"Elecci\xf3n del tipo de su aplicaci\xf3n"),(0,r.kt)("p",null,"Despu\xe9s de crear su aplicaci\xf3n y estar listo para comenzar el desarrollo, es fundamental comprender los dos tipos de aplicaciones que se pueden desarrollar en nuestra plataforma: Integrada y Externa. Estas opciones ofrecen flexibilidad y ventajas \xfanicas para satisfacer las necesidades espec\xedficas de los comerciantes. Exploraremos estos tipos en detalle para que pueda tomar la mejor decisi\xf3n para su aplicaci\xf3n."),(0,r.kt)(A,{mdxType:"AppTypes"}),(0,r.kt)("h2",{id:"edici\xf3n-de-los-permisos-de-su-aplicaci\xf3n"},"Edici\xf3n de los permisos de su aplicaci\xf3n"),(0,r.kt)("p",null,"Al crear su aplicaci\xf3n, se elegir\xe1 el permiso ",(0,r.kt)("strong",{parentName:"p"},'"Productos"')," de forma predeterminada. Sin embargo, durante el desarrollo, es posible que necesite obtener ",(0,r.kt)("a",{parentName:"p",href:"/devhub-apps/es/docs/developer-tools/nuvemshop-api#permiss%C3%B5es-e-escopos"},"acceso a otros permisos")," para su aplicaci\xf3n. Todos los permisos que el socio agregue o edite requerir\xe1n que la aplicaci\xf3n sea reinstalada. Para ello, debe seleccionar los permisos en ",(0,r.kt)("strong",{parentName:"p"},'"Datos B\xe1sicos"')," en el portal, guardar los cambios, ir a la tienda donde est\xe1 instalada la aplicaci\xf3n, hacer clic en ",(0,r.kt)("strong",{parentName:"p"},'"Desinstalar"')," (vea c\xf3mo desinstalar una ",(0,r.kt)("a",{parentName:"p",href:"/devhub-apps/es/docs/applications/overview#desinstalando-um-aplicativo"},"aplicaci\xf3n"),") y luego en ",(0,r.kt)("strong",{parentName:"p"},'"Instalar"'),". De esta manera, se generar\xe1 un nuevo token de acceso y se podr\xe1 iniciar nuevamente el proceso de integraci\xf3n con la API de Nuvemhop, incluyendo los permisos actualizados."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"pr\xf3ximos-pasos"},"Pr\xf3ximos pasos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aprenda m\xe1s sobre ",(0,r.kt)("a",{parentName:"li",href:"/devhub-apps/es/docs/applications/native"},"Aplicaciones Integradas")),(0,r.kt)("li",{parentName:"ul"},"Aprenda m\xe1s sobre ",(0,r.kt)("a",{parentName:"li",href:"/devhub-apps/es/docs/applications/standalone"},"Aplicaciones Externas"))))}h.isMDXComponent=!0},4909:(e,a,n)=>{n.d(a,{Z:()=>i});const i="data:image/jpeg;base64,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"},4378:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/app-install-955e3ff55824531893de9b9922ec06d4.png"},1512:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/app-uninstalled-8511c602370401df377dfae1ec705caf.jpg"},1487:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/confirm-app-uninstall-9fa08ec4a78550ad459f41280286d735.jpeg"},4084:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/my-new-app-2228258d9d6a05f5b65e3ba8d067ecb4.png"},2891:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/uninstall-app-26841e77e591a4e00a5675d0767b3fb5.gif"},2255:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/uninstall-app-62f3c5975604f337f7853312e543298d.jpeg"}}]);