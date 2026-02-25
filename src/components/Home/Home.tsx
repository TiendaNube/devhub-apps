import React from "react";
import classnames from "classnames";

import { useDarkMode } from "../../theme/Root";
import styles from "./home.module.css";
import {
  Hero,
  WhyTiendanube,
  ThreePillars,
  GuidedPaths,
  Resources,
} from "./components";

const Home: React.FC = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={darkMode ? styles.homeDark : styles.homeLight}>
      <div
        className={classnames(
          styles.homeBackground,
          darkMode ? styles.homeBackgroundDark : styles.homeBackgroundLight
        )}
      />
      <div className={classnames("container", styles.homeContainer)}>
        <Hero />
        <ThreePillars />
        <WhyTiendanube />
        <GuidedPaths />
        <Resources />
      </div>
    </div>
  );
};

export default Home;
