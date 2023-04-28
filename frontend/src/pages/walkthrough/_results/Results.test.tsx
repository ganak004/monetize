import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/redux/store';

import Result, { ResultsMessage } from './index';

describe('ResultsMessage component', () => {
  test('renders positive difference message', () => {
    const { getByText } = render(<ResultsMessage difference={1000} />);
    expect(getByText(/great job!/i)).toBeInTheDocument();
    expect(getByText(/left over each month/i)).toBeInTheDocument();
  });

  test('renders negative difference message', () => {
    const { getByText } = render(<ResultsMessage difference={-500} />);
    expect(getByText(/let's turn this around/i)).toBeInTheDocument();
    expect(
      getByText(/it looks like you're spending more than you're earning/i)
    ).toBeInTheDocument();
  });

  test('renders neutral difference message', () => {
    const { getByText } = render(<ResultsMessage difference={0} />);
    expect(getByText(/let's get you back on track/i)).toBeInTheDocument();
    expect(
      getByText(/it looks like you're breaking even/i)
    ).toBeInTheDocument();
  });
});

describe('Result component', () => {
  test('renders Result component', () => {
    render(
      <Provider store={store}>
        <Result />
      </Provider>
    );

    expect(screen.getByText(/Let's save!/i)).toBeInTheDocument();
    expect(screen.getByText(/take me to the dashboard/i)).toBeInTheDocument();
  });

  test.skip('handles button clicks', () => {
    const saveMock = jest.fn();
    const dashboardMock = jest.fn();

    render(
      <Provider store={store}>
        <Result />
      </Provider>
    );

    const saveButton = screen.getByText(/Let's save!/i);
    const dashboardButton = screen.getByText(/Go to Dashboard/i);

    fireEvent.click(saveButton);
    fireEvent.click(dashboardButton);

    // Replace these with the actual actions that should be dispatched
    expect(saveMock).toHaveBeenCalledTimes(1);
    expect(dashboardMock).toHaveBeenCalledTimes(1);
  });
});
