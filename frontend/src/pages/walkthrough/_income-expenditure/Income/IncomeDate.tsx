import { FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';
import { incomeDates } from '@/utils/constants';
import { incomeSourceStyles } from '@/utils/muiStyles';
import { IWalkthrough } from '@/utils/types';

import styles from '../IncomeExpenditure.module.scss';

export const IncomeDate = ({ setValidInput }: IWalkthrough) => {
  const {
    walkthrough: { income3 },
  } = copy;

  const [incomeDate, setIncomeDate] = useState('');

  const handleChange = ({ target }: SelectChangeEvent) => {
    setIncomeDate(target.value);
    setValidInput?.(true);
  };

  return (
    <div data-testid="walkthrough-income-date">
      <Header heading={income3['heading']} subheading={income3['subheading']} />
      <p className={styles.question}>{income3['question']}</p>
      <FormControl
        variant="standard"
        sx={{ m: 1, width: '100%' }}
        className={styles.form}
      >
        <Select
          id="income-date"
          value={incomeDate}
          onChange={handleChange}
          label="Income Date"
          sx={incomeSourceStyles}
        >
          {incomeDates.map(({ number, suffix }) => (
            <MenuItem key={number} value={`${number}${suffix}`}>
              <p className={styles.incomeDate}>
                {number}
                <sup>{suffix}</sup>
              </p>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default IncomeDate;
