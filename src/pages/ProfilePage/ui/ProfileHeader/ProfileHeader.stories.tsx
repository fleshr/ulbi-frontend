import { ProfileState } from "@/entities/Profile";
import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfileHeader } from "./ProfileHeader";

const meta = {
  title: "pages/ProfilePage/ProfileHeader",
  component: ProfileHeader,
} satisfies Meta<typeof ProfileHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withStoreProvider({ profile: { readonly: true } as ProfileState }),
  ],
};

export const Editing: Story = {
  decorators: [
    withStoreProvider({ profile: { readonly: false } as ProfileState }),
  ],
};
