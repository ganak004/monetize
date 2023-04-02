describe('Walkthrough Process', () => {
  before(() => {
    cy.visit('/');
  });

  it('can add income source', () => {
    cy.selectIncomeSource('My pension');
  });
  it('can add income amount', () => {
    cy.selectIncomeAmount('3412');
  });
  it('can add income date', () => {
    cy.selectIncomeDate('24');
  });
  it.skip('can add expenses', () => {
    cy.addExpenses([
      {
        name: 'Rent',
        amount: '1000',
        date: '24',
      },
      {
        name: 'Food',
        amount: '200',
        date: '24',
      },
      {
        name: 'Transport',
        amount: '100',
        date: '12',
      },
    ]);
  });
});
