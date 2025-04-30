import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatar from "@/shared/assets/tests/avatar.jpg";
import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";

const profile = {
  id: "1",
  first: "John",
  lastname: "Doe",
  age: 26,
  currency: Currency.RUB,
  country: Country.Russia,
  city: "Moscow",
  username: "admin",
  avatar,
};

const meta = {
  title: "entities/Profile/ProfileCard",
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: { profile: undefined, isLoading: false, readOnly: false },
};

export const Filled: Story = {
  args: { profile, isLoading: false, readOnly: false },
};

export const Loading: Story = {
  args: { profile: undefined, isLoading: true, readOnly: false },
};

export const Readonly: Story = {
  args: { profile, isLoading: false, readOnly: true },
};
