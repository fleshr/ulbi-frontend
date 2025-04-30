import "i18next";
import type aboutPage from "../../../public/locales/ru/aboutPage.json";
import type adminPanelPage from "../../../public/locales/ru/adminPanelPage.json";
import type articleDetailsPage from "../../../public/locales/ru/articleDetailsPage.json";
import type articleEditPage from "../../../public/locales/ru/articleEditPage.json";
import type forbiddenPage from "../../../public/locales/ru/forbiddenPage.json";
import type mainPage from "../../../public/locales/ru/mainPage.json";
import type notFoundPage from "../../../public/locales/ru/notFoundPage.json";
import type profilePage from "../../../public/locales/ru/profilePage.json";
import type translation from "../../../public/locales/ru/translation.json";

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
      articleEditPage: typeof articleEditPage;
      adminPanelPage: typeof adminPanelPage;
      forbiddenPage: typeof forbiddenPage;
    };
  }
}
