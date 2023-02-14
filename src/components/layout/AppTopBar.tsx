import { FC } from 'react';

import { AppBar, Box, Container } from '@mui/material';

import { SelectLocation } from '../../modules/Locations/components/SelectLocation';

export const AppTopBar: FC = () => (
  <AppBar position="static" sx={{ height: 72 }}>
    <Container maxWidth="xl">
      <Box>
        <SelectLocation />
      </Box>
    </Container>
  </AppBar>
);
