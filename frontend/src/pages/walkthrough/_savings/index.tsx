import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/redux/store';

import styles from './SavingsWalkthrough.module.scss';
import { SavingsWalkthroughStep } from './SavingsWalkthroughStep';

const SavingsWalkthrough = () => {
  const lightMode = useSelector((state: RootState) => state.app.lightMode);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div
      className={`${styles.main} ${
        lightMode ? styles.backgroundLight : styles.backgroundDark
      }`}
    >
      <div className={styles.innerContainer}>
        <SavingsWalkthroughStep
          currentStep={currentStep}
          handleNext={handleNextStep}
        />
      </div>
    </div>
  );
};

export default SavingsWalkthrough;
