import { FC } from 'react';

import { Box, Container } from '@mui/material';

import { IWeatherDTO } from '../../../services/api';
import { Optional } from '../../../services/types';

interface Props {
  weather: Optional<IWeatherDTO>;
}

export const WeatherList: FC<Props> = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <Container>
      <Box>{JSON.stringify(weather)}</Box>
    </Container>
  );
};
