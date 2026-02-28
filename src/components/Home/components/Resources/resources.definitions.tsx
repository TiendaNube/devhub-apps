import React from "react";
import Translate from "@docusaurus/Translate";

export const resources = [
  {
    title: (
      <Translate id="home.resources.card.1.title">
        Templates de aplicativo
      </Translate>
    ),
    description: (
      <Translate id="home.resources.card.1.description">
        Comece a partir de um template e acelere o desenvolvimento
      </Translate>
    ),
    linkText: (
      <Translate id="home.resources.card.1.linkText">Ver templates</Translate>
    ),
    link: "/docs/developer-tools/templates",
    isExternal: false,
  },
  {
    title: (
      <Translate id="home.resources.card.2.title">
        Programa de Partners
      </Translate>
    ),
    description: (
      <Translate id="home.resources.card.2.description">
        Junte-se a +600 parceiros e expanda seu negócio
      </Translate>
    ),
    linkText: (
      <Translate id="home.resources.card.2.linkText">
        Conhecer o programa
      </Translate>
    ),
    link: "https://www.tiendanube.com/socios/tecnologicos",
    isExternal: true,
  },
  {
    title: (
      <Translate id="home.resources.card.3.title">Homologação</Translate>
    ),
    description: (
      <Translate id="home.resources.card.3.description">
        Pronto para publicar? Conheça o processo de aprovação
      </Translate>
    ),
    linkText: (
      <Translate id="home.resources.card.3.linkText">Ver processo</Translate>
    ),
    link: "/docs/homologation/overview",
    isExternal: false,
  },
  {
    title: (
      <Translate id="home.resources.card.4.title">
        Nimbus Design System
      </Translate>
    ),
    description: (
      <Translate id="home.resources.card.4.description">
        Componentes e padrões para construir interfaces consistentes
      </Translate>
    ),
    linkText: (
      <Translate id="home.resources.card.4.linkText">Explorar Nimbus</Translate>
    ),
    link: "/docs/developer-tools/nimbus",
    isExternal: false,
  },
];
