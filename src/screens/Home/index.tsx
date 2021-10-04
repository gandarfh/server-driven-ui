import React from "react";
import Layout from "../../Components/Layout";
import Navbar from "../../Components/Navbar";
import { useSdu } from "../../sdu/Context";

const HomeScreen = () => {
  const { components } = useSdu();

  return (
    <>
      <Navbar />
      <Layout title="Home page">{components}</Layout>
    </>
  );
};

export default HomeScreen;
