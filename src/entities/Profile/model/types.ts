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

export interface ProfileState {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateError[];
}

export enum ValidateError {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_AGE = "INCORRECT_AGE",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}
