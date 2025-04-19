import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { withRouter, withStoreProvider } from "@/shared/lib/decorators";

const meta = {
  title: "widgets/Navbar",
  component: Navbar,
  decorators: [withRouter],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withStoreProvider({ user: { user: null } })],
};

export const WithUser: Story = {
  decorators: [
    withStoreProvider({ user: { user: { id: "1", username: "User" } } }),
  ],
};
