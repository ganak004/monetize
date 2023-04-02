import { FormControl, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';

import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';
import { incomeAdornmentStyles, incomeAmountStyles } from '@/utils/muiStyles';
import { IWalkthrough } from '@/utils/types';

import styles from './Income.module.scss';

export const IncomeAmount = ({ setValidInput }: IWalkthrough) => {
  const {
    walkthrough: { income2 },
  } = copy;

  const [incomeAmount, setIncomeAmount] = useState('');

  const handleFieldChange = (value: string) => {
    const sanitizedValue = value.replace(',', '');
    const numberRegex = /^[0-9\b]+$/;

    if (
      sanitizedValue === '' ||
      (numberRegex.test(sanitizedValue) && sanitizedValue.length < 7)
    ) {
      setIncomeAmount(Number(sanitizedValue).toLocaleString());
      setValidInput(true);
    }
  };
  return (
    <div>
      <Header heading={income2['heading']} subheading={income2['subheading']} />
      <p className={styles.question}>{income2['question']}</p>
      <FormControl sx={{ m: 1, width: '100%' }} className={styles.form}>
        <TextField
          id="income-amount"
          label="Monthly salary"
          variant="standard"
          value={incomeAmount}
          onChange={(e) => handleFieldChange(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={incomeAdornmentStyles}>
                £
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={incomeAdornmentStyles}>
                per month
              </InputAdornment>
            ),
          }}
          sx={incomeAmountStyles}
        />
      </FormControl>
    </div>
  );
};

export default IncomeAmount;
