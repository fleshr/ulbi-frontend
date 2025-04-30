import type { UserState } from "@/entities/User";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ValidateError } from "../../constants/validateError";
import { mockProfileFormState } from "../../mock/profileFormState";
import { EditableProfileCard } from "./EditableProfileCard";

const meta = {
  title: "features/EditableProfileCard/EditableProfileCard",
  component: EditableProfileCard,
  decorators: [withRouterProvider()],
  args: { profileId: "1" },
} satisfies Meta<typeof EditableProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withStoreProvider({
      profileForm: { ...mockProfileFormState, readonly: true },
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const Editing: Story = {
  decorators: [
    withStoreProvider({
      profileForm: { ...mockProfileFormState, readonly: false },
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const WithError: Story = {
  decorators: [
    withStoreProvider({
      profileForm: {
        ...mockProfileFormState,
        readonly: false,
        validateErrors: [ValidateError.INCORRECT_USER_DATA],
      },
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const CantEdit: Story = {
  decorators: [
    withStoreProvider({
      profileForm: { ...mockProfileFormState, readonly: true },
      user: { user: { id: "2" } } as UserState,
    }),
  ],
};
