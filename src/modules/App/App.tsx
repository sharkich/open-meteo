import React, { useMemo } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import { APP_THEME } from '../../config';
import { RootStoreProvider } from '../../services/stores';
import { WeatherPage } from '../Weather/pages/WeatherPage';

export const App = () => {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <RootStoreProvider>
        <ThemeProvider theme={APP_THEME}>
          <CssBaseline enableColorScheme />
          <WeatherPage />
        </ThemeProvider>
      </RootStoreProvider>
    </QueryClientProvider>
  );
};
