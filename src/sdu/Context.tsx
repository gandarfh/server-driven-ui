import React from "react";
import axios from "axios";
import useSWR from "swr";
import pylonElement from "./pylonElement";

export interface SduContextProps {
  initialData?: Record<string, unknown>[];
  baseRoute: string;
  route: string;
  actionsMap: {
    [name: string]: (...props: any[]) => void;
  };
  componentsMap: {
    "custom:loading": (props?: any) => JSX.Element;
    "custom:error": (props?: any) => JSX.Element;
  } & {
    [name: string]: (props?: any) => JSX.Element;
  };
}

interface SduProviderProps {
  children: React.ReactNode;
  baseConfig: SduContextProps;
}

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const SduContext = React.createContext({} as SduContextProps);

export const SduProvider = ({ baseConfig, children }: SduProviderProps) => {
  return (
    <SduContext.Provider value={baseConfig}>{children}</SduContext.Provider>
  );
};

export const useSdu = () => {
  const { baseRoute, initialData, componentsMap, actionsMap, route } =
    React.useContext(SduContext);

  const { data, isValidating, error } = useSWR(
    baseRoute + "/" + route,
    fetcher,
    { initialData, revalidateOnFocus: false }
  );

  if (isValidating) {
    const Loading = componentsMap["custom:loading"];
    return {
      components: <Loading />,
    };
  }

  if (!!error) {
    const Error = componentsMap["custom:error"];
    return {
      components: <Error />,
    };
  }

  const components = pylonElement(data, componentsMap, actionsMap);

  return {
    components,
  };
};
