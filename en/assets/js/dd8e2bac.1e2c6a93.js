"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[596],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},k="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),k=s(t),c=l,d=k["".concat(p,".").concat(c)]||k[c]||m[c]||o;return t?a.createElement(d,i(i({ref:n},u),{},{components:t})):a.createElement(d,i({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[k]="string"==typeof e?e:l,i[1]=r;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},4639:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=t(7462),l=(t(7294),t(3905));const o={sidebar_position:4},i="Nexo",r={unversionedId:"developer-tools/nexo",id:"developer-tools/nexo",title:"Nexo",description:"Nexo provides resources to facilitate communication between an external application and the Nuvemshop administrator. This interaction between the admin and the app is established through messages, following the observer pattern, allowing for event subscription and unsubscription.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/developer-tools/nexo.md",sourceDirName:"developer-tools",slug:"/developer-tools/nexo",permalink:"/en/docs/developer-tools/nexo",draft:!1,editUrl:"https://github.com/TiendaNube/devhub-apps/tree/master/docs/developer-tools/nexo.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Nimbus",permalink:"/en/docs/developer-tools/nimbus"},next:{title:"Nuvemshop API",permalink:"/en/docs/developer-tools/nuvemshop-api"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"npm",id:"npm",level:3},{value:"yarn",id:"yarn",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Create a Nexo instance",id:"create-a-nexo-instance",level:3},{value:"Check if the app is connected",id:"check-if-the-app-is-connected",level:3},{value:"Enable route synchronization",id:"enable-route-synchronization",level:3},{value:"Get Session Token",id:"get-session-token",level:3},{value:"Actions",id:"actions",level:2},{value:"<code>ACTION_NAVEGATE_EXIT</code>",id:"action_navegate_exit",level:3},{value:"<code>ACTION_NAVIGATE_SYNC</code>",id:"action_navigate_sync",level:3},{value:"<code>ACTION_NAVIGATE_GOTO</code>",id:"action_navigate_goto",level:3},{value:"<code>ACTION_NAVIGATE_PATHNAME</code>",id:"action_navigate_pathname",level:3},{value:"<code>ACTION_AUTH_SESSION_TOKEN</code>",id:"action_auth_session_token",level:3},{value:"<code>ACTION_STORE_INFO</code>",id:"action_store_info",level:3},{value:"<code>ACTION_NAVIGATE_GOTO_OLD_ADMIN</code>",id:"action_navigate_goto_old_admin",level:3},{value:"<code>ACTION_NAVIGATE_HEADER</code>",id:"action_navigate_header",level:3},{value:"<code>ACTION_DEVICE</code>",id:"action_device",level:3},{value:"Helpers",id:"helpers",level:2},{value:"<code>connect</code>",id:"connect",level:3},{value:"<code>iAmReady</code>",id:"iamready",level:3},{value:"<code>navigateExit</code>",id:"navigateexit",level:3},{value:"<code>getSessionToken</code>",id:"getsessiontoken",level:3},{value:"<code>syncPathname</code>",id:"syncpathname",level:3},{value:"<code>getStoreInfo</code>",id:"getstoreinfo",level:3},{value:"<code>getIsMobileDevice</code>",id:"getismobiledevice",level:3},{value:"<code>goTo</code>",id:"goto",level:3},{value:"<code>goToOldAdmin</code>",id:"gotooldadmin",level:3},{value:"<code>copyToClipboard</code>",id:"copytoclipboard",level:3},{value:"<code>navigateHeader</code>",id:"navigateheader",level:3},{value:"<code>navigateHeaderRemove</code>",id:"navigateheaderremove",level:3},{value:"Next steps",id:"next-steps",level:2}],u={toc:s},k="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(k,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"nexo"},"Nexo"),(0,l.kt)("p",null,"Nexo provides resources to facilitate communication between an external application and the Nuvemshop administrator. This interaction between the admin and the app is established through messages, following the observer pattern, allowing for event subscription and unsubscription."),(0,l.kt)("p",null,'These messages, called "Actions," are carefully defined and associated with "Helpers." These Helpers enable the use of Actions as promises, providing an effective and reliable approach to exchange information and synchronize operations between the involved parties.'),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("h3",{id:"npm"},"npm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install @tiendanube/nexo\n")),(0,l.kt)("h3",{id:"yarn"},"yarn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn add @tiendanube/nexo\n")),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("h3",{id:"create-a-nexo-instance"},"Create a Nexo instance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Config"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clientId"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," required"),(0,l.kt)("td",{parentName:"tr",align:null},"This value is provided by Nuvemshop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"log"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")," default ",(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:null},"Allows to show the message transfers between the App and the Admin")))),(0,l.kt)("br",null),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import nexo from "@tiendanube/nexo";\n\nconst instance = nexo.create({\n  clientId: "123",\n  log: true,\n});\n\nexport default instance;\n')),(0,l.kt)("h3",{id:"check-if-the-app-is-connected"},"Check if the app is connected"),(0,l.kt)("p",null,"Through the ",(0,l.kt)("inlineCode",{parentName:"p"},"connect")," util you can check if the Admin allows you to exchange messages and at the same time with ",(0,l.kt)("inlineCode",{parentName:"p"},"iAmReady")," notify that your application is ready to show."),(0,l.kt)("p",null,"To react application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useEffect, useState } from "react";\nimport { connect, iAmReady } from "@tiendanube/nexo/helpers";\nimport nexo from "./nexoClient"; // Nexo instance\n\nfunction App() {\n  const [isConnect, setIsConnect] = useState(false);\n\n  useEffect(() => {\n    connect(nexo).then(() => {\n      setIsConnect(true);\n      iAmReady(nexo);\n    });\n  }, []);\n\n  if (!isConnect) return <MyAppSkeleton />;\n\n  return <MyApp />;\n}\n')),(0,l.kt)("h3",{id:"enable-route-synchronization"},"Enable route synchronization"),(0,l.kt)("p",null,"This functionality will allow you to record the app navigation of your app in the browser URL via fragment (#myroute)"),(0,l.kt)("p",null,"This example is made with ",(0,l.kt)("a",{parentName:"p",href:"https://reactrouter.com/en/main"},"React Router"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useEffect } from "react";\nimport { useLocation, useHistory } from "react-router-dom";\nimport { syncPathname } from "@tiendanube/nexo/helpers";\n\nimport nexo from "./nexoClient";\nimport {\n  ACTION_NAVIGATE_SYNC,\n  NavigateSyncResponse,\n} from "@tiendanube/nexo/actions";\n\nconst NexoSyncRoute: React.FC<{ children: React.ReactNode }>({ children } ) => {\n  const { pathname } = useLocation();\n  const { push: goTo, replace: replaceTo } = useHistory();\n\n  //to send the current path of the app to the browser url\n  useEffect(() => {\n    syncPathname(nexo, pathname);\n  }, [pathname]);\n\n  //to navigate in the app if the browser url changes\n  useEffect(() => {\n    const unsuscribe = nexo.suscribe(\n      ACTION_NAVIGATE_SYNC,\n      ({ path, replace }: NavigateSyncResponse) => {\n        replace ? goTo(path) : replaceTo(path);\n      }\n    );\n    return unsuscribe;\n  }, [goTo, replaceTo]);\n\n  return children;\n}\n\nexport default NexoSyncRoute;\n')),(0,l.kt)("h3",{id:"get-session-token"},"Get Session Token"),(0,l.kt)("p",null,"Through the ",(0,l.kt)("inlineCode",{parentName:"p"},"getSessionToken")," util we can obtain a session token (JWT) that will be used to verify the authenticity of the request to your Backend. The JWT is signed with the Application's Client Secret"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'import axios from "axios";\nimport { getSessionToken } from "@tiendanube/nexo/helpers";\nimport nexo from "./nexoClient";\n\nconst axiosIntance = axios.create({\n  baseURL: "https://my-backend.com",\n});\n\naxiosIntance.interceptors.request.use(async (request) => {\n  const token = await getSessionToken(nexo);\n  const bearerToken = `Bearer ${token}`;\n  request.headers = { ...request.headers, Authorization: bearerToken };\n  return request;\n});\n\nexport default axiosIntance;\n')),(0,l.kt)("h2",{id:"actions"},"Actions"),(0,l.kt)("h3",{id:"action_navegate_exit"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVEGATE_EXIT")),(0,l.kt)("p",null,"To navigate to the route from which the application was accessed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/navigate/exit"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("h3",{id:"action_navigate_sync"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_SYNC")),(0,l.kt)("p",null,"To update his current location to propagate the internal navigation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/navigate/sync"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  pathname: string;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("h3",{id:"action_navigate_goto"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_GOTO")),(0,l.kt)("p",null,"To navigate to a specific route in Admin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/navigate/goTo"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  pathname: string;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  path: string;\n  replace?: boolean;\n}\n")),(0,l.kt)("h3",{id:"action_navigate_pathname"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_PATHNAME")),(0,l.kt)("p",null,"To current subPathname, which represents the path of the embedded app."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/navigate/pathname"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  pathname: string;\n}\n")),(0,l.kt)("h3",{id:"action_auth_session_token"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_AUTH_SESSION_TOKEN")),(0,l.kt)("p",null,"To requests the session token (JWT)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/auth/sessionToken"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  token: string;\n}\n")),(0,l.kt)("h3",{id:"action_store_info"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_STORE_INFO")),(0,l.kt)("p",null,"To request information about current Store logged."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/store/info"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  id: string;\n  name: string;\n  url: string;\n  country: string;\n  language: string;\n  currency: string;\n}\n")),(0,l.kt)("h3",{id:"action_navigate_goto_old_admin"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_GOTO_OLD_ADMIN")),(0,l.kt)("p",null,"To navigate to a specific route located in the old admin (admin/...)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/navigate/goToOldAdmin"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  pathToOldAdmin: string;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("h3",{id:"action_navigate_header"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_NAVIGATE_HEADER")),(0,l.kt)("p",null,"To show the navigation action in the Header Top."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/navigate/header"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n    goTo?: 'back' | string;\n    goToAdmin?: string;\n    text?: string;\n    remove?: boolean;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("h3",{id:"action_device"},(0,l.kt)("inlineCode",{parentName:"h3"},"ACTION_DEVICE")),(0,l.kt)("p",null,"To requests information about if mobile device."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Internal name"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"app/device"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Payload"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"none"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  isMobileDevice: boolean;\n}\n")),(0,l.kt)("h2",{id:"helpers"},"Helpers"),(0,l.kt)("h3",{id:"connect"},(0,l.kt)("inlineCode",{parentName:"h3"},"connect")),(0,l.kt)("p",null,"To wait if the application is ready to render."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ttl (number)"),": Maximum time waiting for the admin, default 3000;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise<void>")," Success or Fail;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"connect(nexo)\n  .then(() => {\n    //success\n  })\n  .catch(() => {\n    //fail\n  });\n")),(0,l.kt)("h3",{id:"iamready"},(0,l.kt)("inlineCode",{parentName:"h3"},"iAmReady")),(0,l.kt)("p",null,"To notify that the app is rendering."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"iAmReady(nexo);\n")),(0,l.kt)("h3",{id:"navigateexit"},(0,l.kt)("inlineCode",{parentName:"h3"},"navigateExit")),(0,l.kt)("p",null,"To navigate to the route from which the application was accessed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/navigate/exit"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"navigateExit(nexo);\n")),(0,l.kt)("h3",{id:"getsessiontoken"},(0,l.kt)("inlineCode",{parentName:"h3"},"getSessionToken")),(0,l.kt)("p",null,"To requests the session token (JWT)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/auth/sessionToken"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise<token: string>"),": Promise with session token;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const token = await getSessionToken(nexo);\n")),(0,l.kt)("h3",{id:"syncpathname"},(0,l.kt)("inlineCode",{parentName:"h3"},"syncPathname")),(0,l.kt)("p",null,"To update his current location to propagate the internal navigation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/navigate/sync"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise<token: string>"),": Promise with session token;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"syncPathname(nexo, pathname);\n")),(0,l.kt)("h3",{id:"getstoreinfo"},(0,l.kt)("inlineCode",{parentName:"h3"},"getStoreInfo")),(0,l.kt)("p",null,"To request information about current Store."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/store/info"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise<StoreInfoResponse>"),": Promise with store info;")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"StoreInfoResponse {\n  id: string;\n  name: string;\n  url: string;\n  country: string;\n  language: string;\n  currency: string;\n}\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const storeInfo = await getStoreInfo(nexo);\n")),(0,l.kt)("h3",{id:"getismobiledevice"},(0,l.kt)("inlineCode",{parentName:"h3"},"getIsMobileDevice")),(0,l.kt)("p",null,"To check if the app is being loaded from the Mobile Device."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/device"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),": True / False;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const isMobileDevice = await getIsMobileDevice(nexo);\n")),(0,l.kt)("h3",{id:"goto"},(0,l.kt)("inlineCode",{parentName:"h3"},"goTo")),(0,l.kt)("p",null,"To navigate to a specific route in Admin."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/navigate/goTo"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path (string)"),": Specific path to navigate;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'goTo(nexo, "/products");\n')),(0,l.kt)("h3",{id:"gotooldadmin"},(0,l.kt)("inlineCode",{parentName:"h3"},"goToOldAdmin")),(0,l.kt)("p",null,"To navigate to a specific route in Old Admin, only available Web mode (non mobile device)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/navigate/goToOldAdmin"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"path (string)"),": Specific path to navigate;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'goToOldAdmin(nexo, "/products");\n')),(0,l.kt)("h3",{id:"copytoclipboard"},(0,l.kt)("inlineCode",{parentName:"h3"},"copyToClipboard")),(0,l.kt)("p",null,"To copy the sent text to the device's clipboard."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/utils/copyToClipboard"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"text (string)"),": Text to copy;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise<boolean>"),": If copied successfully;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'copyToClipboard(nexo, "text to copy");\n')),(0,l.kt)("h3",{id:"navigateheader"},(0,l.kt)("inlineCode",{parentName:"h3"},"navigateHeader")),(0,l.kt)("p",null,"To show the navigation action in the Header Top, only available Web mode (non mobile device)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/utils/copyToClipboard"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"config (NavigateHeaderRequest)"),": Config to navegate header;")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},' NavigateHeaderRequest {\n   goTo: "back" | string;\n   text: string;\n };\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},'navigateHeader(nexo, { goTo: "/", text: "Product List" });\n//or\nnavigateHeader(nexo, { goTo: "back", text: "Back" });\n')),(0,l.kt)("h3",{id:"navigateheaderremove"},(0,l.kt)("inlineCode",{parentName:"h3"},"navigateHeaderRemove")),(0,l.kt)("p",null,"Removes the action of Header Top, available only in Web mode (non-mobile devices)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Action"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"app/utils/copyToClipboard"),";"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"nexo (NexoClient)"),": The Nexo Instance;")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),";")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"navigateHeaderRemove(nexo);\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"next-steps"},"Next steps"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Learn more about our ",(0,l.kt)("a",{parentName:"li",href:"./nuvemshop-api"},"API"))))}m.isMDXComponent=!0}}]);