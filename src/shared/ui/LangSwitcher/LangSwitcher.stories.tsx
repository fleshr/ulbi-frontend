import type { Meta, StoryObj } from "@storybook/react";
import { LangSwitcher } from "./LangSwitcher";

const meta = {
  title: "shared/LangSwitcher",
  component: LangSwitcher,
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Short: Story = {
  args: { short: true },
};
