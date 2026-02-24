import React, { FC } from "react";
import Translate from "@docusaurus/Translate";
import {
  CogIcon,
  DesktopIcon,
  TiendanubeIcon,
  IconProps,
} from "@nimbus-ds/icons";

export const pillars = [
  {
    icon: CogIcon as FC<IconProps>,
    title: (
      <Translate id="home.threePillars.card.1.title">Backend API</Translate>
    ),
    text: (
      <Translate id="home.threePillars.card.1.description">
        Conecte-se aos dados da loja. Gerencie produtos, pedidos, clientes e
        muito mais através da nossa API REST.
      </Translate>
    ),
    linkText: (
      <Translate id="home.threePillars.card.1.linkText">
        Explorar a API
      </Translate>
    ),
    link: "/docs/developer-tools/nuvemshop-api",
  },
  {
    icon: DesktopIcon as FC<IconProps>,
    title: (
      <Translate id="home.threePillars.card.2.title">App Admin</Translate>
    ),
    text: (
      <Translate id="home.threePillars.card.2.description">
        Construa a interface de configuração onde o lojista gerencia seu
        aplicativo. Integrado ao painel ou externo.
      </Translate>
    ),
    linkText: (
      <Translate id="home.threePillars.card.2.linkText">
        Construir seu admin
      </Translate>
    ),
    link: "/docs/applications/native",
  },
  {
    icon: TiendanubeIcon as FC<IconProps>,
    title: (
      <Translate id="home.threePillars.card.3.title">
        Storefront & Checkout
      </Translate>
    ),
    text: (
      <Translate id="home.threePillars.card.3.description">
        Transforme a experiência de compra. Adicione componentes, personalize o
        checkout e aprimore a vitrine com NubeSDK.
      </Translate>
    ),
    linkText: (
      <Translate id="home.threePillars.card.3.linkText">
        Começar com NubeSDK
      </Translate>
    ),
    link: "/docs/applications/nube-sdk/overview",
  },
];
