import React from 'react';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { Global } from '@emotion/core';
import customTheme from 'theme';
import Router from './Router';
import fontFamily from './styles/fontFamily';

const queryCache = new QueryCache();

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Global styles={fontFamily} />
        <CSSReset />
        <Router />
      </ReactQueryCacheProvider>
    </ThemeProvider>
  );
}

export default App;
