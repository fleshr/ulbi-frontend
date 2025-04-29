import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatar from "@/shared/assets/tests/avatar.jpg";
import { ProfileFormState } from "../model/types/profileForm";

const data = {
  id: "1",
  username: "John Doe",
  age: 30,
  country: Country.Russia,
  first: "John",
  lastname: "Doe",
  avatar,
  city: "Moscow",
  currency: Currency.RUB,
};

export const mockProfileFormState: ProfileFormState = {
  isLoading: false,
  readonly: true,
  data,
  form: data,
};
