import React from 'react';
import { render, screen } from '@testing-library/react';
import { FormInput } from '../FormInput';
import { ThemeWrapper } from 'lib/testHelpers';

describe('FormInput', () => {
  test('it should render label', () => {
    render(
      <ThemeWrapper>
        <FormInput label="Label Name" name="name" register={() => {}} />
      </ThemeWrapper>,
    );
    const title = screen.getByText(/Label Name/i);
    expect(title).toBeInTheDocument();
  });

  test('it should have attribute name', () => {
    render(
      <ThemeWrapper>
        <FormInput label="Email" name="email" register={() => {}} placeholder="john.doe@gmail.com" />
      </ThemeWrapper>,
    );
    const input = screen.getByPlaceholderText(/john.doe@gmail.com/i);
    expect(input).toHaveAttribute('name', 'email');
  });
});
