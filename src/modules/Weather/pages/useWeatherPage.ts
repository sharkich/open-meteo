import { useWeatherStore } from '../stores/useWeatherStore';

export const useWeatherPage = () => {
  const weatherStore = useWeatherStore();
  const { location } = weatherStore;

  return { location };
};
