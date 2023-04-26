/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';

interface SavingsGoalType {
  hasSavingsGoal: boolean;
  setHasSavingsGoal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SavingsGoalContext = createContext<SavingsGoalType>({
  hasSavingsGoal: false,
  setHasSavingsGoal: () => {},
});

export { SavingsGoalContext };
