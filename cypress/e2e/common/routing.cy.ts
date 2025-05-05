describe("Routing", () => {
  describe("Not authorized user", () => {
    it("Visit main page", () => {
      cy.visit("/");
      cy.getByTestId("MainPage").should("exist");
    });

    it("Redirect to main page from auth route", () => {
      cy.visit("/profile/1");
      cy.getByTestId("MainPage").should("exist");
    });

    it("Not found page", () => {
      cy.visit("/adsfasdf");
      cy.getByTestId("NotFoundPage").should("exist");
    });
  });

  describe("Authorized user", () => {
    beforeEach(() => {
      cy.login("test", "123");
    });

    it("Visit profile page", () => {
      cy.visit("/profile/3");
      cy.getByTestId("ProfilePage").should("exist");
    });

    it("Visit articles page", () => {
      cy.visit("/articles");
      cy.getByTestId("ArticlesPage").should("exist");
    });

    afterEach(() => {
      cy.logout();
    });
  });
});
