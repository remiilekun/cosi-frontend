import React from 'react';
import { render } from '@testing-library/react';
import { PageWrapper } from '../PageWrapper';
import { ThemeWrapper } from 'lib/testHelpers';

describe('PageWrapper', () => {
  test("it should render it's children", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <PageWrapper>
          <span>hello world</span>
        </PageWrapper>
      </ThemeWrapper>,
    );
    const title = getByText(/hello world/i);
    expect(title).toBeInTheDocument();
  });
});
