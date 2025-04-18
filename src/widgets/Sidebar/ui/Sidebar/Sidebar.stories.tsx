import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { withRouter, withTheme } from "@/shared/lib/decorators";

const meta = {
  title: "widgets/Sidebar",
  component: Sidebar,
  decorators: [withTheme, withRouter],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultCollapsed: false },
};

export const Collapsed: Story = {
  args: { defaultCollapsed: true },
};
