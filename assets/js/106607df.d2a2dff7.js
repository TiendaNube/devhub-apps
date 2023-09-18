"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[782],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),c=o,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||r;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7212:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_position:4},l="Nexo",i={unversionedId:"developer-tools/nexo",id:"developer-tools/nexo",title:"Nexo",description:"O Nexo disponibiliza recursos para facilitar a comunica\xe7\xe3o entre um aplicativo externo e o administrador da Nuvemshop. Essa intera\xe7\xe3o entre o Admin e o App \xe9 estabelecida atrav\xe9s de mensagens, seguindo o padr\xe3o do observador, permitindo inscri\xe7\xe3o e desinscri\xe7\xe3o de eventos.",source:"@site/docs/developer-tools/nexo.md",sourceDirName:"developer-tools",slug:"/developer-tools/nexo",permalink:"/devhub-apps/docs/developer-tools/nexo",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/developer-tools/nexo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Nimbus",permalink:"/devhub-apps/docs/developer-tools/nimbus"},next:{title:"API Nuvemshop",permalink:"/devhub-apps/docs/developer-tools/nuvemshop-api"}},p={},s=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"Come\xe7ando",id:"come\xe7ando",level:2},{value:"Criar uma inst\xe2ncia do Nexo",id:"criar-uma-inst\xe2ncia-do-nexo",level:3},{value:"Verificar se o aplicativo est\xe1 conectado",id:"verificar-se-o-aplicativo-est\xe1-conectado",level:3},{value:"Ativar a sincroniza\xe7\xe3o de rotas",id:"ativar-a-sincroniza\xe7\xe3o-de-rotas",level:3},{value:"Obter o token de sess\xe3o",id:"obter-o-token-de-sess\xe3o",level:3},{value:"Tratamento de erros",id:"tratamento-de-erros",level:3},{value:"Actions",id:"actions",level:2},{value:"<code>ACTION_NAVEGATE_EXIT</code>",id:"action_navegate_exit",level:3},{value:"<code>ACTION_NAVIGATE_SYNC</code>",id:"action_navigate_sync",level:3},{value:"<code>ACTION_NAVIGATE_GOTO</code>",id:"action_navigate_goto",level:3},{value:"<code>ACTION_NAVIGATE_PATHNAME</code>",id:"action_navigate_pathname",level:3},{value:"<code>ACTION_AUTH_SESSION_TOKEN</code>",id:"action_auth_session_token",level:3},{value:"<code>ACTION_STORE_INFO</code>",id:"action_store_info",level:3},{value:"<code>ACTION_NAVIGATE_GOTO_OLD_ADMIN</code>",id:"action_navigate_goto_old_admin",level:3},{value:"<code>ACTION_NAVIGATE_HEADER</code>",id:"action_navigate_header",level:3},{value:"<code>ACTION_DEVICE</code>",id:"action_device",level:3},{value:"<code>ACTION_LOG_ERROR</code>",id:"action_log_error",level:3},{value:"Helpers",id:"helpers",level:2},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>iAmReady</code>",id:"iamready",level:3},{value:"<code>navigateExit</code>",id:"navigateexit",level:3},{value:"<code>getSessionToken</code>",id:"getsessiontoken",level:3},{value:"<code>syncPathname</code>",id:"syncpathname",level:3},{value:"<code>getStoreInfo</code>",id:"getstoreinfo",level:3},{value:"<code>getIsMobileDevice</code>",id:"getismobiledevice",level:3},{value:"<code>goTo</code>",id:"goto",level:3},{value:"<code>goToOldAdmin</code>",id:"gotooldadmin",level:3},{value:"<code>copyToClipboard</code>",id:"copytoclipboard",level:3},{value:"<code>navigateHeader</code>",id:"navigateheader",level:3},{value:"<code>navigateHeaderRemove</code>",id:"navigateheaderremove",level:3},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2}],u={toc:s},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nexo"},"Nexo"),(0,o.kt)("p",null,"O Nexo disponibiliza recursos para facilitar a comunica\xe7\xe3o entre um aplicativo externo e o administrador da Nuvemshop. Essa intera\xe7\xe3o entre o Admin e o App \xe9 estabelecida atrav\xe9s de mensagens, seguindo o padr\xe3o do observador, permitindo inscri\xe7\xe3o e desinscri\xe7\xe3o de eventos."),(0,o.kt)("p",null,'Essas mensagens, denominadas "Actions", s\xe3o cuidadosamente definidas e associadas a "Helpers". Essas Helpers habilitam o uso das Actions como promessas, proporcionando uma abordagem eficaz e confi\xe1vel para trocar informa\xe7\xf5es e sincronizar opera\xe7\xf5es entre as partes envolvidas.'),(0,o.kt)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),(0,o.kt)("h3",{id:"npm"},"npm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @tiendanube/nexo\n")),(0,o.kt)("h3",{id:"yarn"},"yarn"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @tiendanube/nexo\n")),(0,o.kt)("h2",{id:"come\xe7ando"},"Come\xe7ando"),(0,o.kt)("h3",{id:"criar-uma-inst\xe2ncia-do-nexo"},"Criar uma inst\xe2ncia do Nexo"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Config"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"clientId"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")," obrigat\xf3rio"),(0,o.kt)("td",{parentName:"tr",align:null},"Este valor \xe9 fornecido pela Nuvemshop")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"log"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")," padr\xe3o ",(0,o.kt)("inlineCode",{parentName:"td"},"false")),(0,o.kt)("td",{parentName:"tr",align:null},"Permite mostrar as mensagens transferidas entre o App e o Admin")))),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import nexo from "@tiendanube/nexo";\n\nconst instance = nexo.create({\n  clientId: "123",\n  log: true,\n});\n\nexport default instance;\n')),(0,o.kt)("h3",{id:"verificar-se-o-aplicativo-est\xe1-conectado"},"Verificar se o aplicativo est\xe1 conectado"),(0,o.kt)("p",null,"Atrav\xe9s do utilit\xe1rio ",(0,o.kt)("inlineCode",{parentName:"p"},"connect"),", voc\xea pode verificar se o Administrador permite a troca de mensagens e, ao mesmo tempo, com ",(0,o.kt)("inlineCode",{parentName:"p"},"iAmReady"),", notificar que sua aplica\xe7\xe3o est\xe1 pronta para ser exibida."),(0,o.kt)("p",null,"Para a aplica\xe7\xe3o React"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useEffect, useState } from "react";\nimport { connect, iAmReady } from "@tiendanube/nexo/helpers";\nimport nexo from "./nexoClient"; // Nexo instance\n\nfunction App() {\n  const [isConnect, setIsConnect] = useState(false);\n\n  useEffect(() => {\n    connect(nexo).then(() => {\n      setIsConnect(true);\n      iAmReady(nexo);\n    });\n  }, []);\n\n  if (!isConnect) return <MyAppSkeleton />;\n\n  return <MyApp />;\n}\n')),(0,o.kt)("h3",{id:"ativar-a-sincroniza\xe7\xe3o-de-rotas"},"Ativar a sincroniza\xe7\xe3o de rotas"),(0,o.kt)("p",null,"Essa funcionalidade permitir\xe1 que voc\xea registre a navega\xe7\xe3o do aplicativo na URL do navegador por meio de fragmentos (#myroute)."),(0,o.kt)("p",null,"Este exemplo \xe9 feito com o ",(0,o.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"React Router"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useEffect } from "react";\nimport { useLocation, useHistory } from "react-router-dom";\nimport { syncPathname } from "@tiendanube/nexo/helpers";\n\nimport nexo from "./nexoClient";\nimport {\n  ACTION_NAVIGATE_SYNC,\n  NavigateSyncResponse,\n} from "@tiendanube/nexo/actions";\n\nconst NexoSyncRoute: React.FC<{ children: React.ReactNode }>({ children } ) => {\n  const { pathname } = useLocation();\n  const { push: goTo, replace: replaceTo } = useHistory();\n\n  //to send the current path of the app to the browser url\n  useEffect(() => {\n    syncPathname(nexo, pathname);\n  }, [pathname]);\n\n  //to navigate in the app if the browser url changes\n  useEffect(() => {\n    const unsuscribe = nexo.suscribe(\n      ACTION_NAVIGATE_SYNC,\n      ({ path, replace }: NavigateSyncResponse) => {\n        replace ? goTo(path) : replaceTo(path);\n      }\n    );\n    return unsuscribe;\n  }, [goTo, replaceTo]);\n\n  return children;\n}\n\nexport default NexoSyncRoute;\n')),(0,o.kt)("h3",{id:"obter-o-token-de-sess\xe3o"},"Obter o token de sess\xe3o"),(0,o.kt)("p",null,"Por meio do utilit\xe1rio ",(0,o.kt)("inlineCode",{parentName:"p"},"getSessionToken"),", podemos obter um token de sess\xe3o (JWT) que ser\xe1 usado para verificar a autenticidade da solicita\xe7\xe3o ao seu Backend. O JWT \xe9 assinado com o Segredo do Cliente da Aplica\xe7\xe3o."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import axios from "axios";\nimport { getSessionToken } from "@tiendanube/nexo/helpers";\nimport nexo from "./nexoClient";\n\nconst axiosIntance = axios.create({\n  baseURL: "https://my-backend.com",\n});\n\naxiosIntance.interceptors.request.use(async (request) => {\n  const token = await getSessionToken(nexo);\n  const bearerToken = `Bearer ${token}`;\n  request.headers = { ...request.headers, Authorization: bearerToken };\n  return request;\n});\n\nexport default axiosIntance;\n')),(0,o.kt)("h3",{id:"tratamento-de-erros"},"Tratamento de erros"),(0,o.kt)("p",null,"O componente ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," permite aprimorar o tratamento de erros entre seus aplicativos e o painel de administra\xe7\xe3o dos lojistas, tornando seus aplicativos mais confi\xe1veis e proporcionando uma excelente experi\xeancia aos usu\xe1rios."),(0,o.kt)("p",null,"Basta configurar o componente ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," no topo da \xe1rvore de componentes do seu aplicativo. Ele ser\xe1 respons\xe1vel por despachar automaticamente a a\xe7\xe3o ",(0,o.kt)("a",{parentName:"p",href:"#action_log_error"},(0,o.kt)("inlineCode",{parentName:"a"},"ACTION_LOG_ERROR")),". Isso aciona a exibi\xe7\xe3o de uma interface de fallback integrada ao painel de administra\xe7\xe3o dos lojistas."),(0,o.kt)("p",null,"Essa abordagem garantir\xe1 que os erros sejam tratados de maneira eficaz, melhorando a confiabilidade de seus aplicativos e proporcionando uma experi\xeancia mais suave aos usu\xe1rios. Lembre-se de que o uso do ",(0,o.kt)("inlineCode",{parentName:"p"},"ErrorBoundary")," \xe9 obrigat\xf3rio para publicar seu aplicativo em nossa App Store."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useEffect, useState } from "react";\nimport { BrowserRouter } from "react-router-dom";\nimport { Box, Text } from "@nimbus-ds/components";\nimport { ErrorBoundary, connect, iAmReady, create } from "@tiendanube/nexo";\n\nconst nexo = create({\n  clientId: "123",\n  log: true,\n});\n\nconst App: React.FC = () => {\n  const [isConnect, setIsConnect] = useState(false);\n\n  useEffect(() => {\n    if (!isConnect) {\n      connect(nexo)\n        .then(async () => {\n          setIsConnect(true);\n          iAmReady(nexo);\n        })\n        .catch(() => {\n          setIsConnect(false);\n        });\n    }\n  }, []);\n\n  if (!isConnect)\n    return (\n      <Box\n        height="100vh"\n        display="flex"\n        justifyContent="center"\n        alignItems="center"\n      >\n        <Text>Conectando...</Text>\n      </Box>\n    );\n\n  return (\n    <ErrorBoundary nexo={nexo}>\n      <BrowserRouter>\n        <Text>Your application</Text>\n      </BrowserRouter>\n    </ErrorBoundary>\n  );\n};\n\nexport default App;\n')),(0,o.kt)("h2",{id:"actions"},"Actions"),(0,o.kt)("h3",{id:"action_navegate_exit"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVEGATE_EXIT")),(0,o.kt)("p",null,"Para navegar at\xe9 a rota a partir da qual o aplicativo foi acessado."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/navigate/exit"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("h3",{id:"action_navigate_sync"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_SYNC")),(0,o.kt)("p",null,"Para atualizar sua localiza\xe7\xe3o atual para propagar a navega\xe7\xe3o interna."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/navigate/sync"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  pathname: string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("h3",{id:"action_navigate_goto"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_GOTO")),(0,o.kt)("p",null,"Para navegar para uma rota espec\xedfica no Admin."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/navigate/goTo"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  pathname: string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  path: string;\n  replace?: boolean;\n}\n")),(0,o.kt)("h3",{id:"action_navigate_pathname"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_PATHNAME")),(0,o.kt)("p",null,"Para o subPathname atual, que representa o caminho do aplicativo incorporado."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/navigate/pathname"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  pathname: string;\n}\n")),(0,o.kt)("h3",{id:"action_auth_session_token"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_AUTH_SESSION_TOKEN")),(0,o.kt)("p",null,"Para solicitar o token de sess\xe3o (JWT)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/auth/sessionToken"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  token: string;\n}\n")),(0,o.kt)("h3",{id:"action_store_info"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_STORE_INFO")),(0,o.kt)("p",null,"Para solicitar informa\xe7\xf5es sobre a loja atual registrada."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/store/info"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  id: string;\n  name: string;\n  url: string;\n  country: string;\n  language: string;\n  currency: string;\n}\n")),(0,o.kt)("h3",{id:"action_navigate_goto_old_admin"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_GOTO_OLD_ADMIN")),(0,o.kt)("p",null,"Para navegar para uma rota espec\xedfica localizada no antigo admin (admin/...)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/navigate/goToOldAdmin"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  pathToOldAdmin: string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("h3",{id:"action_navigate_header"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_HEADER")),(0,o.kt)("p",null,"Para mostrar a a\xe7\xe3o de navega\xe7\xe3o no topo do cabe\xe7alho."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/navigate/header"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    goTo?: 'back' | string;\n    goToAdmin?: string;\n    text?: string;\n    remove?: boolean;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("h3",{id:"action_device"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_DEVICE")),(0,o.kt)("p",null,"Para solicitar informa\xe7\xf5es sobre o dispositivo m\xf3vel."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/device"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  isMobileDevice: boolean;\n}\n")),(0,o.kt)("h3",{id:"action_log_error"},(0,o.kt)("inlineCode",{parentName:"h3"},"ACTION_LOG_ERROR")),(0,o.kt)("p",null,"Permite o registro de erros, capturando informa\xe7\xf5es cruciais como URL, mensagem e rastreamento (stack trace) para fins de diagn\xf3stico."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"app/log/error"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Payload"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  url: string;\n  message: string;\n  stack: string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,o.kt)("h2",{id:"helpers"},"Helpers"),(0,o.kt)("h3",{id:"connect"},(0,o.kt)("inlineCode",{parentName:"h3"},"connect")),(0,o.kt)("p",null,"Aguardar se o aplicativo estiver pronto para renderizar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ttl (number)"),": Maximum time waiting for the admin, default 3000;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Promise<void>")," Success or Fail;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"connect(nexo)\n  .then(() => {\n    //success\n  })\n  .catch(() => {\n    //fail\n  });\n")),(0,o.kt)("h3",{id:"iamready"},(0,o.kt)("inlineCode",{parentName:"h3"},"iAmReady")),(0,o.kt)("p",null,"Para notificar que o aplicativo est\xe1 sendo renderizado."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"void"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"iAmReady(nexo);\n")),(0,o.kt)("h3",{id:"navigateexit"},(0,o.kt)("inlineCode",{parentName:"h3"},"navigateExit")),(0,o.kt)("p",null,"Para navegar at\xe9 a rota a partir da qual o aplicativo foi acessado."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/navigate/exit"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"navigateExit(nexo);\n")),(0,o.kt)("h3",{id:"getsessiontoken"},(0,o.kt)("inlineCode",{parentName:"h3"},"getSessionToken")),(0,o.kt)("p",null,"Para solicitar o token de sess\xe3o (JWT)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/auth/sessionToken"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Promise<token: string>"),": Promise with session token;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const token = await getSessionToken(nexo);\n")),(0,o.kt)("h3",{id:"syncpathname"},(0,o.kt)("inlineCode",{parentName:"h3"},"syncPathname")),(0,o.kt)("p",null,"Para atualizar sua localiza\xe7\xe3o atual para propagar a navega\xe7\xe3o interna."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/navigate/sync"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Promise<token: string>"),": Promise with session token;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"syncPathname(nexo, pathname);\n")),(0,o.kt)("h3",{id:"getstoreinfo"},(0,o.kt)("inlineCode",{parentName:"h3"},"getStoreInfo")),(0,o.kt)("p",null,"Para solicitar informa\xe7\xf5es sobre a Loja atual."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/store/info"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Promise<StoreInfoResponse>"),": Promise with store info;")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"StoreInfoResponse {\n  id: string;\n  name: string;\n  url: string;\n  country: string;\n  language: string;\n  currency: string;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const storeInfo = await getStoreInfo(nexo);\n")),(0,o.kt)("h3",{id:"getismobiledevice"},(0,o.kt)("inlineCode",{parentName:"h3"},"getIsMobileDevice")),(0,o.kt)("p",null,"Para verificar se o aplicativo est\xe1 sendo carregado do dispositivo m\xf3vel."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/device"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),": True / False;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const isMobileDevice = await getIsMobileDevice(nexo);\n")),(0,o.kt)("h3",{id:"goto"},(0,o.kt)("inlineCode",{parentName:"h3"},"goTo")),(0,o.kt)("p",null,"Para navegar para uma rota espec\xedfica no Admin."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/navigate/goTo"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path (string)"),": Specific path to navigate;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'goTo(nexo, "/products");\n')),(0,o.kt)("h3",{id:"gotooldadmin"},(0,o.kt)("inlineCode",{parentName:"h3"},"goToOldAdmin")),(0,o.kt)("p",null,"Para navegar para uma rota espec\xedfica no Old Admin, apenas est\xe1 dispon\xedvel o modo Web (dispositivo n\xe3o m\xf3vel)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/navigate/goToOldAdmin"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path (string)"),": Specific path to navigate;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'goToOldAdmin(nexo, "/products");\n')),(0,o.kt)("h3",{id:"copytoclipboard"},(0,o.kt)("inlineCode",{parentName:"h3"},"copyToClipboard")),(0,o.kt)("p",null,"Para copiar o texto enviado para a \xe1rea de transfer\xeancia do dispositivo."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/utils/copyToClipboard"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"text (string)"),": Text to copy;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),": If copied successfully;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'copyToClipboard(nexo, "text to copy");\n')),(0,o.kt)("h3",{id:"navigateheader"},(0,o.kt)("inlineCode",{parentName:"h3"},"navigateHeader")),(0,o.kt)("p",null,"Para mostrar a a\xe7\xe3o de navega\xe7\xe3o no cabe\xe7alho superior, apenas est\xe1 dispon\xedvel o modo Web (dispositivo n\xe3o m\xf3vel)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/utils/copyToClipboard"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"config (NavigateHeaderRequest)"),": Config to navegate header;")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},' NavigateHeaderRequest {\n   goTo: "back" | string;\n   text: string;\n };\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'navigateHeader(nexo, { goTo: "/", text: "Product List" });\n//or\nnavigateHeader(nexo, { goTo: "back", text: "Back" });\n')),(0,o.kt)("h3",{id:"navigateheaderremove"},(0,o.kt)("inlineCode",{parentName:"h3"},"navigateHeaderRemove")),(0,o.kt)("p",null,"Remove a a\xe7\xe3o do Header Top, dispon\xedvel apenas no modo Web (dispositivos n\xe3o m\xf3veis)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Action"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"app/utils/copyToClipboard"),";"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"navigateHeaderRemove(nexo);\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Saiba mais sobre nossa ",(0,o.kt)("a",{parentName:"li",href:"./nuvemshop-api"},"API"))))}d.isMDXComponent=!0}}]);