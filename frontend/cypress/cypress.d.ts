import { mount } from 'cypress/react';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      selectIncomeSource: (source: string) => void;
      selectIncomeAmount: (amount: string) => void;
      selectIncomeDate: (date: string) => void;
      addExpenses: (
        expenses: { name: string; amount: string; date: string }[]
      ) => void;
    }
  }
}
