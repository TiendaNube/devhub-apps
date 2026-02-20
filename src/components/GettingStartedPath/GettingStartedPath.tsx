import React, { useState } from "react";
import Link from "@docusaurus/Link";
import styles from "./gettingStartedPath.module.css";

type PathChoice = "new" | "migrate" | null;

const DOC_BASE = "/docs/applications/nube-sdk";

const PATTERN_MAP = [
  {
    legacy: "document.querySelector(...)",
    sdk: "nube.render(\"slot\", ...)",
    link: `${DOC_BASE}/slots/checkout-slots`,
    linkLabel: "Slots",
  },
  {
    legacy: "addEventListener(\"click\", ...)",
    sdk: "nube.on(\"cart:update\", ...)",
    link: `${DOC_BASE}/events/overview`,
    linkLabel: "Events",
  },
  {
    legacy: "window.location / popstate",
    sdk: "nube.on(\"checkout:ready\", ...) / nube.on(\"location:updated\", ...)",
    link: `${DOC_BASE}/events/overview`,
    linkLabel: "Events",
  },
  {
    legacy: "localStorage.setItem(...)",
    sdk: "browser.asyncLocalStorage.setItem(...)",
    link: `${DOC_BASE}/browser-apis`,
    linkLabel: "Browser APIs",
  },
  {
    legacy: "window.location.href = ...",
    sdk: "browser.navigate(...)",
    link: `${DOC_BASE}/browser-apis`,
    linkLabel: "Browser APIs",
  },
  {
    legacy: "e.preventDefault() on form submit",
    sdk: "config:set + cart:validate flow",
    link: `${DOC_BASE}/migration-guide#8-validating-the-cart--blocking-checkout`,
    linkLabel: "Migration Guide §8",
  },
  {
    legacy: "fetch(...) + DOM injection",
    sdk: "fetch(...) + nube.render(...)",
    link: `${DOC_BASE}/migration-guide#9-making-http-requests`,
    linkLabel: "Migration Guide §9",
  },
];

const CHECKLIST = [
  "Created a project with npm create nube-app@latest",
  "Main entry file exports App(nube: NubeSDK)",
  "All UI is rendered through nube.render() — no document.* or innerHTML",
  "All logic uses nube.on, nube.send, nube.getState",
  "No references to window, document, jQuery, React, or other DOM libraries",
  "localStorage replaced with asyncLocalStorage / asyncSessionStorage",
  "Styling uses styled(), StyleSheet.create(), or theme tokens — no <style> injection",
  "Tested in dev mode (npm run dev) with the script pointing to localhost:8080/main.min.js",
  '"Uses NubeSDK" flag enabled in the Partner Portal',
  "App works on Patagonia theme (storefront) or any theme (checkout)",
];

interface GettingStartedPathProps {
  children?: React.ReactNode;
}

export default function GettingStartedPath({ children }: GettingStartedPathProps) {
  const [path, setPath] = useState<PathChoice>(null);

  if (path === "new") {
    return (
      <div className={styles.container}>
        <Link
          to="#"
          className={styles.backLink}
          onClick={(e) => {
            e.preventDefault();
            setPath(null);
          }}
        >
          ← Choose a different path
        </Link>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }

  if (path === "migrate") {
    return (
      <div className={styles.container}>
        <Link
          to="#"
          className={styles.backLink}
          onClick={(e) => {
            e.preventDefault();
            setPath(null);
          }}
        >
          ← Choose a different path
        </Link>
        <div className={styles.migrateContent}>
          <h2>I already have an app — I need to migrate</h2>
          <p className={styles.migrateIntro}>
            NubeSDK apps run inside a <strong>Web Worker</strong>, so there is no access to{" "}
            <code>document</code>, <code>window</code>, or any DOM API. UI is declared using JSX or
            the declarative API and rendered into predefined <strong>slots</strong>. Communication
            with the store happens through <strong>events</strong>, not DOM listeners.
            Storefront apps require the <strong>Patagonia theme</strong>. Checkout apps work on all themes.
          </p>

          <h3>Quick reference: legacy → NubeSDK</h3>
          <p className={styles.migrateIntro}>
            Find the legacy pattern your app uses and jump straight to the NubeSDK equivalent.
          </p>
          <div className={styles.tableWrapper}>
            <table className={styles.patternTable}>
              <thead>
                <tr>
                  <th>What you do today</th>
                  <th>NubeSDK equivalent</th>
                  <th>Docs</th>
                </tr>
              </thead>
              <tbody>
                {PATTERN_MAP.map(({ legacy, sdk, link, linkLabel }) => (
                  <tr key={legacy}>
                    <td><code>{legacy}</code></td>
                    <td><code>{sdk}</code></td>
                    <td><Link to={link}>{linkLabel}</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Migration steps</h3>
          <ol className={styles.migrationSteps}>
            <li>
              Scaffold a new project with{" "}
              <code>npm create nube-app@latest</code>{" "}
              (<Link to={`${DOC_BASE}/getting-started`}>Getting Started</Link>)
            </li>
            <li>
              Move your logic into{" "}
              <code>{"export function App(nube: NubeSDK) { ... }"}</code>
            </li>
            <li>
              Replace all DOM manipulation with <code>nube.render()</code> and{" "}
              <Link to={`${DOC_BASE}/components/overview`}>NubeSDK components</Link>
            </li>
            <li>
              Replace DOM event listeners with <code>nube.on()</code> /{" "}
              <code>nube.send()</code> —{" "}
              <Link to={`${DOC_BASE}/events/overview`}>Events reference</Link>
            </li>
            <li>
              Replace <code>localStorage</code> with{" "}
              <code>asyncLocalStorage</code> —{" "}
              <Link to={`${DOC_BASE}/browser-apis`}>Browser APIs</Link>
            </li>
            <li>
              Enable <strong>"Uses NubeSDK"</strong> in the Partner Portal
            </li>
            <li>
              Run through the checklist below
            </li>
          </ol>

          <h3>Migration checklist</h3>
          <ul className={styles.checklist}>
            {CHECKLIST.map((item) => (
              <li key={item}>
                <label className={styles.checkItem}>
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              </li>
            ))}
          </ul>

          <div className={styles.ctaRow}>
            <Link to={`${DOC_BASE}/migration-guide`} className={styles.cta}>
              Full Migration Guide (15 before/after examples) →
            </Link>
            <Link
              to="https://gemini.google.com/gem/2cdd8c07de85?usp=sharing"
              className={styles.ctaSecondary}
            >
              NubeSDK Assistant — paste your code for conversion
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.choiceSection}>
      <p className={styles.choiceIntro}>
        Choose how you want to get started with NubeSDK:
      </p>
      <div className={styles.cards}>
        <button
          type="button"
          className={styles.card}
          onClick={() => setPath("new")}
        >
          <span className={styles.cardTitle}>I'm building a new app</span>
          <span className={styles.cardDesc}>
            Create a new NubeSDK app from scratch. We'll guide you through prerequisites, project setup, and publishing your script.
          </span>
          <span className={styles.cardAction}>Start from scratch →</span>
        </button>
        <button
          type="button"
          className={styles.card}
          onClick={() => setPath("migrate")}
        >
          <span className={styles.cardTitle}>I already have an app — I need to migrate</span>
          <span className={styles.cardDesc}>
            You have an existing script or app and want to move it to NubeSDK. See what changes, find the equivalent for each legacy pattern, and follow the migration guide.
          </span>
          <span className={styles.cardAction}>Go to migration guide →</span>
        </button>
      </div>
    </div>
  );
}
