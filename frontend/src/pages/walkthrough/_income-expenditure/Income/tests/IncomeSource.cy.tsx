import React from 'react';

import IncomeSource from '../IncomeSource';

describe('<IncomeSource />', () => {
  it('renders', () => {
    cy.mount(<IncomeSource handlePrev={() => null} handleNext={() => null} />);
    cy.get('#income-source').should('exist');
  });

  // Scenario: User can add income source
  it('can add income source', () => {
    cy.mount(<IncomeSource handlePrev={() => null} handleNext={() => null} />);
    cy.get('#income-source').click();
    // TODO: Add dropdown component
    cy.get('#income-source').select('Employment');
  });

  // Scenario: User can click next button
  it('can click next button', () => {
    cy.mount(<IncomeSource handlePrev={() => null} handleNext={() => null} />);
    cy.get('#next-button').click();
    cy.get('#income-source').should('not.exist');
  });
});
