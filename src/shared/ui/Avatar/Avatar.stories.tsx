import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const src =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAUCAwYEB//EACgQAAICAQMCBgIDAAAAAAAAAAABAgMEBRExIVESNEFhcXITFCKRwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6mAb8PH/ZyY18LmT9gMK6LbntXXKXwjKzEvqW86pJd9uh0kIRrgoQioxXCRkByYKGqYkaLI2VraE+V2ZPAAAAUNHkllyT5lF7E8zqlOFsZV7+NPpsB1INdMrJ1RlZDwTfK3Nj4AnazJLGhH1ct0RD1ahZdZkv80HDbpGPseUAAACW72XJ0GDgxxoKUkna11fb2JWnVqzOrT4j/L+joQAAA1ZGPXk1uFi+H6o5y+mWPdKuXK9e51BJ1qtb1WLl7xYEkAAe/SPOv6MugAAAAJus+Xr+/wDgAEUAAf/Z";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { src },
};
