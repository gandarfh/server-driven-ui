import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeScreen from "../src/screens/Home";
import { createConfig } from "../src/SDU/config";
import { SduProvider } from "../src/SDU/Context";

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["joao"])),
    },
  };
};

const baseConfig = createConfig({
  baseRoute: "http://localhost:3003",
  componentsMap: {},
  actionsMap: {},
});

const HomePage = (props: any) => {
  return (
    <SduProvider baseConfig={baseConfig}>
      <HomeScreen />
    </SduProvider>
  );
};

export default HomePage;
