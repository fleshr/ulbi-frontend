import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import type { Profile } from "../model/types/profile";

export const mockProfile: Profile = {
  id: "1",
  username: "John Doe",
  age: 30,
  country: Country.Russia,
  first: "John",
  lastname: "Doe",
  avatar: "url",
  city: "Moscow",
  currency: Currency.RUB,
};
