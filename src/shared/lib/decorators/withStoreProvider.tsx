import { StoreProvider } from "@/app/providers";
import type { Decorator } from "@storybook/react";

export const withStoreProvider = (preloadedState?: Partial<RootState>) => {
  const Decorator: Decorator = (Story) => {
    return (
      <StoreProvider preloadedState={preloadedState}>
        <Story />
      </StoreProvider>
    );
  };

  return Decorator;
};
