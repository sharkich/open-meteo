import { FC } from 'react';

import { AppBar, Box, Button, Container } from '@mui/material';

export const AppTopBar: FC = () => (
  <AppBar position="static">
    <Container maxWidth="xl">
      <Box sx={{ display: { md: 'flex', xs: 'none' }, flexGrow: 1 }}>
        <Button sx={{ color: 'white', display: 'block', my: 2 }}>Location</Button>
      </Box>
    </Container>
  </AppBar>
);
