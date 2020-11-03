import React from 'react';
import CheckIn from '../CheckIn';
import { render, fireEvent, act } from '@testing-library/react';
import axios from 'axios';

import { ThemeWrapper } from 'lib/testHelpers';

const mockFirstName = '123456';
const mockLastName = 'doe';
const mockNationality = 'austria';
const mockEmail = 'john.doe@gmail.com';
const mockPhoneNumber = '+444';
const mockPassportNumber = '123445';
const mockResidentialCountry = 'Austria';
const mockResidentialCity = 'Aust';

jest.mock('axios');

const mockData = {
  firstName: mockFirstName,
  lastName: mockLastName,
  nationality: mockNationality,
  phoneNumber: mockPhoneNumber,
  passportNumber: mockPassportNumber,
  residentialCountry: mockResidentialCountry,
  residentialCity: mockResidentialCity,
};

const location = {
  search: `?flightNumber=098789&lastName=${mockLastName}`,
};

const history = {
  push: jest.fn(),
};

describe('Check In page', () => {
  test('it should redirect Home if  flightNumber or lastName is absent in query params', () => {
    const emptySearchlocation = {
      search: '',
    };
    render(
      <ThemeWrapper>
        <CheckIn history={history} location={emptySearchlocation} />
      </ThemeWrapper>,
    );
    expect(history.push).toHaveBeenCalledWith('/');
  });

  test('last name should be prefilled if it comes in query params ', () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );
    const lastName = container.querySelector("input[name='lastName']");
    expect(lastName.value).toEqual(mockLastName);
  });

  test('should watch input correctly', () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );

    const firstName = container.querySelector("input[name='firstName']");
    const lastName = container.querySelector("input[name='lastName']");
    const nationality = container.querySelector("select[name='nationality']");
    const email = container.querySelector("input[name='email']");
    const phoneNumber = container.querySelector("input[name='phoneNumber']");
    const passportNumber = container.querySelector("input[name='passportNumber']");

    fireEvent.change(firstName, {
      target: {
        value: mockFirstName,
      },
    });
    fireEvent.change(lastName, {
      target: {
        value: mockLastName,
      },
    });

    fireEvent.change(nationality, {
      target: {
        value: mockNationality,
      },
    });
    fireEvent.change(email, {
      target: {
        value: mockEmail,
      },
    });

    fireEvent.change(phoneNumber, {
      target: {
        value: mockPhoneNumber,
      },
    });
    fireEvent.change(passportNumber, {
      target: {
        value: mockPassportNumber,
      },
    });

    expect(firstName.value).toEqual(mockFirstName);
    expect(lastName.value).toEqual(mockLastName);
    expect(email.value).toEqual(mockEmail);
    expect(nationality.value).toEqual(mockNationality);
    expect(phoneNumber.value).toEqual(mockPhoneNumber);
    expect(passportNumber.value).toEqual(mockPassportNumber);
  });

  test('should provide the right fields when austria is selected', async () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );

    const nationality = container.querySelector("select[name='nationality']");

    fireEvent.change(nationality, {
      target: {
        value: 'austria',
      },
    });
    const residentialCountry = container.querySelector("input[name='residentialCountry']");
    const residentialCity = container.querySelector("input[name='residentialCity']");

    expect(residentialCountry).toBeInTheDocument();
    expect(residentialCity).toBeInTheDocument();
  });

  test('should provide the right fields when belgium is selected', async () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );

    const nationality = container.querySelector("select[name='nationality']");

    fireEvent.change(nationality, {
      target: {
        value: 'belgium',
      },
    });
    const birthDate = container.querySelector('div.react-datepicker-wrapper');
    const residentialCountry = container.querySelector("input[name='residentialCountry']");
    const residentialCity = container.querySelector("input[name='residentialCity']");
    const residentialAddress = container.querySelector("input[name='residentialAddress']");

    expect(birthDate).toBeInTheDocument();
    expect(residentialCountry).toBeInTheDocument();
    expect(residentialCity).toBeInTheDocument();
    expect(residentialAddress).toBeInTheDocument();
  });

  test('should provide the right fields when france is selected', async () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );

    const nationality = container.querySelector("select[name='nationality']");

    fireEvent.change(nationality, {
      target: {
        value: 'france',
      },
    });

    const birthDate = container.querySelector("input[name='birthDate']");
    const birthPlace = container.querySelector("input[name='birthPlace']");
    const residentialCountry = container.querySelector("input[name='residentialCountry']");
    const residentialCity = container.querySelector("input[name='residentialCity']");

    expect(birthDate).toBeInTheDocument();
    expect(birthPlace).toBeInTheDocument();
    expect(residentialCountry).toBeInTheDocument();
    expect(residentialCity).toBeInTheDocument();
  });

  test('should provide the right fields when greece is selected', async () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );

    const nationality = container.querySelector("select[name='nationality']");

    fireEvent.change(nationality, {
      target: {
        value: 'greece',
      },
    });

    const passportIssueDate = container.querySelector("input[name='passportIssueDate']");
    const passportExpiryDate = container.querySelector("input[name='passportExpiryDate']");
    const passportIssueCountry = container.querySelector("input[name='passportIssueCountry']");
    const passportIssueCity = container.querySelector("input[name='passportIssueCity']");

    expect(passportIssueDate).toBeInTheDocument();
    expect(passportExpiryDate).toBeInTheDocument();
    expect(passportIssueCountry).toBeInTheDocument();
    expect(passportIssueCity).toBeInTheDocument();
  });

  test('should provide the right fields when spain is selected', async () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );

    const nationality = container.querySelector("select[name='nationality']");

    fireEvent.change(nationality, {
      target: {
        value: 'spain',
      },
    });
    const residentialAddress = container.querySelector("input[name='residentialAddress']");
    expect(residentialAddress).toBeInTheDocument();
  });

  test('should not proceed unless terms and conditions is selected', async () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );

    const submitButton = container.querySelector("button[type='submit']");

    await act(async () => {
      fireEvent.submit(submitButton);
    });

    expect(container.textContent).toMatch(/Kindly accept terms and conditions/);
  });

  test('Should submit form successfully', async () => {
    const { container } = render(
      <ThemeWrapper>
        <CheckIn history={history} location={location} />
      </ThemeWrapper>,
    );

    const firstName = container.querySelector("input[name='firstName']");
    const lastName = container.querySelector("input[name='lastName']");
    const nationality = container.querySelector("select[name='nationality']");
    const email = container.querySelector("input[name='email']");
    const phoneNumber = container.querySelector("input[name='phoneNumber']");
    const passportNumber = container.querySelector("input[name='passportNumber']");
    const termsAccepted = container.querySelector("input[name='termsAccepted']");

    fireEvent.change(firstName, {
      target: {
        value: mockFirstName,
      },
    });
    fireEvent.change(lastName, {
      target: {
        value: mockLastName,
      },
    });

    fireEvent.change(nationality, {
      target: {
        value: mockNationality,
      },
    });

    fireEvent.change(email, {
      target: {
        value: mockEmail,
      },
    });

    fireEvent.change(phoneNumber, {
      target: {
        value: mockPhoneNumber,
      },
    });
    fireEvent.change(passportNumber, {
      target: {
        value: mockPassportNumber,
      },
    });

    const residentialCountry = container.querySelector("input[name='residentialCountry']");
    const residentialCity = container.querySelector("input[name='residentialCity']");

    fireEvent.change(residentialCountry, {
      target: {
        value: mockResidentialCountry,
      },
    });

    fireEvent.change(residentialCity, {
      target: {
        value: mockResidentialCity,
      },
    });

    fireEvent.change(termsAccepted, {
      target: {
        value: true,
      },
    });

    const submitButton = container.querySelector("button[type='submit']");

    await act(async () => {
      fireEvent.submit(submitButton);
    });

    await act(async () => {
      fireEvent.submit(submitButton);
    });

    await axios.post('https://app.fakejson.com/q/xXWFSwez', mockData, {
      params: {
        token: 'DHDIXKXq4ax9sPx_nTlbPQ',
      },
    });

    expect(history.push).toHaveBeenCalled();
  });
});
