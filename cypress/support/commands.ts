import * as article from "./commands/article";
import * as auth from "./commands/auth";
import * as common from "./commands/common";
import * as profile from "./commands/profile";

Cypress.Commands.addAll(auth);
Cypress.Commands.addAll(common);
Cypress.Commands.addAll(profile);
Cypress.Commands.addAll(article);
