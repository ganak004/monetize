import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import appReducer from '@/redux/appSlice';

import Expenses from './Expenses';

type Expense = {
  expenseName: string;
  expenseAmount: number;
  expenseDate: string;
};

const renderExpensesComponent = (
  expenses: Expense[] = [
    {
      expenseName: '',
      expenseAmount: 0,
      expenseDate: '',
    },
  ],
  incomeTotal = 0,
  expensesTotal = 0,
  setValidInput = jest.fn()
) => {
  const store = configureStore({
    reducer: {
      app: appReducer,
    },
    preloadedState: {
      app: {
        lightMode: true,
        incomeSource: '',
        incomeDate: '',
        incomeTotal,
        expensesTotal,
        expenses,
        goalAmount: 0,
        goalDate: '12-01-2021',
        goalName: 'Holiday',
      },
    },
  });

  render(
    <Provider store={store}>
      <Expenses setValidInput={setValidInput} />
    </Provider>
  );
};

describe('Expenses Component', () => {
  test('renders initial expense row', () => {
    renderExpensesComponent();

    expect(screen.getByTestId('expense-row-1')).toBeInTheDocument();
  });

  test('adds a new expense row on button click', () => {
    renderExpensesComponent();

    userEvent.click(screen.getByText('+'));

    waitFor(() => {
      expect(screen.queryByTestId('expense-row-2')).toBeInTheDocument();
    });
  });

  test('updates the expense name', () => {
    renderExpensesComponent();
    const input = screen.getByTestId('expense-name-1');

    fireEvent.change(input, { target: { value: 'Rent' } });
    waitFor(() => {
      expect(input).toHaveValue('Rent');
    });
  });

  test('updates the expense amount', () => {
    renderExpensesComponent();
    const input = screen.getByTestId('expense-amount-1');

    fireEvent.change(input, { target: { value: '1000' } });
    waitFor(() => {
      expect(input).toHaveValue('1,000');
    });
  });

  test('updates the expense date', () => {
    renderExpensesComponent();
    const input = screen.getByTestId('expense-date-1');

    fireEvent.change(input, { target: { value: '1st' } });
    waitFor(() => {
      expect(input).toHaveValue('1st');
    });
  });

  test('calculates the correct total expense amount', () => {
    const updateExpensesTotal = jest.fn();
    renderExpensesComponent(
      [
        { expenseName: 'Rent', expenseAmount: 1000, expenseDate: '1st' },
        { expenseName: 'Groceries', expenseAmount: 200, expenseDate: '10th' },
      ],
      0,
      0,
      updateExpensesTotal
    );

    fireEvent.change(screen.getByTestId('expense-amount-1'), {
      target: { value: '1500' },
    });

    waitFor(() => {
      expect(updateExpensesTotal).toHaveBeenCalledWith(1700);
    });
  });

  test('validates input correctly', () => {
    const setValidInput = jest.fn();
    renderExpensesComponent(
      [
        { expenseName: 'Rent', expenseAmount: 1000, expenseDate: '1st' },
        { expenseName: 'Groceries', expenseAmount: 200, expenseDate: '10th' },
      ],
      0,
      0,
      setValidInput
    );

    fireEvent.change(screen.getByTestId('expense-name-2'), {
      target: { value: 'Bills' },
    });
    fireEvent.change(screen.getByTestId('expense-amount-2'), {
      target: { value: '300' },
    });
    fireEvent.change(screen.getByTestId('expense-date-2'), {
      target: { value: '15th' },
    });

    waitFor(() => {
      expect(setValidInput).toHaveBeenCalledWith(true);
    });
  });

  test('renders amount in and amount out', () => {
    renderExpensesComponent(
      [
        { expenseName: 'Rent', expenseAmount: 1000, expenseDate: '1st' },
        { expenseName: 'Groceries', expenseAmount: 200, expenseDate: '10th' },
      ],
      1500,
      1200
    );
    expect(screen.getByText('In:')).toBeInTheDocument();
    expect(screen.getByText(/£1,500/)).toBeInTheDocument();
    expect(screen.getByText('Out:')).toBeInTheDocument();
    expect(screen.getByText(/£1,200/)).toBeInTheDocument();
  });

  test('amount out is styled correctly based on amount in', () => {
    const setValidInput = jest.fn();

    renderExpensesComponent(
      [
        { expenseName: 'Rent', expenseAmount: 1000, expenseDate: '1st' },
        { expenseName: 'Groceries', expenseAmount: 200, expenseDate: '10th' },
      ],
      1500,
      1200
    );
    waitFor(() => {
      expect(screen.getByText(/£1,200/)).toHaveClass('inBudget');
    });

    renderExpensesComponent(
      [
        {
          expenseName: 'Rent',
          expenseAmount: 1000,
          expenseDate: '1st',
        },
        {
          expenseName: 'Groceries',
          expenseAmount: 200,
          expenseDate: '10th',
        },
      ],
      1000,
      1200,
      setValidInput
    );

    waitFor(() => {
      expect(screen.getByText(/£1,200/)).toHaveClass('outOfBudget');
    });
  });
});
