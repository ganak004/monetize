/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

interface SavingsGoal {
  hasSavingsGoal: boolean;
  setHasSavingsGoal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SavingsGoalContext = createContext<SavingsGoal>({
  hasSavingsGoal: false,
  setHasSavingsGoal: () => {},
});

export { type SavingsGoal, SavingsGoalContext };
