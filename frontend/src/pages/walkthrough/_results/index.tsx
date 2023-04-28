import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import Header from '@/pages/_common/Header';
import Loader from '@/pages/_common/Loader';
import type { RootState } from '@/redux/store';
import { IWalkthrough, TButtonText } from '@/utils/types';

import styles from './Results.module.scss';

const {
  walkthrough: { loaders, success },
  buttons: { letsSave, dashboard },
} = copy;

export const ResultsMessage = ({ difference }: { difference: number }) => {
  if (difference > 0) {
    return (
      <div className={styles.messageContainer}>
        <Header heading={success.headingPositive} />
        <p>
          {success.subheadingPositiveStart}
          <span className={styles.difference}>
            £{difference.toLocaleString()}
          </span>
          {success.subheadingPositiveEnd}
        </p>
        <p>{success.description}</p>
      </div>
    );
  } else if (difference < 0) {
    return (
      <div className={styles.messageContainer}>
        <Header heading={success.headingNegative} />
        <p>{success.subheadingNegative}</p>
        <p>{success.description}</p>
      </div>
    );
  } else {
    return (
      <div className={styles.messageContainer}>
        <Header heading={success.headingNeutral} />
        <p>{success.subheadingNeutral}</p>
        <p>{success.description}</p>
      </div>
    );
  }
};

const Result = ({ handleNext }: IWalkthrough) => {
  const incomeTotal = useSelector((state: RootState) => state.app.incomeTotal);
  const expensesTotal = useSelector(
    (state: RootState) => state.app.expensesTotal
  );

  const [loading, setLoading] = useState(false);
  const [difference, setDifference] = useState(incomeTotal - expensesTotal);

  return (
    <div className={`${styles.main} ${styles.backgroundLight}`}>
      {loading ? (
        <Loader loadingText={loaders.calculating} />
      ) : (
        <div className={styles.result}>
          <ResultsMessage difference={difference} />
          <Button
            handleClick={handleNext as () => void}
            buttonText={letsSave as TButtonText}
            buttonType="boxed"
            buttonVariant="primary"
            disabled={false}
          />
          <Button
            handleClick={() => {
              // Route to dashboard
            }}
            buttonText={dashboard as TButtonText}
            buttonType="underlined"
            buttonVariant="primary"
            disabled={false}
          />
        </div>
      )}
    </div>
  );
};

export default Result;
