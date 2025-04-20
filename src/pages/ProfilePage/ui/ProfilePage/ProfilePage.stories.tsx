import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "./ProfilePage";

const meta = {
  title: "pages/ProfilePage",
  component: ProfilePage,
  decorators: [withStoreProvider()],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
