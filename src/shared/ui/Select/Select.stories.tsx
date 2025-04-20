import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Select } from "./Select";

const options = [
  { value: "1", label: "First" },
  { value: "2", label: "Second" },
  { value: "3", label: "Third" },
];

const meta = {
  title: "shared/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { options, onChange: fn() },
};

export const Disabled: Story = {
  args: { options, onChange: fn(), disabled: true },
};

export const WithLabel: Story = {
  args: { options, onChange: fn(), label: "Label" },
};
