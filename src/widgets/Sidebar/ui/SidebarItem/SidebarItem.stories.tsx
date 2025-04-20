import { withRouter } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { sidebarItemsList } from "../../constants/items";
import { SidebarItem } from "./SidebarItem";

const meta = {
  title: "widgets/Sidebar/SidebarItem",
  component: SidebarItem,
  decorators: [withRouter],
} satisfies Meta<typeof SidebarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: sidebarItemsList[0],
  },
};

export const Collapsed: Story = {
  args: {
    item: sidebarItemsList[0],
    collapsed: true,
  },
};
