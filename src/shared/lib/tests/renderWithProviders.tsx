import { StoreProvider, ThemeProvider } from "@/app/providers";
import { i18nForTests } from "@/shared/config/i18n/i18nForTests";
import { render } from "@testing-library/react";
import type { FC, PropsWithChildren, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

interface Options {
  router: string;
  preloadedState: Partial<RootState>;
}

export const renderWithProviders = (
  component: ReactNode,
  options: Partial<Options> = {},
) => {
  const { router = "/", preloadedState } = options;

  const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
      <StoreProvider preloadedState={preloadedState}>
        <MemoryRouter initialEntries={[router]}>
          <ThemeProvider>
            <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
          </ThemeProvider>
        </MemoryRouter>
      </StoreProvider>
    );
  };

  return render(component, { wrapper: Wrapper });
};
