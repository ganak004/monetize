import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import { updateGoalName } from '@/redux/appSlice';
import { RootState } from '@/redux/store';
import { incomeSourceStyles } from '@/utils/muiStyles';
import { ISavingsWalkthrough, TButtonText } from '@/utils/types';

import styles from '../SavingsWalkthrough.module.scss';

const GoalType = ({ handleNext }: ISavingsWalkthrough) => {
  const {
    savingsWalkthrough: { savings2 },
    buttons: { next },
  } = copy;

  const [validInput, setValidInput] = useState(false);

  const dispatch = useDispatch();

  const goalName = useSelector((state: RootState) => state.app.goalName);

  const handleChange = ({ target }: SelectChangeEvent) => {
    dispatch(updateGoalName(target.value as string));
    setValidInput?.(true);
  };

  return (
    <div className={styles.walkthroughContainer}>
      <p className={styles.question}>{savings2.question}</p>
      <FormControl
        variant="standard"
        sx={{ m: 1, width: '100%' }}
        className={styles.form}
      >
        <Select
          id="goal-type"
          data-testid="goal-type"
          value={goalName}
          onChange={handleChange}
          label="Type of Goal"
          sx={{ ...incomeSourceStyles, margin: '0 1rem 2rem 1rem' }}
        >
          {savings2['options'].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        handleClick={() => handleNext(4)}
        buttonText={next as TButtonText}
        buttonType="underlined"
        disabled={!validInput}
      />
    </div>
  );
};

export default GoalType;
