import React, { FC } from "react";
import Translate from "@docusaurus/Translate";
import { AppsIcon, AppsListIcon, IconProps } from "@nimbus-ds/icons";

export const appTypes = [
  {
    icon: AppsIcon as FC<IconProps>,
    title: (
      <Translate id="docs.appTypes.card.1.title">
        Aplicativos Incorporados
      </Translate>
    ),
    description: (
      <Translate id="docs.appTypes.card.1.description">
        Os aplicativos incorporados ao adminstrador, por outro lado, oferecem
        uma integração mais profunda com a plataforma Nuvemshop. Eles são
        desenvolvidos para se integrar diretamente ao painel de administração
        dos lojistas, proporcionando uma experiência contínua e fluida. Ao
        utilizar ferramentas como o nosso design system Nimbus, garantimos que a
        experiência visual e de usabilidade permaneça consistente, mesmo quando
        o lojista está interagindo com um aplicativo de parceiro externo. Isso
        permite que o lojista desfrute de recursos adicionais sem deixar o
        ambiente familiar do painel de administração da Nuvemshop.
      </Translate>
    ),
    link: "/docs/applications/native",
  },
  {
    icon: AppsListIcon as FC<IconProps>,
    title: (
      <Translate id="docs.appTypes.card.2.title">
        Aplicativos Externos
      </Translate>
    ),
    description: (
      <Translate id="docs.appTypes.card.2.description">
        Os aplicativos externos são soluções independentes, desenvolvidas
        externamente à Nuvemshop. Esses aplicativos operam de forma autônoma e
        podem abranger uma ampla gama de funcionalidades, desde marketing até
        gerenciamento de estoque. Eles proporcionam uma experiência única e
        podem ser uma ótima maneira de adicionar recursos especializados às
        lojas dos lojista.
      </Translate>
    ),
    link: "/docs/applications/standalone",
  },
];
