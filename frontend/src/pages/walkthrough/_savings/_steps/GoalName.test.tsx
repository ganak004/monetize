import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import GoalName from './GoalName';

const mockHandleNext = jest.fn();

const renderGoalNameComponent = () =>
  render(
    <Provider store={store}>
      <GoalName handleNext={mockHandleNext} />
    </Provider>
  );

describe('GoalName Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the component', () => {
    renderGoalNameComponent();

    expect(screen.getByTestId('savings-type')).toBeInTheDocument();
    expect(screen.getByText(/What are you saving for?/)).toBeInTheDocument();
    expect(screen.getByTestId('savings-type')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
  });

  //TODO: fix this test

  test.skip('updates the goal type when an option is selected', async () => {
    renderGoalNameComponent();

    const select = screen.getByTestId('goal-name');
    expect(select).toBeInTheDocument();

    fireEvent.mouseDown(select);

    // wait for the listbox to render
    await screen.findByRole('listbox');

    const option = screen.getByText('Holiday');
    expect(option).toBeInTheDocument();

    fireEvent.click(option);

    // assert that the value of the select is updated to 'Holiday'
    expect(select).toHaveValue('Holiday');
  });

  test.skip('calls handleNext with the correct argument when "Next" button is clicked', async () => {
    renderGoalNameComponent();

    const GoalNameSelect = screen.getByTestId('goal-name');
    userEvent.click(GoalNameSelect);

    const optionToSelect = await screen.findByText('Holiday');
    userEvent.click(optionToSelect);

    const nextButton = screen.getByRole('button', { name: 'Next' });
    userEvent.click(nextButton);

    expect(mockHandleNext).toHaveBeenCalledWith(3);
  });

  test('disables "Next" button when no goal type is selected', () => {
    renderGoalNameComponent();

    const nextButton = screen.getByRole('button', { name: 'Next' });
    expect(nextButton).toBeDisabled();
  });
});
