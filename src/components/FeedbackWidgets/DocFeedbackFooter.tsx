import React from "react";
import { FEEDBACK_LINKS } from "./constants";
import styles from "./docFeedbackFooter.module.css";

const DocFeedbackFooter: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.text}>
        <h4 className={styles.title}>Help us improve NubeSDK</h4>
        <p className={styles.subtitle}>
          Found an issue or have a suggestion? Let us know on GitHub.
        </p>
      </div>
      <div className={styles.links}>
        <a
          href={FEEDBACK_LINKS.bug}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          Report a bug
        </a>
        <a
          href={FEEDBACK_LINKS.feature}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18h6M10 22h4" />
            <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
          </svg>
          Request a feature
        </a>
        <a
          href={FEEDBACK_LINKS.discussion}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.link} ${styles.linkOutline}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          Ask a question
        </a>
      </div>
    </div>
  </div>
);

export default DocFeedbackFooter;
