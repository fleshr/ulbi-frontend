import type { Profile } from "@/entities/Profile";
import { ValidateError } from "../../constants/validateError";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateError.NO_DATA];
  }

  const errors: ValidateError[] = [];

  if (
    !profile.first ||
    !profile.lastname ||
    !profile.city ||
    !profile.username ||
    !profile.avatar
  ) {
    errors.push(ValidateError.INCORRECT_USER_DATA);
  }

  if (!profile.age || Number.isNaN(profile.age)) {
    errors.push(ValidateError.INCORRECT_AGE);
  }

  return errors;
};
