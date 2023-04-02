import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import Button from '@/pages/_common/Button';

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
  const [validInput, setValidInput] = useState(false);

  const stepIndex = currentStep - 1;
  const StepComponent = steps[stepIndex] || IncomeSource;

  useEffect(() => {
    setValidInput(false);
  }, [currentStep]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -300 }}
        transition={{ duration: 0.2 }}
        key={`walkthrough-${currentStep}`}
      >
        <StepComponent setValidInput={setValidInput} />
        <Button
          handleClick={handleNext}
          buttonText="next"
          buttonType="normal"
          disabled={!validInput}
        />
      </motion.div>
    </AnimatePresence>
  );
};
