import React from "react";
import { Trans } from "next-i18next";

const createActionProps = (
  actionsMap: Record<string, (...props: any) => void>,
  actions?: any
) => {
  if (!actions) return {};
  const actionsKeys = Object.keys(actions);

  let action: Record<string, unknown> = {};

  actionsKeys.forEach((item) => {
    const teste = actions[item];
    const keys = Object.keys(teste);

    action[item] = () => {
      keys.forEach((key) => {
        const items = teste[key];
        const func = actionsMap[key];

        return func(...items);
      });
    };
  });
  return action;
};

const Translate = ({ children }: { children: string | number }) => {
  if (typeof children !== "string") return <>{children}</>;

  return <Trans>{children}</Trans>;
};

const createElement = (
  schema: Record<string, any>[],
  ui: Record<string, (props: any) => JSX.Element>,
  actionsMap: Record<string, (...props: any) => void>
): any => {
  return schema.map((element, index) => {
    const { component, children, actions, ...componentProps } = element;
    const actionsProps = createActionProps(actionsMap, actions);

    const props = {
      ...componentProps,
      ...actionsProps,
      key: component + "-" + index,
    };

    const RetrieverElement = ui[component];

    if (!RetrieverElement) {
      console.error(
        `Component: ${component} not found. Check the name of component or valid the config.componentsMap to valid if ${component} exist!`
      );
      return React.createElement(React.Fragment, { key: "fragment-" + index });
    }

    if (Array.isArray(children)) {
      return RetrieverElement({
        ...props,
        children: createElement(children, ui, actionsMap),
      });
    }

    return RetrieverElement({
      ...props,
      children: Translate({ children }),
    });
  });
};

export default createElement;
