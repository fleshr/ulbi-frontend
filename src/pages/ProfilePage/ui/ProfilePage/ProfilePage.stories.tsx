import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatar from "@/shared/assets/tests/avatar.jpg";
import type { Meta, StoryObj } from "@storybook/react";
import { withStoreProvider } from "../../../../shared/lib/decorators";
import { ProfilePage } from "./ProfilePage";

const profile = {
  isLoading: false,
  readonly: true,
  form: {
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
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withStoreProvider({ profile: { ...profile, readonly: true } })],
};

export const Editing: Story = {
  decorators: [withStoreProvider({ profile: { ...profile, readonly: false } })],
};
