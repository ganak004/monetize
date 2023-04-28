import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import { SavingsWalkthroughStep } from './index';

describe('SavingsWalkthroughStep', () => {
  const handleNextMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  const testCases = [
    { currentStep: 1, testId: 'savings-goals' },
    { currentStep: 2, testId: 'savings-type' },
    { currentStep: 3, testId: 'savings-amount' },
    { currentStep: 4, testId: 'savings-date' },
    { currentStep: 5, testId: 'savings-results' },
  ];

  testCases.forEach(({ currentStep, testId }) => {
    it(`renders the correct step component for currentStep: ${currentStep}`, () => {
      render(
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <SavingsWalkthroughStep
              currentStep={currentStep}
              handleNext={handleNextMock}
            />
          </LocalizationProvider>
        </Provider>
      );
      expect(screen.getByTestId(testId)).toBeInTheDocument();
    });
  });
});
