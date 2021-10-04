import { ITheme } from "@retriever-ui/react";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
