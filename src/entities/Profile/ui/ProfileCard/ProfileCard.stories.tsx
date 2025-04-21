import avatar from "@/shared/assets/tests/avatar.jpg";
import { Country, Currency } from "@/shared/constants";
import { withStoreProvider } from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";

const profile = {
  isLoading: false,
  readonly: false,
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
  title: "entities/Profile/ProfileCard",
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  decorators: [withStoreProvider()],
};

export const Filled: Story = {
  decorators: [withStoreProvider({ profile })],
};
