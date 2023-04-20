import '@testing-library/jest-dom/extend-expect';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { WalkthroughStep } from './WalkthroughStep';

describe('WalkthroughStep component', () => {
  const handleNextMock = jest.fn();

  const renderWalkthroughStep = (currentStep: number) => {
    render(
      <WalkthroughStep currentStep={currentStep} handleNext={handleNextMock} />
    );
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct step component based on currentStep prop', () => {
    renderWalkthroughStep(1);
    expect(
      screen.getByText(/What's your main source of income/i)
    ).toBeInTheDocument();

    renderWalkthroughStep(2);
    expect(screen.getByText(/how much do you receive/i)).toBeInTheDocument();

    renderWalkthroughStep(3);
    expect(
      screen.getByText(/on what date do you get paid/i)
    ).toBeInTheDocument();

    renderWalkthroughStep(4);
    expect(screen.getByText(/let's talk expenses/i)).toBeInTheDocument();
  });

  it('renders the "Next" button for all steps except the last one', () => {
    for (let i = 1; i <= 3; i++) {
      renderWalkthroughStep(i);
      const nextButton = screen.getAllByRole('button', { name: /next/i })[
        i - 1
      ];
      expect(nextButton).toBeInTheDocument();
      fireEvent.click(nextButton);
      waitFor(() => {
        expect(handleNextMock).toHaveBeenCalled();
      });
    }
  });

  it('renders the "Finish" button for the last step', () => {
    renderWalkthroughStep(4);
    const finishButton = screen.getByRole('button', { name: /finish/i });
    expect(finishButton).toBeInTheDocument();
    fireEvent.click(finishButton);
    waitFor(() => {
      expect(handleNextMock).toHaveBeenCalled();
    });
  });

  it('disables the "Next" and "Finish" buttons by default', () => {
    for (let i = 1; i <= 4; i++) {
      renderWalkthroughStep(i);
      const button = screen.getAllByRole('button', { name: /next|finish/i })[
        i - 1
      ];
      waitFor(() => {
        expect(button).toBeDisabled();
      });
    }
  });
});
