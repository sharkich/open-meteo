import axios from 'axios';

import { DEFAULT_LOCATION_LS_KEY, LOCATIONS_LS_KEY } from '../../config';
import { ILocation } from '../../modules/Locations/interfaces';
import { Nullable } from '../types';

const URL = 'https://geocoding-api.open-meteo.com/v1/search';

export interface ILocationDTO {
  admin1: string;
  admin1_id: number;
  country: string;
  country_code: string;
  country_id: number;
  elevation: number;
  feature_code: string;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
  timezone: string;
}

export interface ILocationsResponseDTO {
  results: ILocationDTO[];
  generationtime_ms: number;
}

export const fetchLocations = async (name?: string) => {
  if (!name) {
    return null;
  }
  const query = new URLSearchParams({ name });
  const response = await axios.get<ILocationsResponseDTO>(`${URL}?${query}`);

  return response.data;
};

export const saveLocations = (locations: ILocation[]) =>
  localStorage.setItem(LOCATIONS_LS_KEY, JSON.stringify(locations));

export const getLocations = (): ILocation[] => JSON.parse(localStorage.getItem(LOCATIONS_LS_KEY) ?? '[]');

export const saveDefaultLocation = (location: Nullable<ILocation>) => {
  if (location) {
    return localStorage.setItem(DEFAULT_LOCATION_LS_KEY, JSON.stringify(location));
  }

  return localStorage.removeItem(DEFAULT_LOCATION_LS_KEY);
};

export const getDefaultLocation = (): Nullable<ILocation> =>
  JSON.parse(localStorage.getItem(DEFAULT_LOCATION_LS_KEY) ?? 'null');
