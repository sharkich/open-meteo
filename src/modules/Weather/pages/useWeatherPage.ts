import { useLocationStore } from '../../Locations/stores/useLocationStore';

export const useWeatherPage = () => {
  const weatherStore = useLocationStore();
  const { location } = weatherStore;

  return { location };
};
