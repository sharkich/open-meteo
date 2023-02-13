import { ChangeEventHandler, SyntheticEvent, useState } from 'react';

import { IGeoDTO } from '../../../../services/api/geo.api';
import { useLocationsList } from '../../hooks/useLocationsList';
import { useGeoStore } from '../../stores/useGeoStore';

export const useSelectLocation = () => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const weatherStore = useGeoStore();

  const loadingState = useLocationsList(name);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const onLocationChange = (_: SyntheticEvent, value: IGeoDTO | null) => weatherStore.setLocation(value);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = event => setName(event.target.value);

  return { name, onClose, onInputChange, onLocationChange, onOpen, open, ...loadingState };
};
