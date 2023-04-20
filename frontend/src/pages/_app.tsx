import '@/styles/global.scss';

import type { AppProps } from 'next/app';
import { useMemo, useState } from 'react';

import { ExpensesContext, ExpenseTotalsContext, ThemeContext } from '@/context';

export default function App({ Component, pageProps }: AppProps) {
  const [lightMode, setLightMode] = useState(true);
  const [amountIn, setAmountIn] = useState(0);
  const [amountOut, setAmountOut] = useState(0);
  const [expenses, setExpenses] = useState([
    {
      expenseName: '',
      expenseAmount: '',
      expenseDate: '',
    },
  ]);

  const memoizedTheme = useMemo(
    () => ({ lightMode, setLightMode }),
    [lightMode, setLightMode]
  );

  const memoizedExpensesTotals = useMemo(
    () => ({ amountIn, amountOut, setAmountIn, setAmountOut }),
    [amountIn, amountOut, setAmountIn, setAmountOut]
  );

  const memoizedExpenses = useMemo(
    () => ({ expenses, setExpenses }),
    [expenses, setExpenses]
  );

  return (
    <ExpensesContext.Provider value={memoizedExpenses}>
      <ExpenseTotalsContext.Provider value={memoizedExpensesTotals}>
        <ThemeContext.Provider value={memoizedTheme}>
          <Component {...pageProps} />
        </ThemeContext.Provider>
      </ExpenseTotalsContext.Provider>
    </ExpensesContext.Provider>
  );
}
