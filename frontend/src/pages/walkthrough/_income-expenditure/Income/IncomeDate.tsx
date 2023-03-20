import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';

export const IncomeDate = () => (
  <div>
    <Header
      heading={copy['walkthrough']['income3']['heading']}
      subheading={copy['walkthrough']['income3']['subheading']}
    />
    <p>{copy['walkthrough']['income3']['question']}</p>
    <div>dropdown component</div>
  </div>
);

export default IncomeDate;
