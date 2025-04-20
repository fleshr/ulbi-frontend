import AboutIcon from "@/shared/assets/icons/about.svg";
import MainIcon from "@/shared/assets/icons/main.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import { RoutePath } from "@/shared/config";
import { SidebarItemType } from "../model/item";

export const sidebarItemsList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
    text: "Профиль",
    Icon: ProfileIcon,
  },
];
