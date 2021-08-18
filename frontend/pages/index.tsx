import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeScreen from "../src/screens/Home";
import { createConfig } from "../src/SDU/config";
import { fetcher, SduProvider } from "../src/SDU/Context";

export const getStaticProps = async ({ locale }: any) => {
  const initialData = await fetcher("http://localhost:3003/api/home");

  return {
    props: {
      ...(await serverSideTranslations(locale, ["joao"])),
      initialData,
    },
  };
};

const HomePage = ({ initialData }: any) => {
  const baseConfig = createConfig({
    baseRoute: "http://localhost:3003",
    route: "api/home",
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
