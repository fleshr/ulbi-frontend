import { Article } from "../../../src/entities/Article";

export const createArticle = () => {
  return cy
    .request<Article>({
      url: "http://localhost:8000/articles",
      method: "POST",
      headers: { Authorization: "test" },
      body: {
        title: "Научная статья - Биология",
        subtitle: "БиологиЯ",
        img: "https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200",
        views: 1022,
        createdAt: "26.02.2022",
        type: ["SCIENCE"],
        blocks: [],
        userId: "3",
      },
    })
    .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
  cy.request<Article>({
    url: `http://localhost:8000/articles/${articleId}`,
    method: "DELETE",
    headers: { Authorization: "test" },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle: typeof createArticle;
      removeArticle: typeof removeArticle;
    }
  }
}
