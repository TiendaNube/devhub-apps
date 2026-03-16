import React from "react";
import Footer from "@theme-original/DocItem/Footer";
import type { WrapperProps } from "@docusaurus/types";
import { useLocation } from "@docusaurus/router";
import { DocFeedbackFooter } from "../../../components/FeedbackWidgets";

type Props = WrapperProps<typeof Footer>;

export default function FooterWrapper(props: Props): React.JSX.Element {
  const { pathname } = useLocation();
  const isNubeSdkPage = pathname.includes("/nube-sdk");

  return (
    <>
      <Footer {...props} />
      {isNubeSdkPage && <DocFeedbackFooter />}
    </>
  );
}
