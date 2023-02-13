import React, { FC } from 'react';

import { Container } from '@mui/material';

import { ErrorAlert } from './ErrorAlert';

interface Props {
  error: Error | string | unknown;
}

export const ErrorBox: FC<Props> = ({ error }) => (
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
    <ErrorAlert error={error} />
  </Container>
);
