import { TestAsyncThunk } from "@/shared/lib/tests";
import { initArticlesPage } from "./initArticlesPage";
import { fetchArticles } from "@/pages/ArticlesPage/model/services/fetchArticles";
import { articlesPageActions } from "@/pages/ArticlesPage/model/articlesPageSlice";
import { ArticlesPageState } from "@/pages/ArticlesPage";

jest.mock("./fetchArticles");
const mockedFetchArticles = jest.mocked(fetchArticles);

const articlesPage: ArticlesPageState = {
  articles: [],
  view: "small",
  page: 0,
  limit: 0,
  hasMore: false,
  _inited: false,
};

describe("initArticlesPage", () => {
  it("init page if not initialized", async () => {
    const testThunk = new TestAsyncThunk(initArticlesPage, { articlesPage });
    await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(4);
    expect(testThunk.dispatch).toHaveBeenCalledWith(
      articlesPageActions.initView(),
    );
    expect(mockedFetchArticles.mock.calls).toHaveLength(1);
  });

  it("dont init page if initialized", async () => {
    const testThunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: { ...articlesPage, _inited: true },
    });
    await testThunk.callThunk(undefined);

    expect(testThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(testThunk.dispatch).not.toHaveBeenCalledWith(
      articlesPageActions.initView(),
    );
    expect(mockedFetchArticles.mock.calls).toHaveLength(0);
  });
});
