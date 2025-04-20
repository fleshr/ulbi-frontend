import { FC, SVGProps } from "react";

export interface SidebarItemType {
  path: string;
  text: "Главная" | "Профиль" | "О нас";
  Icon: FC<SVGProps<SVGElement>>;
}
