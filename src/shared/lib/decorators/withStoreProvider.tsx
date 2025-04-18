import { StoreProvider } from "@/app/providers/StoreProvider/ui/StoreProvider";
import { Decorator } from "@storybook/react";

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
