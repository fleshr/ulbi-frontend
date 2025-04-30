import { mockProfile } from "@/entities/Profile";
import { TestAsyncThunk } from "@/shared/lib/tests";
import { fetchProfileData } from "./fetchProfileData";

describe("fetchProfileData", () => {
  it("succees", async () => {
    const testThunk = new TestAsyncThunk(fetchProfileData);
    testThunk.api.get.mockResolvedValue({ data: mockProfile });
    const res = await testThunk.callThunk("1");

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.get).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual(mockProfile);
    expect(res.meta.requestStatus).toBe("fulfilled");
  });

  it("error", async () => {
    const testThunk = new TestAsyncThunk(fetchProfileData);
    testThunk.api.get.mockResolvedValue({ status: 403 });
    const res = await testThunk.callThunk("1");

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.get).toHaveBeenCalledTimes(1);
    expect(res.payload).toBe("error");
    expect(res.meta.requestStatus).toBe("rejected");
  });
});
