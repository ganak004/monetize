import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import { TButtonText } from '@/utils/types';

import Expenses from './_income-expenditure/Expenses/Expenses';
import IncomeAmount from './_income-expenditure/Income/IncomeAmount';
import IncomeDate from './_income-expenditure/Income/IncomeDate';
import IncomeSource from './_income-expenditure/Income/IncomeSource';
import Results from './_results/index';
import styles from './Walkthrough.module.scss';

interface IWalkthroughStep {
  currentStep: number;
  handleNext: () => void;
}

export const WalkthroughStep = ({
  currentStep,
  handleNext,
}: IWalkthroughStep) => {
  const steps = [IncomeSource, IncomeAmount, IncomeDate, Expenses, Results];
  const [validInput, setValidInput] = useState(false);

  const stepIndex = currentStep - 1;
  const StepComponent = steps[stepIndex] || IncomeSource;

  const {
    buttons: { finish, next },
  } = copy;

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
        <div className={styles.stepContainer}>
          {currentStep <= 5 ? (
            <StepComponent setValidInput={setValidInput} />
          ) : (
            <StepComponent />
          )}
          {currentStep < 5 && (
            <Button
              handleClick={handleNext}
              buttonText={
                currentStep === 4
                  ? (finish as TButtonText)
                  : (next as TButtonText)
              }
              buttonType="normal"
              disabled={!validInput}
            />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
