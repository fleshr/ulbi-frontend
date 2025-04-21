import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { TestAsyncThunk } from "@/shared/lib/tests";
import { ValidateError } from "../types";
import { updateProfileData } from "./updateProfileData";

const profile = {
  isLoading: false,
  readonly: true,
  form: {
    username: "John Doe",
    age: 30,
    country: Country.Russia,
    first: "John",
    lastname: "Doe",
    avatar: "url",
    city: "Moscow",
    currency: Currency.RUB,
  },
};

describe("updateProfileData", () => {
  it("success", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, { profile });
    testThunk.api.put.mockResolvedValue(
      Promise.resolve({ data: profile.form }),
    );
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual(profile.form);
    expect(res.meta.requestStatus).toBe("fulfilled");
  });

  it("server error", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, { profile });
    testThunk.api.put.mockResolvedValue(Promise.reject(new Error()));
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual([ValidateError.SERVER_ERROR]);
    expect(res.meta.requestStatus).toBe("rejected");
  });

  it("no data error", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, {
      profile: { ...profile, form: undefined },
    });
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(0);
    expect(res.payload).toEqual([ValidateError.NO_DATA]);
    expect(res.meta.requestStatus).toBe("rejected");
  });

  it("validation error", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        ...profile,
        form: {
          ...profile.form,
          username: "",
          age: undefined as unknown as number,
        },
      },
    });
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(0);
    expect(res.payload).toEqual([
      ValidateError.INCORRECT_USER_DATA,
      ValidateError.INCORRECT_AGE,
    ]);
    expect(res.meta.requestStatus).toBe("rejected");
  });
});
