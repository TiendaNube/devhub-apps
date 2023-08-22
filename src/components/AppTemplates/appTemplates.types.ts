import { ComponentType, SVGProps } from "react";

export interface ITemplateCard {
  title: string;
  description: string;
  link: string;
  type: ITemplateType;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export enum ITemplateType {
  NATIVE = "native",
  STANDALONE = "standalone",
}
