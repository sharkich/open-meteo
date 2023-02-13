import { FC } from 'react';

import { Autocomplete, CircularProgress, TextField } from '@mui/material';

import { useSelectLocation } from './useSelectLocation';

export const SelectLocation: FC = () => {
  const { data, name, open, onLocationChange, onInputChange, onClose, onOpen, isLoading } = useSelectLocation();

  return (
    <Autocomplete
      getOptionLabel={option => option.name}
      isOptionEqualToValue={(option, value) => option.name === value.name}
      loading={isLoading}
      open={open}
      options={data?.results ?? []}
      renderInput={params => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            )
          }}
          label="Location"
          value={name}
          onChange={onInputChange}
        />
      )}
      sx={{ mt: 1, width: 300 }}
      onChange={onLocationChange}
      onClose={onClose}
      onOpen={onOpen}
    />
  );
};
