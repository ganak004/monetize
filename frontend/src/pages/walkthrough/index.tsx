import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/redux/store';

import Logo from '../_common/Logo';
import ProgressBar from './_common/ProgressBar';
import { WalkthroughStep } from './_common/WalkthroughStep';
import styles from './Walkthrough.module.scss';

const Walkthrough = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const lightMode = useSelector((state: RootState) => state.app.lightMode);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const progressMap: {
    [key: number]: number;
  } = {
    1: 25,
    2: 50,
    3: 75,
    4: 95,
  };

  return (
    <div
      className={`${styles.main} ${
        lightMode ? styles.backgroundLight : styles.backgroundDark
      }`}
    >
      <Logo color="light" />
      {currentStep < 5 && <ProgressBar progress={progressMap[currentStep]} />}
      <div className={styles.innerContainer}>
        <WalkthroughStep
          currentStep={currentStep}
          handleNext={handleNextStep}
        />
      </div>
    </div>
  );
};

export default Walkthrough;
