import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { setupStore } from "../config/store";

interface StoreProviderProps extends PropsWithChildren {
  preloadedState?: Partial<RootState>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  preloadedState,
}) => {
  return <Provider store={setupStore(preloadedState)}>{children}</Provider>;
};
