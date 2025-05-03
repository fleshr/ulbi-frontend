import { userSelectors } from "@/entities/User";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import MainIcon from "@/shared/assets/icons/main.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import { RoutePath } from "@/shared/constants";
import { createSelector } from "@reduxjs/toolkit";
import type { SidebarItemType } from "../types";

export const getSidebarItems = createSelector(
  userSelectors.getUserData,
  (user) => {
    const sidebarItems: SidebarItemType[] = [
      {
        path: RoutePath.getMainRoute(),
        text: "Главная",
        Icon: MainIcon,
      },
      {
        path: RoutePath.getAboutRoute(),
        text: "О нас",
        Icon: AboutIcon,
      },
    ];

    if (user) {
      sidebarItems.push(
        {
          path: RoutePath.getProfileRoute(user.id),
          text: "Профиль",
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.getArticlesRoute(),
          text: "Статьи",
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItems;
  },
);
