// write tests for IncomeDate component
import { fireEvent, render, screen, within } from '@testing-library/react';

import IncomeDate from './IncomeDate';

describe('IncomeDate', () => {
  it('renders the component', () => {
    render(<IncomeDate setValidInput={() => jest.fn()} />);
    expect(
      screen.getByText(/On what date do you get paid/i)
    ).toBeInTheDocument();
  });

  it('renders the options', () => {
    const { getByRole } = render(
      <IncomeDate setValidInput={() => jest.fn()} />
    );
    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));

    expect(listbox.getByText(/22/i)).toBeInTheDocument();
  });

  it('calls setValidInput when an option is selected', () => {
    const setValidInput = jest.fn();
    const { getByRole } = render(<IncomeDate setValidInput={setValidInput} />);
    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));

    fireEvent.click(listbox.getByText(/24/i));
    expect(setValidInput).toHaveBeenCalledWith(true);
  });
});
