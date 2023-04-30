import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import GoalDate from './GoalDate';

const renderGoalDateComponent = (handleNext = jest.fn()) =>
  render(
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <GoalDate handleNext={handleNext} />
      </LocalizationProvider>
    </Provider>
  );

describe('GoalDate Component', () => {
  test('renders goal date input and question', () => {
    renderGoalDateComponent();

    expect(
      screen.getByText(/When do you want to achieve this goal by?/)
    ).toBeInTheDocument();
    expect(screen.getByTestId('savings-date')).toBeInTheDocument();
  });

  test('updates the goal date input value and enables the next button', async () => {
    renderGoalDateComponent();

    const goalDateInput = screen.getByRole('textbox');
    fireEvent.change(goalDateInput, { target: { value: '31/12/2023' } });

    expect(goalDateInput).toHaveValue('31/12/2023');
    expect(screen.getByText('Next')).not.toBeDisabled();
  });

  test('triggers handleNext when the next button is clicked', () => {
    const handleNext = jest.fn();
    renderGoalDateComponent(handleNext);

    const goalDateInput = screen.getByRole('textbox');
    fireEvent.change(goalDateInput, { target: { value: '31/12/2023' } });

    fireEvent.click(screen.getByText('Next'));
    expect(handleNext).toHaveBeenCalledWith(5);
  });
});
