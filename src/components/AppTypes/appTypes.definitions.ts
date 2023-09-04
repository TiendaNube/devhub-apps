import { FC } from "react";
import { AppsIcon, AppsListIcon, IconProps } from "@nimbus-ds/icons";

export const appTypes = [
  {
    icon: AppsIcon as FC<IconProps>,
    title: "Aplicativos incorporados ao administrador",
    description:
      "Os aplicativos incorporados ao adminstrador, por outro lado, oferecem uma integração mais profunda com a plataforma Nuvemshop. Eles são desenvolvidos para se integrar diretamente ao painel de administração dos lojistas, proporcionando uma experiência contínua e fluida. Ao utilizar ferramentas como o nosso design system Nimbus, garantimos que a experiência visual e de usabilidade permaneça consistente, mesmo quando o lojista está interagindo com um aplicativo de parceiro externo. Isso permite que o lojista desfrute de recursos adicionais sem deixar o ambiente familiar do painel de administração da Nuvemshop.",
    link: "/docs/applications/native",
  },
  {
    icon: AppsListIcon as FC<IconProps>,
    title: "Aplicativos Externos",
    description:
      "Os aplicativos externos são soluções independentes, desenvolvidas externamente à Nuvemshop. Esses aplicativos operam de forma autônoma e podem abranger uma ampla gama de funcionalidades, desde marketing até gerenciamento de estoque. Eles proporcionam uma experiência única e podem ser uma ótima maneira de adicionar recursos especializados às lojas dos lojista.",
    link: "/docs/applications/standalone",
  },
];
