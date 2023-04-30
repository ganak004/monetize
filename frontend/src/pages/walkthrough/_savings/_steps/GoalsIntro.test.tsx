import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { SavingsGoalContext } from '@/context/index';
import { store } from '@/redux/store';

import Goals from './GoalsIntro';

// Mock the SavingsGoalContext
const mockSetHasSavingsGoal = jest.fn();
const mockHandleNext = jest.fn();
const hasSavingsGoal = false;

const renderGoalsComponent = () =>
  render(
    <SavingsGoalContext.Provider
      value={{ hasSavingsGoal, setHasSavingsGoal: mockSetHasSavingsGoal }}
    >
      <Provider store={store}>
        <Goals handleNext={mockHandleNext} />
      </Provider>
    </SavingsGoalContext.Provider>
  );

describe('Goals Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the component', () => {
    renderGoalsComponent();

    expect(screen.getByTestId('savings-goals')).toBeInTheDocument();
    expect(screen.getByText(/Do you have a savings goal?/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'No' })).toBeInTheDocument();
  });

  test('calls setHasSavingsGoal and handleNext when "Yes" button is clicked', () => {
    renderGoalsComponent();

    const yesButton = screen.getByRole('button', { name: 'Yes' });
    fireEvent.click(yesButton);

    expect(mockSetHasSavingsGoal).toHaveBeenCalledWith(true);
    expect(mockHandleNext).toHaveBeenCalledWith(2);
  });

  test('calls handleNext when "No" button is clicked without calling setHasSavingsGoal', () => {
    renderGoalsComponent();

    const noButton = screen.getByRole('button', { name: 'No' });
    fireEvent.click(noButton);

    expect(mockSetHasSavingsGoal).not.toHaveBeenCalled();
    expect(mockHandleNext).toHaveBeenCalledWith(3);
  });
});
