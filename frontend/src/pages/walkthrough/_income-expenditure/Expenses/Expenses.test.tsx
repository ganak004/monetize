import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ExpensesContext, ExpenseTotalsContext } from '@/context';

import Expenses from './Expenses';

type Expense = {
  expenseName: string;
  expenseAmount: string;
  expenseDate: string;
};

const renderExpensesComponent = (
  expenses: Expense[] = [],
  setExpenses = jest.fn(),
  amountIn = 0,
  amountOut = 0,
  setAmountIn = jest.fn(),
  setAmountOut = jest.fn(),
  setValidInput = jest.fn()
) =>
  render(
    <ExpenseTotalsContext.Provider
      value={{ amountIn, amountOut, setAmountIn, setAmountOut }}
    >
      <ExpensesContext.Provider value={{ expenses, setExpenses }}>
        <Expenses setValidInput={setValidInput} />
      </ExpensesContext.Provider>
    </ExpenseTotalsContext.Provider>
  );

describe('Expenses Component', () => {
  test('renders initial expense row', () => {
    renderExpensesComponent([
      { expenseName: '', expenseAmount: '', expenseDate: '' },
    ]);

    expect(screen.getByTestId('expense-row-1')).toBeInTheDocument();
  });

  test('adds a new expense row on button click', () => {
    renderExpensesComponent([
      { expenseName: '', expenseAmount: '', expenseDate: '' },
    ]);

    userEvent.click(screen.getByText('+'));

    waitFor(() => {
      expect(screen.queryByTestId('expense-row-2')).toBeInTheDocument();
    });
  });

  test('updates the expense name', () => {
    renderExpensesComponent([
      { expenseName: '', expenseAmount: '', expenseDate: '' },
    ]);
    const input = screen.getByTestId('expense-name-1');

    fireEvent.change(input, { target: { value: 'Rent' } });
    waitFor(() => {
      expect(input).toHaveValue('Rent');
    });
  });

  test('updates the expense amount', () => {
    renderExpensesComponent([
      { expenseName: '', expenseAmount: '', expenseDate: '' },
    ]);
    const input = screen.getByTestId('expense-amount-1');

    fireEvent.change(input, { target: { value: '1000' } });
    waitFor(() => {
      expect(input).toHaveValue('1,000');
    });
  });

  test('updates the expense date', () => {
    renderExpensesComponent([
      { expenseName: '', expenseAmount: '', expenseDate: '' },
    ]);
    const input = screen.getByTestId('expense-date-1');

    fireEvent.change(input, { target: { value: '1st' } });
    waitFor(() => {
      expect(input).toHaveValue('1st');
    });
  });

  test('calculates the correct total expense amount', () => {
    const setAmountOut = jest.fn();
    renderExpensesComponent(
      [
        { expenseName: 'Rent', expenseAmount: '1,000', expenseDate: '1st' },
        { expenseName: 'Groceries', expenseAmount: '200', expenseDate: '10th' },
      ],
      undefined,
      0,
      0,
      setAmountOut
    );

    fireEvent.change(screen.getByTestId('expense-amount-1'), {
      target: { value: '1500' },
    });

    waitFor(() => {
      expect(setAmountOut).toHaveBeenCalledWith(1700);
    });
  });

  test('validates input correctly', () => {
    const setValidInput = jest.fn();
    renderExpensesComponent(
      [
        { expenseName: 'Rent', expenseAmount: '1,000', expenseDate: '1st' },
        { expenseName: 'Groceries', expenseAmount: '200', expenseDate: '10th' },
      ],
      undefined,
      0,
      0,
      undefined,
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
        { expenseName: 'Rent', expenseAmount: '1,000', expenseDate: '1st' },
        { expenseName: 'Groceries', expenseAmount: '200', expenseDate: '10th' },
      ],
      undefined,
      1500,
      1200
    );
    expect(screen.getByText('In:')).toBeInTheDocument();
    expect(screen.getByText(/£1,500/)).toBeInTheDocument();
    expect(screen.getByText('Out:')).toBeInTheDocument();
    expect(screen.getByText(/£1,200/)).toBeInTheDocument();
  });

  test('amount out is styled correctly based on amount in', () => {
    const { rerender } = renderExpensesComponent(
      [
        { expenseName: 'Rent', expenseAmount: '1,000', expenseDate: '1st' },
        { expenseName: 'Groceries', expenseAmount: '200', expenseDate: '10th' },
      ],
      undefined,
      1500,
      1200
    );
    waitFor(() => {
      expect(screen.getByText(/£1,200/)).toHaveClass('inBudget');
    });

    rerender(
      <ExpenseTotalsContext.Provider
        value={{
          amountIn: 1000,
          amountOut: 1200,
          setAmountIn: jest.fn(),
          setAmountOut: jest.fn(),
        }}
      >
        <ExpensesContext.Provider
          value={{
            expenses: [
              {
                expenseName: 'Rent',
                expenseAmount: '1,000',
                expenseDate: '1st',
              },
              {
                expenseName: 'Groceries',
                expenseAmount: '200',
                expenseDate: '10th',
              },
            ],
            setExpenses: jest.fn(),
          }}
        >
          <Expenses setValidInput={jest.fn()} />
        </ExpensesContext.Provider>
      </ExpenseTotalsContext.Provider>
    );
    waitFor(() => {
      expect(screen.getByText(/£1,200/)).toHaveClass('outOfBudget');
    });
  });
});
