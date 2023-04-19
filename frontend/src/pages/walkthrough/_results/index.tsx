import { useEffect, useState } from 'react';

import copy from '@/assets/copy-en.json';
import Loader from '@/pages/_common/Loader';

import styles from './Results.module.scss';

const Result = () => {
  const {
    walkthrough: { loaders },
  } = copy;

  const [loading, setLoading] = useState(true);

  return (
    <div className={`${styles.main} ${styles.backgroundLight}`}>
      {loading ? (
        <Loader loadingText={loaders.calculating} />
      ) : (
        <div className={styles.result}>
          <h1>Result</h1>
        </div>
      )}
    </div>
  );
};

export default Result;
