/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

interface ThemeType {
  lightMode: boolean;
  setLightMode: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ExpenseTotalsType {
  amountIn: number;
  amountOut: number;
  setAmountIn: React.Dispatch<React.SetStateAction<number>>;
  setAmountOut: React.Dispatch<React.SetStateAction<number>>;
}

interface ExpensesType {
  expenses: Array<{
    expenseName: string;
    expenseAmount: string;
    expenseDate: string;
  }>;
  setExpenses: React.Dispatch<
    React.SetStateAction<
      Array<{
        expenseName: string;
        expenseAmount: string;
        expenseDate: string;
      }>
    >
  >;
}

const ThemeContext = createContext<ThemeType>({
  lightMode: true,
  setLightMode: () => {},
});

const ExpenseTotalsContext = createContext<ExpenseTotalsType>({
  amountIn: 0,
  amountOut: 0,
  setAmountIn: () => {},
  setAmountOut: () => {},
});

const ExpensesContext = createContext<ExpensesType>({
  expenses: [
    {
      expenseName: '',
      expenseAmount: '',
      expenseDate: '',
    },
  ],
  setExpenses: () => {},
});

export { ExpensesContext, ExpenseTotalsContext, ThemeContext };
