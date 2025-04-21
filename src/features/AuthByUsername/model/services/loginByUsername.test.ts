import { setUser } from "@/entities/User";
import { TestAsyncThunk } from "@/shared/lib/tests";
import { loginByUsername } from "./loginByUsername";

describe("loginByUsername", () => {
  it("succees", async () => {
    const testThunk = new TestAsyncThunk(loginByUsername);
    testThunk.api.post.mockResolvedValue({
      data: { id: "1", username: "123" },
    });
    const res = await testThunk.callThunk({ username: "123", password: "123" });

    expect(testThunk.dispatch).toHaveBeenCalledWith(
      setUser({ id: "1", username: "123" }),
    );
    expect(testThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(testThunk.api.post).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual({ id: "1", username: "123" });
    expect(res.meta.requestStatus).toBe("fulfilled");
  });

  it("error", async () => {
    const testThunk = new TestAsyncThunk(loginByUsername);
    testThunk.api.post.mockResolvedValue({ status: 403 });
    const res = await testThunk.callThunk({ username: "123", password: "123" });

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.post).toHaveBeenCalledTimes(1);
    expect(res.payload).toBe("error");
    expect(res.meta.requestStatus).toBe("rejected");
  });
});
