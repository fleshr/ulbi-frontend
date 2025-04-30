import { mockProfile } from "@/entities/Profile";
import { ValidateError } from "../../constants/validateError";
import { validateProfileData } from "./validateProfileData";

describe("validateProfileData", () => {
  it("no errors", () => {
    const errors = validateProfileData(mockProfile);
    expect(errors).toEqual([]);
  });

  it("no data error", () => {
    const errors = validateProfileData(undefined);
    expect(errors).toEqual([ValidateError.NO_DATA]);
  });

  it("incorect user data error", () => {
    const errors = validateProfileData({ ...mockProfile, username: "" });
    expect(errors).toEqual([ValidateError.INCORRECT_USER_DATA]);
  });

  it("incorect age error", () => {
    const errors = validateProfileData({
      ...mockProfile,
      age: undefined as unknown as number,
    });
    expect(errors).toEqual([ValidateError.INCORRECT_AGE]);
  });

  it("multiple errors", () => {
    const errors = validateProfileData({
      ...mockProfile,
      username: "",
      age: undefined as unknown as number,
    });
    expect(errors).toEqual([
      ValidateError.INCORRECT_USER_DATA,
      ValidateError.INCORRECT_AGE,
    ]);
  });
});
