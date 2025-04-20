import { withFullHeight } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  decorators: [withFullHeight],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: fn(),
    children: "Modal",
  },
};
