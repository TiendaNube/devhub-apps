import { FC } from "react";
import { HomeIcon, PictureIcon, TagIcon, IconProps } from "@nimbus-ds/icons";
import { IPage } from "./menu.types";

export const routes: IPage[] = [
  {
    title: "home",
    name: "home",
    slug: "/",
    icon: HomeIcon as FC<IconProps>,
  },
  {
    title: "examples-gallery",
    name: "examples-gallery",
    slug: "/examples",
    icon: PictureIcon as FC<IconProps>,
  },
  {
    title: "store-products",
    name: "store-products",
    slug: "/products",
    icon: TagIcon as FC<IconProps>,
  },
];

export const handleActive = (href: string, pathname: string) =>
  href === pathname;

export const isExample = (pathname: string): boolean => {
  return pathname.startsWith("/examples");
};
