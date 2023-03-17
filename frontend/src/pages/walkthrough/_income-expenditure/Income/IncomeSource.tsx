import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';
import { IWalkthrough } from '@/utils/types';

export const IncomeSource = ({ handlePrev, handleNext }: IWalkthrough) => (
  <div>
    <Header
      heading={copy['walkthrough']['income1']['heading']}
      subheading={copy['walkthrough']['income1']['subheading']}
    />
    <p>{copy['walkthrough']['income1']['question']}</p>
    <div>dropdown component</div>
    <button onClick={handleNext}>{copy['buttons']['next']}</button>
  </div>
);

export default IncomeSource;
