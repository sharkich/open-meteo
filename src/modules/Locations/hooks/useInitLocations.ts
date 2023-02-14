import { useEffect } from 'react';

import { getDefaultLocation, getLocations } from '../../../services/api';
import { useLocationsStore } from '../stores/useLocationsStore';

export const useInitLocations = () => {
  const locationsStore = useLocationsStore();

  useEffect(() => {
    locationsStore.setLocations(getLocations());
    const defaultLocation = getDefaultLocation();
    locationsStore.setLocation(defaultLocation);
    locationsStore.addLocation(defaultLocation);
  }, [locationsStore]);
};
