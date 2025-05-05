declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.png" {
  const url: string;
  export default url;
}

declare module "*.jpg" {
  const url: string;
  export default url;
}

declare module "*.jpeg" {
  const url: string;
  export default url;
}

declare module "*.gif" {
  const url: string;
  export default url;
}

declare module "*.svg" {
  import type { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: "storybook" | "jest" | "frontend";

declare type AppStore = import("@/shared/model").AppStore;
declare type RootState = import("@/shared/model").RootState;
declare type AppDispatch = import("@/shared/model").AppDispatch;
