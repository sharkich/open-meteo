import axios from 'axios';

import { Nullable } from '../types';

const URL = 'https://api.open-meteo.com/v1/forecast';

export interface IWeatherDTO {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
    uv_index_max: string;
    uv_index_clear_sky_max: string;
    precipitation_sum: string;
    rain_sum: string;
    showers_sum: string;
    snowfall_sum: string;
    windspeed_10m_max: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    uv_index_clear_sky_max: number[];
    precipitation_sum: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    windspeed_10m_max: number[];
  };
}

const DAILY_DATA = [
  'temperature_2m_max',
  'temperature_2m_min',
  'sunrise',
  'sunset',
  'uv_index_max',
  'uv_index_clear_sky_max',
  'precipitation_sum',
  'rain_sum',
  'showers_sum',
  'snowfall_sum',
  'windspeed_10m_max'
];

interface Props {
  latitude: number;
  longitude: number;
  timezone: string;
}

export const fetchWeather = async (props: Nullable<Props>) => {
  if (!props) {
    return null;
  }
  const { latitude, longitude, timezone } = props;
  const query = new URLSearchParams({
    daily: DAILY_DATA.join(','),
    latitude: `${latitude}`,
    longitude: `${longitude}`,
    timezone
  });
  const queryString = query.toString().replace(/%2C/g, ',');
  const response = await axios.get<IWeatherDTO>(`${URL}?${queryString}`);

  return response.data;
};
