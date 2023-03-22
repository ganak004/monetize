import copy from '@/assets/copy-en.json';
import Button from '@/pages/_common/Button';
import Header from '@/pages/_common/Header';
import { IWalkthrough } from '@/utils/types';

export const Expenses = ({ handleNext }: IWalkthrough) => {
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
      <Button handleClick={handleNext} buttonText="next" buttonType="normal" />
    </div>
  );
};

export default Expenses;
