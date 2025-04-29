import { UserState } from "@/entities/User";
import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfileFormState } from "../../model/types/profileForm";
import { EditableProfileCardHeader } from "./EditableProfileCardHeader";

const meta = {
  title: "features/EditableProfileCard/EditableProfileCardHeader",
  component: EditableProfileCardHeader,
} satisfies Meta<typeof EditableProfileCardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withStoreProvider({
      profileForm: { readonly: true, form: { id: "1" } } as ProfileFormState,
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const Editing: Story = {
  decorators: [
    withStoreProvider({
      profileForm: { readonly: false, form: { id: "1" } } as ProfileFormState,
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const CantEdit: Story = {
  decorators: [
    withStoreProvider({
      profileForm: { readonly: false, form: { id: "1" } } as ProfileFormState,
      user: { user: { id: "2" } } as UserState,
    }),
  ],
};
