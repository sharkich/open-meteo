import React, { FC } from 'react';

import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { useWeatherPage } from './useWeatherPage';
import { AppLayout } from '../../../components';

export const WeatherPage: FC = observer(() => {
  const { location } = useWeatherPage();

  return (
    <AppLayout>
      <Typography variant="h1">Weather Forecast</Typography>
      <Typography variant="h2">Location... ({location?.name})</Typography>
    </AppLayout>
  );
});
