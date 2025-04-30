import type { UserState } from "@/entities/User";
import {
  withFullHeight,
  withRouterProvider,
  withStoreProvider,
  withTheme,
} from "@/shared/lib/decorators";
import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "./Sidebar";

const meta = {
  title: "widgets/Sidebar/Sidebar",
  component: Sidebar,
  decorators: [
    withTheme,
    withRouterProvider(),
    withFullHeight,
    withStoreProvider({ user: { user: null } as UserState }),
  ],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { defaultCollapsed: false },
};

export const User: Story = {
  decorators: [
    withStoreProvider({
      user: { user: { id: "1", username: "user" } } as UserState,
    }),
  ],
  args: { defaultCollapsed: false },
};

export const Collapsed: Story = {
  args: { defaultCollapsed: true },
};
