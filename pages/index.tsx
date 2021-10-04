import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HomeScreen from "../src/screens/Home";
import { createConfig } from "../src/sdu/config";
import { fetcher, SduProvider } from "../src/sdu/Context";

export const getServerSideProps = async ({ locale }: any) => {
  const data = await fetcher(
    `${process.env.NEXT_PUBLIC_API_URL}/api/home/search`
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ["joao"])),
      data,
    },
  };
};

const HomePage = ({ data }: any) => {
  const baseConfig = createConfig({
    baseRoute: `${process.env.NEXT_PUBLIC_API_URL}/`,
    route: "api/home/search",
    initialData: data,
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
