import axios from 'axios';

export namespace GeoApi {
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

  export const fetchGeo = async (name: string) => {
    const query = new URLSearchParams({ name });
    const response = await axios.get<IGeoDTO>(`${URL}?${query}`);

    return response.data;
  };
}
