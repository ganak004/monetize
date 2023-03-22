import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

import Expenses from './_income-expenditure/Expenses/Expenses';
import IncomeAmount from './_income-expenditure/Income/IncomeAmount';
import IncomeDate from './_income-expenditure/Income/IncomeDate';
import IncomeSource from './_income-expenditure/Income/IncomeSource';

interface IWalkthroughStep {
  currentStep: number;
  handleNext: () => void;
}

export const WalkthroughStep = ({
  currentStep,
  handleNext,
}: IWalkthroughStep) => {
  const steps = [IncomeSource, IncomeAmount, IncomeDate, Expenses];

  const stepIndex = currentStep - 1;
  const StepComponent = steps[stepIndex] || IncomeSource;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.2 }}
        key={`walkthrough-${currentStep}`}

        // className={styles.walkthroughContainer}
      >
        <StepComponent handleNext={handleNext} />
      </motion.div>
    </AnimatePresence>
  );
};
