import { useInitLocations } from '../../Locations/hooks';
import { useLocationsStore } from '../../Locations/stores/useLocationsStore';

export const useWeatherPage = () => {
  const locationsStore = useLocationsStore();
  const { location } = locationsStore;

  useInitLocations();

  return { location };
};
