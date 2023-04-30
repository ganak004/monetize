import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import GoalResult from './GoalResult';

const renderGoalResultComponent = () =>
  render(
    <Provider store={store}>
      <GoalResult />
    </Provider>
  );

describe('GoalResult Component', () => {
  test('renders the component with initial state', () => {
    renderGoalResultComponent();

    expect(screen.getByTestId('savings-results')).toBeInTheDocument();
    expect(
      screen.getByText(/How much of this would you like to save?/)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Save and continue' })
    ).toBeInTheDocument();
  });

  //TODO: fix these

  test.skip('renders the CircularSliderWithChildren with the correct initial value', () => {
    renderGoalResultComponent();

    const sliderValue = screen.getByText(/^10$/);
    expect(sliderValue).toBeInTheDocument();
  });

  test.skip('updates the CircularSliderWithChildren value when the slider is interacted with', async () => {
    renderGoalResultComponent();

    const circularSlider = screen.getByTestId('savings-slider');

    // Update the fireEvent method accordingly to interact with the circular slider
    // Please adjust the change event according to the slider interaction in your application
    fireEvent.change(circularSlider, { target: { value: 100 } });

    const updatedSliderValue = await screen.findByText(/^£100$/);
    expect(updatedSliderValue).toBeInTheDocument();
  });

  test.skip('renders the neutral goal result text when the goal is reached exactly', async () => {
    renderGoalResultComponent();

    // Assuming the willMeetSavingsGoal function returns [true, 0] for a specific slider value
    // Please adjust the slider value and willMeetSavingsGoal return value according to your application's logic
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: 300 } });

    const neutralResultText = await screen.findByText(
      /Congratulations! You'll reach your goal on your target date/
    );
    expect(neutralResultText).toBeInTheDocument();
  });
});
