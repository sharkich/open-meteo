import { useWeatherStore } from '../../stores/useWeatherStore';

export const useSelectLocation = () => {
  const weatherStore = useWeatherStore();
  const { location } = weatherStore;

  return { location };
};
