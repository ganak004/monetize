describe('Walkthrough Process', () => {
  before(() => {
    cy.visit('/');
  });

  it('can add income source', () => {
    cy.selectIncomeSource('My pension');
  });
});
