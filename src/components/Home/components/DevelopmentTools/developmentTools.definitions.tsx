import React, { FC } from "react";
import Translate from "@docusaurus/Translate";

import {
  CogIcon,
  CodeIcon,
  ArrowsHorizontalIcon,
  TiendanubeIcon,
  IconProps,
} from "@nimbus-ds/icons";

export const developerTools = [
  {
    icon: CogIcon as FC<IconProps>,
    title: (
      <Translate id="home.developerTools.card.1.title">API Nuvemshop</Translate>
    ),
    text: (
      <Translate id="home.developerTools.card.1.description">
        Desenvolva aplicativos, integrando seus serviços com nossa API
        Nuvemshop.
      </Translate>
    ),
    linkText: (
      <Translate id="home.developerTools.card.1.linkText">
        Conheça nossa API
      </Translate>
    ),
    link: "/docs/developer-tools/nuvemshop-api",
  },
  {
    icon: CodeIcon as FC<IconProps>,
    title: (
      <Translate id="home.developerTools.card.2.title">
        Templates de aplicativo
      </Translate>
    ),
    text: (
      <Translate id="home.developerTools.card.2.description">
        Agilize o desenvolvimento de aplicativos partindo de um template de
        código.
      </Translate>
    ),
    linkText: (
      <Translate id="home.developerTools.card.2.linkText">
        Conheça os templates de aplicativo
      </Translate>
    ),
    link: "/docs/developer-tools/templates",
  },
  {
    icon: ArrowsHorizontalIcon as FC<IconProps>,
    title: <Translate id="home.developerTools.card.3.title">Nexo</Translate>,
    text: (
      <Translate id="home.developerTools.card.3.description">
        Conecte-se com o administrador de lojas de forma rápida e simples.
      </Translate>
    ),
    linkText: (
      <Translate id="home.developerTools.card.3.linkText">
        Conheça o Nexo
      </Translate>
    ),
    link: "/docs/developer-tools/nexo",
  },
  {
    icon: TiendanubeIcon as FC<IconProps>,
    title: (
      <Translate id="home.developerTools.card.4.title">
        Nimbus design system
      </Translate>
    ),
    text: (
      <Translate id="home.developerTools.card.4.description">
        Crie interfaces e experiências usando nosso design system e agilize o
        desenvolvimento do seu aplicativo.
      </Translate>
    ),
    linkText: (
      <Translate id="home.developerTools.card.4.linkText">
        Conheça o Nimbus
      </Translate>
    ),
    link: "/docs/developer-tools/nimbus",
  },
];
