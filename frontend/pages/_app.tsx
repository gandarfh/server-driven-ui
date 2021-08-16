import type { AppProps } from "next/app";
import {
  ThemeProvider as RetrieverProvider,
  GlobalStyles,
} from "@retriever-ui/core";
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
