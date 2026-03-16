import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "@docusaurus/router";
import { FEEDBACK_LINKS } from "./constants";
import styles from "./floatingFeedback.module.css";

const BugIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
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
);

const LightbulbIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
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
);

const ChatIcon: React.FC = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const FloatingFeedback: React.FC = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isNubeSdkPage = pathname.includes("/nube-sdk");

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        close();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, close]);

  if (!isNubeSdkPage) return null;

  const menuItems = [
    {
      href: FEEDBACK_LINKS.bug,
      icon: <BugIcon />,
      title: "Report a bug",
      desc: "Something not working as expected?",
    },
    {
      href: FEEDBACK_LINKS.feature,
      icon: <LightbulbIcon />,
      title: "Request a feature",
      desc: "Have an idea to improve NubeSDK?",
    },
    {
      href: FEEDBACK_LINKS.discussion,
      icon: <ChatIcon />,
      title: "Ask a question",
      desc: "Get help from the community",
    },
  ];

  return (
    <div ref={containerRef} className={styles.container}>
      {isOpen && (
        <div className={styles.menu} role="menu">
          <div className={styles.menuHeader}>Help us improve NubeSDK</div>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.menuItem}
              role="menuitem"
              onClick={close}
            >
              <span className={styles.menuIcon}>{item.icon}</span>
              <div>
                <div className={styles.menuItemTitle}>{item.title}</div>
                <div className={styles.menuItemDesc}>{item.desc}</div>
              </div>
            </a>
          ))}
        </div>
      )}
      <button
        className={`${styles.fab} ${isOpen ? styles.fabOpen : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Feedback options"
        aria-expanded={isOpen}
        aria-haspopup="true"
        title="Help us improve NubeSDK"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.fabIcon}
        >
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
};

export default FloatingFeedback;
