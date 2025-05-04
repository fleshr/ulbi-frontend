import { getByTestId } from "./commands/getByTestId";
import { login } from "./commands/login";

Cypress.Commands.add("login", login);
Cypress.Commands.add("getByTestId", getByTestId);
