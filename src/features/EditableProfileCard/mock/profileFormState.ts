import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatar from "@/shared/assets/tests/avatar.jpg";
import { ProfileFormState } from "../model/types/profileForm";

export const mockProfileFormState: ProfileFormState = {
  isLoading: false,
  readonly: true,
  form: {
    id: "1",
    username: "John Doe",
    age: 30,
    country: Country.Russia,
    first: "John",
    lastname: "Doe",
    avatar,
    city: "Moscow",
    currency: Currency.RUB,
  },
};
