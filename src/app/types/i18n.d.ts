import "i18next";
import mainPage from "../../../public/locales/ru/mainPage.json";
import aboutPage from "../../../public/locales/ru/aboutPage.json";
import common from "../../../public/locales/ru/common.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      mainPage: typeof mainPage;
      aboutPage: typeof aboutPage;
    };
  }
}
