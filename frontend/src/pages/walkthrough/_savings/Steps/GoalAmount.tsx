import { FormControl, TextField } from '@mui/material';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import copy from '@/assets/copy-en.json';
import { SavingsGoalContext } from '@/context';
import Button from '@/pages/_common/Button';
import { updateGoalAmount } from '@/redux/appSlice';
import { incomeAmountStyles } from '@/utils/muiStyles';
import { ISavingsWalkthrough, TButtonText } from '@/utils/types';

import styles from '../SavingsWalkthrough.module.scss';

const GoalAmount = ({ handleNext }: ISavingsWalkthrough) => {
  const {
    savingsWalkthrough: { savings3 },
    buttons: { next },
  } = copy;

  const [goalAmount, setGoalAmount] = useState('');
  const [validInput, setValidInput] = useState(false);

  const { hasSavingsGoal } = useContext(SavingsGoalContext);

  const dispatch = useDispatch();

  const handleFieldChange = (value: string) => {
    const sanitizedValue = value.replace(',', '');
    const numberRegex = /^[0-9\b]+$/;

    if (
      sanitizedValue === '' ||
      (numberRegex.test(sanitizedValue) && sanitizedValue.length < 7)
    ) {
      setGoalAmount(Number(sanitizedValue).toLocaleString());
      setValidInput?.(true);
      dispatch(updateGoalAmount(Number(sanitizedValue)));
    }
  };

  return (
    <div className={styles.walkthroughContainer} data-testid="savings-amount">
      <p className={styles.question}>
        {hasSavingsGoal
          ? savings3.questionWithGoal
          : savings3.questionWithoutGoal}
      </p>
      <FormControl sx={{ m: 1, width: '100%' }} className={styles.form}>
        <TextField
          id="goal-amount"
          label="Goal amount"
          variant="standard"
          value={`£${goalAmount}`}
          onChange={(e) => handleFieldChange(e.target.value.replace('£', ''))}
          sx={{
            ...incomeAmountStyles,
            letterSpacing: '3px',
            margin: '0 1rem 2rem 1rem',
          }}
        />
      </FormControl>
      {/** if no savings goal do they need to set a date? */}
      <Button
        handleClick={() => handleNext(4)}
        buttonText={next as TButtonText}
        buttonType="underlined"
        disabled={!validInput}
      />
    </div>
  );
};

export default GoalAmount;
