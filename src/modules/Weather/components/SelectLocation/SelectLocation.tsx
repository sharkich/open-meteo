import { FC } from 'react';

import { Button } from '@mui/material';

import { useSelectLocation } from './useSelectLocation';

export const SelectLocation: FC = () => {
  const { location } = useSelectLocation();

  return <Button sx={{ color: 'white', display: 'block', my: 2 }}>Location ({JSON.stringify(location)})</Button>;
};
