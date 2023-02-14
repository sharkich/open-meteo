import React, { FC } from 'react';

import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { useWeatherPage } from './useWeatherPage';
import { AppLayout } from '../../../components';
import { LocationsTabs } from '../../Locations/components/LocationsTabs/LocationsTabs';
import { WeatherDays } from '../components/WeatherDays';

export const WeatherPage: FC = observer(() => {
  const { location } = useWeatherPage();

  return (
    <AppLayout>
      <Typography variant="h1">Weather Forecast</Typography>
      <Typography variant="h2">{location?.name ?? 'Please select the location'}</Typography>
      <LocationsTabs />
      <WeatherDays />
    </AppLayout>
  );
});
