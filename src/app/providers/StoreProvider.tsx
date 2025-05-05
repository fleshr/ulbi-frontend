import { setupStore } from "@/shared/model";
import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface StoreProviderProps extends PropsWithChildren {
  preloadedState?: Partial<RootState>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  preloadedState,
}) => {
  return <Provider store={setupStore(preloadedState)}>{children}</Provider>;
};
