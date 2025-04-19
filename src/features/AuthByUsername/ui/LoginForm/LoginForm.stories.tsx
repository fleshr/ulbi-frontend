import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import { withStoreProvider } from "@/shared/lib/decorators";

const meta = {
  title: "features/AuthByUsername/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withStoreProvider()],
};

export const Filled: Story = {
  decorators: [
    withStoreProvider({
      login: { username: "Login", password: "Password", isLoading: false },
    }),
  ],
};

export const Error: Story = {
  decorators: [
    withStoreProvider({
      login: {
        username: "123",
        password: "123",
        isLoading: false,
        error: "Error",
      },
    }),
  ],
};

export const Loading: Story = {
  decorators: [
    withStoreProvider({
      login: { username: "123", password: "123", isLoading: true },
    }),
  ],
};
