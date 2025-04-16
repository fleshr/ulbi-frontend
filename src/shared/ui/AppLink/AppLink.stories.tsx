import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "./AppLink";
import { withRouter } from "@/shared/lib/decorators";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  decorators: [withRouter],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { to: "/", children: "AppLink" },
};
