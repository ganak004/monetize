import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

// write tests for IncomeAmount.tsx
import IncomeAmount from './IncomeAmount';

describe('IncomeAmount', () => {
  it('renders the component', () => {
    render(
      <Provider store={store}>
        <IncomeAmount setValidInput={() => jest.fn()} />
      </Provider>
    );
    expect(screen.getByText(/how much do you receive/i)).toBeInTheDocument();
  });

  it('calls setValidInput when the input is changed', () => {
    const setValidInput = jest.fn();
    const { getByLabelText } = render(
      <Provider store={store}>
        <IncomeAmount setValidInput={setValidInput} />
      </Provider>
    );
    fireEvent.change(getByLabelText('Monthly salary'), {
      target: { value: '1000' },
    });
    expect(setValidInput).toHaveBeenCalledWith(true);
  });
});
