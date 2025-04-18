import type { Meta, StoryObj } from "@storybook/react";
import { Counter } from "./Counter";
import { withStoreProvider } from "@/shared/lib/decorators";

const meta = {
  title: "entities/Counter",
  component: Counter,
  decorators: [withStoreProvider()],
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
