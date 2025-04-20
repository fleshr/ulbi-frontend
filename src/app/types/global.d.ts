declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const content: FC<SVGProps<SVGElement>>;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;

declare type AppStore = import("../providers/StoreProvider").AppStore;
declare type RootState = import("../providers/StoreProvider").RootState;
declare type AppDispatch = import("../providers/StoreProvider").AppDispatch;
