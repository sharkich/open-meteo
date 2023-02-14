import React, { FC } from 'react';

import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { Nullable } from '../../../services/types';
import { RemoveLocation } from '../../Locations';
import { ILocation } from '../../Locations/interfaces';
import { useLocationsStore } from '../../Locations/stores/useLocationsStore';

const getContent = (location: Nullable<ILocation>) => {
  if (!location) {
    return <>Please select the location</>;
  }

  return (
    <>
      <RemoveLocation />
      {location.name}
    </>
  );
};

export const WeatherTitle: FC = observer(() => {
  const { location } = useLocationsStore();

  return (
    <Typography sx={{ alignItems: 'center', display: 'flex' }} variant="h2">
      {getContent(location)}
    </Typography>
  );
});
