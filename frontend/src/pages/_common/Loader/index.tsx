import { Puff } from 'react-loader-spinner';

import styles from './Loader.module.scss';

const Loader = ({ loadingText = 'Loading...' }: { loadingText: string }) => (
  <div className={styles.container}>
    <p className={styles.loadingText}>{loadingText}</p>
    <Puff
      height="80"
      width="80"
      radius="9"
      color="white"
      ariaLabel={loadingText}
    />
  </div>
);

export default Loader;
