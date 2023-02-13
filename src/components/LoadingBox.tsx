import React, { FC } from 'react';

import { CircularProgress, Container } from '@mui/material';

export const LoadingBox: FC = () => (
  <Container
    maxWidth="lg"
    sx={{
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      mb: 20,
      mt: 20
    }}
  >
    <CircularProgress />
  </Container>
);
