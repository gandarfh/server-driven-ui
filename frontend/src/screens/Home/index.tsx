import React from "react";
import Layout from "../../Components/Layout";
import Navbar from "../../Components/Navbar";
import { useSdu } from "../../SDU/Context";

const HomeScreen = () => {
  const { components } = useSdu("api/home");

  return (
    <>
      <Navbar />
      <Layout title="Home page">{components}</Layout>
    </>
  );
};

export default HomeScreen;
