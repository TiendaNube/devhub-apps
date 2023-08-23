import { FC } from "react";
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
    title: "API Nuvemshop",
    text: "Desenvolva aplicativos, integrando seus serviços com nossa API Nuvemshop.",
    linkText: "Conheça nossa API",
    link: "/docs/developer-tools/nuvemshop-api",
  },
  {
    icon: CodeIcon as FC<IconProps>,
    title: "Templates de aplicativo",
    text: "Agilize o desenvolvimento de aplicativos partindo de um template de código.",
    linkText: "Conheça os templates de aplicativo",
    link: "/docs/developer-tools/templates",
  },
  {
    icon: ArrowsHorizontalIcon as FC<IconProps>,
    title: "Nexo",
    text: "Conecte-se com o administrador de lojas de forma rápida e simples.",
    linkText: "Conheça o Nexo",
    link: "/docs/developer-tools/nexo",
  },
  {
    icon: TiendanubeIcon as FC<IconProps>,
    title: "Nimbus design system",
    text: "Crie interfaces e experiências usando nosso design system e agilize o desenvolvimento do seu aplicativo.",
    linkText: "Conheça o Nimbus",
    link: "/docs/developer-tools/nimbus",
  },
];
