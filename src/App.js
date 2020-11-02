import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { Global } from '@emotion/core';
import customTheme from 'theme';
import Router from './Router';
import fontFamily from './styles/fontFamily';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Global styles={fontFamily} />
      <CSSReset />
      <Router />
    </ThemeProvider>
  );
}

export default App;
