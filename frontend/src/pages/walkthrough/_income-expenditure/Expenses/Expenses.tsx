import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';
import { IWalkthrough } from '@/utils/types';

export const Expenses = ({ handlePrev, handleNext }: IWalkthrough) => (
  <div>
    <Header
      heading={copy['walkthrough']['expenses1']['heading']}
      subheading={copy['walkthrough']['expenses1']['subheading']}
    />
    <p>{copy['walkthrough']['expenses1']['question']}</p>
    <div>dropdown component</div>
    <button onClick={handleNext}>{copy['buttons']['next']}</button>
  </div>
);

export default Expenses;
