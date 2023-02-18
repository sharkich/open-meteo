import { ComponentPropsWithoutRef, FC } from 'react';

import { Container } from '@mui/material';

type Props = ComponentPropsWithoutRef<'div'>;

export const AppLayout: FC<Props> = ({ children }) => (
  <Container maxWidth="xl">
    <main>{children}</main>
  </Container>
);
