import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import Header from '@/pages/_common/Header';
import { IWalkthrough } from '@/utils/types';

import styles from './Income.module.scss';

export const IncomeSource = ({ handleNext }: IWalkthrough) => {
  const {
    walkthrough: { income1 },
  } = copy;

  const [incomeSource, setIncomeSource] = useState(income1['options'][0].value);

  const handleChange = ({ target }: SelectChangeEvent) => {
    setIncomeSource(target.value);
  };

  return (
    <div>
      <Header heading={income1['heading']} subheading={income1['subheading']} />
      <p className={styles.question}>{income1['question']}</p>
      <FormControl variant="standard" sx={{ m: 1 }} className={styles.form}>
        <Select
          id="income-source"
          value={incomeSource}
          onChange={handleChange}
          label="Source of Income"
          sx={{
            color: '#f0f2f3',
            fontFamily: 'Palanquin',
            borderBottom: '1px solid #f0f2f3',
            '&:hover': {
              '&::before': {
                borderBottom: '1px solid black !important',
              },
            },
            '& .MuiSelect-icon': {
              color: '#f0f2f3',
            },
          }}
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
      <Button handleClick={handleNext} buttonText="next" buttonType="normal" />
    </div>
  );
};

export default IncomeSource;
