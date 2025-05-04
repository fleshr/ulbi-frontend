import { USER_LOCALSTORAGE_KEY } from "../../../src/shared/constants";

export const login = (username: string, password: string) => {
  cy.request({
    url: "http://localhost:8000/login",
    method: "POST",
    body: { username, password },
  }).then(({ body }) => {
    window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
    cy.visit("/");
  });
};
