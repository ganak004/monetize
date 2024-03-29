import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { SavingsGoalContext } from '@/context/index';

import styles from '../SavingsWalkthrough.module.scss';
import GoalAmount from '../Steps/GoalAmount';
import GoalDate from '../Steps/GoalDate';
import GoalResult from '../Steps/GoalResult';
import Goals from '../Steps/Goals';
import GoalType from '../Steps/GoalType';

interface ISavingsWalkthroughStep {
  currentStep: number;
  handleNext: (stepNumber: number) => void;
}

export const SavingsWalkthroughStep = ({
  currentStep,
  handleNext,
}: ISavingsWalkthroughStep) => {
  const steps = [Goals, GoalType, GoalAmount, GoalDate, GoalResult];

  const stepIndex = currentStep - 1;
  const StepComponent = steps[stepIndex] || Goals;

  const [hasSavingsGoal, setHasSavingsGoal] = useState(false);

  const contextValue = useMemo(
    () => ({
      hasSavingsGoal,
      setHasSavingsGoal,
    }),
    [hasSavingsGoal, setHasSavingsGoal]
  );

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.2 }}
        key={`walkthrough-${currentStep}`}
      >
        <SavingsGoalContext.Provider value={contextValue}>
          <div className={styles.stepContainer}>
            <StepComponent handleNext={handleNext} />
          </div>
        </SavingsGoalContext.Provider>
      </motion.div>
    </AnimatePresence>
  );
};
