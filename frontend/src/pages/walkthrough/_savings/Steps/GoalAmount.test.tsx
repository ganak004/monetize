import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { SavingsGoalContext } from '@/context';
import { store } from '@/redux/store';

import GoalAmount from './GoalAmount';

const renderGoalAmountComponent = (
  handleNext = jest.fn(),
  hasSavingsGoal = false
) => {
  const setHasSavingsGoal = jest.fn();
  render(
    <Provider store={store}>
      <SavingsGoalContext.Provider
        value={{ hasSavingsGoal, setHasSavingsGoal }}
      >
        <GoalAmount handleNext={handleNext} />
      </SavingsGoalContext.Provider>
    </Provider>
  );
};

describe('GoalAmount Component', () => {
  test('renders goal amount input and question without savings goal', () => {
    renderGoalAmountComponent();

    expect(
      screen.getByText(/How much would you like to save?/)
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Goal amount')).toBeInTheDocument();
  });

  test('renders goal amount input and question with savings goal', () => {
    renderGoalAmountComponent(undefined, true);

    expect(
      screen.getByText(/How much do you need to save for this goal?/)
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Goal amount')).toBeInTheDocument();
  });

  test('updates the goal amount input value and enables the next button', () => {
    renderGoalAmountComponent();

    const goalAmountInput = screen.getByLabelText('Goal amount');
    fireEvent.change(goalAmountInput, { target: { value: '£500' } });

    expect(goalAmountInput).toHaveValue('£500');
    expect(screen.getByText('Next')).not.toBeDisabled();
  });

  test('triggers handleNext when the next button is clicked', () => {
    const handleNext = jest.fn();
    renderGoalAmountComponent(handleNext);

    const goalAmountInput = screen.getByLabelText('Goal amount');
    fireEvent.change(goalAmountInput, { target: { value: '£500' } });

    fireEvent.click(screen.getByText('Next'));
    expect(handleNext).toHaveBeenCalledWith(4);
  });
});
