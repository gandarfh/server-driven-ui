import { retriever } from "@retriever-ui/react";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  isChangeTitle?: boolean;
  description?: string;
}

const Layout = ({ children, title, isChangeTitle = true }: LayoutProps) => {
  const Box = retriever("main");

  return (
    <>
      {isChangeTitle && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <Box
        m="0 auto"
        maxW={{ sm: "100%", md: "900px", lg: "1400px" }}
        minW={{ sm: "100%", md: "100%", lg: "1200px" }}
        p={{ sm: "12px", md: "20px", lg: "0" }}
      >
        {children}
      </Box>
    </>
  );
};

export default Layout;
