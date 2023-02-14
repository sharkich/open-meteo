import { FC } from 'react';

import { Card, CardContent, Grid, Typography } from '@mui/material';

import { normalizeDate, normalizeTime } from '../../../services/types';

interface Props {
  day: string;
  temperature_2m_max: number;
  temperature_2m_min: number;

  sunrise: string;
  sunset: string;

  uv_index_max: number;
  uv_index_clear_sky_max: number;
  windspeed_10m_max: number;

  precipitation_sum: number;
  rain_sum: number;
  showers_sum: number;
  snowfall_sum: number;
}

export const WeatherDay: FC<Props> = ({
  day,
  sunset,
  sunrise,
  precipitation_sum,
  temperature_2m_min,
  temperature_2m_max,
  windspeed_10m_max
}) => (
  <Grid item lg={3} md={4} xs={6}>
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Typography gutterBottom color="text.secondary" sx={{ fontSize: 14 }}>
          {normalizeDate(day)}
        </Typography>
        <Typography component="div" variant="h5">
          {temperature_2m_min}&#8451; &mdash; {temperature_2m_max}&#8451;
        </Typography>
        <Typography variant="body1">🌅&nbsp;Sunrise: {normalizeTime(sunrise)}</Typography>
        <Typography variant="body1">🌄&nbsp;Sunset: {normalizeTime(sunset)}</Typography>
        <Typography variant="body1">🌧️&nbsp;Precipitations: {precipitation_sum}&nbsp;mm</Typography>
        <Typography variant="body1">💨️&nbsp;Windspeed: {windspeed_10m_max}&nbsp;km/h</Typography>
      </CardContent>
    </Card>
  </Grid>
);
