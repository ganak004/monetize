import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';

import styles from './Income.module.scss';

export const IncomeSource = () => {
  const [incomeSource, setIncomeSource] = useState('');

  const {
    walkthrough: { income1 },
  } = copy;

  const handleChange = ({ target }: SelectChangeEvent) => {
    setIncomeSource(target.value);
  };

  return (
    <div className={styles.walkthroughContainer}>
      <Header heading={income1['heading']} subheading={income1['subheading']} />
      <p className={styles.question}>{income1['question']}</p>
      <FormControl variant="standard" sx={{ m: 1 }} className={styles.form}>
        <Select
          // labelId="demo-simple-select-standard-label"
          id="income-source"
          value={incomeSource}
          defaultValue={income1['options'][0].value}
          onChange={handleChange}
          label="Source of Income"
          sx={{ color: '#f0f2f3', fontFamily: 'Palanquin' }}
        >
          {income1['options'].map(
            ({ label, value }: { label: string; value: string }) => (
              <MenuItem key={label} value={value}>
                {value}
              </MenuItem>
            )
          )}
        </Select>
      </FormControl>
    </div>
  );
};

export default IncomeSource;
