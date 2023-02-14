import { FC } from 'react';

import { Grid } from '@mui/material';

import { WeatherDay } from './WeatherDay';
import { IWeatherDTO } from '../../../services/api';
import { Optional } from '../../../services/types';
import { mapDayToCard } from '../services';

interface Props {
  weather: Optional<IWeatherDTO>;
}

export const WeatherList: FC<Props> = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      {weather.daily.time.map((day, index) => (
        <WeatherDay key={day} {...mapDayToCard(weather, index)} />
      ))}
    </Grid>
  );
};
