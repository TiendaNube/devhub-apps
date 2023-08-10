import { IconProps } from "@nimbus-ds/icons";

export interface IPage {
  title: string;
  name: string;
  slug: string;
  icon: React.FC<IconProps>;
}
