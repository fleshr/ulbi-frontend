import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta = {
  title: "shared/Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: "TRIGGER",
    children: "INNER",
  },
};
