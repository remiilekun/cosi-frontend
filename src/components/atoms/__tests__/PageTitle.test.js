import React from 'react';
import { render, screen } from '@testing-library/react';
import { PageTitle } from '../PageTitle';
import { ThemeWrapper } from 'lib/testHelpers';

describe('PageTitle', () => {
  test("it should render it's content", () => {
    render(
      <ThemeWrapper>
        <PageTitle>hello world</PageTitle>
      </ThemeWrapper>,
    );
    const title = screen.getByText(/hello world/i);
    expect(title).toBeInTheDocument();
  });
});
