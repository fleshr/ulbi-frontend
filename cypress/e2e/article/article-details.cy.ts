let articleId = "";

describe("ArticleDetails", () => {
  beforeEach(() => {
    cy.login("test", "123");
    cy.createArticle().then(({ id }) => {
      articleId = id;
      cy.visit(`/articles/${id}`);
    });
  });

  it("Article info", () => {
    cy.getByTestId("ArticleDetails").should("exist");
  });

  it("Article rating", () => {
    cy.getByTestId("RatingCard").should("exist");
  });

  it("Set rating", () => {
    cy.getByTestId("StarRating.Star.4").click();
    cy.getByTestId("RatingCard.Feedback.Input.Input").type("good");
    cy.getByTestId("RatingCard.Feedback.SendButton").click();
    cy.getByDataAttr("selected", "true").should("have.length", 4);
  });

  it("Add comment", () => {
    cy.getByTestId("CommentForm.Input.Input").type("comment");
    cy.getByTestId("CommentForm.SendButton").click();
    cy.getByTestId("CommentsList").children().should("have.length", 1);
  });

  afterEach(() => {
    cy.removeArticle(articleId);
    cy.logout();
  });
});
