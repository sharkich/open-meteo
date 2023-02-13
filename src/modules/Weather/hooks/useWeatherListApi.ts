import { useQuery } from 'react-query';

import { FETCH_GEO_LOCATIONS_REQUEST_NAME, fetchWeather } from '../../../services/api';
import { Nullable } from '../../../services/types';
import { ILocation } from '../../Locations/interfaces';

export const useWeatherListApi = (location: Nullable<ILocation>) =>
  useQuery([FETCH_GEO_LOCATIONS_REQUEST_NAME, location], async () => await fetchWeather(location));
