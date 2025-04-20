import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { LoginModal } from "./LoginModal";

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
