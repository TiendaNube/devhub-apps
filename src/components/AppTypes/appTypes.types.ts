import { FC, JSX } from "react";
import { IconProps } from "@nimbus-ds/icons";

export interface ITemplateCard {
  title: JSX.Element;
  description: JSX.Element;
  link: string;
  icon: FC<IconProps>;
}
