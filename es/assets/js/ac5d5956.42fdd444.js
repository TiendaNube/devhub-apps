"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[643],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function r(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=s(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return t?n.createElement(g,c(c({ref:a},d),{},{components:t})):n.createElement(g,c({ref:a},d))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,c=new Array(o);c[0]=m;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=e,r[u]="string"==typeof e?e:i,c[1]=r;for(var s=2;s<o;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4830:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=t(7462),i=(t(7294),t(3905)),o=t(4774);const c={sidebar_position:1},r="Autenticaci\xf3n",l={unversionedId:"applications/authentication",id:"applications/authentication",title:"Autenticaci\xf3n",description:"Este gu\xeda presenta m\xe9todos de autenticaci\xf3n de aplicaciones con la plataforma Nuvemshop. Descubre c\xf3mo garantizar seguridad y acceso autorizado para integraciones perfectas entre tus aplicaciones y nuestra plataforma.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/applications/authentication.md",sourceDirName:"applications",slug:"/applications/authentication",permalink:"/es/docs/applications/authentication",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/applications/authentication.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Visi\xf3n general",permalink:"/es/docs/applications/overview"},next:{title:"Integrada",permalink:"/es/docs/applications/native"}},s={},d=[{value:"Autenticaci\xf3n de la API",id:"autenticaci\xf3n-de-la-api",level:2},{value:"Tokens de Acceso e Identificaci\xf3n",id:"tokens-de-acceso-e-identificaci\xf3n",level:2},{value:"Tipos de M\xe9todos de Autenticaci\xf3n",id:"tipos-de-m\xe9todos-de-autenticaci\xf3n",level:2},{value:"Obtenci\xf3n del token de acceso",id:"obtenci\xf3n-del-token-de-acceso",level:2},{value:"Cambio de la URL de Redirecci\xf3n",id:"cambio-de-la-url-de-redirecci\xf3n",level:3},{value:"Realizar la Solicitud con el C\xf3digo cURL",id:"realizar-la-solicitud-con-el-c\xf3digo-curl",level:3},{value:"C\xf3mo obtener un nuevo c\xf3digo cURL",id:"c\xf3mo-obtener-un-nuevo-c\xf3digo-curl",level:3},{value:"Pr\xf3ximos pasos",id:"pr\xf3ximos-pasos",level:2}],u={toc:d},p="wrapper";function m(e){let{components:a,...c}=e;return(0,i.kt)(p,(0,n.Z)({},u,c,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"autenticaci\xf3n"},"Autenticaci\xf3n"),(0,i.kt)("p",null,"Este gu\xeda presenta m\xe9todos de autenticaci\xf3n de aplicaciones con la plataforma Nuvemshop. Descubre c\xf3mo garantizar seguridad y acceso autorizado para integraciones perfectas entre tus aplicaciones y nuestra plataforma."),(0,i.kt)("h2",{id:"autenticaci\xf3n-de-la-api"},"Autenticaci\xf3n de la API"),(0,i.kt)("p",null,"La autenticaci\xf3n y autorizaci\xf3n del usuario se proporcionan mediante una implementaci\xf3n restringida de OAuth 2. Actualmente, solo admitimos el flujo de ",(0,i.kt)("a",{parentName:"p",href:"https://oauth.net/2/grant-types/authorization-code/"},'"C\xf3digo de Autorizaci\xf3n"')," para otorgar acceso. Al seguir este flujo, obtienes ",(0,i.kt)("a",{parentName:"p",href:"https://oauth.net/2/access-tokens/"},"tokens de acceso")," que no caducan y permanecen v\xe1lidos hasta que se renuevan."),(0,i.kt)("h2",{id:"tokens-de-acceso-e-identificaci\xf3n"},"Tokens de Acceso e Identificaci\xf3n"),(0,i.kt)("p",null,"Los tokens de acceso que proporcionamos no tienen fecha de vencimiento. Solo se vuelven inv\xe1lidos cuando se obtiene un nuevo token o cuando el usuario desinstala la aplicaci\xf3n. Junto con el token de acceso, tambi\xe9n se proporciona un ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id"),", que corresponde al ID de la tienda. Este ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," es esencial para realizar solicitudes a nuestra API y tambi\xe9n se puede utilizar para autenticar a los usuarios de la aplicaci\xf3n en tu sitio."),(0,i.kt)("p",null,"La autenticaci\xf3n es un paso fundamental para acceder a nuestros servicios a trav\xe9s de la API. Aseg\xfarate de incluir el ",(0,i.kt)("inlineCode",{parentName:"p"},"user_id")," en tus solicitudes para garantizar una autenticaci\xf3n y autorizaci\xf3n adecuadas."),(0,i.kt)("h2",{id:"tipos-de-m\xe9todos-de-autenticaci\xf3n"},"Tipos de M\xe9todos de Autenticaci\xf3n"),(0,i.kt)("p",null,"La elecci\xf3n del m\xe9todo de autenticaci\xf3n depende del tipo de aplicaci\xf3n que est\xe1s desarrollando:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Si est\xe1s creando aplicaciones independientes, ya sea con o sin nuestra plantilla, es necesario utilizar OAuth 2."),(0,i.kt)("li",{parentName:"ul"},"Para aplicaciones que se integran con el administrador de Nuvemshop utilizando Nexo, se utilizan tokens de acceso generados en el administrador de Nuvemshop.")),(0,i.kt)("p",null,"Nuestros modelos de creaci\xf3n de aplicaciones ya incluyen un sistema de autenticaci\xf3n integrado con nuestra API. Esto reduce significativamente el tiempo de desarrollo para nuestros socios que eligen utilizar estas plantillas. Sin embargo, si el socio decide no usar una de nuestras plantillas, es posible realizar la autenticaci\xf3n manualmente. A continuaci\xf3n, te mostraremos c\xf3mo se puede hacer de manera efectiva."),(0,i.kt)("h2",{id:"obtenci\xf3n-del-token-de-acceso"},"Obtenci\xf3n del token de acceso"),(0,i.kt)(o.Alert,{appearance:"warning",title:"Atenci\xf3n",mdxType:"Alert"},"Al finalizar el proceso de obtenci\xf3n, recibir\xe1s un c\xf3digo cURL, esencial para generar el access_token. Es importante destacar que este c\xf3digo tiene una validez de solo 5 minutos. Aseg\xfarate de usarlo dentro de ese per\xedodo para garantizar un acceso exitoso."),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"cambio-de-la-url-de-redirecci\xf3n"},"Cambio de la URL de Redirecci\xf3n"),(0,i.kt)("p",null,"Si has modificado la URL de redirecci\xf3n, por favor, reempl\xe1zala y guarda la nueva URL en ",(0,i.kt)("inlineCode",{parentName:"p"},"https://partners.nuvemshop.com.br/applications/authentication/:app-id")," para acceder a la p\xe1gina con el c\xf3digo cURL. El campo de URL de redirecci\xf3n se encuentra en el formulario de ",(0,i.kt)("strong",{parentName:"p"},"Datos B\xe1sicos"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Datos b\xe1sicos",src:t(7034).Z,title:"Datos b\xe1sicos",width:"342",height:"182"})),(0,i.kt)("p",null,"Este paso es crucial para asegurar que el redireccionamiento funcione correctamente y que puedas acceder a la p\xe1gina de c\xf3digo cURL sin problemas. Aseg\xfarate de actualizar la URL de redirecci\xf3n seg\xfan sea necesario."),(0,i.kt)("h3",{id:"realizar-la-solicitud-con-el-c\xf3digo-curl"},"Realizar la Solicitud con el C\xf3digo cURL"),(0,i.kt)("p",null,"Despu\xe9s de completar la instalaci\xf3n, ser\xe1s redirigido a una nueva p\xe1gina que contiene el c\xf3digo cURL necesario para generar tu ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),". Simplemente copia este c\xf3digo y realiza la solicitud utilizando la herramienta de tu elecci\xf3n."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cURL de Autenticaci\xf3n",src:t(869).Z,title:"cURL de Autenticaci\xf3n",width:"600",height:"694"})),(0,i.kt)("p",null,"La estructura del cURL generado consta de:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"client_id"),": El ID de la aplicaci\xf3n;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"client_secret"),": Tu secreto de cliente;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"code"),": El c\xf3digo obtenido en la URL despu\xe9s de instalar la aplicaci\xf3n en la tienda de demostraci\xf3n.")),(0,i.kt)("p",null,"Este paso es fundamental para obtener con \xe9xito el access_token y garantizar el acceso autorizado a nuestra plataforma."),(0,i.kt)("p",null,"Si la solicitud tiene \xe9xito, recibir\xe1s una respuesta en un formato similar a este ejemplo:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"\xc9xito de cURL de Autenticaci\xf3n",src:t(8373).Z,title:"\xc9xito de cURL de Autenticaci\xf3n",width:"592",height:"563"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "access_token": "88a2fdd17e10327ed96f4f2dc96b00bca60dfe60",\n    "token_type": "bearer",\n    "scope": "write_products",\n    "user_id": 2093261\n}\n')),(0,i.kt)("p",null,"Puedes armar manualmente el comando cURL en funci\xf3n del ejemplo proporcionado. Aqu\xed tienes el comando cURL para realizar la solicitud POST utilizando la informaci\xf3n mencionada:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://www.tiendanube.com/apps/authorize/token" \\\n-d "client_id=client_id" \\\n-d "client_secret=client_secret" \\\n-d "code=code"\n')),(0,i.kt)("p",null,"Aseg\xfarate de reemplazar ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," y ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," con los valores correctos de tu aplicaci\xf3n creada en el Portal de Socios.\nRecuerda que puedes ejecutar este comando en una terminal o en una herramienta que admita cURL para probar la solicitud y obtener el access_token."),(0,i.kt)("h3",{id:"c\xf3mo-obtener-un-nuevo-c\xf3digo-curl"},"C\xf3mo obtener un nuevo c\xf3digo cURL"),(0,i.kt)("p",null,"Para hacerlo, sigue estos pasos:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Cuando recibas la alerta que indique que la solicitud no se ha confirmado, haz clic en el bot\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Intentar de nuevo"),"."),(0,i.kt)("li",{parentName:"ol"},"Ser\xe1s redirigido a la secci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Mis aplicaciones")," en el administrador de tu tienda de demostraci\xf3n."),(0,i.kt)("li",{parentName:"ol"},"En el administrador de tu tienda de demostraci\xf3n, en la secci\xf3n ",(0,i.kt)("strong",{parentName:"li"},"Mis aplicaciones"),", verifica si la aplicaci\xf3n est\xe1 instalada. Si est\xe1 instalada, procede a ",(0,i.kt)("a",{parentName:"li",href:"/es/docs/applications/overview#desinstalando-un-aplicativo"},"desinstalarla"),".")),(0,i.kt)("p",null,"Si la solicitud fall\xf3 debido a la caducidad del c\xf3digo cURL o alg\xfan error, puedes obtener un nuevo c\xf3digo ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/applications/overview#desinstalando-un-aplicativo"},"desinstalando")," y ",(0,i.kt)("a",{parentName:"p",href:"/es/docs/applications/overview#instalando-seu-aplicativo"},"reinstalando")," tu aplicaci\xf3n en la tienda nuevamente."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Authentication curl fail",src:t(7746).Z,title:"Authentication curl fail",width:"592",height:"424"})),(0,i.kt)("p",null,"Siguiendo estos pasos, podr\xe1s obtener un nuevo c\xf3digo cURL v\xe1lido y continuar con \xe9xito el proceso de ",(0,i.kt)("a",{parentName:"p",href:"./authentication#obtendo-o-token-de-acesso"},"autenticaci\xf3n"),". Aseg\xfarate de seguir las instrucciones cuidadosamente para evitar problemas futuros."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"pr\xf3ximos-pasos"},"Pr\xf3ximos pasos"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aprende m\xe1s sobre ",(0,i.kt)("a",{parentName:"li",href:"/es/docs/applications/overview"},"Aplicaciones"))))}m.isMDXComponent=!0},7746:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/authentication-curl-fail-61d7c15ac4a84e46c0333093f61e9c89.png"},8373:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/authentication-curl-success-e2aa019d780147ba42b63dd4cb6aa297.png"},869:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/authentication-curl-f50d83da14011a400f25e349b78d0c55.png"},7034:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/card-basic-data-a4117a09abdd3517f9d2d80dfb39af0d.png"}}]);