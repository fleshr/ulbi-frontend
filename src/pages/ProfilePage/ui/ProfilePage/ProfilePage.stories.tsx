import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import type { Meta, StoryObj } from "@storybook/react";
import { withStoreProvider } from "../../../../shared/lib/decorators";
import { ProfilePage } from "./ProfilePage";

const profile = {
  isLoading: false,
  readonly: true,
  form: {
    username: "John Doe",
    age: 30,
    country: Country.Russia,
    first: "John",
    lastname: "Doe",
    avatar:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAyADIDASIAAhEBAxEB/8QAGgABAQADAQEAAAAAAAAAAAAAAAUCAwYEB//EACgQAAICAQMCBgIDAAAAAAAAAAABAgMEBRExIVESNEFhcXITFCKRwf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6mAb8PH/ZyY18LmT9gMK6LbntXXKXwjKzEvqW86pJd9uh0kIRrgoQioxXCRkByYKGqYkaLI2VraE+V2ZPAAAAUNHkllyT5lF7E8zqlOFsZV7+NPpsB1INdMrJ1RlZDwTfK3Nj4AnazJLGhH1ct0RD1ahZdZkv80HDbpGPseUAAACW72XJ0GDgxxoKUkna11fb2JWnVqzOrT4j/L+joQAAA1ZGPXk1uFi+H6o5y+mWPdKuXK9e51BJ1qtb1WLl7xYEkAAe/SPOv6MugAAAAJus+Xr+/wDgAEUAAf/Z",
    city: "Moscow",
    currency: Currency.RUB,
  },
};

const meta = {
  title: "pages/ProfilePage/ProfilePage",
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withStoreProvider({ profile: { ...profile, readonly: true } })],
};

export const Editing: Story = {
  decorators: [withStoreProvider({ profile: { ...profile, readonly: false } })],
};
