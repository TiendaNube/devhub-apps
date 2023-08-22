import { ITemplateType } from "./appTemplates.types";
import ExpressLogo from "./expressjs-logo.svg";

export const appTemplates = [
  {
    icon: ExpressLogo,
    title: "Express native app template",
    description:
      "Um modelo de aplicativo nativo que usa Express, Node.js e React.",
    link: "https://github.com/TiendaNube/tiendanube-app-native-template-node",
    type: "native" as ITemplateType,
  },
  {
    icon: ExpressLogo,
    title: "Express standalone app template",
    description:
      "Um modelo de aplicativo standalone que usa Express, Node.js e React.",
    link: "https://github.com/TiendaNube/tiendanube-app-standalone-template-node",
    type: "standalone" as ITemplateType,
  },
];
