import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';
import { updateIncomeSource } from '@/redux/appSlice';
import type { RootState } from '@/redux/store';
import { incomeSourceStyles } from '@/utils/muiStyles';
import { IWalkthrough } from '@/utils/types';

import styles from '../IncomeExpenditure.module.scss';

export const IncomeSource = ({ setValidInput }: IWalkthrough) => {
  const {
    walkthrough: { income1 },
  } = copy;

  const incomeSource = useSelector(
    (state: RootState) => state.app.incomeSource
  );

  const dispatch = useDispatch();

  const handleChange = ({ target }: SelectChangeEvent) => {
    dispatch(updateIncomeSource(target.value as string));
    setValidInput?.(true);
  };

  return (
    <div
      data-testid="walkthrough-income-source"
      className={styles.walkthroughContainer}
    >
      <Header heading={income1['heading']} subheading={income1['subheading']} />
      <p className={styles.question}>{income1['question']}</p>
      <FormControl
        variant="standard"
        sx={{ m: 1, width: '100%' }}
        className={styles.form}
      >
        <Select
          id="income-source"
          data-testid="income-source"
          value={incomeSource}
          onChange={handleChange}
          label="Source of Income"
          sx={incomeSourceStyles}
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
