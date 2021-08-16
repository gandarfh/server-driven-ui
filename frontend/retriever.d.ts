import { ITheme } from "@retriever-ui/core";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
