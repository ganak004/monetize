// write tests for IncomeDate component
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import IncomeDate from './IncomeDate';

describe('IncomeDate', () => {
  it('renders the component', () => {
    render(
      <Provider store={store}>
        <IncomeDate setValidInput={() => jest.fn()} />
      </Provider>
    );
    expect(
      screen.getByText(/On what date do you get paid/i)
    ).toBeInTheDocument();
  });

  it('renders the options', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <IncomeDate setValidInput={() => jest.fn()} />
      </Provider>
    );
    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));

    expect(listbox.getByText(/22/i)).toBeInTheDocument();
  });

  it('calls setValidInput when an option is selected', () => {
    const setValidInput = jest.fn();
    const { getByRole } = render(
      <Provider store={store}>
        <IncomeDate setValidInput={setValidInput} />
      </Provider>
    );
    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));

    fireEvent.click(listbox.getByText(/24/i));
    expect(setValidInput).toHaveBeenCalledWith(true);
  });
});
