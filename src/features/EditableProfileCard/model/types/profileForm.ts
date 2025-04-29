import { Profile } from "@/entities/Profile";

export interface ProfileFormState {
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
