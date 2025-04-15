import "i18next";
import mainPage from "../../../public/locales/ru/mainPage.json";
import aboutPage from "../../../public/locales/ru/aboutPage.json";
import translation from "../../../public/locales/ru/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof translation;
      mainPage: typeof mainPage;
      aboutPage: typeof aboutPage;
    };
  }
}
