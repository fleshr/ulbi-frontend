import MainIcon from "@/shared/assets/icons/main.svg";
import { RoutePath } from "@/shared/constants";
import { withRouterProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { SidebarItem } from "./SidebarItem";

const item = {
  path: RoutePath.main,
  text: "Главная",
  Icon: MainIcon,
} as const;

const meta = {
  title: "widgets/Sidebar/SidebarItem",
  component: SidebarItem,
  decorators: [withRouterProvider()],
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { item },
};

export const Collapsed: Story = {
  args: { item, collapsed: true },
};
