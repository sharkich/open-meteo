import { FC } from 'react';

import { Alert } from '@mui/material';

interface Props {
  error: Error | string | unknown;
}

export const ErrorAlert: FC<Props> = ({ error }) => (
  <Alert severity="error">{error instanceof Error ? error.message : `${error}`}</Alert>
);
