let userId = "";

describe("User profile", () => {
  beforeEach(() => {
    cy.login("test", "123").then((user) => {
      userId = user.id;
      cy.visit(`/profile/${user.id}`);
    });
  });

  it("Correct profile data", () => {
    cy.getByTestId("ProfileCard.Firstname.Input").should("have.value", "test");
    cy.getByTestId("ProfileCard.Lastname.Input").should("have.value", "user");
  });

  it("Correctly update", () => {
    cy.updateProfile("first", "second");
    cy.getByTestId("ProfileCard.Firstname.Input").should("have.value", "first");
    cy.getByTestId("ProfileCard.Lastname.Input").should("have.value", "second");
  });

  afterEach(() => {
    cy.resetProfile(userId);
    cy.logout();
  });
});
