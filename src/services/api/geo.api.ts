import axios from 'axios';

const URL = 'https://geocoding-api.open-meteo.com/v1/search';

export interface IGeoDTO {
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

export interface IGeoResponseDTO {
  results: IGeoDTO[];
  generationtime_ms: number;
}

export const FETCH_GEO_LOCATIONS_REQUEST_NAME = 'FETCH_GEO_LOCATIONS';

export const fetchGeoLocations = async (name?: string) => {
  if (!name) {
    return null;
  }
  const query = new URLSearchParams({ name });
  const response = await axios.get<IGeoResponseDTO>(`${URL}?${query}`);

  return response.data;
};
