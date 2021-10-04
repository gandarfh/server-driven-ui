import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeScreen from "../src/screens/Home";
import { createConfig } from "../src/sdu/config";
import { fetcher, SduProvider } from "../src/sdu/Context";

export const getStaticProps = async ({ locale }: any) => {
  const initialData = await fetcher("http://localhost:3000/api/home/search");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["joao"])),
      initialData,
    },
  };
};

const HomePage = ({ initialData }: any) => {
  const baseConfig = createConfig({
    baseRoute: "http://localhost:3000/",
    route: "api/home/search",
    initialData,
    componentsMap: {},
    actionsMap: {},
  });

  return (
    <SduProvider baseConfig={baseConfig}>
      <HomeScreen />
    </SduProvider>
  );
};

export default HomePage;
