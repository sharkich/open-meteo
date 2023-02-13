import { useGeoStore } from '../../Geo/stores/useGeoStore';

export const useWeatherPage = () => {
  const weatherStore = useGeoStore();
  const { location } = weatherStore;

  return { location };
};
