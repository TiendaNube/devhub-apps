import React from "react";
import Translate from "@docusaurus/Translate";

export const paths = [
  {
    useCase: (
      <Translate id="home.guidedPaths.card.1.useCase">
        Integração ERP / gestão
      </Translate>
    ),
    description: (
      <Translate id="home.guidedPaths.card.1.description">
        Sincronize produtos, pedidos e estoque entre a loja e seu sistema
      </Translate>
    ),
    pillars: "Backend API + App Admin",
    link: "/docs/developer-tools/nuvemshop-api",
  },
  {
    useCase: (
      <Translate id="home.guidedPaths.card.2.useCase">
        Widget na vitrine ou checkout
      </Translate>
    ),
    description: (
      <Translate id="home.guidedPaths.card.2.description">
        Adicione banners, informações extras ou personalizações visuais na loja
      </Translate>
    ),
    pillars: "Storefront & Checkout (NubeSDK)",
    link: "/docs/applications/nube-sdk/overview",
  },
  {
    useCase: (
      <Translate id="home.guidedPaths.card.3.useCase">
        Pagamentos / envios / logística
      </Translate>
    ),
    description: (
      <Translate id="home.guidedPaths.card.3.description">
        Integre métodos de pagamento ou opções de envio à loja
      </Translate>
    ),
    pillars: "Backend API + Storefront & Checkout",
    link: "/docs/developer-tools/nuvemshop-api",
  },
  {
    useCase: (
      <Translate id="home.guidedPaths.card.4.useCase">
        Marketing / analytics
      </Translate>
    ),
    description: (
      <Translate id="home.guidedPaths.card.4.description">
        Conecte ferramentas de marketing, analytics ou CRM à loja
      </Translate>
    ),
    pillars: "Backend API + App Admin",
    link: "/docs/applications/native",
  },
];
