import React from 'react';
import queryString from 'query-string';
import Home from '../Home';
import { render, fireEvent, act } from '@testing-library/react';
import { ThemeWrapper } from 'lib/testHelpers';

const mockFlightNumber = '123456';
const mockLastName = 'doe';

const mockData = {
  flightNumber: mockFlightNumber,
  lastName: mockLastName,
};

describe('Home page', () => {
  test('should watch input correctly', () => {
    const { container } = render(
      <ThemeWrapper>
        <Home />
      </ThemeWrapper>,
    );

    const flightNumber = container.querySelector("input[name='flightNumber']");
    const lastName = container.querySelector("input[name='lastName']");

    fireEvent.change(flightNumber, {
      target: {
        value: mockFlightNumber,
      },
    });
    fireEvent.change(lastName, {
      target: {
        value: mockLastName,
      },
    });
    expect(flightNumber.value).toEqual(mockFlightNumber);
    expect(lastName.value).toEqual(mockLastName);
  });

  test('should display correct error message for invalid flight number', async () => {
    const { container } = render(
      <ThemeWrapper>
        <Home />
      </ThemeWrapper>,
    );
    const flightNumber = container.querySelector("input[name='flightNumber']");
    const lastName = container.querySelector("input[name='lastName']");
    const submitButton = container.querySelector("button[type='submit']");

    fireEvent.change(flightNumber, {
      target: {
        value: `${mockFlightNumber}re`,
      },
    });
    fireEvent.change(lastName, {
      target: {
        value: mockLastName,
      },
    });

    await act(async () => {
      fireEvent.submit(submitButton);
    });

    expect(container.textContent).toMatch(/Flight number should contain only numbers/);
  });

  test('Should submit form successfully', async () => {
    const history = {
      push: jest.fn(),
    };

    const { container } = render(
      <ThemeWrapper>
        <Home history={history} />
      </ThemeWrapper>,
    );

    const flightNumber = container.querySelector("input[name='flightNumber']");
    const lastName = container.querySelector("input[name='lastName']");
    const submitButton = container.querySelector("button[type='submit']");

    fireEvent.change(flightNumber, {
      target: {
        value: mockFlightNumber,
      },
    });
    fireEvent.change(lastName, {
      target: {
        value: mockLastName,
      },
    });

    await act(async () => {
      fireEvent.submit(submitButton);
    });
    expect(history.push).toHaveBeenCalledWith({
      pathname: '/check-in',
      search: `?${queryString.stringify(mockData)}`,
    });
  });
});
