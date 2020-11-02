import React from 'react';
import { Text } from '@chakra-ui/core';
import styled from '@emotion/styled';

export const PageTitle = styled((props) => <Text as="h1" mb="2rem" {...props} />)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 1rem;
  font-weight: bold;
  text-align: center;

  ${({ theme }) => theme.mq.md`
    font-size: 1.5rem;
  `}
`;
