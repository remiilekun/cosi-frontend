import { css } from '@emotion/core';

export const mq = (breakpoints) =>
  Object.keys(breakpoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {});
