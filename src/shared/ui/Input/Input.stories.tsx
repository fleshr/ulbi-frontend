import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { fn } from "@storybook/test";

const meta = {
  title: "shared/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { onChange: fn() },
};

export const WithValue: Story = {
  args: { onChange: fn(), value: "Some value" },
};

export const Disabled: Story = {
  args: { onChange: fn(), value: "Some value", disabled: true },
};
