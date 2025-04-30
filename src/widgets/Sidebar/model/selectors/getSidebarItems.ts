import { userSelectors } from "@/entities/User";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ArticleIcon from "@/shared/assets/icons/article.svg";
import MainIcon from "@/shared/assets/icons/main.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import { RoutePath } from "@/shared/config";
import { createSelector } from "@reduxjs/toolkit";
import type { SidebarItemType } from "../types";

export const getSidebarItems = createSelector(
  userSelectors.getUserData,
  (user) => {
    const sidebarItems: SidebarItemType[] = [
      {
        path: RoutePath.main,
        text: "Главная",
        Icon: MainIcon,
      },
      {
        path: RoutePath.about,
        text: "О нас",
        Icon: AboutIcon,
      },
    ];

    if (user) {
      sidebarItems.push(
        {
          path: `${RoutePath.profile}/${user.id}`,
          text: "Профиль",
          Icon: ProfileIcon,
          authOnly: true,
        },
        {
          path: RoutePath.articles,
          text: "Статьи",
          Icon: ArticleIcon,
          authOnly: true,
        },
      );
    }

    return sidebarItems;
  },
);
