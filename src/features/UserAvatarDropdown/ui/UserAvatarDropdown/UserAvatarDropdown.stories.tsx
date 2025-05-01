import { mockUser, UserRole } from "@/entities/User";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { UserAvatarDropdown } from "./UserAvatarDropdown";

const meta = {
  title: "features/UserAvatarDropdown/UserAvatarDropdown",
  component: UserAvatarDropdown,
} satisfies Meta<typeof UserAvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withRouterProvider(),
    withStoreProvider({ user: { user: mockUser, _initialized: true } }),
  ],
};

export const Admin: Story = {
  decorators: [
    withRouterProvider(),
    withStoreProvider({
      user: {
        user: { ...mockUser, roles: [UserRole.ADMIN] },
        _initialized: true,
      },
    }),
  ],
};
