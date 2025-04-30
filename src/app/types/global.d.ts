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

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
declare type AppStore = import("../providers/StoreProvider").AppStore;
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
declare type RootState = import("../providers/StoreProvider").RootState;
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
declare type AppDispatch = import("../providers/StoreProvider").AppDispatch;
