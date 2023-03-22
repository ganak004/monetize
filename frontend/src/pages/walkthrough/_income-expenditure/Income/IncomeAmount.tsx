import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import Header from '@/pages/_common/Header';
import { IWalkthrough } from '@/utils/types';

export const IncomeAmount = ({ handleNext }: IWalkthrough) => (
  <div
  // className={styles.walkthroughContainer}
  >
    <Header
      heading={copy['walkthrough']['income2']['heading']}
      subheading={copy['walkthrough']['income2']['subheading']}
    />
    <p>{copy['walkthrough']['income2']['question']}</p>
    <div>dropdown component</div>
    <Button handleClick={handleNext} buttonText="next" buttonType="normal" />
  </div>
);

export default IncomeAmount;
