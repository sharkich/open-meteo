import { findIndex } from 'lodash';

import { saveDefaultLocation, saveLocations } from '../../../../services/api';
import { useLocationsStore } from '../../stores/useLocationsStore';

export const useRemoveLocation = () => {
  const locationsStore = useLocationsStore();
  const { location, locations } = locationsStore;

  const onClick = () => {
    if (!location) {
      throw new Error('No location selected');
    }
    const index = findIndex(locations, ['name', location.name]);
    const newLocation = locations[index + 1] ?? locations[index - 1] ?? null;
    locationsStore.removeLocation(location);
    locationsStore.setLocation(newLocation);
    saveDefaultLocation(newLocation);
    saveLocations(locationsStore.locations);
  };

  return { onClick };
};
