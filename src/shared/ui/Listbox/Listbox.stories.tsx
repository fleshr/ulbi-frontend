import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Listbox } from "./Listbox";

const options = [
  { value: "1", label: "First" },
  { value: "2", label: "Second" },
  { value: "3", label: "Third" },
];

const meta = {
  title: "shared/Listbox",
  component: Listbox,
} satisfies Meta<typeof Listbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { options, selected: options[0], onChange: fn() },
};

export const WithLabel: Story = {
  args: { options, selected: options[0], onChange: fn(), label: "Label" },
};
