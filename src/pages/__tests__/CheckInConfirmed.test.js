import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CheckInConfirmed from '../CheckInConfirmed';
import { render } from '@testing-library/react';
import { ThemeWrapper } from 'lib/testHelpers';

describe('Check In Confirmed page', () => {
  test('should render correctly', () => {
    const { container } = render(
      <ThemeWrapper>
        <Router>
          <CheckInConfirmed />
        </Router>
      </ThemeWrapper>,
    );

    const header = container.querySelector('h1');
    const buttonlink = container.querySelector("a[type='button']");

    expect(header).toBeInTheDocument();
    expect(buttonlink).toBeInTheDocument();
  });
});
