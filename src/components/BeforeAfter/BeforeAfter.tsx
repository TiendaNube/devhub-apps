import React from "react";
import CodeBlock from "@theme/CodeBlock";
import styles from "./beforeAfter.module.css";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeLanguage?: string;
  afterLanguage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

function BeforeAfter({
  before,
  after,
  beforeLanguage = "javascript",
  afterLanguage = "typescript",
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
}: BeforeAfterProps) {
  return (
    <div className={styles.grid}>
      <div className={styles.column}>
        <span className={`${styles.badge} ${styles.badgeBefore}`}>
          {beforeLabel}
        </span>
        <div className={styles.codeWrapper}>
          <CodeBlock language={beforeLanguage}>{before.trim()}</CodeBlock>
        </div>
      </div>
      <div className={styles.column}>
        <span className={`${styles.badge} ${styles.badgeAfter}`}>
          {afterLabel}
        </span>
        <div className={styles.codeWrapper}>
          <CodeBlock language={afterLanguage}>{after.trim()}</CodeBlock>
        </div>
      </div>
    </div>
  );
}

export default BeforeAfter;
