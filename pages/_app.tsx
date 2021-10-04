import "../src/assets/global.css";
import type { AppProps } from "next/app";
import { RetrieverProvider, GlobalStyles } from "@retriever-ui/react";
import { appWithTranslation } from "next-i18next";

import i18next from "../next-i18next.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RetrieverProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </RetrieverProvider>
  );
}
export default appWithTranslation(MyApp, i18next as any);
