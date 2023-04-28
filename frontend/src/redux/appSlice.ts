import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ExpensesType } from '@/utils/types';

export interface AppState {
  lightMode: boolean;
  incomeTotal: number;
  incomeSource: string;
  incomeDate: string;
  expensesTotal: number;
  expenses: ExpensesType[];
  goalAmount: number;
  goalDate: string;
  goalName: string;
}

const initialState: AppState = {
  lightMode: true,
  incomeSource: '',
  incomeDate: '',
  incomeTotal: 0,
  expensesTotal: 0,
  expenses: [
    {
      expenseName: '',
      expenseAmount: 0,
      expenseDate: '',
    },
  ],
  goalAmount: 0,
  goalDate: '',
  goalName: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateIncomeSource: (state, action: PayloadAction<string>) => {
      state.incomeSource = action.payload;
    },
    updateIncomeDate: (state, action: PayloadAction<string>) => {
      state.incomeDate = action.payload;
    },
    updateIncomeTotal: (state, action: PayloadAction<number>) => {
      state.incomeTotal = action.payload;
    },
    updateExpensesTotal: (state, action: PayloadAction<number>) => {
      state.expensesTotal = action.payload;
    },
    updateExpenses: (state, action: PayloadAction<ExpensesType[]>) => {
      state.expenses = action.payload;
    },
    setLightMode: (state, action: PayloadAction<boolean>) => {
      state.lightMode = action.payload;
    },
    updateGoalName: (state, action: PayloadAction<string>) => {
      state.goalName = action.payload;
    },
    updateGoalAmount: (state, action: PayloadAction<number>) => {
      state.goalAmount = action.payload;
    },
    updateGoalDate: (state, action: PayloadAction<string>) => {
      state.goalDate = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateIncomeSource,
  updateIncomeDate,
  updateExpenses,
  updateExpensesTotal,
  updateIncomeTotal,
  updateGoalName,
  updateGoalAmount,
  updateGoalDate,
  setLightMode,
} = appSlice.actions;

export default appSlice.reducer;
