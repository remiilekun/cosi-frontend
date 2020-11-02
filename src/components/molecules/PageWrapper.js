import styled from '@emotion/styled';
import React from 'react';

const Wrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 2rem 1.5rem;

  ${({ theme }) => theme.mq.md`
  padding: 4rem 2rem;
  `}
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 0 auto;
  max-width: 600px;
  padding: 15px;
`;

export const PageWrapper = ({ children }) => {
  return (
    <Wrapper>
      <Card>{children}</Card>
    </Wrapper>
  );
};
