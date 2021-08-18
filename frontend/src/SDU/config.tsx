/* eslint-disable react/display-name */
import { retriever } from "@retriever-ui/core";
import Search from "../Components/Search";
import { SduContextProps } from "./Context";

export interface BaseConfig {
  initialData?: Record<string, unknown>[];
  baseRoute: string;
  route: string;
  actionsMap: {
    [name: string]: (props?: any) => void;
  };
  componentsMap: {
    "custom:loading"?: (props?: any) => JSX.Element;
    "custom:error"?: (props?: any) => JSX.Element;
  } & {
    [name: string]: (props?: any) => JSX.Element;
  };
}

const H1 = retriever("h1");
const H2 = retriever("h2");
const Div = retriever("div");
const Button = retriever("button");
const Paragraph = retriever("p");
const Span = retriever("span");
const Img = retriever("img");

const Loading = () => (
  <H1 fontSize="24px" color="secondary.400">
    loading...
  </H1>
);

const Error = () => (
  <H1 fontSize="24px" color="red.400">
    Erro alguma coisa aconteceu :(
  </H1>
);

const defaultComponentsMap = {
  "retriever:button": (props?: any) => <Button {...props} />,
  "retriever:search": Search,
  "retriever:div": (props?: any) => <Div {...props} />,
  "retriever:h1": (props: any) => <H1 {...props} />,
  "retriever:h2": (props: any) => <H2 {...props} />,
  "retriever:span": (props: any) => <Span {...props} />,
  "retriever:p": (props: any) => <Paragraph {...props} />,
  "retriever:img": (props: any) => <Img {...props} />,
  "custom:loading": Loading,
  "custom:error": Error,
};

const defaultActionsMap = {
  "action:alert": (props: any) => {
    alert(props.teste + props.teste1 + props.teste3);
  },
  "action:test": (props: any, props2: any) => {
    alert(props.teste + props.teste1 + props.teste3);
  },
  "action:teste": (props: any, props2: any) => alert(props + props2),
};

export const createConfig = (baseConfig: BaseConfig): SduContextProps => {
  return {
    ...baseConfig,
    componentsMap: {
      ...defaultComponentsMap,
      ...baseConfig.componentsMap,
    },
    actionsMap: {
      ...defaultActionsMap,
      ...baseConfig.actionsMap,
    },
  };
};
