import React, { useMemo } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

import { APP_THEME } from '../../config';
import { GPT3_API_KEY } from '../../config/GPT3';
import { RootStoreProvider } from '../../services/stores';
import { ChatPage } from '../Chat/pages';
import { WeatherPage } from '../Weather/pages';

export const App = () => {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <RootStoreProvider>
        <ThemeProvider theme={APP_THEME}>
          <CssBaseline enableColorScheme />
          {GPT3_API_KEY ? <ChatPage /> : <WeatherPage />}
        </ThemeProvider>
      </RootStoreProvider>
    </QueryClientProvider>
  );
};
