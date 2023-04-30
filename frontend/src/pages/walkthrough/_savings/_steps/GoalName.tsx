import { Autocomplete, FormControl, TextField } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import { updateGoalName } from '@/redux/appSlice';
import { RootState } from '@/redux/store';
import { goalNameStyles } from '@/utils/muiStyles';
import { ISavingsWalkthrough, TButtonText } from '@/utils/types';

import styles from '../SavingsWalkthrough.module.scss';

const GoalName = ({ handleNext }: ISavingsWalkthrough) => {
  const {
    savingsWalkthrough: { savings2 },
    buttons: { next },
  } = copy;

  const goalName = useSelector((state: RootState) => state.app.goalName);

  const [validInput, setValidInput] = useState(false);
  const [inputValue, setInputValue] = useState<string | null>(goalName);
  const [value, setValue] = useState('');

  const dispatch = useDispatch();

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => {
    if (newValue === null) {
      newValue = '';
    }
    setValue(newValue);
    dispatch(updateGoalName(newValue));
    setValidInput?.(true);
  };

  const handleInputChange = (
    event: SyntheticEvent<Element, Event>,
    newInputValue: string | null
  ) => {
    if (newInputValue === null) {
      newInputValue = '';
    }
    setInputValue(newInputValue);
    dispatch(updateGoalName(newInputValue));
    setValidInput?.(true);
  };

  return (
    <div className={styles.walkthroughContainer} data-testid="savings-type">
      <p className={styles.question}>{savings2.question}</p>
      <FormControl
        variant="standard"
        sx={{ m: 1, width: '100%' }}
        className={styles.form}
      >
        <Autocomplete
          freeSolo
          id="goal-name"
          data-testid="goal-name"
          value={value}
          inputValue={inputValue as string}
          onChange={handleChange}
          onInputChange={handleInputChange}
          options={savings2['options']}
          sx={goalNameStyles}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Name of goal"
              placeholder={"e.g. 'Holiday'..."}
            />
          )}
        />
      </FormControl>
      <Button
        handleClick={() => handleNext(3)}
        buttonText={next as TButtonText}
        buttonType="underlined"
        disabled={!validInput}
      />
    </div>
  );
};

export default GoalName;
