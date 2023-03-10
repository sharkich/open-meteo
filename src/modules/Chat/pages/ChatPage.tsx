import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';

import { AppLayout, LoadingState } from '../../../components';
import { useMessageApi } from '../hooks';

export const ChatPage: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [sentMessage, setSentMessage] = useState<string>('');

  const query = useMessageApi(sentMessage);

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSentMessage(message);
  };

  return (
    <AppLayout>
      <Typography variant="h1">GPT3 Chat</Typography>

      <Box
        noValidate
        autoComplete="off"
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75ch' }
        }}
        onSubmit={handleFormSubmit}
      >
        <Box>
          <TextField
            multiline
            label="Message"
            minRows={7}
            value={message}
            variant="filled"
            onChange={handleMessageChange}
          />
        </Box>
        <Box sx={{ m: 1 }}>
          <Button type="submit" variant="contained">
            Send
          </Button>
        </Box>
      </Box>
      <LoadingState {...query}>
        <Paper sx={{ p: 1 }}>
          {query.data
            ? query.data
                .split('\n')
                .filter(line => !!line)
                .map(line => (
                  <Typography key={line} variant="body1">
                    {line}
                  </Typography>
                ))
            : null}
        </Paper>
      </LoadingState>
    </AppLayout>
  );
};
