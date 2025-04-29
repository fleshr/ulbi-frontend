import { mockProfileFormState } from "@/features/EditableProfileCard";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "./ProfilePage";

const meta = {
  title: "pages/ProfilePage/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withStoreProvider({ profileForm: mockProfileFormState }),
    withRouterProvider({ path: "/profile/:id", route: "/profile/1" }),
  ],
};

export const Empty: Story = {
  decorators: [
    withStoreProvider({ profileForm: mockProfileFormState }),
    withRouterProvider(),
  ],
};
