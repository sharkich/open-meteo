import { ChangeEventHandler, SyntheticEvent, useState } from 'react';

import { IGeoDTO } from '../../../../services/api';
import { useLocationsListApi } from '../../hooks';
import { useLocationStore } from '../../stores/useLocationStore';

export const useSelectLocation = () => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);

  const weatherStore = useLocationStore();

  const loadingState = useLocationsListApi(name);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const onLocationChange = (_: SyntheticEvent, value: IGeoDTO | null) => weatherStore.setLocation(value);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = event => setName(event.target.value);

  return { name, onClose, onInputChange, onLocationChange, onOpen, open, ...loadingState };
};
