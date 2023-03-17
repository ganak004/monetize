import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';
import { IWalkthrough } from '@/utils/types';

import styles from './Income.module.scss';

export const IncomeSource = ({ handlePrev, handleNext }: IWalkthrough) => {
  const [incomeSource, setIncomeSource] = useState('');

  const {
    walkthrough: { income1 },
    buttons,
  } = copy;

  const handleChange = (event: SelectChangeEvent) => {
    setIncomeSource(event.target.value);
  };

  return (
    <div className={styles.walkthroughContainer}>
      <Header heading={income1['heading']} subheading={income1['subheading']} />
      <p className={styles.question}>{income1['question']}</p>
      <FormControl variant="standard" sx={{ m: 1 }} className={styles.form}>
        <Select
          // labelId="demo-simple-select-standard-label"
          // id="demo-simple-select-standard"
          value={incomeSource}
          defaultValue={income1['options'][0].value}
          onChange={handleChange}
          label="Source of Income"
          sx={{ color: '#f0f2f3', fontFamily: 'Palanquin' }}
        >
          {income1['options'].map(({ label, value }) =>
            <MenuItem key={label} value={value}>{value} </MenuItem>
          )}

        </Select>
      </FormControl>
      <button className={styles.nextButton} onClick={handleNext}>{buttons['next']}</button>
    </div>
  );
};

export default IncomeSource;
