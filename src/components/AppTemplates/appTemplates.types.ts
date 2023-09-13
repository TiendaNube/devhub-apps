import { ComponentType, SVGProps, JSX } from "react";

export interface ITemplateCard {
  title: JSX.Element;
  description: JSX.Element;
  link: string;
  type: ITemplateType;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export enum ITemplateType {
  INTEGRATED = "integrated",
  EXTERNAL = "external",
}
