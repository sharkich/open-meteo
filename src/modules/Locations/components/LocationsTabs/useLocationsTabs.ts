import { SyntheticEvent } from 'react';

import { findIndex } from 'lodash';

import { saveDefaultLocation } from '../../../../services/api';
import { useLocationsStore } from '../../stores/useLocationsStore';

export const useLocationsTabs = () => {
  const locationsStore = useLocationsStore();
  const { location, locations } = locationsStore;

  const value = location ? findIndex(locations, ['name', location.name]) : null;

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    const newLocation = locations[newValue];
    locationsStore.setLocation(newLocation);
    saveDefaultLocation(newLocation);
  };

  return { handleChange, locations, value };
};
