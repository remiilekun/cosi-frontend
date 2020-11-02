import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import customTheme from 'theme';

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      Hello
    </ThemeProvider>
  );
}

export default App;
