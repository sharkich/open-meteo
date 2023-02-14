import { FC } from 'react';

import { Box, Tab, Tabs, tabsClasses } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { useLocationsTabs } from './useLocationsTabs';
import { isNull } from '../../../../services/types';

export const LocationsTabs: FC = observer(() => {
  const { value, handleChange, locations } = useLocationsTabs();
  if (isNull(value)) {
    return null;
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        flexGrow: 1
      }}
    >
      <Tabs
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 }
          }
        }}
        value={value}
        variant="scrollable"
        onChange={handleChange}
      >
        {locations.map(({ name }) => (
          <Tab key={name} label={name} />
        ))}
      </Tabs>
    </Box>
  );
});
