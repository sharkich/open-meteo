import { ChangeEventHandler, SyntheticEvent, useState } from 'react';

import { saveDefaultLocation, saveLocations } from '../../../../services/api';
import { useLocationsListApi } from '../../hooks';
import { ILocation } from '../../interfaces';
import { useLocationsStore } from '../../stores/useLocationsStore';

export const useSelectLocation = () => {
  const locationsStore = useLocationsStore();
  const { location, locations } = locationsStore;

  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const locationsLoadingState = useLocationsListApi(name);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const onLocationChange = (_: SyntheticEvent, value: ILocation | null) => {
    locationsStore.setLocation(value);
    saveLocations(locations);
    saveDefaultLocation(location);
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = event => setName(`${event.target.value}`);

  const getOptionLabel = (_location: ILocation) => _location.name ?? `${Math.random()}`;

  const isOptionEqualToValue = (option: ILocation, value: ILocation) => option.name === value.name;

  const options = locationsLoadingState.data?.results ?? [];

  return {
    getOptionLabel,
    isOptionEqualToValue,
    location,
    name,
    onClose,
    onInputChange,
    onLocationChange,
    onOpen,
    open,
    options,
    ...locationsLoadingState
  };
};
