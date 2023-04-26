import { fireEvent, render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import IncomeSource from './IncomeSource';

describe('IncomeSource', () => {
  it('renders the component', () => {
    render(
      <Provider store={store}>
        <IncomeSource setValidInput={() => jest.fn()} />
      </Provider>
    );
    expect(screen.getByText(/source of income/i)).toBeInTheDocument();
  });

  it('renders the options', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <IncomeSource setValidInput={() => jest.fn()} />
      </Provider>
    );
    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));

    expect(listbox.getByText(/My salary/i)).toBeInTheDocument();
    expect(listbox.getByText(/My pension/i)).toBeInTheDocument();
    expect(listbox.getByText(/My investments/i)).toBeInTheDocument();
    expect(listbox.getByText(/My benefits/i)).toBeInTheDocument();
    expect(listbox.getByText(/Other/i)).toBeInTheDocument();
  });

  it('calls setValidInput when an option is selected', () => {
    const setValidInput = jest.fn();
    const { getByRole } = render(
      <Provider store={store}>
        <IncomeSource setValidInput={setValidInput} />
      </Provider>
    );
    fireEvent.mouseDown(getByRole('button'));

    const listbox = within(getByRole('listbox'));

    fireEvent.click(listbox.getByText(/My salary/i));
    expect(setValidInput).toHaveBeenCalledWith(true);
  });
});
