import type { Meta, StoryObj } from "@storybook/react";
import { LoginModal } from "./LoginModal";
import { fn } from "@storybook/test";
import { withStoreProvider } from "@/shared/lib/decorators";

const meta = {
  title: "features/AuthByUsername/LoginModal",
  component: LoginModal,
  decorators: [withStoreProvider()],
} satisfies Meta<typeof LoginModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { isOpen: true, onClose: fn() },
};
