import type { Country, Currency } from "@/shared/constants";

export interface Profile {
  id: string;
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Country;
  city: string;
  username: string;
  avatar: string;
}
