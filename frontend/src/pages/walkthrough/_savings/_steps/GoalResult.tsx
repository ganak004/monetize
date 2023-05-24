import { useState } from 'react';
import { CircularSliderWithChildren } from 'react-circular-slider-svg';
import { useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import type { RootState } from '@/redux/store';
import { willMeetSavingsGoal } from '@/utils/helpers';
import { TButtonText } from '@/utils/types';

import styles from '../SavingsWalkthrough.module.scss';

const GoalResult = () => {
  const [amountToSave, setAmountToSave] = useState(0);

  const incomeTotal = useSelector((state: RootState) => state.app.incomeTotal);
  const expensesTotal = useSelector(
    (state: RootState) => state.app.expensesTotal
  );
  const goalAmount = useSelector((state: RootState) => state.app.goalAmount);
  const goalDate = useSelector((state: RootState) => state.app.goalDate);
  const incomeDate = useSelector((state: RootState) => state.app.incomeDate);

  const difference = incomeTotal - expensesTotal;

  const {
    savingsWalkthrough: {
      savings5: {
        question,
        goalPositiveStart,
        goalPositiveEnd,
        goalNegativeStart,
        goalNegativeEnd,
        goalNeutral,
      },
    },
    buttons: { saveAndContinue, goBack },
  } = copy;

  const [goalReached, days] = willMeetSavingsGoal(
    goalDate,
    goalAmount,
    amountToSave,
    incomeDate
  );

  let result;

  if (goalReached) {
    result =
      days === 0 ? (
        <p className={styles.question}>{goalNeutral}</p>
      ) : (
        <>
          <p className={styles.question}>
            {goalPositiveStart}
            <span className={styles.days}>{days}</span>
            {goalPositiveEnd}
          </p>
        </>
      );
  } else {
    result = (
      <>
        <p className={styles.question}>
          {goalNegativeStart}
          <span className={styles.days}>{days}</span>
          {goalNegativeEnd}
        </p>
      </>
    );
  }

  return (
    <div className={styles.main} data-testid="savings-results">
      <p className={styles.question}>
        {question.replace('X', difference?.toLocaleString())}
      </p>
      <div className={styles.sliderContainer}>
        <CircularSliderWithChildren
          size={200}
          minValue={10}
          maxValue={difference}
          startAngle={40}
          endAngle={320}
          angleType={{
            direction: 'cw',
            axis: '-y',
          }}
          coerceToInt
          handle1={{
            value: amountToSave,
            onChange: (v) => setAmountToSave(v),
          }}
          arcColor="white"
          arcBackgroundColor="#aaa"
          data-testid="savings-slider"
        >
          <p className={styles.sliderValue}>£{amountToSave.toLocaleString()}</p>
        </CircularSliderWithChildren>
      </div>
      {result}
      <Button
        handleClick={() => {}}
        buttonText={goBack as TButtonText}
        buttonType="boxed"
        buttonVariant="secondary"
        disabled={false}
      />
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
