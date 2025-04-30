import { mockProfile } from "@/entities/Profile";
import type { ProfileFormState } from "../model/types/profileForm";

export const mockProfileFormState = {
  isLoading: false,
  readonly: true,
  data: mockProfile,
  form: mockProfile,
} satisfies ProfileFormState;
