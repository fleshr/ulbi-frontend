import type { Meta, StoryObj } from "@storybook/react";
import { LoginModal } from "./LoginModal";
import { fn } from "@storybook/test";

const meta = {
  title: "features/AuthByUsername/LoginModal",
  component: LoginModal,
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isOpen: true, onClose: fn() },
};
