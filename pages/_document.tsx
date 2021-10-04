import { retriever, RetrieverProvider } from "@retriever-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";
const Body = retriever("body");
class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Black.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-ExtraBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Bold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Medium.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Light.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-ExtraLight.ttf"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Montserrat/Montserrat-Thin.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
        <RetrieverProvider>
          <Body bg="black.100">
            <Main />
            <NextScript />
          </Body>
        </RetrieverProvider>
      </Html>
    );
  }
}

export default MyDocument;
