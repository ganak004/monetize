import React from 'react';

import IncomeSource from '../IncomeSource';

describe('<IncomeSource />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IncomeSource handlePrev={() => null} handleNext={() => null} />);
  });
});
