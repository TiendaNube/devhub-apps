import React, { FC } from "react";
import Translate from "@docusaurus/Translate";
import { ITemplateType } from "./appTemplates.types";
import ExpressLogo from "./expressjs-logo.svg";

export const appTemplates = [
  {
    icon: ExpressLogo,
    title: (
      <Translate id="docs.appTemplates.card.1.title">
        Modelo de aplicativo integrado Express
      </Translate>
    ),
    description: (
      <Translate id="docs.appTemplates.card.1.description">
        Um modelo de aplicativo incorporado ao administrador que usa Express,
        Node.js e React.
      </Translate>
    ),
    link: "https://github.com/TiendaNube/tiendanube-app-native-template-node",
    type: "integrated" as ITemplateType,
  },
  {
    icon: ExpressLogo,
    title: (
      <Translate id="docs.appTemplates.card.2.title">
        Modelo de aplicativo externo Express
      </Translate>
    ),
    description: (
      <Translate id="docs.appTemplates.card.2.description">
        Um modelo de aplicativo externo que usa Express, Node.js e React.
      </Translate>
    ),
    link: "https://github.com/TiendaNube/tiendanube-app-standalone-template-node",
    type: "external" as ITemplateType,
  },
];
