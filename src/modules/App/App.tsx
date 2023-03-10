import React, { useEffect, useMemo } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import { APP_THEME } from '../../config';
import { gpt3ApiMessage, gpt3ApiModelsList } from '../../services/api/gpt3.api';
import { RootStoreProvider } from '../../services/stores';
import { WeatherPage } from '../Weather/pages';

export const App = () => {
  const queryClient = useMemo(() => new QueryClient(), []);

  useEffect(() => {
    void gpt3ApiModelsList();
    void gpt3ApiMessage('Say this is a test!');
  }, []);

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
