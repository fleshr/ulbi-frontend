import { articlesPageActions } from "@/pages/ArticlesPage/model/articlesPageSlice";
import { fetchArticles } from "@/pages/ArticlesPage/model/services/fetchArticles";
import { TestAsyncThunk } from "@/shared/lib/tests";
import { mockedArticlesPage } from "../../mock/articlesPage";
import { initArticlesPage } from "./initArticlesPage";

jest.mock("./fetchArticles");
const mockedFetchArticles = jest.mocked(fetchArticles);

describe("initArticlesPage", () => {
  it("init page if not initialized", async () => {
    const testThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: { ...mockedArticlesPage, _inited: false },
    });
    await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(4);
    expect(testThunk.dispatch).toHaveBeenCalledWith(
      articlesPageActions.initView(),
    );
    expect(mockedFetchArticles.mock.calls).toHaveLength(1);
  });

  it("dont init page if initialized", async () => {
    const testThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: { ...mockedArticlesPage, _inited: true },
    });
    await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.dispatch).not.toHaveBeenCalledWith(
      articlesPageActions.initView(),
    );
    expect(mockedFetchArticles.mock.calls).toHaveLength(0);
  });
});
