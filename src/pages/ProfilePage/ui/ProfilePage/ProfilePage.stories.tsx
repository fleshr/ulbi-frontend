import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateError } from "@/entities/Profile";
import { UserState } from "@/entities/User";
import avatar from "@/shared/assets/tests/avatar.jpg";
import { withRouterProvider, withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfilePage } from "./ProfilePage";

const profile = {
  isLoading: false,
  readonly: true,
  form: {
    id: "1",
    username: "John Doe",
    age: 30,
    country: Country.Russia,
    first: "John",
    lastname: "Doe",
    avatar,
    city: "Moscow",
    currency: Currency.RUB,
  },
};

const meta = {
  title: "pages/ProfilePage/ProfilePage",
  component: ProfilePage,
  decorators: [withRouterProvider()],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    withStoreProvider({
      profile: { ...profile, readonly: true },
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const Editing: Story = {
  decorators: [
    withStoreProvider({
      profile: { ...profile, readonly: false },
      user: { user: { id: "1" } } as UserState,
    }),
  ],
};

export const WithError: Story = {
  decorators: [
    withStoreProvider({
      profile: {
        ...profile,
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
      profile: { ...profile, readonly: true },
      user: { user: { id: "2" } } as UserState,
    }),
  ],
};
