import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { TestAsyncThunk } from "@/shared/lib/tests";
import { ValidateError } from "../types/profileForm";
import { updateProfileData } from "./updateProfileData";

const profileForm = {
  isLoading: false,
  readonly: true,
  form: {
    id: "1",
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
    const testThunk = new TestAsyncThunk(updateProfileData, { profileForm });
    testThunk.api.put.mockResolvedValue(
      Promise.resolve({ data: profileForm.form }),
    );
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual(profileForm.form);
    expect(res.meta.requestStatus).toBe("fulfilled");
  });

  it("server error", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, { profileForm });
    testThunk.api.put.mockResolvedValue(Promise.reject(new Error()));
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual([ValidateError.SERVER_ERROR]);
    expect(res.meta.requestStatus).toBe("rejected");
  });

  it("no data error", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, {
      profileForm: { ...profileForm, form: undefined },
    });
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(0);
    expect(res.payload).toEqual([ValidateError.NO_DATA]);
    expect(res.meta.requestStatus).toBe("rejected");
  });

  it("validation error", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, {
      profileForm: {
        ...profileForm,
        form: {
          ...profileForm.form,
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
