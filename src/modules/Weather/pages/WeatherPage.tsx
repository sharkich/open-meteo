import React, { FC } from 'react';

import { Typography } from '@mui/material';

import { AppLayout } from '../../../components';
import { LocationsTabs } from '../../Locations';
import { useInitLocations } from '../../Locations/hooks';
import { WeatherDays, WeatherTitle } from '../components';

export const WeatherPage: FC = () => {
  useInitLocations();

  return (
    <AppLayout>
      <Typography variant="h1">Weather Forecast</Typography>
      <WeatherTitle />
      <LocationsTabs />
      <WeatherDays />
    </AppLayout>
  );
};
