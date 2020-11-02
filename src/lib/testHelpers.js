import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import customTheme from 'theme';

export const ThemeWrapper = ({ children }) => {
  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
};
