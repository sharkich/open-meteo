import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { Box, Button, Paper, TextField } from '@mui/material';

interface Props {
  setMessage: (message: string) => void;
}

export const ChatGPT3Form: FC<Props> = props => {
  const [message, setMessage] = useState<string>('');

  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.setMessage(message);
  };

  return (
    <Paper
      noValidate
      autoComplete="off"
      component="form"
      sx={{
        m: 1,
        p: 1
      }}
      onSubmit={handleSubmit}
    >
      <Box>
        <TextField
          fullWidth
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
          Generate
        </Button>
      </Box>
    </Paper>
  );
};
