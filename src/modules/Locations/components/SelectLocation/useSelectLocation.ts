import { ChangeEventHandler, SyntheticEvent, useState } from 'react';

import { ILocationDTO, saveLocations } from '../../../../services/api';
import { useLocationsListApi } from '../../hooks';
import { ILocation } from '../../interfaces';
import { useLocationsStore } from '../../stores/useLocationsStore';

export const useSelectLocation = () => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const locationsStore = useLocationsStore();

  const locationsLoadingState = useLocationsListApi(name);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const onLocationChange = (_: SyntheticEvent, value: ILocationDTO | null) => {
    locationsStore.setLocation(value);
    saveLocations(locationsStore.locations);
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = event => setName(`${event.target.value}`);

  const getOptionLabel = (location: ILocationDTO) => location.name ?? `${location.id}` ?? `${Math.random()}`;

  const isOptionEqualToValue = (option: ILocationDTO, value: ILocation) => option.name === value.name;

  const options = locationsLoadingState.data?.results ?? [];

  return {
    getOptionLabel,
    isOptionEqualToValue,
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
