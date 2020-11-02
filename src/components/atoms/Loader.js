import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Spinner } from '@chakra-ui/core';

const Wrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.gray['300']};
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: ${({ fit }) => (fit ? 'absolute' : 'fixed')};
  right: 0;
  top: 0;
  z-index: 1;
`;

export const Loader = ({ fit }) => {
  return (
    <Wrapper fit={fit}>
      <Spinner />
    </Wrapper>
  );
};

Loader.propTypes = {
  fit: PropTypes.bool,
};

Loader.defaultProps = {
  fit: false,
};
