import { retriever, ThemeProvider } from "@retriever-ui/core";
import Document, { Html, Head, Main, NextScript } from "next/document";
const Body = retriever("body");
class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ThemeProvider>
          <Body bg="black.100">
            <Main />
            <NextScript />
          </Body>
        </ThemeProvider>
      </Html>
    );
  }
}

export default MyDocument;
