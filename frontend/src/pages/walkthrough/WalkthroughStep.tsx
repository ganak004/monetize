import Expenses from './_income-expenditure/Expenses/Expenses';
import IncomeAmount from './_income-expenditure/Income/IncomeAmount';
import IncomeDate from './_income-expenditure/Income/IncomeDate';
import IncomeSource from './_income-expenditure/Income/IncomeSource';

interface IWalkthroughStep {
  currentStep: number,
  handlePrev: () => void,
  handleNext: () => void,
}

export const WalkthroughStep = ({
  currentStep,
  handlePrev,
  handleNext,
}: IWalkthroughStep) => {
  const steps = [IncomeSource, IncomeAmount, IncomeDate, Expenses];

  const stepIndex = currentStep - 1;
  const StepComponent = steps[stepIndex] || IncomeSource;

  return <StepComponent handlePrev={handlePrev} handleNext={handleNext} />;
};
