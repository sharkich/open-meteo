import { Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { AppLayout } from '../../../components';
import { useGameStore } from '../stores';

export const GamePage = observer(() => {
  const { players } = useGameStore();

  return (
    <AppLayout>
      <Typography variant="h1">Game</Typography>
      <pre>{JSON.stringify(players, null, 2)}</pre>
    </AppLayout>
  );
});
