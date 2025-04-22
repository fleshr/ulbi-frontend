import { TestAsyncThunk } from "@/shared/lib/tests";
import { mockArticle } from "../../mock/article";
import { fetchArticleDetails } from "./fetchArticleDetails";

describe("fetchArticleDetails", () => {
  it("succees", async () => {
    const testThunk = new TestAsyncThunk(fetchArticleDetails);
    testThunk.api.get.mockResolvedValue(Promise.resolve({ data: mockArticle }));
    const res = await testThunk.callThunk("1");

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.get).toHaveBeenCalledTimes(1);
    expect(res.payload).toEqual(mockArticle);
    expect(res.meta.requestStatus).toBe("fulfilled");
  });

  it("error", async () => {
    const testThunk = new TestAsyncThunk(fetchArticleDetails);
    testThunk.api.get.mockResolvedValue(Promise.reject(new Error()));
    const res = await testThunk.callThunk("1");

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.api.get).toHaveBeenCalledTimes(1);
    expect(res.payload).toBe("error");
    expect(res.meta.requestStatus).toBe("rejected");
  });
});
