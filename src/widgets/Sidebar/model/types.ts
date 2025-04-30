import type { FC, SVGProps } from "react";

export interface SidebarItemType {
  path: string;
  text: "Главная" | "Профиль" | "О нас" | "Статьи";
  Icon: FC<SVGProps<SVGElement>>;
  authOnly?: boolean;
}
