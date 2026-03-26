import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { translate } from "@docusaurus/Translate";
import IconHome from "@theme/Icon/Home";
import styles from "./styles.module.css";

export default function HomeBreadcrumbItem(): React.JSX.Element {
  const homeHref = useBaseUrl("/");
  return (
    <li
      className="breadcrumbs__item"
      itemScope
      itemProp="itemListElement"
      itemType="https://schema.org/ListItem"
    >
      <Link
        aria-label={translate({
          id: "theme.docs.breadcrumbs.home",
          message: "Home page",
          description: "The ARIA label for the home page in the breadcrumbs",
        })}
        className="breadcrumbs__link"
        href={homeHref}
        itemProp="item"
      >
        <span itemProp="name">
          <IconHome className={styles.breadcrumbHomeIcon} />
        </span>
      </Link>
      <meta itemProp="position" content="1" />
    </li>
  );
}
