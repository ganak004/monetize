import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';

export const IncomeAmount = () => (
  <div>
    <Header
      heading={copy['walkthrough']['income2']['heading']}
      subheading={copy['walkthrough']['income2']['subheading']}
    />
    <p>{copy['walkthrough']['income2']['question']}</p>
    <div>dropdown component</div>
  </div>
);

export default IncomeAmount;
