Cypress.Commands.add('selectIncomeSource', (source: string) => {
  // Scenario: User can see income source
  cy.get('#income-source').should('exist');

  // Next button should be disabled
  cy.get('#next-button').should('be.disabled');

  // Scenario: User can add income source
  cy.get('#income-source').click();
  cy.contains(source).click();
  cy.contains(source).should('be.visible');

  // Scenario: User can click next button
  cy.get('#next-button').click();
  cy.get('#income-source').should('not.exist');
});

Cypress.Commands.add('selectIncomeAmount', (amount: string) => {
  // Scenario: User can see income amount
  cy.get('#income-amount').should('exist');

  // Next button should be disabled
  cy.get('#next-button').should('be.disabled');

  // Scenario: User can add income amount
  cy.get('#income-amount').type(amount);
  cy.get('#income-amount').should(
    'have.value',
    Number(amount).toLocaleString()
  );

  // Scenario: User can click next button
  cy.get('#next-button').click();
  cy.get('#income-amount').should('not.exist');
});

Cypress.Commands.add('selectIncomeDate', (date: string) => {
  // Scenario: User can see salary date
  cy.get('#income-date').should('exist');

  // Next button should be disabled
  cy.get('#next-button').should('be.disabled');

  // Scenario: User can add income date
  cy.get('#income-date').click();
  cy.contains(date).click();
  cy.contains(date).should('be.visible');

  // Scenario: User can click next button
  cy.get('#next-button').click();
  cy.get('#income-date').should('not.exist');
});

Cypress.Commands.add(
  'addExpenses',
  (expenses: { name: string; amount: string; date: string }[]) => {
    // Scenario: User can see expenses
    cy.get('#expenses').should('exist');

    // Next button should be disabled
    cy.get('#next-button').should('be.disabled');

    // Scenario: User can add expenses
    expenses.forEach((expense) => {
      cy.get('#add-expense').click();
      cy.get('#expense-name').type(expense.name);
      cy.get('#expense-amount').type(expense.amount);
      cy.get('#expense-date').click();
      cy.contains(expense.date).click();

      // Select "+" button
      cy.get('#add-expense').click();
    });

    // Scenario: User can click next button
    cy.get('#next-button').click();
    cy.get('#expenses').should('not.exist');
  }
);

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
