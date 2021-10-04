import { retriever, Heading, Paragraph } from "@retriever-ui/react";
import Layout from "./Layout";

const Navbar = () => {
  const Header = retriever("header");
  const Box = retriever("div");

  return (
    <Header
      bg="black.50"
      d={["none", "block"]}
      style={{ boxShadow: "0px 4px 8px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <Layout isChangeTitle={false}>
        <Box
          flex={1}
          d={["none", "flex"]}
          h="60px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading fontSize="medium">Logo Housi</Heading>

          <Box d="flex">
            <Paragraph>Menu</Paragraph>
          </Box>
        </Box>
      </Layout>
    </Header>
  );
};

export default Navbar;
