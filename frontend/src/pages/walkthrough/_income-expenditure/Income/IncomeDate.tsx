import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import Header from '@/pages/_common/Header';
import { IWalkthrough } from '@/utils/types';

export const IncomeDate = ({ handleNext }: IWalkthrough) => (
  <div>
    <Header
      heading={copy['walkthrough']['income3']['heading']}
      subheading={copy['walkthrough']['income3']['subheading']}
    />
    <p>{copy['walkthrough']['income3']['question']}</p>
    <div>dropdown component</div>
    <Button handleClick={handleNext} buttonText="next" buttonType="normal" />
  </div>
);

export default IncomeDate;
