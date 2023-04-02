import copy from '@/assets/copy-en.json';
import Header from '@/pages/_common/Header';

export const Expenses = () => {
  const {
    walkthrough: { expenses1 },
  } = copy;

  return (
    <div>
      <Header
        heading={expenses1['heading']}
        subheading={expenses1['subheading']}
      />
      <p>{expenses1['question']}</p>
      <div>dropdown component</div>
    </div>
  );
};

export default Expenses;
