import { useLocationsStore } from '../../../Locations/stores/useLocationsStore';
import { useWeatherListApi } from '../../hooks';

export const useWeatherDays = () => {
  const { location } = useLocationsStore();

  return useWeatherListApi(location);
};
