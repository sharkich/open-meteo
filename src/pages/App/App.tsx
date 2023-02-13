import React from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { APP_THEME } from '../../config';

export const App = () => (
  <ThemeProvider theme={APP_THEME}>
    <CssBaseline enableColorScheme />
    <div className="App">
      <header className="App-header">
        <h1>Title</h1>
      </header>
    </div>
  </ThemeProvider>
);
