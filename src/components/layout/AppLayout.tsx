import { ComponentPropsWithoutRef, FC } from 'react';

import { Container } from '@mui/material';

import { AppTopBar } from './AppTopBar';

type Props = ComponentPropsWithoutRef<'div'>;

export const AppLayout: FC<Props> = ({ children }) => (
  <>
    <AppTopBar />
    <Container maxWidth="xl">
      <main>{children}</main>
    </Container>
  </>
);
