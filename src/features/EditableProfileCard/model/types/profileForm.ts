import type { Profile } from "@/entities/Profile";
import type { ValidateError } from "../../constants/validateError";

export interface ProfileFormState {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateError[];
}
