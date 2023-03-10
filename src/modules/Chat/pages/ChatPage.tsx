import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { MuiChipsInput } from 'mui-chips-input';

import { AppLayout, LoadingState } from '../../../components';
import { saveTagApi } from '../../../services/api/tags.api';
import { useMessageApi } from '../hooks';
import { mapTag } from '../maps';

export const ChatPage: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [chips, setChips] = useState<string[]>([]);
  const [sentMessage, setSentMessage] = useState<string>('');

  const handleChipsChange = (newChips: string[]) => {
    setChips(newChips);
  };

  const query = useMessageApi(sentMessage);

  const save = async () => {
    const tags = chips.map(mapTag);
    const promises = tags.map(async tag => await saveTagApi(tag));
    await Promise.all(promises);
    console.log('save', tags);
  };

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void save();
  };

  const generateResponse = () => {
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
        <Box>
          <MuiChipsInput value={chips} onChange={handleChipsChange} />
        </Box>
        <Box sx={{ m: 1 }}>
          <Button variant="contained" onClick={generateResponse}>
            Generate Response
          </Button>
          <Button type="submit" variant="contained">
            Save article
          </Button>
        </Box>
      </Box>
      <LoadingState {...query}>
        {query.data ? (
          <Paper sx={{ p: 1 }}>
            {query.data
              .split('\n')
              .filter(line => !!line)
              .map(line => (
                <Typography key={line} variant="body1">
                  {line}
                </Typography>
              ))}
          </Paper>
        ) : null}
      </LoadingState>
    </AppLayout>
  );
};
