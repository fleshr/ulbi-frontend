import { TestAsyncThunk } from "@/shared/lib/tests";
import { ValidateError } from "../../constants/validateError";
import { mockProfileFormState } from "../../mock/profileFormState";
import { updateProfileData } from "./updateProfileData";

describe("updateProfileData", () => {
  it("success", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, {
      profileForm: mockProfileFormState,
    });
    testThunk.api.put.mockResolvedValue(
      Promise.resolve({ data: mockProfileFormState.form }),
    );
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual(mockProfileFormState.form);
    expect(res.meta.requestStatus).toBe("fulfilled");
  });

  it("server error", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, {
      profileForm: mockProfileFormState,
    });
    testThunk.api.put.mockResolvedValue(Promise.reject(new Error()));
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.put).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual([ValidateError.SERVER_ERROR]);
    expect(res.meta.requestStatus).toBe("rejected");
  });

  it("no data error", async () => {
    const testThunk = new TestAsyncThunk(updateProfileData, {
      profileForm: { ...mockProfileFormState, form: undefined },
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
        ...mockProfileFormState,
        form: {
          ...mockProfileFormState.form,
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
