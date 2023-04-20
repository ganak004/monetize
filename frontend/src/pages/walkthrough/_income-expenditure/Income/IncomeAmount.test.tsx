import { fireEvent, render, screen } from '@testing-library/react';

// write tests for IncomeAmount.tsx
import IncomeAmount from './IncomeAmount';

describe('IncomeAmount', () => {
  it('renders the component', () => {
    render(<IncomeAmount setValidInput={() => jest.fn()} />);
    expect(screen.getByText(/how much do you receive/i)).toBeInTheDocument();
  });

  it('calls setValidInput when the input is changed', () => {
    const setValidInput = jest.fn();
    const { getByLabelText } = render(
      <IncomeAmount setValidInput={setValidInput} />
    );
    fireEvent.change(getByLabelText('Monthly salary'), {
      target: { value: '1000' },
    });
    expect(setValidInput).toHaveBeenCalledWith(true);
  });
});
