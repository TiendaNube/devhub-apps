import { FC } from "react";
import { IconProps } from "@nimbus-ds/icons";

export interface ITemplateCard {
  title: string;
  description: string;
  link: string;
  icon: FC<IconProps>;
}
