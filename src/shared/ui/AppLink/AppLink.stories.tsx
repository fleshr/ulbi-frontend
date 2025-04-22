import { withRouterProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  decorators: [withRouterProvider()],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { to: "/", children: "AppLink", variant: "primary" },
};

export const Secondary: Story = {
  args: { to: "/", children: "AppLink", variant: "secondary" },
};

export const Outline: Story = {
  args: { to: "/", children: "AppLink", variant: "outline" },
};
