import { useEffect, useState } from "react";
import tokens from "@nimbus-ds/tokens/dist/js/tokens";
import { useWindowWidth } from "@/hooks";

import { IResponsive } from "./responsive.types";

const Responsive: React.FC<IResponsive> = ({
  mobileContent,
  desktopContent,
}) => {
  const windowWidth = useWindowWidth();
  const [isMounted, setIsMounted] = useState(false);

  const breakpointMd = tokens.breakpoint.md.value.replace("px", "");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  if (windowWidth !== null && windowWidth <= breakpointMd) {
    return <>{mobileContent}</>;
  } else {
    return <>{desktopContent}</>;
  }
};

export default Responsive;
