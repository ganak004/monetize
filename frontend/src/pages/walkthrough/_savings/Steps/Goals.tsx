import { useContext } from 'react';

import copy from '@/assets/copy-en.json';
import { SavingsGoalContext } from '@/context/index';
import Button from '@/pages/_common/Button';
import { ISavingsWalkthrough, TButtonText } from '@/utils/types';

import styles from '../SavingsWalkthrough.module.scss';

const Goals = ({ handleNext }: ISavingsWalkthrough) => {
  const {
    savingsWalkthrough: { savings1 },
    buttons: { yes, no },
  } = copy;

  const { setHasSavingsGoal } = useContext(SavingsGoalContext);

  return (
    <div data-testid="savings-goals">
      <p className={styles.question}>{savings1.question}</p>
      <div className={styles.dualButtonsContainer}>
        <Button
          handleClick={() => {
            setHasSavingsGoal(true);
            handleNext(2);
          }}
          buttonText={yes as TButtonText}
          buttonType="underlined"
          disabled={false}
        />
        <Button
          handleClick={() => handleNext(3)}
          buttonText={no as TButtonText}
          buttonType="underlined"
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Goals;
