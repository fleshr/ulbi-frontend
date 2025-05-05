export const getByTestId = (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
};

export const getByDataAttr = (attr: string, value: string) => {
  return cy.get(`[data-${attr}="${value}"]`);
};

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId: typeof getByTestId;
      getByDataAttr: typeof getByDataAttr;
    }
  }
}
