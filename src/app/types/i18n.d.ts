import "i18next";
import aboutPage from "../../../public/locales/ru/aboutPage.json";
import articleDetailsPage from "../../../public/locales/ru/articleDetailsPage.json";
import mainPage from "../../../public/locales/ru/mainPage.json";
import notFoundPage from "../../../public/locales/ru/notFoundPage.json";
import profilePage from "../../../public/locales/ru/profilePage.json";
import translation from "../../../public/locales/ru/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof translation;
      mainPage: typeof mainPage;
      aboutPage: typeof aboutPage;
      profilePage: typeof profilePage;
      notFoundPage: typeof notFoundPage;
      articleDetailsPage: typeof articleDetailsPage;
    };
  }
}
