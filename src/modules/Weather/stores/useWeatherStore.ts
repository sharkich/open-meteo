import { useRootStore } from '../../../services/stores';

export const useWeatherStore = () => {
  const { weatherStore } = useRootStore();

  return weatherStore;
};
