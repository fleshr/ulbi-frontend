import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateError } from "../types";
import { validateProfileData } from "./validateProfileData";

const data = {
  username: "John Doe",
  age: 30,
  country: Country.Russia,
  first: "John",
  lastname: "Doe",
  avatar: "url",
  city: "Moscow",
  currency: Currency.RUB,
};

describe("validateProfileData", () => {
  it("no errors", () => {
    const errors = validateProfileData(data);
    expect(errors).toEqual([]);
  });

  it("no data error", () => {
    const errors = validateProfileData(undefined);
    expect(errors).toEqual([ValidateError.NO_DATA]);
  });

  it("incorect user data error", () => {
    const errors = validateProfileData({ ...data, username: "" });
    expect(errors).toEqual([ValidateError.INCORRECT_USER_DATA]);
  });

  it("incorect age error", () => {
    const errors = validateProfileData({
      ...data,
      age: undefined as unknown as number,
    });
    expect(errors).toEqual([ValidateError.INCORRECT_AGE]);
  });

  it("multiple errors", () => {
    const errors = validateProfileData({
      ...data,
      username: "",
      age: undefined as unknown as number,
    });
    expect(errors).toEqual([
      ValidateError.INCORRECT_USER_DATA,
      ValidateError.INCORRECT_AGE,
    ]);
  });
});
