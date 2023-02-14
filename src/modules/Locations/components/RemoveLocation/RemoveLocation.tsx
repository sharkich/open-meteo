import React, { FC } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { useRemoveLocation } from './useRemoveLocation';

export const RemoveLocation: FC = observer(() => {
  const { onClick } = useRemoveLocation();

  return (
    <IconButton color="primary" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
});
