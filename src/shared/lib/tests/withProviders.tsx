import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { i18nForTests } from "@/shared/config/i18n/i18nForTests";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

interface Options {
  router?: string;
}

export const withProviders = (component: ReactNode, options: Options = {}) => {
  const { router = "/" } = options;

  return (
    <MemoryRouter initialEntries={[router]}>
      <ThemeProvider>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </ThemeProvider>
    </MemoryRouter>
  );
};
