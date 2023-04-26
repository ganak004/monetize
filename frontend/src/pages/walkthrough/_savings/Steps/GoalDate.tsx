import { FormControl, TextField, TextFieldProps } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import { updateGoalDate } from '@/redux/appSlice';
import { RootState } from '@/redux/store';
import { incomeDateStyles } from '@/utils/muiStyles';
import { ISavingsWalkthrough, TButtonText } from '@/utils/types';

import styles from '../SavingsWalkthrough.module.scss';

const GoalDate = ({ handleNext }: ISavingsWalkthrough) => {
  const {
    savingsWalkthrough: { savings4 },
    buttons: { next },
  } = copy;

  const [validInput, setValidInput] = useState(false);

  const dispatch = useDispatch();

  const goalDate = useSelector((state: RootState) => state.app.goalDate);

  return (
    <div className={styles.walkthroughContainer}>
      <p className={styles.question}>{savings4.question}</p>
      <FormControl
        variant="standard"
        sx={{ m: 1, width: '100%' }}
        className={styles.form}
        id="goal-date"
      >
        <DatePicker
          data-testid="goal-date"
          value={goalDate}
          onChange={(newValue) => {
            dispatch(updateGoalDate(newValue as string));
            setValidInput?.(true);
          }}
          format="DD-MM-YYYY"
          sx={{ margin: '0 0 2rem 0' }}
        />
      </FormControl>
      <Button
        handleClick={() => handleNext(5)}
        buttonText={next as TButtonText}
        buttonType="underlined"
        disabled={!validInput}
      />
    </div>
  );
};

export default GoalDate;
