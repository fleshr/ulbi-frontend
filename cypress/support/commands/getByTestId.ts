export const getByTestId = (testId: string) => {
  return cy.get(`[data-testid=${testId}]`);
};
