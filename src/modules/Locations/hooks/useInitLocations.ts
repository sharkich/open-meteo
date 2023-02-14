import { useEffect } from 'react';

import { getLocations } from '../../../services/api';
import { useLocationsStore } from '../stores/useLocationsStore';

export const useInitLocations = () => {
  const locationsStore = useLocationsStore();

  useEffect(() => {
    locationsStore.setLocations(getLocations());
  }, [locationsStore]);
};
