import "i18next";
import translation from "../../../public/locales/ru/translation.json";
import mainPage from "../../../public/locales/ru/mainPage.json";
import aboutPage from "../../../public/locales/ru/aboutPage.json";
import profilePage from "../../../public/locales/ru/profilePage.json";
import notFoundPage from "../../../public/locales/ru/notFoundPage.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof translation;
      mainPage: typeof mainPage;
      aboutPage: typeof aboutPage;
      profilePage: typeof profilePage;
      notFoundPage: typeof notFoundPage;
    };
  }
}
