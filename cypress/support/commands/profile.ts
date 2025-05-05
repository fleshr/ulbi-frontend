export const updateProfile = (firstname: string, lastname: string) => {
  cy.getByTestId("EditableProfileCardHeader.EditButton").click();
  cy.getByTestId("ProfileCard.Firstname.Input").clear().type(firstname);
  cy.getByTestId("ProfileCard.Lastname.Input").clear().type(lastname);
  cy.getByTestId("EditableProfileCardHeader.SaveButton").click();
};

export const resetProfile = (profileId: string) => {
  cy.request({
    url: `http://localhost:8000/profile/${profileId}`,
    method: "PUT",
    headers: { Authorization: "test" },
    body: {
      first: "test",
      lastname: "user",
      age: 465,
      currency: "RUB",
      country: "Belarus",
      city: "Moscow",
      username: "test",
      avatar:
        "https://pyxis.nymag.com/v1/imgs/885/ea9/02d1f2cd6caeff95f72bfc996c2a6a1e1a-lofi-girl.1x.rsquare.w1400.jpg",
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile: typeof updateProfile;
      resetProfile: typeof resetProfile;
    }
  }
}
