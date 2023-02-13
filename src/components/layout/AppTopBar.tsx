import { FC } from 'react';

import { AppBar, Box, Container } from '@mui/material';

import { SelectLocation } from '../../modules/Weather/components/SelectLocation/SelectLocation';

export const AppTopBar: FC = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
        <SelectLocation />
      </Box>
    </Container>
  </AppBar>
);
