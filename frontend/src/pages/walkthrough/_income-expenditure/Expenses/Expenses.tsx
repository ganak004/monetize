import {
  FormControl,
  InputAdornment,
  MenuItem,
  TextField,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';
import { updateExpenses, updateExpensesTotal } from '@/redux/appSlice';
import type { RootState } from '@/redux/store';
import { incomeDates } from '@/utils/constants';
import { sumExpenses } from '@/utils/helpers';
import {
  expenseAmountStyles,
  expenseDateStyles,
  expenseNameStyles,
  incomeAdornmentStyles,
} from '@/utils/muiStyles';
import { IWalkthrough } from '@/utils/types';

import styles from '../IncomeExpenditure.module.scss';

export const Expenses = ({ setValidInput }: IWalkthrough) => {
  const incomeTotal = useSelector((state: RootState) => state.app.incomeTotal);
  const expensesTotal = useSelector(
    (state: RootState) => state.app.expensesTotal
  );
  const expenses = useSelector((state: RootState) => state.app.expenses);

  const dispatch = useDispatch();

  const {
    walkthrough: { expenses1 },
  } = copy;

  const handleExpenseFieldChange = (
    e:
      | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<string>,
    index: number
  ) => {
    const updatedExpenses = [...expenses];

    if (e.target.name === 'expenseAmount') {
      const sanitizedValue = e.target.value.replace(',', '');
      const numberRegex = /^[0-9\b]+$/;

      if (
        sanitizedValue === '' ||
        (numberRegex.test(sanitizedValue) && sanitizedValue.length < 7)
      ) {
        updatedExpenses[index] = {
          ...updatedExpenses[index],
          // change to locale string when displating
          [e.target.name]: Number(sanitizedValue),
        };
      }
    } else {
      updatedExpenses[index] = {
        ...updatedExpenses[index],
        [e.target.name]: e.target.value,
      };
    }

    dispatch(updateExpenses(updatedExpenses));
    dispatch(updateExpensesTotal(sumExpenses(updatedExpenses)));
  };

  const handlePlusClick = () => {
    const prevExpenses = [...expenses];
    dispatch(
      updateExpenses([
        ...prevExpenses,
        {
          expenseName: '',
          expenseAmount: 0,
          expenseDate: '',
        },
      ])
    );
  };

  useEffect(() => {
    const hasEmptyValues = expenses.every(
      (expense) =>
        expense.expenseName === '' ||
        expense.expenseAmount === 0 ||
        expense.expenseDate === ''
    );

    if (expenses.length > 0 && !hasEmptyValues) {
      setValidInput?.(true);
    }
  }, [expenses, setValidInput]);

  return (
    <div
      data-testid="walkthrough-expenses"
      className={styles.walkthroughContainer}
    >
      <Header
        heading={expenses1['heading']}
        subheading={expenses1['subheading']}
      />
      <div className={styles.expensesContainerOuter}>
        <div className={styles.expensesContainerInner}>
          <div className={styles.expenseTableHeaders}>
            <p>Name</p>
            <p>Amount</p>
            <p>Date</p>
          </div>
          {expenses.map(({ expenseName, expenseAmount, expenseDate }, i) => (
            <FormControl
              variant="standard"
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '2rem',
              }}
              className={styles.expenseForm}
              key={`expense-${i + 1}`}
              data-testid={`expense-row-${i + 1}`}
            >
              <TextField
                className="expense-name"
                label="Expense name"
                variant="standard"
                value={expenseName || ''}
                name="expenseName"
                onChange={(e) => handleExpenseFieldChange(e, i)}
                sx={expenseNameStyles}
                inputProps={{
                  'data-testid': `expense-name-${i + 1}`,
                }}
              />
              <TextField
                className="expense-amount"
                label="Expense amount"
                variant="standard"
                value={expenseAmount.toLocaleString() || ''}
                name="expenseAmount"
                onChange={(e) => handleExpenseFieldChange(e, i)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={incomeAdornmentStyles}>
                      £
                    </InputAdornment>
                  ),
                }}
                sx={expenseAmountStyles}
                inputProps={{
                  'data-testid': `expense-amount-${i + 1}`,
                }}
              />
              <Select
                className="expense-date"
                value={expenseDate || ''}
                name="expenseDate"
                onChange={(e) => handleExpenseFieldChange(e, i)}
                label="Expense Date"
                sx={expenseDateStyles}
                inputProps={{
                  'data-testid': `expense-date-${i + 1}`,
                }}
              >
                {incomeDates.map(({ number, suffix }) => (
                  <MenuItem key={number} value={`${number}${suffix}`}>
                    <p className={styles.expenseDate}>
                      {number}
                      <sup>{suffix}</sup>
                    </p>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ))}
          <button
            className={styles.plusButton}
            onClick={handlePlusClick}
            id="add-expense"
            aria-label="Add expense"
          >
            +
          </button>
        </div>
        <div className={styles.inOut}>
          <p className={styles.inOutText}>
            In:
            <span
              className={styles.inTotal}
            >{` £${incomeTotal.toLocaleString()}`}</span>
          </p>
          <p className={styles.inOutText}>
            Out:
            <span
              className={
                incomeTotal < expensesTotal
                  ? styles.outOfBudget
                  : styles.inBudget
              }
            >
              {` £${expensesTotal.toLocaleString()}`}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
