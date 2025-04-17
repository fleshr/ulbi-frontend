import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { fn } from "@storybook/test";

const meta = {
  title: "shared/Modal",
  component: Modal,
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
