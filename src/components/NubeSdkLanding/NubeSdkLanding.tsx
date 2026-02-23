import React from "react";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import {
  FingerprintIcon,
  ArrowsHorizontalIcon,
  CodeIcon,
  ColorPaletteIcon,
  RocketIcon,
  ShoppingCartIcon,
  TagIcon,
  CreditCardIcon,
  TruckIcon,
  NotificationIcon,
  CheckCircleIcon,
  SlidersIcon,
  ToolsIcon,
  StoreIcon,
  BrowserIcon,
  GlobeIcon,
} from "@nimbus-ds/icons";
import styles from "./nubeSdkLanding.module.css";

const NubeSdkLanding: React.FC = () => (
  <div>
    {/* Hero */}
    <section className={styles.hero}>
      <h1 className={styles.heroTitle}>NubeSDK</h1>
      <p className={styles.heroSubtitle}>
        Build powerful e-commerce apps for the Nuvemshop ecosystem — secure by
        design, fast to develop, and ready to scale.
      </p>
      <div className={styles.heroActions}>
        <Link to="./getting-started" className={styles.heroBtnPrimary}>
          <RocketIcon size="small" />
          Get Started
        </Link>
        <Link to="./examples/overview" className={styles.heroBtnSecondary}>
          <CodeIcon size="small" />
          See Examples
        </Link>
      </div>
    </section>

    {/* Stats */}
    <div className={styles.statRow}>
      <div className={styles.statBadge}>
        <span className={styles.statNumber}>24+</span>
        <span className={styles.statLabel}>Commerce Events</span>
      </div>
      <div className={styles.statBadge}>
        <span className={styles.statNumber}>40+</span>
        <span className={styles.statLabel}>UI Slots</span>
      </div>
      <div className={styles.statBadge}>
        <span className={styles.statNumber}>20+</span>
        <span className={styles.statLabel}>Components</span>
      </div>
      <div className={styles.statBadge}>
        <span className={styles.statNumber}>100%</span>
        <span className={styles.statLabel}>TypeScript</span>
      </div>
    </div>

    {/* Why NubeSDK */}
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Why NubeSDK</p>
      <h2 className={styles.sectionTitle}>
        Built for security, speed, and developer happiness
      </h2>
      <p className={styles.sectionSubtitle}>
        Everything you need to build reliable storefront and checkout apps.
      </p>

      <div className={styles.pillarsGrid}>
        <div className={styles.pillarCard}>
          <div
            className={`${styles.pillarIconWrap} ${styles.pillarIconBlue}`}
          >
            <FingerprintIcon size="medium" />
          </div>
          <h3 className={styles.pillarTitle}>Secure & Isolated</h3>
          <p className={styles.pillarText}>
            Every app runs in its own Web Worker sandbox — no DOM access, no
            interference with other apps, no risk to store stability. Merchants
            install with confidence.
          </p>
        </div>

        <div className={styles.pillarCard}>
          <div
            className={`${styles.pillarIconWrap} ${styles.pillarIconGreen}`}
          >
            <ArrowsHorizontalIcon size="medium" />
          </div>
          <h3 className={styles.pillarTitle}>Event-Driven Architecture</h3>
          <p className={styles.pillarText}>
            No fragile DOM manipulation. Subscribe to meaningful commerce events
            like <code>cart:update</code> and <code>shipping:select</code> —
            your apps stay resilient across theme changes.
          </p>
        </div>

        <div className={styles.pillarCard}>
          <div
            className={`${styles.pillarIconWrap} ${styles.pillarIconPurple}`}
          >
            <CodeIcon size="medium" />
          </div>
          <h3 className={styles.pillarTitle}>TypeScript + JSX</h3>
          <p className={styles.pillarText}>
            Fully typed events, state, and components. Write UI with familiar
            JSX syntax or a lightweight declarative API. Autocompletion and
            compile-time safety included.
          </p>
        </div>
      </div>

      <div className={styles.highlightsGrid}>
        <div className={styles.highlightCard}>
          <div
            className={`${styles.highlightIconWrap} ${styles.highlightIconOrange}`}
          >
            <ColorPaletteIcon size="medium" />
          </div>
          <div className={styles.highlightContent}>
            <h4 className={styles.highlightTitle}>Theme-Aware Styling</h4>
            <p className={styles.highlightText}>
              Built-in theme tokens for colors, typography, and spacing. Your
              app looks native on every store — zero custom CSS per merchant.
            </p>
          </div>
        </div>

        <div className={styles.highlightCard}>
          <div
            className={`${styles.highlightIconWrap} ${styles.highlightIconTeal}`}
          >
            <RocketIcon size="medium" />
          </div>
          <div className={styles.highlightContent}>
            <h4 className={styles.highlightTitle}>Ship in Minutes</h4>
            <p className={styles.highlightText}>
              One command to scaffold. Hot reload in development. Testing and
              linting out of the box. Chrome DevTools extension for real-time
              debugging.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* What you can build */}
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Possibilities</p>
      <h2 className={styles.sectionTitle}>
        Extend every part of the shopping journey
      </h2>
      <p className={styles.sectionSubtitle}>
        Storefront and checkout — 40+ insertion points for pixel-perfect
        placement.
      </p>

      <div className={styles.areasGrid}>
        <div className={`${styles.areaCard} ${styles.areaBlue}`}>
          <TagIcon size="medium" />
          <h4 className={styles.areaTitle}>Product Pages</h4>
          <p className={styles.areaText}>
            Badges, stock counters, size guides, custom fields
          </p>
        </div>
        <div className={`${styles.areaCard} ${styles.areaGreen}`}>
          <ShoppingCartIcon size="medium" />
          <h4 className={styles.areaTitle}>Cart</h4>
          <p className={styles.areaText}>
            Validation, upsells, line item details, summaries
          </p>
        </div>
        <div className={`${styles.areaCard} ${styles.areaPurple}`}>
          <CreditCardIcon size="medium" />
          <h4 className={styles.areaTitle}>Checkout</h4>
          <p className={styles.areaText}>
            Custom forms, shipping labels, payment info, coupons
          </p>
        </div>
        <div className={`${styles.areaCard} ${styles.areaOrange}`}>
          <TruckIcon size="medium" />
          <h4 className={styles.areaTitle}>Shipping</h4>
          <p className={styles.areaText}>
            Option selection, label overrides, delivery estimates
          </p>
        </div>
        <div className={`${styles.areaCard} ${styles.areaTeal}`}>
          <NotificationIcon size="medium" />
          <h4 className={styles.areaTitle}>Overlays</h4>
          <p className={styles.areaText}>
            Banners, modals, corner widgets, toasts, drawers
          </p>
        </div>
      </div>
    </section>

    {/* Code Showcase */}
    <section className={styles.codeShowcase}>
      <div className={styles.codeShowcaseHeader}>
        <span className={`${styles.codeDot} ${styles.codeDotRed}`} />
        <span className={`${styles.codeDot} ${styles.codeDotYellow}`} />
        <span className={`${styles.codeDot} ${styles.codeDotGreen}`} />
        <span className={styles.codeLabel}>App.tsx</span>
      </div>
      <pre className={styles.codeBlock}>
        <span className={styles.codeKeyword}>{"import type"}</span>
        {" { "}
        <span className={styles.codeType}>{"NubeSDK"}</span>
        {" } "}
        <span className={styles.codeKeyword}>{"from"}</span>
        {" "}
        <span className={styles.codeString}>
          {'"@tiendanube/nube-sdk-types"'}
        </span>
        {";\n\n"}
        <span className={styles.codeKeyword}>{"export function"}</span>
        {" "}
        <span className={styles.codeFunction}>{"App"}</span>
        {"(nube: "}
        <span className={styles.codeType}>{"NubeSDK"}</span>
        {") {\n"}
        {"  nube."}
        <span className={styles.codeFunction}>{"on"}</span>
        {"("}
        <span className={styles.codeString}>{'"cart:update"'}</span>
        {", handler);"}
        {"      "}
        <span className={styles.codeComment}>
          {"// React to commerce events"}
        </span>
        {"\n"}
        {"  nube."}
        <span className={styles.codeFunction}>{"send"}</span>
        {"("}
        <span className={styles.codeString}>{'"cart:validate"'}</span>
        {", modifier);"}
        {"  "}
        <span className={styles.codeComment}>
          {"// Dispatch actions"}
        </span>
        {"\n"}
        {"  nube."}
        <span className={styles.codeFunction}>{"render"}</span>
        {"("}
        <span className={styles.codeString}>{'"slot_name"'}</span>
        {", component);"}
        {"  "}
        <span className={styles.codeComment}>
          {"// Place UI in slots"}
        </span>
        {"\n"}
        {"  nube."}
        <span className={styles.codeFunction}>{"getState"}</span>
        {"();"}
        {"                      "}
        <span className={styles.codeComment}>
          {"// Read current state"}
        </span>
        {"\n"}
        {"  nube."}
        <span className={styles.codeFunction}>{"getBrowserAPIs"}</span>
        {"();"}
        {"                 "}
        <span className={styles.codeComment}>
          {"// Storage & navigation"}
        </span>
        {"\n}"}
      </pre>
    </section>

    {/* Architecture */}
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Architecture</p>
      <h2 className={styles.sectionTitle}>Simple, powerful, and safe</h2>
      <p className={styles.sectionSubtitle}>
        Your app runs in a Web Worker and communicates with the store through a
        structured event bus. One function, one object, infinite possibilities.
      </p>
      <ArchitectureDiagram />
    </section>

    {/* Features at a glance */}
    <section className={styles.section}>
      <p className={styles.sectionLabel}>Everything Included</p>
      <h2 className={styles.sectionTitle}>Features at a glance</h2>
      <p className={styles.sectionSubtitle}>
        A complete toolkit — from UI components to browser APIs.
      </p>

      <div className={styles.featureChipsGrid}>
        <FeatureChip
          icon={<ArrowsHorizontalIcon size="small" />}
          title="Commerce Events"
          text="Cart, checkout, shipping, coupons, orders"
        />
        <FeatureChip
          icon={<SlidersIcon size="small" />}
          title="UI Slots"
          text="40+ storefront and checkout insertion points"
        />
        <FeatureChip
          icon={<ToolsIcon size="small" />}
          title="Component Library"
          text="Buttons, fields, accordions, modals, toasts"
        />
        <FeatureChip
          icon={<ColorPaletteIcon size="small" />}
          title="CSS-in-JS Styling"
          text="styled(), StyleSheet.create(), keyframes"
        />
        <FeatureChip
          icon={<StoreIcon size="small" />}
          title="Theme Tokens"
          text="Colors, typography, spacing per store"
        />
        <FeatureChip
          icon={<BrowserIcon size="small" />}
          title="Browser APIs"
          text="Async storage with TTL, navigation, iframes"
        />
        <FeatureChip
          icon={<GlobeIcon size="small" />}
          title="SVG Support"
          text="Full primitives for custom graphics"
        />
        <FeatureChip
          icon={<CheckCircleIcon size="small" />}
          title="DevTools Extension"
          text="Inspect state, events, and slots live"
        />
      </div>
    </section>

    {/* CTA */}
    <section className={styles.cta}>
      <h2 className={styles.ctaTitle}>Ready to build?</h2>
      <p className={styles.ctaSubtitle}>
        Set up your first NubeSDK app in under 10 minutes.
      </p>
      <Link to="./getting-started" className={styles.heroBtnPrimary}>
        <RocketIcon size="small" />
        Start Building
      </Link>
      <div className={styles.ctaLinks}>
        <Link to="./script-structure" className={styles.ctaLink}>
          Script Structure
        </Link>
        <Link to="./components/overview" className={styles.ctaLink}>
          Components
        </Link>
        <Link to="./slots/overview" className={styles.ctaLink}>
          UI Slots
        </Link>
        <Link to="./events/overview" className={styles.ctaLink}>
          Events
        </Link>
        <Link to="./styling/overview" className={styles.ctaLink}>
          Styling
        </Link>
        <Link to="./examples/overview" className={styles.ctaLink}>
          Examples
        </Link>
      </div>
    </section>
  </div>
);

function ArchitectureDiagram() {
  const { colorMode } = useColorMode();
  const dark = colorMode === "dark";

  const c = {
    leftBg: dark ? "#0d2944" : "#e8f3ff",
    leftBorder: dark ? "#1a4d7a" : "#b8d8ff",
    storeBg: dark ? "#152d44" : "#ffffff",
    storeBorder: dark ? "#2a6090" : "#90c5ff",
    storeText: dark ? "#7ab8ef" : "#006bc8",

    centerBg: dark ? "#0f1d2f" : "#f0f7ff",
    centerBorder: dark ? "#1a5aa0" : "#006bc8",
    dispatcherFrom: dark ? "#003366" : "#006bc8",
    dispatcherTo: dark ? "#0059b3" : "#0094ff",

    rightBg: dark ? "#1a0d3d" : "#f0e8ff",
    rightBorder: dark ? "#3d2075" : "#c9b3ff",
    workerBg: dark ? "#221550" : "#faf7ff",
    workerBorder: dark ? "#4a2d8a" : "#c9b3ff",
    scriptBg: dark ? "#2d1a6b" : "#ffffff",
    scriptBorder: dark ? "#4a2d8a" : "#c9b3ff",
    scriptText: dark ? "#a78bfa" : "#6b47dc",

    arrow: dark ? "#5eb6ff" : "#006bc8",
    labelText: dark ? "#94a3b8" : "#64748b",
    titleText: dark ? "#e2e8f0" : "#1e293b",
    nubeTitle: dark ? "#5eb6ff" : "#006bc8",
  };

  const font = "'CentraNube', -apple-system, BlinkMacSystemFont, sans-serif";

  return (
    <div className={styles.diagramWrap}>
      <svg
        viewBox="0 0 820 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", maxWidth: 740, height: "auto", margin: "0 auto", display: "block" }}
        role="img"
        aria-label="NubeSDK architecture diagram showing the store, event dispatcher, and isolated web workers"
      >
        <defs>
          <linearGradient id="dispatcherGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={c.dispatcherFrom} />
            <stop offset="100%" stopColor={c.dispatcherTo} />
          </linearGradient>
        </defs>

        {/* Left section: TiendaNube Main Page */}
        <rect
          x="5"
          y="5"
          width="240"
          height="300"
          rx="14"
          fill={c.leftBg}
          stroke={c.leftBorder}
          strokeWidth="1.5"
        />
        <text
          x="125"
          y="32"
          textAnchor="middle"
          fontFamily={font}
          fontSize="13"
          fontWeight="600"
          fill={c.labelText}
        >
          TiendaNube
        </text>
        <text
          x="125"
          y="48"
          textAnchor="middle"
          fontFamily={font}
          fontSize="13"
          fontWeight="600"
          fill={c.labelText}
        >
          Main Page
        </text>

        {/* Store box */}
        <rect
          x="50"
          y="120"
          width="150"
          height="60"
          rx="10"
          fill={c.storeBg}
          stroke={c.storeBorder}
          strokeWidth="1.5"
        />
        <text
          x="125"
          y="156"
          textAnchor="middle"
          fontFamily={font}
          fontSize="15"
          fontWeight="600"
          fill={c.storeText}
        >
          Store
        </text>

        {/* Center section: NubeSDK */}
        <rect
          x="290"
          y="5"
          width="240"
          height="300"
          rx="14"
          fill={c.centerBg}
          stroke={c.centerBorder}
          strokeWidth="1.5"
        />
        <text
          x="410"
          y="40"
          textAnchor="middle"
          fontFamily={font}
          fontSize="16"
          fontWeight="700"
          fontStyle="italic"
          fill={c.nubeTitle}
        >
          NubeSDK
        </text>

        {/* Event Dispatcher box */}
        <rect
          x="325"
          y="110"
          width="170"
          height="80"
          rx="10"
          fill="url(#dispatcherGrad)"
        />
        <text
          x="410"
          y="146"
          textAnchor="middle"
          fontFamily={font}
          fontSize="14"
          fontWeight="600"
          fill="#ffffff"
        >
          Event
        </text>
        <text
          x="410"
          y="166"
          textAnchor="middle"
          fontFamily={font}
          fontSize="14"
          fontWeight="600"
          fill="#ffffff"
        >
          Dispatcher
        </text>

        {/* Right section: Third Party Apps */}
        <rect
          x="575"
          y="5"
          width="240"
          height="300"
          rx="14"
          fill={c.rightBg}
          stroke={c.rightBorder}
          strokeWidth="1.5"
        />
        <text
          x="695"
          y="40"
          textAnchor="middle"
          fontFamily={font}
          fontSize="13"
          fontWeight="600"
          fill={c.labelText}
        >
          Third Party Apps
        </text>

        {/* Web Worker 1 */}
        <rect
          x="595"
          y="55"
          width="200"
          height="105"
          rx="10"
          fill={c.workerBg}
          stroke={c.workerBorder}
          strokeWidth="1.5"
          strokeDasharray="6 3"
        />
        <text
          x="695"
          y="80"
          textAnchor="middle"
          fontFamily={font}
          fontSize="12"
          fontWeight="600"
          fill={c.scriptText}
        >
          Web Worker 1
        </text>
        <rect
          x="625"
          y="90"
          width="140"
          height="50"
          rx="8"
          fill={c.scriptBg}
          stroke={c.scriptBorder}
          strokeWidth="1"
        />
        <text
          x="695"
          y="121"
          textAnchor="middle"
          fontFamily={font}
          fontSize="13"
          fontWeight="500"
          fill={c.scriptText}
        >
          Script 1
        </text>

        {/* Web Worker 2 */}
        <rect
          x="595"
          y="180"
          width="200"
          height="105"
          rx="10"
          fill={c.workerBg}
          stroke={c.workerBorder}
          strokeWidth="1.5"
          strokeDasharray="6 3"
        />
        <text
          x="695"
          y="205"
          textAnchor="middle"
          fontFamily={font}
          fontSize="12"
          fontWeight="600"
          fill={c.scriptText}
        >
          Web Worker 2
        </text>
        <rect
          x="625"
          y="215"
          width="140"
          height="50"
          rx="8"
          fill={c.scriptBg}
          stroke={c.scriptBorder}
          strokeWidth="1"
        />
        <text
          x="695"
          y="246"
          textAnchor="middle"
          fontFamily={font}
          fontSize="13"
          fontWeight="500"
          fill={c.scriptText}
        >
          Script 2
        </text>

        {/* Arrows */}

        {/* Store → Event Dispatcher (solid) */}
        <path
          d="M 200 150 L 318 150"
          stroke={c.arrow}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 310 144 L 322 150 L 310 156"
          stroke={c.arrow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Event Dispatcher → Web Worker 1 (dashed, curves up) */}
        <path
          d="M 500 140 C 540 140, 565 107, 588 107"
          stroke={c.arrow}
          strokeWidth="2"
          strokeDasharray="6 3"
          fill="none"
        />
        <path
          d="M 580 101 L 592 107 L 580 113"
          stroke={c.arrow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Event Dispatcher → Web Worker 2 (dashed, curves down) */}
        <path
          d="M 500 160 C 540 160, 565 232, 588 232"
          stroke={c.arrow}
          strokeWidth="2"
          strokeDasharray="6 3"
          fill="none"
        />
        <path
          d="M 580 226 L 592 232 L 580 238"
          stroke={c.arrow}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function FeatureChip({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.featureChip}>
      <div className={styles.featureChipIcon}>{icon}</div>
      <div className={styles.featureChipContent}>
        <p className={styles.featureChipTitle}>{title}</p>
        <p className={styles.featureChipText}>{text}</p>
      </div>
    </div>
  );
}

export default NubeSdkLanding;
