import React from "react";
import { ExternalLinkIcon } from "@nimbus-ds/icons";
import A from "@theme-original/MDXComponents/A";

import styles from "./a.module.css";

interface IAWrapper {
  children: React.ReactNode;
  href: string;
}

const AWrapper: React.FC<IAWrapper> = (props) => {
  const { children, href } = props;
  const isExternalLink = href.includes("https://");
  return (
    <A {...props} href={href} className={styles.devhub__link}>
      {children} {isExternalLink && <ExternalLinkIcon />}
    </A>
  );
};

export default AWrapper;
