describe("ArticlesList", () => {
  beforeEach(() => {
    cy.login("test", "123");
    cy.visit("/articles");
  });

  it("Should exist", () => {
    cy.getByTestId("ArticlesList").should("exist");
    cy.getByTestId("ArticleCard").should("have.length.greaterThan", 3);
  });

  it("Should exist (fixture)", () => {
    cy.intercept("GET", "/articles?*", { fixture: "articles-list.json" });
    cy.getByTestId("ArticlesList").should("exist");
    cy.getByTestId("ArticleCard").should("have.length.greaterThan", 3);
  });

  afterEach(() => {
    cy.logout();
  });
});
