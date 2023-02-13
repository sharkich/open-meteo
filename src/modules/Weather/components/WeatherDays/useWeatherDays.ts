import { useLocationStore } from '../../../Locations/stores/useLocationStore';
import { useWeatherListApi } from '../../hooks';

export const useWeatherDays = () => {
  const { location } = useLocationStore();

  return useWeatherListApi(location);
};
