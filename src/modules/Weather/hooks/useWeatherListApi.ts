import { useQuery } from 'react-query';

import { WEATHER_REQUEST_NAME } from '../../../config';
import { fetchWeather } from '../../../services/api';
import { Nullable } from '../../../services/types';
import { ILocation } from '../../Locations/interfaces';

export const useWeatherListApi = (location: Nullable<ILocation>) =>
  useQuery([WEATHER_REQUEST_NAME, location], async () => await fetchWeather(location));
