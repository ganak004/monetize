import { FormControl, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';
import { updateIncomeDate } from '@/redux/appSlice';
import type { RootState } from '@/redux/store';
import { incomeDates } from '@/utils/constants';
import { incomeDateStyles } from '@/utils/muiStyles';
import { IWalkthrough } from '@/utils/types';

import styles from '../IncomeExpenditure.module.scss';

export const IncomeDate = ({ setValidInput }: IWalkthrough) => {
  const {
    walkthrough: { income3 },
  } = copy;

  const incomeDate = useSelector((state: RootState) => state.app.incomeDate);

  const dispatch = useDispatch();
  const handleChange = ({ target }: SelectChangeEvent) => {
    dispatch(updateIncomeDate(target.value));
    setValidInput?.(true);
  };

  return (
    <div
      data-testid="walkthrough-income-date"
      className={styles.walkthroughContainer}
    >
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
          sx={incomeDateStyles}
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
