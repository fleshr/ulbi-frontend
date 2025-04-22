import { ProfileState } from "@/entities/Profile";
import { UserState } from "@/entities/User";
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
    withStoreProvider({
      profile: { readonly: true, form: { id: "1" } } as ProfileState,
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const Editing: Story = {
  decorators: [
    withStoreProvider({
      profile: { readonly: false, form: { id: "1" } } as ProfileState,
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const CantEdit: Story = {
  decorators: [
    withStoreProvider({
      profile: { readonly: false, form: { id: "1" } } as ProfileState,
      user: { user: { id: "2" } } as UserState,
    }),
  ],
};
