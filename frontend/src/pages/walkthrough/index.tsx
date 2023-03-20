import { useContext, useState } from 'react';

import { ThemeContext } from '../../context';
import Logo from '../_common/Logo';
import ProgressBar from './_common/ProgressBar';
import styles from './Walkthrough.module.scss';
import { WalkthroughStep } from './WalkthroughStep';
import copy from '@/assets/copy-en.json';

const Walkthrough = () => {
  const { lightMode } = useContext(ThemeContext);
  const [currentStep, setCurrentStep] = useState(1);

  const { buttons } = copy;

  const handleNextStep = () => {
    setCurrentStep(currentStep > 3 ? 1 : currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep < 2 ? 1 : currentStep - 1);
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
      <ProgressBar progress={progressMap[currentStep]} />
      <div className={styles.innerContainer}>
        <WalkthroughStep currentStep={currentStep} />
      </div>
      <button onClick={handleNextStep}>{buttons['next']}</button>
    </div>
  );
};

export default Walkthrough;
