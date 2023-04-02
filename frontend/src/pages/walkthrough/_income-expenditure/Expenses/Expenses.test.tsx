// write tests for IncomeDate component
import { fireEvent, render, screen, within } from '@testing-library/react';

import Expenses from './Expenses';

describe('Expenses', () => {
  it.only('renders the component', () => {
    render(<Expenses />);
    expect(
      screen.getByText(/List your monthly expenses below/i)
    ).toBeInTheDocument();
  });

  // TODO:
  // 1. Test to check the Name input
  // 2. Test to check the Amount input
  // 3. Test to check the Date dropdown
  // 4. Test to check the Add button

  it('works with', () => {
    const { getByRole } = render(<Expenses />);
    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));

    expect(listbox.getByText(/22/i)).toBeInTheDocument();
  });

  it('calls setValidInput when an option is selected', () => {
    const { getByRole } = render(<Expenses />);
    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));

    fireEvent.click(listbox.getByText(/24/i));
  });
});
