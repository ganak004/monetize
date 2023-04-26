import { useState } from 'react';
import CircularSliderWithChildren from 'react-circular-slider-svg';
import { useDispatch, useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import type { RootState } from '@/redux/store';
import { TButtonText } from '@/utils/types';

import styles from '../SavingsWalkthrough.module.scss';

const GoalResult = () => {
  const [savingsAmount, setSavingsAmount] = useState(0);

  const incomeTotal = useSelector((state: RootState) => state.app.incomeTotal);
  const expensesTotal = useSelector(
    (state: RootState) => state.app.expensesTotal
  );

  const difference = incomeTotal - expensesTotal || 0;

  const {
    savingsWalkthrough: {
      savings5: { question, goalPositive, goalNegative, goalNeutral },
    },
    buttons: { saveAndContinue },
  } = copy;

  const dispatch = useDispatch();

  return (
    <div className={styles.main} id="savings-results">
      <p className={styles.question}>
        {question.replace('X', difference?.toLocaleString())}
      </p>
      <div className={styles.sliderContainer}>
        <CircularSliderWithChildren
          size={200}
          minValue={0}
          maxValue={difference}
          startAngle={40}
          endAngle={320}
          angleType={{
            direction: 'cw',
            axis: '-y',
          }}
          coerceToInt
          handle1={{
            value: savingsAmount,
            onChange: (v) => setSavingsAmount(v),
          }}
          arcColor="white"
          arcBackgroundColor="#aaa"
        >
          <p className={styles.sliderValue}>
            £{savingsAmount.toLocaleString()}
          </p>
        </CircularSliderWithChildren>
      </div>
      <p className={styles.question}>{goalPositive}</p>
      <Button
        handleClick={() => {
          // Route to dashboard
        }}
        buttonText={saveAndContinue as TButtonText}
        buttonType="boxed"
        buttonVariant="primary"
        disabled={false}
      />
    </div>
  );
};

export default GoalResult;
