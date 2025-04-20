import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "./Input";

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

export const Readonly: Story = {
  args: { onChange: fn(), value: "Some value", readOnly: true },
};

export const WithLabel: Story = {
  args: { onChange: fn(), value: "Some value", label: "Label" },
};
