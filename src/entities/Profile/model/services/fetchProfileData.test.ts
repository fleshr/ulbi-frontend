import { TestAsyncThunk } from "@/shared/lib/tests";
import { fetchProfileData } from "./fetchProfileData";

const data = {
  username: "John Doe",
  age: 30,
  country: "Russia",
  first: "John",
  lastname: "Doe",
  avatar: "url",
  city: "Moscow",
  currency: "RUB",
};

describe("fetchProfileData", () => {
  it("succees", async () => {
    const testThunk = new TestAsyncThunk(fetchProfileData);
    testThunk.api.get.mockResolvedValue({ data });
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.get).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual(data);
    expect(res.meta.requestStatus).toBe("fulfilled");
  });

  it("error", async () => {
    const testThunk = new TestAsyncThunk(fetchProfileData);
    testThunk.api.get.mockResolvedValue({ status: 403 });
    const res = await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.get).toHaveBeenCalledTimes(1);
    expect(res.payload).toBe("error");
    expect(res.meta.requestStatus).toBe("rejected");
  });
});
