import { FC } from 'react';

import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { observer } from 'mobx-react-lite';

import { useSelectLocation } from './useSelectLocation';

const Input = styled(TextField)(({ theme }) => ({
  '& label': {
    color: theme.palette.common.white
  },
  '& label.Mui-focused': {
    color: theme.palette.common.white
  },
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  borderRadius: theme.shape.borderRadius,
  position: 'relative',
  width: 400
}));

export const SelectLocation: FC = observer(() => {
  const {
    name,
    location,
    open,
    onLocationChange,
    onInputChange,
    onClose,
    onOpen,
    isLoading,
    getOptionLabel,
    isOptionEqualToValue,
    options
  } = useSelectLocation();

  return (
    <Autocomplete
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      loading={isLoading}
      open={open}
      options={options}
      renderInput={params => (
        <Input
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
      value={location}
      onChange={onLocationChange}
      onClose={onClose}
      onOpen={onOpen}
    />
  );
});
