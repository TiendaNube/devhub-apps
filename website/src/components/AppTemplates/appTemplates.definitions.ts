import { ITemplateType } from "./appTemplates.types";
import ExpressLogo from "./expressjs-logo.svg";

export const appTemplates = [
  {
    icon: ExpressLogo,
    title: "Express app template",
    description:
      "Um modelo de aplicativo nativo que usa Express, Node.js e React.",
    link: "https://github.com/TiendaNube/app-templates-hub",
    type: "native" as ITemplateType,
  },
  {
    icon: ExpressLogo,
    title: "Express app template",
    description:
      "Um modelo de aplicativo standalone que usa Express, Node.js e React.",
    link: "https://github.com/TiendaNube/app-templates-hub",
    type: "standalone" as ITemplateType,
  },
];
