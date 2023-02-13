import { FC } from 'react';

import { Container } from '@mui/material';

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
    <Container sx={{ display: 'flex' }}>
      {weather.daily.time.map((day, index) => (
        <WeatherDay key={day} {...mapDayToCard(weather, index)} />
      ))}
    </Container>
  );
};
