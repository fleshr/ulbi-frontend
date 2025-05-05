import type { User } from "../../../src/entities/User";
import { USER_LOCALSTORAGE_KEY } from "../../../src/shared/constants";

export const login = (username: string, password: string) => {
  return cy
    .request<User>({
      url: "http://localhost:8000/login",
      method: "POST",
      body: { username, password },
    })
    .then(({ body }) => {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));
      return body;
    });
};

export const logout = () => {
  window.localStorage.removeItem(USER_LOCALSTORAGE_KEY);
};

declare global {
  namespace Cypress {
    interface Chainable {
      login: typeof login;
      logout: typeof logout;
    }
  }
}
