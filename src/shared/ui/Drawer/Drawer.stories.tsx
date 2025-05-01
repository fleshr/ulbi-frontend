import { withFullHeight } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Drawer } from "./Drawer";

const meta = {
  title: "shared/Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withFullHeight],
  args: { isOpen: true, onClose: fn(), children: "I'm in drawer!" },
};
