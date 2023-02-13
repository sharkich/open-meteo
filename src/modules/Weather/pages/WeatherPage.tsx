import React, { FC } from 'react';

import { Typography } from '@mui/material';

import { useWeatherPage } from './useWeatherPage';
import { AppLayout } from '../../../components';

export const WeatherPage: FC = () => {
  const { location } = useWeatherPage();

  return (
    <AppLayout>
      <Typography variant="h1">Weather Forecast</Typography>
      <Typography variant="h2">Location... ({JSON.stringify(location)})</Typography>
    </AppLayout>
  );
};
