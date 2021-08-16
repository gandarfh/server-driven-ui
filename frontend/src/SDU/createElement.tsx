import { Trans } from "next-i18next";
import React from "react";
import { v4 } from "uuid";

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

const Translate = ({ children }: { children: string }) => {
  return <Trans>{children}</Trans>;
};

const createElement = (
  schema: Record<string, any>[],
  ui: Record<string, (props: any) => JSX.Element>,
  actionsMap: Record<string, (...props: any) => void>
): any => {
  return schema.map((element) => {
    const { component, children, actions, ...componentProps } = element;
    const props = { ...componentProps, key: component + "-" + v4() };
    const actionsProps = createActionProps(actionsMap, actions);

    if (!component.includes(":")) {
      if (Array.isArray(children)) {
        return React.createElement(
          component,
          props,
          createElement(children as any, ui, actionsMap)
        );
      }

      return React.createElement(component, props, children);
    }

    const RetrieverElement = ui[component];

    if (!RetrieverElement) {
      return React.createElement(React.Fragment);
    }

    if (Array.isArray(children)) {
      return RetrieverElement({
        ...props,
        ...actionsProps,
        children: createElement(children as any, ui, actionsMap),
      });
    }

    if (typeof children === "string") {
      return RetrieverElement({
        ...props,
        ...actionsProps,
        children: Translate({ children }),
      });
    }

    return RetrieverElement({
      ...props,
      ...actionsProps,
      children,
    });
  });
};

export default createElement;
