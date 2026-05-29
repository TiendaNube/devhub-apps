import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./migrationFloating.module.css";

const SDK_TAG_FORM_BY_LOCALE: Record<string, string> = {
  pt: "https://docs.google.com/forms/d/e/1FAIpQLSesdE1j1psOl0eSZcqFA4Y8FtyHoKzRtbHXgeFNjETqpD-XMA/viewform",
  es: "https://docs.google.com/forms/d/e/1FAIpQLScaGFRHmLgGf-PnoXjPz8MdOcrtAM7PLmP6-LjmIXdEs-Uphw/viewform",
  en: "https://docs.google.com/forms/d/e/1FAIpQLSesdE1j1psOl0eSZcqFA4Y8FtyHoKzRtbHXgeFNjETqpD-XMA/viewform",
};

const COPY = {
  pt: {
    fabTitle: "Migração para o NubeSDK",
    header: "Migração para o NubeSDK",
    whyTitle: "Por que migrar",
    whyDesc: "Prazo de 30/08/2026 e o que muda",
    guideTitle: "Guia de migração",
    guideDesc: "Passo a passo do modelo legado para o SDK",
    tagTitle: "Solicitar tag de SDK",
    tagDesc: "Habilite o SDK na sua loja de teste",
  },
  es: {
    fabTitle: "Migración al NubeSDK",
    header: "Migración al NubeSDK",
    whyTitle: "Por qué migrar",
    whyDesc: "Plazo del 30/08/2026 y qué cambia",
    guideTitle: "Guía de migración",
    guideDesc: "Paso a paso del modelo legado al SDK",
    tagTitle: "Solicitar tag de SDK",
    tagDesc: "Habilita el SDK en tu tienda de prueba",
  },
  en: {
    fabTitle: "Migrate to NubeSDK",
    header: "Migrate to NubeSDK",
    whyTitle: "Why migrate",
    whyDesc: "Aug 30, 2026 deadline and what changes",
    guideTitle: "Migration Guide",
    guideDesc: "Step-by-step from legacy to NubeSDK",
    tagTitle: "Request SDK tag",
    tagDesc: "Enable the SDK on your test store",
  },
} as const;

type LocaleKey = keyof typeof COPY;

const PaperPlaneIcon: React.FC = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const CalendarIcon: React.FC = () => (
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
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const BookIcon: React.FC = () => (
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
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const TagIcon: React.FC = () => (
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
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const MigrationFloating: React.FC = () => {
  const { pathname } = useLocation();
  const { i18n } = useDocusaurusContext();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const overviewUrl = useBaseUrl("/docs/applications/overview");
  const migrationGuideUrl = useBaseUrl(
    "/docs/applications/nube-sdk/migration-guide"
  );

  const isApplicationsPage = pathname.includes("/applications");
  const isNubeSdkPage = pathname.includes("/applications/nube-sdk");
  const shouldShow = isApplicationsPage && !isNubeSdkPage;

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

  if (!shouldShow) return null;

  const locale = (i18n?.currentLocale as LocaleKey) ?? "pt";
  const t = COPY[locale] ?? COPY.pt;
  const tagFormUrl = SDK_TAG_FORM_BY_LOCALE[locale] ?? SDK_TAG_FORM_BY_LOCALE.pt;

  const menuItems = [
    {
      href: overviewUrl,
      external: false,
      icon: <CalendarIcon />,
      title: t.whyTitle,
      desc: t.whyDesc,
    },
    {
      href: migrationGuideUrl,
      external: false,
      icon: <BookIcon />,
      title: t.guideTitle,
      desc: t.guideDesc,
    },
    {
      href: tagFormUrl,
      external: true,
      icon: <TagIcon />,
      title: t.tagTitle,
      desc: t.tagDesc,
    },
  ];

  return (
    <div ref={containerRef} className={styles.container}>
      {isOpen && (
        <div className={styles.menu} role="menu">
          <div className={styles.menuHeader}>{t.header}</div>
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
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
        aria-label={t.fabTitle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        title={t.fabTitle}
      >
        <span className={styles.fabLabel}>{t.fabTitle}</span>
        <span className={styles.fabIcon}>
          {isOpen ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <PaperPlaneIcon />
          )}
        </span>
      </button>
    </div>
  );
};

export default MigrationFloating;
